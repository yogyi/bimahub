export type CalcLine = "motor" | "health" | "term";

export type MotorInput = {
  vehicle: "car" | "bike" | "commercial";
  idv: number;
  age: number;
  ncb: number;
  cityTier: "metro" | "tier2" | "other";
};

export type HealthInput = {
  age: number;
  members: number;
  sumInsured: number;
  includeParents: boolean;
};

export type TermInput = {
  age: number;
  cover: number;
  term: number;
  smoker: boolean;
};

export type PremiumEstimate = {
  yearlyLow: number;
  yearlyHigh: number;
  monthlyLow: number;
  monthlyHigh: number;
  summary: string;
  notes: string[];
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function roundRupee(n: number) {
  return Math.round(n / 50) * 50;
}

export function estimateMotor(input: MotorInput): PremiumEstimate {
  const idv = clamp(input.idv, 50_000, 5_000_000);
  const age = clamp(input.age, 18, 75);
  const ncb = clamp(input.ncb, 0, 50) / 100;

  const odRate =
    input.vehicle === "bike" ? 0.012 : input.vehicle === "commercial" ? 0.028 : 0.018;
  const cityFactor =
    input.cityTier === "metro" ? 1.12 : input.cityTier === "tier2" ? 1.04 : 1;
  const ageFactor = age >= 50 ? 1.15 : age >= 40 ? 1.06 : 1;

  const ownDamage = idv * odRate * cityFactor * ageFactor * (1 - ncb);
  const thirdParty =
    input.vehicle === "bike" ? 750 : input.vehicle === "commercial" ? 8500 : 3200;
  const mid = ownDamage + thirdParty;

  return {
    yearlyLow: roundRupee(mid * 0.88),
    yearlyHigh: roundRupee(mid * 1.18),
    monthlyLow: roundRupee((mid * 0.88) / 12),
    monthlyHigh: roundRupee((mid * 1.18) / 12),
    summary: `Rough comprehensive range for a ${input.vehicle} with IDV about ₹${idv.toLocaleString("en-IN")}.`,
    notes: [
      "Third-party premium is closer to the regulator's schedule. Own damage moves with IDV, city, and no-claim bonus.",
      "Add-ons such as zero depreciation sit on top of this range.",
      "This is an estimate for planning. The insurer quote is the number that binds.",
    ],
  };
}

export function estimateHealth(input: HealthInput): PremiumEstimate {
  const age = clamp(input.age, 18, 80);
  const members = clamp(input.members, 1, 6);
  const sum = clamp(input.sumInsured, 300_000, 10_000_000);

  const basePerLakh = age < 30 ? 180 : age < 40 ? 260 : age < 50 ? 420 : age < 60 ? 780 : 1400;
  let mid = (sum / 100_000) * basePerLakh;
  mid *= 1 + (members - 1) * 0.55;
  if (input.includeParents) mid *= 1.45;

  return {
    yearlyLow: roundRupee(mid * 0.85),
    yearlyHigh: roundRupee(mid * 1.25),
    monthlyLow: roundRupee((mid * 0.85) / 12),
    monthlyHigh: roundRupee((mid * 1.25) / 12),
    summary: `Family floater style range for ₹${sum.toLocaleString("en-IN")} cover across ${members} ${members === 1 ? "person" : "people"}.`,
    notes: [
      "Room-rent caps and waiting periods change the real cost more than a small premium difference.",
      "Parents on the same floater often price the plan at the eldest age.",
      "Portability can keep waiting periods you have already served. Ask before you switch.",
    ],
  };
}

export function estimateTerm(input: TermInput): PremiumEstimate {
  const age = clamp(input.age, 18, 60);
  const cover = clamp(input.cover, 25_00_000, 5_00_00_000);
  const term = clamp(input.term, 10, 40);

  const ratePerLakh =
    age < 25 ? 12 : age < 30 ? 15 : age < 35 ? 20 : age < 40 ? 28 : age < 45 ? 42 : age < 50 ? 65 : 110;
  let mid = (cover / 100_000) * ratePerLakh;
  mid *= 1 + (term - 20) * 0.01;
  if (input.smoker) mid *= 1.55;

  return {
    yearlyLow: roundRupee(mid * 0.9),
    yearlyHigh: roundRupee(mid * 1.2),
    monthlyLow: roundRupee((mid * 0.9) / 12),
    monthlyHigh: roundRupee((mid * 1.2) / 12),
    summary: `Term life range for ₹${cover.toLocaleString("en-IN")} cover to age about ${age + term}.`,
    notes: [
      "LIC Tech Term and private term plans price differently after medicals and occupation.",
      "Smoking, BMI, and declared illness move the quote. This tool does not underwrite.",
      "Endowment and whole-life plans are not estimated here. Ask for an insurer illustration.",
    ],
  };
}

export function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
