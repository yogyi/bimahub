"use client";

import { useId, useState } from "react";
import { COVER_OPTIONS, validateCallback, type CallbackErrors } from "@/lib/callback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import {
  Buildings,
  CheckCircle,
  MapPin,
  Phone,
  User,
} from "@phosphor-icons/react";

const fieldShell =
  "group relative flex h-12 items-center gap-2.5 rounded-[14px] border border-border bg-muted/40 px-3.5 transition-colors focus-within:border-primary focus-within:bg-card focus-within:ring-3 focus-within:ring-primary/20 dark:bg-input/20";

const inputBare =
  "h-full w-full border-0 bg-transparent px-0 py-0 text-base shadow-none outline-none ring-0 focus-visible:border-0 focus-visible:ring-0 md:text-base dark:bg-transparent";

const empty = {
  name: "",
  mobile: "",
  city: "",
  cover: "",
  note: "",
};

export function CallbackForm({
  compact = false,
  submitLabel = "Get a free quote",
}: {
  compact?: boolean;
  submitLabel?: string;
}) {
  const uid = useId();
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
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-[18px] border border-emerald-200 bg-emerald-50/80 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/30"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
          <CheckCircle weight="fill" className="size-7" />
        </span>
        <div>
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground">
            Quote request received
          </h3>
          <p className="mt-2 max-w-[48ch] leading-relaxed text-muted-foreground">
            Saved on this preview. On a live desk, a Bima Hub advisor calls on a
            weekday before 7 pm.
          </p>
        </div>
        <Button type="button" className="w-fit" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      action={submitAction}
      noValidate
      aria-busy={status === "sending"}
    >
      <input type="hidden" name="cover" value={fields.cover} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={`${uid}-name`}
          label="Full name"
          error={errors.name}
          icon={<User weight="duotone" className="size-5 text-brand" />}
        >
          <Input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            placeholder="e.g. Priya Sharma"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputBare}
          />
        </Field>

        <Field
          id={`${uid}-mobile`}
          label="Mobile number"
          error={errors.mobile}
          icon={<Phone weight="duotone" className="size-5 text-brand" />}
        >
          <Input
            id={`${uid}-mobile`}
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit Indian mobile"
            value={fields.mobile}
            onChange={(event) => update("mobile", event.target.value)}
            aria-invalid={Boolean(errors.mobile)}
            className={inputBare}
          />
        </Field>

        <Field
          id={`${uid}-city`}
          label="City"
          error={errors.city}
          icon={<MapPin weight="duotone" className="size-5 text-brand" />}
        >
          <Input
            id={`${uid}-city`}
            name="city"
            autoComplete="address-level2"
            placeholder="Mumbai, Pune, Surat…"
            value={fields.city}
            onChange={(event) => update("city", event.target.value)}
            aria-invalid={Boolean(errors.city)}
            className={inputBare}
          />
        </Field>

        <div className="flex flex-col gap-2 sm:col-span-1">
          <Label className="text-sm font-semibold text-foreground">
            Cover you need
          </Label>
          <div
            className={cn(
              "flex min-h-12 flex-wrap content-center gap-2 rounded-[14px] border border-border bg-muted/40 p-2",
              errors.cover && "border-destructive ring-3 ring-destructive/15",
            )}
            role="group"
            aria-label="Cover you need"
          >
            {COVER_OPTIONS.map((option) => {
              const active = fields.cover === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => update("cover", option.value)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-card text-muted-foreground hover:text-foreground",
                  )}
                  aria-pressed={active}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {errors.cover ? (
            <p className="text-sm text-destructive">{errors.cover}</p>
          ) : null}
        </div>
      </div>

      {!compact ? (
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${uid}-note`} className="text-sm font-semibold">
            Message <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <div
            className={cn(
              "rounded-[14px] border border-border bg-muted/40 p-3 transition-colors focus-within:border-primary focus-within:bg-card focus-within:ring-3 focus-within:ring-primary/20",
              errors.note && "border-destructive",
            )}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Buildings weight="duotone" className="size-4 text-brand" />
              Vehicle number, ages, shop type, or current policy
            </div>
            <Textarea
              id={`${uid}-note`}
              name="note"
              rows={3}
              placeholder="Share anything that helps us prepare a clear quote…"
              value={fields.note}
              onChange={(event) => update("note", event.target.value)}
              aria-invalid={Boolean(errors.note)}
              className="min-h-24 resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0 md:text-base dark:bg-transparent"
            />
          </div>
          {errors.note ? (
            <p className="text-sm text-destructive">{errors.note}</p>
          ) : null}
        </div>
      ) : (
        <input type="hidden" name="note" value={fields.note} />
      )}

      {errors.form ? (
        <p role="alert" className="rounded-[12px] bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {errors.form}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-border pt-5">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="h-12 w-full text-base font-semibold shadow-[0_12px_28px_-12px_oklch(0.55_0.18_45/0.7)] sm:w-auto sm:min-w-[220px]"
        >
          {status === "sending" ? "Sending your request…" : submitLabel}
        </Button>
        <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-4">
          <li>Weekday callback before 7 pm</li>
          <li>No spam calls</li>
          <li>Preview stores on this server only</li>
        </ul>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  icon,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      <div
        className={cn(
          fieldShell,
          error && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
        )}
      >
        <span className="shrink-0 opacity-90">{icon}</span>
        {children}
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
