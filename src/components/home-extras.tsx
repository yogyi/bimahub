import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import {
  ChatCircleDots,
  Check,
  EnvelopeSimple,
  Headset,
  MagnifyingGlass,
  Phone,
  ShieldCheck,
  Star,
  Warning,
} from "@phosphor-icons/react/ssr";
import {
  GlyphCar,
  GlyphHealth,
  GlyphLic,
  GlyphTerm,
} from "@/components/product-glyphs";

const FAVOURITES = [
  {
    title: "Clear comparisons",
    body: "Two or three wordings side by side. Premium is the last column, not the first.",
    accent: "border-l-brand text-brand",
    icon: MagnifyingGlass,
  },
  {
    title: "Insurer-agnostic advice",
    body: "We compare life and general cover options. You pick the wording that fits, not a house favourite.",
    accent: "border-l-sky-500 text-sky-600 dark:text-sky-400",
    icon: ShieldCheck,
  },
  {
    title: "Honest pricing talk",
    body: "Room rent, IDV, and exclusions explained before you pay a rupee.",
    accent: "border-l-emerald-500 text-emerald-600 dark:text-emerald-400",
    icon: Star,
  },
  {
    title: "Claims desk nearby",
    body: "The same people who placed the policy help with intimation and papers.",
    accent: "border-l-amber-500 text-amber-600 dark:text-amber-400",
    icon: Headset,
  },
] as const;

export function FavouritesSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-amber-100/70 blur-3xl dark:bg-amber-900/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-64 rounded-full bg-sky/80 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-foreground md:text-4xl">
            What makes{" "}
            <span className="text-brand">Bima Hub</span> a favourite place to buy
            cover in India?
          </h2>
          <p className="mt-4 max-w-[36ch] text-muted-foreground">
            Marketplace ease, desk honesty. Built for families and small shops,
            not for jargon.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-7 md:pt-8">
          {FAVOURITES.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "rounded-[16px] border border-border bg-card p-5 shadow-[0_16px_40px_-28px_oklch(0.3_0.06_250/0.45)] border-l-4",
                card.accent,
                index % 2 === 1 && "md:mt-8",
              )}
            >
              <card.icon weight="duotone" className="size-7" />
              <h3 className="mt-3 text-lg font-bold tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GuideSection() {
  return (
    <section id="guide" className="scroll-mt-24 bg-muted/50">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
        <div className="md:col-span-6">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Finding the right insurance just got simpler with{" "}
            <span className="text-brand">Bima Guide</span>
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Points you to the right cover in plain language",
              "Decodes room rent, IDV, and waiting periods fast",
              "Answers common questions before you call",
              "Live for term, health, motor, and shop or home",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <Check weight="bold" className="mt-0.5 size-5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#hero-quick-quote" className={buttonVariants()}>
              Try a calculator
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
              Ask for a quote
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-[28px] border border-border bg-card p-4 shadow-[0_28px_60px_-30px_oklch(0.35_0.1_250/0.5)]">
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                  <ChatCircleDots weight="fill" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Bima Guide</p>
                  <p className="text-xs text-muted-foreground">Quick answers · India desk</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-gradient-to-br from-brand to-sky-600 px-4 py-3 text-sm text-white shadow-sm">
                  Looking for health cover for parents in Pune. Where should I start?
                </div>
                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-muted px-4 py-3 text-sm text-foreground">
                  Start with room-rent caps and waiting periods, then premium. Open
                  Health, or ask for a free quote and we will call.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm">
                  Tip: use the health calculator for a rough yearly range in ₹.
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2.5 text-sm text-muted-foreground">
                Type your question…
                <span className="ml-auto text-brand">↗</span>
              </div>
            </div>
            <div className="absolute -left-3 top-16 hidden rounded-2xl border border-border bg-card px-3 py-2 shadow-lg md:block">
              <p className="flex items-center gap-2 text-xs font-semibold">
                <Headset weight="fill" className="size-4 text-primary" />
                Desk still answers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-4 px-4 pb-16 md:grid-cols-3 md:px-6">
        <article className="rounded-[18px] border border-border bg-card p-5 shadow-sm">
          <Headset weight="duotone" className="size-8 text-brand" />
          <p className="mt-3 text-sm leading-relaxed">
            Claims help from the desk that placed your policy.{" "}
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Weekdays
            </span>
          </p>
        </article>
        <article className="rounded-[18px] border border-border bg-card p-5 shadow-sm">
          <ChatCircleDots weight="duotone" className="size-8 text-primary" />
          <p className="mt-3 text-sm leading-relaxed">
            Got a question about insurance? Drop a quote request and we help quickly.
          </p>
        </article>
        <article className="rounded-[18px] border border-amber-200 bg-amber-50 p-5 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/30">
          <Warning weight="duotone" className="size-8 text-amber-600" />
          <p className="mt-3 text-sm font-semibold text-foreground">
            Beware of insurance fraudsters
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We never ask for OTPs or full card details on a cold call. Verify the
            desk number on this site.
          </p>
        </article>
      </div>
    </section>
  );
}

