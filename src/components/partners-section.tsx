const PARTNERS = [
  {
    label: "Example Life",
    domain: "example.com",
    mark: "EL",
    tint: "from-sky-500 to-blue-700",
    ring: "group-hover:ring-sky-400/50",
  },
  {
    label: "Example Health",
    domain: "example.com",
    mark: "EH",
    tint: "from-emerald-500 to-teal-700",
    ring: "group-hover:ring-emerald-400/50",
  },
  {
    label: "Example Motor",
    domain: "example.com",
    mark: "EM",
    tint: "from-orange-500 to-amber-600",
    ring: "group-hover:ring-orange-400/50",
  },
  {
    label: "Example Shield",
    domain: "example.com",
    mark: "ES",
    tint: "from-violet-500 to-indigo-700",
    ring: "group-hover:ring-violet-400/50",
  },
  {
    label: "Example Care",
    domain: "example.com",
    mark: "EC",
    tint: "from-rose-500 to-pink-700",
    ring: "group-hover:ring-rose-400/50",
  },
  {
    label: "Example Cover",
    domain: "example.com",
    mark: "EX",
    tint: "from-cyan-500 to-sky-700",
    ring: "group-hover:ring-cyan-400/50",
  },
  {
    label: "Example Trust",
    domain: "example.com",
    mark: "ET",
    tint: "from-lime-500 to-green-700",
    ring: "group-hover:ring-lime-400/50",
  },
  {
    label: "Example Assure",
    domain: "example.com",
    mark: "EA",
    tint: "from-fuchsia-500 to-purple-700",
    ring: "group-hover:ring-fuchsia-400/50",
  },
] as const;

function PartnerCard({
  partner,
}: {
  partner: (typeof PARTNERS)[number];
}) {
  return (
    <a
      href={`https://${partner.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex w-[148px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-border/80 bg-card/90 px-4 py-5 shadow-[0_18px_40px_-32px_oklch(0.3_0.06_250/0.55)] ring-2 ring-transparent transition duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_22px_48px_-28px_oklch(0.45_0.12_45/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-[160px] ${partner.ring}`}
    >
      <span
        className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${partner.tint} text-sm font-bold tracking-wide text-white shadow-md transition duration-300 group-hover:scale-105 group-hover:rotate-[-3deg]`}
        aria-hidden
      >
        {partner.mark}
      </span>
      <span className="text-center">
        <span className="block text-sm font-semibold tracking-[-0.02em] text-foreground">
          {partner.label}
        </span>
        <span className="mt-0.5 block text-xs font-medium text-muted-foreground transition group-hover:text-brand">
          {partner.domain}
        </span>
      </span>
    </a>
  );
}

export function PartnersSection() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.94_0.04_240),transparent_55%),linear-gradient(180deg,var(--background),oklch(0.97_0.012_250))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-8 size-56 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-900/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 size-64 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/25"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-brand uppercase">
          Preview logos
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-[-0.03em] md:text-4xl">
          Sample partners
        </h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-center text-muted-foreground">
          Placeholder brands on example.com while real insurer marks are wired
          in. Hover a tile to preview the feel of the finished strip.
        </p>

        <div className="relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[oklch(0.99_0.005_250)] to-transparent md:w-16 dark:from-[oklch(0.17_0.025_265)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[oklch(0.99_0.005_250)] to-transparent md:w-16 dark:from-[oklch(0.17_0.025_265)]"
          />
          <div className="partner-marquee overflow-hidden py-2">
            <ul className="partner-marquee-track flex w-max gap-4 pr-4">
              {loop.map((partner, index) => (
                <li key={`${partner.mark}-${index}`}>
                  <PartnerCard partner={partner} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {PARTNERS.map((partner) => (
            <li key={partner.mark} className="flex justify-center">
              <PartnerCard partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
