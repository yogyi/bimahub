"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  estimateHealth,
  estimateMotor,
  estimateTerm,
  formatInr,
  type CalcLine,
} from "@/lib/premium";

const LINES: { value: CalcLine; label: string }[] = [
  { value: "motor", label: "Motor" },
  { value: "health", label: "Health" },
  { value: "term", label: "Term life" },
];

const fieldClass =
  "h-12 rounded-[14px] border-border bg-muted/40 px-3.5 text-base text-foreground transition-colors focus-visible:border-primary focus-visible:bg-card focus-visible:ring-primary/20";

export function PremiumCalculator() {
  const [line, setLine] = useState<CalcLine>("motor");
  const [vehicle, setVehicle] = useState<"car" | "bike" | "commercial">("car");
  const [idv, setIdv] = useState(700000);
  const [driverAge, setDriverAge] = useState(32);
  const [ncb, setNcb] = useState(20);
  const [cityTier, setCityTier] = useState<"metro" | "tier2" | "other">("metro");

  const [healthAge, setHealthAge] = useState(34);
  const [members, setMembers] = useState(3);
  const [sumInsured, setSumInsured] = useState(1000000);
  const [includeParents, setIncludeParents] = useState(false);

  const [termAge, setTermAge] = useState(30);
  const [cover, setCover] = useState(10000000);
  const [termYears, setTermYears] = useState(30);
  const [smoker, setSmoker] = useState(false);

  const estimate = useMemo(() => {
    if (line === "motor") {
      return estimateMotor({
        vehicle,
        idv,
        age: driverAge,
        ncb,
        cityTier,
      });
    }
    if (line === "health") {
      return estimateHealth({
        age: healthAge,
        members,
        sumInsured,
        includeParents,
      });
    }
    return estimateTerm({
      age: termAge,
      cover,
      term: termYears,
      smoker,
    });
  }, [
    line,
    vehicle,
    idv,
    driverAge,
    ncb,
    cityTier,
    healthAge,
    members,
    sumInsured,
    includeParents,
    termAge,
    cover,
    termYears,
    smoker,
  ]);

  return (
    <div className="grid gap-8 overflow-hidden rounded-[24px] border border-border bg-card p-5 shadow-[0_24px_60px_-32px_oklch(0.3_0.08_45/0.35)] md:grid-cols-12 md:p-8">
      <div className="md:col-span-7">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Calculator line">
          {LINES.map((item) => {
            const active = line === item.value;
            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setLine(item.value)}
                className={cn(
                  "h-11 rounded-full px-4 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {line === "motor" ? (
            <>
              <Field label="Vehicle">
                <select
                  className={fieldClass}
                  value={vehicle}
                  onChange={(e) =>
                    setVehicle(e.target.value as "car" | "bike" | "commercial")
                  }
                >
                  <option value="car">Private car</option>
                  <option value="bike">Two-wheeler</option>
                  <option value="commercial">Commercial</option>
                </select>
              </Field>
              <Field label="Insured declared value (₹)">
                <Input
                  type="number"
                  min={50000}
                  step={10000}
                  value={idv}
                  onChange={(e) => setIdv(Number(e.target.value) || 0)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Driver age">
                <Input
                  type="number"
                  min={18}
                  max={75}
                  value={driverAge}
                  onChange={(e) => setDriverAge(Number(e.target.value) || 18)}
                  className={fieldClass}
                />
              </Field>
              <Field label="No-claim bonus (%)">
                <Input
                  type="number"
                  min={0}
                  max={50}
                  value={ncb}
                  onChange={(e) => setNcb(Number(e.target.value) || 0)}
                  className={fieldClass}
                />
              </Field>
              <Field label="City type" className="sm:col-span-2">
                <select
                  className={fieldClass}
                  value={cityTier}
                  onChange={(e) =>
                    setCityTier(e.target.value as "metro" | "tier2" | "other")
                  }
                >
                  <option value="metro">Metro (Mumbai, Delhi, Bengaluru, Pune…)</option>
                  <option value="tier2">Larger city</option>
                  <option value="other">Other towns</option>
                </select>
              </Field>
            </>
          ) : null}

          {line === "health" ? (
            <>
              <Field label="Eldest age on the policy">
                <Input
                  type="number"
                  min={18}
                  max={80}
                  value={healthAge}
                  onChange={(e) => setHealthAge(Number(e.target.value) || 18)}
                  className={fieldClass}
                />
              </Field>
              <Field label="People covered">
                <Input
                  type="number"
                  min={1}
                  max={6}
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value) || 1)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Sum insured (₹)">
                <Input
                  type="number"
                  min={300000}
                  step={100000}
                  value={sumInsured}
                  onChange={(e) => setSumInsured(Number(e.target.value) || 0)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Parents on the same floater">
                <select
                  className={fieldClass}
                  value={includeParents ? "yes" : "no"}
                  onChange={(e) => setIncludeParents(e.target.value === "yes")}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </Field>
            </>
          ) : null}

          {line === "term" ? (
            <>
              <Field label="Your age">
                <Input
                  type="number"
                  min={18}
                  max={60}
                  value={termAge}
                  onChange={(e) => setTermAge(Number(e.target.value) || 18)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Cover amount (₹)">
                <Input
                  type="number"
                  min={2500000}
                  step={500000}
                  value={cover}
                  onChange={(e) => setCover(Number(e.target.value) || 0)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Policy term (years)">
                <Input
                  type="number"
                  min={10}
                  max={40}
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value) || 10)}
                  className={fieldClass}
                />
              </Field>
              <Field label="Do you smoke">
                <select
                  className={fieldClass}
                  value={smoker ? "yes" : "no"}
                  onChange={(e) => setSmoker(e.target.value === "yes")}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </Field>
            </>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[12px] bg-navy p-6 text-foam md:col-span-5">
        <div>
          <p className="text-sm text-foam/75">Estimated yearly premium</p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            {formatInr(estimate.yearlyLow)} to {formatInr(estimate.yearlyHigh)}
          </p>
          <p className="mt-2 text-sm text-foam/75">
            About {formatInr(estimate.monthlyLow)} to {formatInr(estimate.monthlyHigh)} a
            month
          </p>
          <p className="mt-5 text-sm leading-relaxed text-foam/90">{estimate.summary}</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-foam/75">
            {estimate.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
        <Link href="/contact" className={cn(buttonVariants(), "mt-8 w-fit")}>
          Get a quote on this range
        </Link>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
    </div>
  );
}