export function PhoneSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Keep Bima Hub in your pocket
          </h2>
          <div className="mt-2 h-1 w-14 rounded-full bg-brand" />
          <p className="mt-4 text-muted-foreground">
            Save the desk, check a premium, and request a callback from your phone.
            No maze of tabs.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Compare covers in one place",
              "Request a quote and store the note",
              "Reach claims help when something goes wrong",
              "Open calculators for motor, health, and term",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-foreground">
                <Star weight="fill" className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+919876543210" className={buttonVariants()}>
              Save desk number
            </a>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
              Request callback
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="absolute top-6 left-0 z-10 hidden w-44 rounded-[16px] border border-border bg-card p-3 shadow-xl sm:block">
            <div className="size-10">
              <GlyphTerm />
            </div>
            <p className="mt-2 text-xs font-bold">Term life</p>
            <p className="text-[11px] text-muted-foreground">Cover for dependents</p>
          </div>
          <div className="absolute top-28 left-4 z-10 hidden w-44 rounded-[16px] border border-border bg-card p-3 shadow-xl sm:block">
            <div className="size-10">
              <GlyphHealth />
            </div>
            <p className="mt-2 text-xs font-bold">Health</p>
            <p className="text-[11px] text-muted-foreground">Room rent first</p>
          </div>
          <div className="absolute right-0 bottom-24 z-10 hidden w-44 rounded-[16px] border border-border bg-card p-3 shadow-xl md:block">
            <div className="size-10">
              <GlyphCar />
            </div>
            <p className="mt-2 text-xs font-bold">Motor</p>
            <p className="text-[11px] text-muted-foreground">Protect your NCB</p>
          </div>
          <div className="absolute top-10 right-8 z-10 hidden w-40 rounded-[16px] border border-border bg-card p-3 shadow-xl lg:block">
            <div className="size-10">
              <GlyphLic />
            </div>
            <p className="mt-2 text-xs font-bold">LIC plans</p>
            <p className="text-[11px] text-muted-foreground">Read before renew</p>
          </div>

          <div className="mx-auto w-[260px] rounded-[36px] border-[8px] border-navy bg-navy p-2 shadow-[0_30px_60px_-20px_oklch(0.25_0.08_265/0.55)]">
            <div className="overflow-hidden rounded-[28px] bg-card">
              <div className="bg-gradient-to-br from-brand to-navy px-4 pt-6 pb-5 text-white">
                <p className="text-xs text-white/70">Namaste</p>
                <p className="text-lg font-bold">Your Bima Hub</p>
                <div className="mt-4 rounded-2xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-xs text-white/70">Term cover estimate</p>
                  <p className="text-sm font-semibold">From ₹490 / month*</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3">
                {["Term", "Health", "Car", "Claims"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl bg-muted px-2 py-3 text-center text-xs font-semibold"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="border-t border-border px-3 py-3">
                <Link
                  href="/contact"
                  className="flex h-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                >
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            *Illustrative planning range only. Not an insurer quote.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="scroll-mt-24 bg-muted/40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
        <div className="md:col-span-6">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Have a question? Here to help.
          </h2>
          <div className="mt-2 h-1 w-14 rounded-full bg-brand" />
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">
            Our friendly desk is your extended family for cover questions. Speak
            your mind. We listen, then prepare a clear next step.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:desk@bimahub.in"
              className="flex items-center gap-3 rounded-[16px] border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-[12px] bg-sky text-brand">
                <EnvelopeSimple weight="duotone" className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  General enquiries
                </span>
                <span className="text-sm font-bold text-foreground">desk@bimahub.in</span>
              </span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 rounded-[16px] border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-[12px] bg-orange-50 text-primary dark:bg-orange-950/40">
                <Phone weight="duotone" className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  Customer sales
                </span>
                <span className="text-sm font-bold text-foreground">+91 98765 43210</span>
              </span>
            </a>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "mt-6")}
          >
            Request a callback
          </Link>
        </div>

        <div className="md:col-span-6">
          <SupportIllustration />
        </div>
      </div>
    </section>
  );
}

function SupportIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] max-w-lg">
      <svg viewBox="0 0 480 360" className="size-full" role="img" aria-label="Advisors helping with a policy document">
        <rect width="480" height="360" fill="transparent" />
        <ellipse cx="240" cy="310" rx="160" ry="18" fill="#E2E8F0" />
        <rect x="150" y="70" width="180" height="220" rx="12" fill="#fff" stroke="#CBD5E1" strokeWidth="3" />
        <rect x="170" y="100" width="140" height="10" rx="4" fill="#3B82F6" />
        <rect x="170" y="125" width="120" height="8" rx="4" fill="#94A3B8" />
        <rect x="170" y="145" width="130" height="8" rx="4" fill="#94A3B8" />
        <rect x="170" y="165" width="100" height="8" rx="4" fill="#94A3B8" />
        <circle cx="110" cy="220" r="34" fill="#FDBA74" />
        <rect x="85" y="250" width="50" height="55" rx="12" fill="#F97316" />
        <circle cx="370" cy="200" r="34" fill="#FDA4AF" />
        <rect x="345" y="230" width="50" height="60" rx="12" fill="#EC4899" />
        <circle cx="240" cy="250" r="30" fill="#6EE7B7" />
        <rect x="218" y="278" width="44" height="48" rx="12" fill="#059669" />
        <path d="M140 180c20-40 60-70 100-70" stroke="#FBBF24" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="250" cy="95" r="8" fill="#F43F5E" />
      </svg>
      <div className="absolute right-4 bottom-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
        <p className="text-xs font-bold text-foreground">Policy ready to review</p>
        <p className="text-[11px] text-muted-foreground">We stay until you understand it</p>
      </div>
    </div>
  );
}
