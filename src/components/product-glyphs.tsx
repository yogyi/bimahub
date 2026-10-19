import { cn } from "cn";

type GlyphProps = {
  className?: string;
};

/** Soft illustrated glyphs for the hero product hub. Each keeps its own colour story. */

export function GlyphTerm({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E8F0FF" />
      <path
        d="M32 12c8 6 14 8 18 9v14c0 10-7 18-18 21-11-3-18-11-18-21V21c4-1 10-3 18-9Z"
        fill="#3B82F6"
      />
      <path d="M26 31.5 30.5 36 39 27.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function GlyphHealth({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E7FBF3" />
      <rect x="28" y="18" width="8" height="28" rx="3" fill="#10B981" />
      <rect x="18" y="28" width="28" height="8" rx="3" fill="#34D399" />
      <circle cx="46" cy="20" r="5" fill="#F59E0B" />
    </svg>
  );
}

export function GlyphCar({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#FFE8D6" />
      <path
        d="M14 34c2-8 8-12 18-12s16 4 18 12l2 8H12l2-8Z"
        fill="#F97316"
      />
      <path d="M22 24h20l3 8H19l3-8Z" fill="#FDBA74" />
      <circle cx="22" cy="44" r="5" fill="#1F2937" />
      <circle cx="42" cy="44" r="5" fill="#1F2937" />
      <circle cx="22" cy="44" r="2" fill="#FDE68A" />
      <circle cx="42" cy="44" r="2" fill="#FDE68A" />
    </svg>
  );
}

export function GlyphBike({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#FFF3D6" />
      <circle cx="18" cy="40" r="9" fill="none" stroke="#F59E0B" strokeWidth="3" />
      <circle cx="46" cy="40" r="9" fill="none" stroke="#F59E0B" strokeWidth="3" />
      <path d="M18 40h12l6-14h8" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M30 40 36 26" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="26" r="3" fill="#FB923C" />
    </svg>
  );
}

export function GlyphLic({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#FFE8EF" />
      <path
        d="M32 48s-14-8-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 10-14 18-14 18Z"
        fill="#EC4899"
      />
      <path d="M32 22v10" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M27 27h10" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphShop({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E8FBF0" />
      <path d="M16 28 20 16h24l4 12" fill="#059669" />
      <path d="M16 28h32v4H16z" fill="#34D399" />
      <path d="M20 32v16h24V32" fill="#A7F3D0" />
      <path d="M28 48V38h8v10" fill="#047857" />
      <rect x="36" y="36" width="6" height="6" rx="1" fill="#FBBF24" />
    </svg>
  );
}

export function GlyphTopup({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#F3E8FF" />
      <path
        d="M32 14c9 5 16 7 18 8v13c0 9-6 16-18 19-12-3-18-10-18-19V22c2-1 9-3 18-8Z"
        fill="#8B5CF6"
      />
      <path d="M32 24v16M24 32h16" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphPension({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E0F2FE" />
      <rect x="18" y="24" width="28" height="20" rx="4" fill="#0EA5E9" />
      <path d="M22 24v-3a10 10 0 0 1 20 0v3" stroke="#38BDF8" strokeWidth="3" fill="none" />
      <circle cx="32" cy="34" r="3" fill="#FDE68A" />
      <path d="M32 37v4" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphCommercial({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#E2E8F0" />
      <path d="M12 38h28l8-10h6v16H12z" fill="#64748B" />
      <path d="M40 28h8l6 8H40z" fill="#94A3B8" />
      <circle cx="22" cy="46" r="4" fill="#1E293B" />
      <circle cx="46" cy="46" r="4" fill="#1E293B" />
      <rect x="16" y="32" width="8" height="5" rx="1" fill="#FDBA74" />
    </svg>
  );
}

export function GlyphCalc({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      <circle cx="32" cy="32" r="32" fill="#FFE4E6" />
      <rect x="18" y="14" width="28" height="36" rx="5" fill="#F43F5E" />
      <rect x="22" y="18" width="20" height="8" rx="2" fill="#FECDD3" />
      <circle cx="25" cy="34" r="2.2" fill="#fff" />
      <circle cx="32" cy="34" r="2.2" fill="#fff" />
      <circle cx="39" cy="34" r="2.2" fill="#fff" />
      <circle cx="25" cy="41" r="2.2" fill="#fff" />
      <circle cx="32" cy="41" r="2.2" fill="#FDE68A" />
      <circle cx="39" cy="41" r="2.2" fill="#fff" />
    </svg>
  );
}
