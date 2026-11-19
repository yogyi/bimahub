import { CONTACT } from "@/lib/contact";
import type { CallbackInput } from "@/lib/callback";
import { COVER_OPTIONS } from "@/lib/callback";

export function coverLabel(cover: CallbackInput["cover"]) {
  return COVER_OPTIONS.find((option) => option.value === cover)?.label ?? cover;
}

export function leadEmailSubject(value: CallbackInput) {
  return `BimaHub quote · ${coverLabel(value.cover)} · ${value.name}`;
}

export function leadEmailBody(value: CallbackInput) {
  return [
    "New BimaHub quote request",
    "",
    `Name: ${value.name}`,
    `Mobile: ${value.mobile}`,
    `City: ${value.city}`,
    `Cover: ${coverLabel(value.cover)}`,
    `Note: ${value.note || "(none)"}`,
    "",
    `Desk: ${CONTACT.address}`,
  ].join("\n");
}

/** Browser-side delivery to CONTACT.email (avoids server IP blocks). */
export async function sendLeadEmailFromBrowser(
  value: CallbackInput,
): Promise<boolean> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: value.name,
        mobile: value.mobile,
        city: value.city,
        cover: coverLabel(value.cover),
        note: value.note || "(none)",
        message: leadEmailBody(value),
        _subject: leadEmailSubject(value),
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  if (!response.ok) return false;
  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
  } | null;
  return Boolean(payload?.success);
}

export function mailtoLeadHref(value: CallbackInput) {
  const subject = encodeURIComponent(leadEmailSubject(value));
  const body = encodeURIComponent(leadEmailBody(value));
  return `${CONTACT.emailHref}?subject=${subject}&body=${body}`;
}

/** Server path when RESEND_API_KEY is configured. */
export async function sendLeadEmailWithResend(
  value: CallbackInput,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "BimaHub <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT.email],
      subject: leadEmailSubject(value),
      text: leadEmailBody(value),
    }),
  });

  return response.ok;
}
