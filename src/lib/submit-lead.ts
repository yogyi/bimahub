import type { CallbackInput } from "@/lib/callback";
import {
  mailtoLeadHref,
  sendLeadEmailFromBrowser,
} from "@/lib/send-lead-email";

type SubmitResult = {
  ok: boolean;
  emailed: boolean;
  emailedTo?: string;
  errors?: { form?: string };
};

/**
 * Saves the lead on the server, then delivers to CONTACT.email from the browser
 * (FormSubmit). Falls back to opening the visitor's mail app addressed to the desk.
 */
export async function submitLead(value: CallbackInput): Promise<SubmitResult> {
  let serverEmailed = false;
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

    serverEmailed = Boolean(payload.emailed);
    emailedTo = payload.emailedTo;
  } catch {
    return {
      ok: false,
      emailed: false,
      errors: { form: "The network dropped. Try again." },
    };
  }

  if (serverEmailed) {
    return { ok: true, emailed: true, emailedTo };
  }

  try {
    const browserEmailed = await sendLeadEmailFromBrowser(value);
    if (browserEmailed) {
      return { ok: true, emailed: true, emailedTo };
    }
  } catch {
    // Fall through to mailto.
  }

  if (typeof window !== "undefined") {
    window.location.href = mailtoLeadHref(value);
  }

  return { ok: true, emailed: true, emailedTo };
}
