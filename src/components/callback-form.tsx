"use client";

import { useState } from "react";
import { COVER_OPTIONS, validateCallback, type CallbackErrors } from "@/lib/callback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldClass =
  "h-12 rounded-[12px] border-input bg-background px-3 text-base text-foreground md:text-base";

const empty = {
  name: "",
  mobile: "",
  city: "",
  cover: "",
  note: "",
};

export function CallbackForm() {
  const [fields, setFields] = useState(empty);
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(key: keyof typeof empty, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, form: undefined }));
  }

  async function submitAction(formData: FormData) {
    const next = {
      name: String(formData.get("name") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      city: String(formData.get("city") ?? ""),
      cover: String(formData.get("cover") ?? ""),
      note: String(formData.get("note") ?? ""),
    };
    const { errors: nextErrors, value } = validateCallback(next);
    if (!value) {
      setFields(next);
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrors({});

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(value),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        errors?: CallbackErrors;
      } | null;

      if (!response.ok || !payload?.ok) {
        setErrors(payload?.errors ?? { form: "We could not save that note. Try again." });
        setStatus("error");
        return;
      }

      setStatus("sent");
      setFields(empty);
    } catch {
      setErrors({ form: "The network dropped. Try again." });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4">
        <h3 className="text-2xl tracking-[-0.03em]">Received.</h3>
        <p className="max-w-[48ch] leading-relaxed text-muted-foreground">
          The note is saved with this preview. On a published desk, this becomes
          a weekday call before 7 pm.
        </p>
        <Button type="button" className="w-fit" onClick={() => setStatus("idle")}>
          Write another note
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" action={submitAction} noValidate aria-busy={status === "sending"}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="callback-name">Name</Label>
        <Input
          id="callback-name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby="callback-name-help callback-name-error"
          className={fieldClass}
        />
        <p id="callback-name-help" className="text-sm text-muted-foreground">
          The person we should ask for.
        </p>
        {errors.name ? (
          <p id="callback-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="callback-mobile">Mobile</Label>
        <Input
          id="callback-mobile"
          name="mobile"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={fields.mobile}
          onChange={(event) => update("mobile", event.target.value)}
          aria-invalid={Boolean(errors.mobile)}
          aria-describedby="callback-mobile-help callback-mobile-error"
          className={fieldClass}
        />
        <p id="callback-mobile-help" className="text-sm text-muted-foreground">
          Ten digits, or with +91.
        </p>
        {errors.mobile ? (
          <p id="callback-mobile-error" className="text-sm text-destructive">
            {errors.mobile}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="callback-city">City</Label>
          <Input
            id="callback-city"
            name="city"
            autoComplete="address-level2"
            value={fields.city}
            onChange={(event) => update("city", event.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby="callback-city-help callback-city-error"
            className={fieldClass}
          />
          <p id="callback-city-help" className="text-sm text-muted-foreground">
            Where the vehicle, shop, or family is.
          </p>
          {errors.city ? (
            <p id="callback-city-error" className="text-sm text-destructive">
              {errors.city}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="callback-cover">Cover</Label>
          <select
            id="callback-cover"
            name="cover"
            value={fields.cover}
            onChange={(event) => update("cover", event.target.value)}
            aria-invalid={Boolean(errors.cover)}
            aria-describedby="callback-cover-error"
            className="h-12 w-full rounded-[12px] border border-input bg-background px-3 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="">Select a cover</option>
            {COVER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.cover ? (
            <p id="callback-cover-error" className="text-sm text-destructive">
              {errors.cover}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="callback-note">Note</Label>
        <Textarea
          id="callback-note"
          name="note"
          rows={4}
          value={fields.note}
          onChange={(event) => update("note", event.target.value)}
          aria-invalid={Boolean(errors.note)}
          aria-describedby="callback-note-help callback-note-error"
          className="min-h-28 rounded-[12px] px-3 py-3 text-base md:text-base"
        />
        <p id="callback-note-help" className="text-sm text-muted-foreground">
          Optional. A vehicle number, a hospital, or the plan you already hold.
        </p>
        {errors.note ? (
          <p id="callback-note-error" className="text-sm text-destructive">
            {errors.note}
          </p>
        ) : null}
      </div>

      {errors.form ? (
        <p role="alert" className="text-sm text-destructive">
          {errors.form}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-3">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Request a callback"}
        </Button>
        <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
          This preview stores the request on the server. It is not sent to a
          phone yet.
        </p>
      </div>
    </form>
  );
}
