import type { CallbackInput } from "@/lib/callback";
import {
  mailtoLeadHref,
  sendLeadEmailFromBrowser,
} from "@/lib/send-lead-email";

export type LeadDelivery = "resend" | "formsubmit" | "mailto";

type SubmitResult = {
  ok: boolean;
  emailed: boolean;
  emailedTo?: string;
  delivery?: LeadDelivery;
  errors?: { form?: string };
};

function openMailto(value: CallbackInput) {
  if (typeof window === "undefined") return;
  const href = mailtoLeadHref(value);
  // Prefer a new tab/window so the success screen stays visible.
  const opened = window.open(href, "_blank");
  if (!opened) {
    window.location.href = href;
  }
}

/**
 * Saves the lead on the server, then delivers to CONTACT.email from the browser
 * (FormSubmit). Falls back to opening the visitor's mail app addressed to the desk.
 */
export async function submitLead(value: CallbackInput): Promise<SubmitResult> {
  let emailedTo: string | undefined;

  try {
    const response = await fetch("/api/callback", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(value),
    });
    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean;
      emailed?: boolean;
      emailedTo?: string;
      errors?: { form?: string };
    } | null;

    if (!response.ok || !payload?.ok) {
      return {
        ok: false,
        emailed: false,
        errors: payload?.errors ?? {
          form: "We could not save that note. Try again.",
        },
      };
    }

    emailedTo = payload.emailedTo;
    if (payload.emailed) {
      return {
        ok: true,
        emailed: true,
        emailedTo,
        delivery: "resend",
      };
    }
  } catch {
    return {
      ok: false,
      emailed: false,
      errors: { form: "The network dropped. Try again." },
    };
  }

  try {
    const browserEmailed = await sendLeadEmailFromBrowser(value);
    if (browserEmailed) {
      return {
        ok: true,
        emailed: true,
        emailedTo,
        delivery: "formsubmit",
      };
    }
  } catch {
    // Fall through to mailto.
  }

  openMailto(value);
  return {
    ok: true,
    emailed: true,
    emailedTo,
    delivery: "mailto",
  };
}
