export const COVER_OPTIONS = [
  { value: "motor", label: "Motor" },
  { value: "non-motor", label: "Non-motor" },
  { value: "health", label: "Health" },
  { value: "life", label: "Life, including LIC" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type CoverValue = (typeof COVER_OPTIONS)[number]["value"];

export type CallbackInput = {
  name: string;
  mobile: string;
  city: string;
  cover: CoverValue;
  note: string;
};

export type CallbackErrors = Partial<Record<keyof CallbackInput | "form", string>>;

const COVER_VALUES = new Set<string>(COVER_OPTIONS.map((option) => option.value));

export function normalizeMobile(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export function validateCallback(raw: {
  name?: string;
  mobile?: string;
  city?: string;
  cover?: string;
  note?: string;
}): { errors: CallbackErrors; value: CallbackInput | null } {
  const errors: CallbackErrors = {};
  const name = (raw.name ?? "").trim().replace(/\s+/g, " ");
  const city = (raw.city ?? "").trim().replace(/\s+/g, " ");
  const note = (raw.note ?? "").trim();
  const cover = (raw.cover ?? "").trim();
  const mobile = normalizeMobile(raw.mobile ?? "");

  if (name.length < 2) errors.name = "Enter the name we should ask for.";
  else if (name.length > 80) errors.name = "Use a shorter name.";
  else if (!/^[\p{L} .'-]+$/u.test(name)) errors.name = "Use letters, spaces, and hyphens.";

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    errors.mobile = "Enter a 10-digit Indian mobile number.";
  }

  if (city.length < 2) errors.city = "Enter the city.";
  else if (city.length > 60) errors.city = "Use a shorter city name.";

  if (!COVER_VALUES.has(cover)) {
    errors.cover = "Choose the cover you want to talk about.";
  }

  if (note.length > 600) errors.note = "Keep the note under 600 characters.";

  if (Object.keys(errors).length > 0 || !COVER_VALUES.has(cover)) {
    return { errors, value: null };
  }

  return {
    errors,
    value: { name, mobile, city, cover: cover as CoverValue, note },
  };
}
