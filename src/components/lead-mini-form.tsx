"use client";

import { useState, type FormEvent } from "react";
import { validateCallback, type CoverValue } from "@/lib/callback";
import { CONTACT } from "@/lib/contact";
import { submitLead } from "@/lib/submit-lead";

export function LeadMiniForm({
  cover = "life",
  notePrefix = "",
  submitLabel = "Confirm free consultation",
}: {
  cover?: CoverValue;
  notePrefix?: string;
  submitLabel?: string;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mode, setMode] = useState("doorstep");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const note = [notePrefix, `Consultation mode: ${mode}`]
      .filter(Boolean)
      .join(" · ");
    const { errors, value } = validateCallback({
      name,
      mobile,
      city: CONTACT.city,
      cover,
      note,
    });
    if (!value) {
      setStatus("error");
      setMessage(
        errors.name ||
          errors.mobile ||
          errors.form ||
          "Check the name and mobile number.",
      );
      return;
    }

    setStatus("sending");
    setMessage("");
    const result = await submitLead(value);
    if (!result.ok) {
      setStatus("error");
      setMessage(
        result.errors?.form ||
          `Could not send to ${CONTACT.email}. Try again.`,
      );
      return;
    }
    setStatus("sent");
    setName("");
    setMobile("");
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-800">
        Sent to {CONTACT.email}. We will call on a weekday before 7 pm.
      </p>
    );
  }

  return (
    <form className="space-y-space-sm" onSubmit={onSubmit} noValidate>
      <div>
        <label className="mb-1 block font-label-sm text-label-sm font-bold text-on-surface-variant">
          Your full name
        </label>
        <input
          className="w-full rounded-lg bg-surface-container-lowest px-3 py-2 font-body-sm text-body-sm text-on-surface outline-none"
          placeholder="e.g. Vikramaditya Sen"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 block font-label-sm text-label-sm font-bold text-on-surface-variant">
          Mobile
        </label>
        <input
          className="w-full rounded-lg bg-surface-container-lowest px-3 py-2 font-body-sm text-body-sm text-on-surface outline-none"
          placeholder="+91 99927 5826"
          required
          type="tel"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 block font-label-sm text-label-sm font-bold text-on-surface-variant">
          Consultation mode
        </label>
        <select
          className="w-full rounded-lg bg-surface-container-lowest px-3 py-2 font-body-sm text-body-sm text-on-surface outline-none"
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <option value="doorstep">Doorstep advisor visit (metro cities)</option>
          <option value="zoom">Video call with senior pension actuary</option>
          <option value="phone">Quick 10-minute phone consultation</option>
        </select>
      </div>
      {message ? (
        <p className="text-sm font-medium text-error" role="alert">
          {message}
        </p>
      ) : null}
      <button
        className="mt-2 w-full rounded-lg bg-secondary px-4 py-2.5 font-label-lg text-label-lg font-bold text-on-secondary shadow-md transition-colors hover:bg-on-secondary-fixed-variant"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      <span className="mt-2 block text-center text-[11px] text-outline">
        Goes to {CONTACT.email}
      </span>
    </form>
  );
}
