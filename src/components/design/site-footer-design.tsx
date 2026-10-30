import Link from "next/link";

const COLUMNS = [
  {
    title: "Life & LIC",
    links: [
      { href: "/life", label: "LIC savings plans" },
      { href: "/life", label: "Pure term cover" },
      { href: "/life", label: "Pension & annuity" },
      { href: "/contact", label: "Request a life quote" },
    ],
  },
  {
    title: "Health",
    links: [
      { href: "/health", label: "Family floater" },
      { href: "/health", label: "Senior citizen cover" },
      { href: "/health", label: "Critical illness" },
      { href: "/contact", label: "Request a health quote" },
    ],
  },
  {
    title: "Motor & shop",
    links: [
      { href: "/motor", label: "Car insurance" },
      { href: "/motor", label: "Two-wheeler cover" },
      { href: "/non-motor", label: "Shop & home" },
      { href: "/contact", label: "Request a motor quote" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/claims", label: "Claims assistance" },
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact us" },
      { href: "/#faq-container", label: "FAQs" },
    ],
  },
] as const;

export function SiteFooterDesign() {
  return (
    <footer className="w-full border-t border-slate-800 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-sm font-extrabold text-white">
                BH
              </span>
              <span>
                <span className="block text-xl font-black tracking-tight text-white">
                  Bima<span className="text-sky-400">Hub</span>
                </span>
                <span className="block text-[10px] font-bold tracking-wider text-tertiary-fixed uppercase">
                  Insurance comparison desk
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-slate-300">
              Compare life including LIC, health, motor, and shop cover in plain
              language. Request a free quote and get weekday callback support.
            </p>
            <div className="space-y-1 rounded-xl border border-slate-700/60 bg-primary-container/90 p-3 text-[11px] text-slate-300">
              <p className="font-semibold text-tertiary-fixed">
                Preview desk · Mumbai
              </p>
              <p>
                <a className="hover:text-white" href="tel:18002088777">
                  1800-208-8777
                </a>
                {" · "}
                <a className="hover:text-white" href="mailto:desk@bimahub.in">
                  desk@bimahub.in
                </a>
              </p>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-tertiary-fixed uppercase">
                {column.title}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-2xl border border-slate-700/60 bg-primary-container/60 p-4 sm:p-5">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-tertiary-fixed">
                  lock
                </span>
                Encrypted quote requests
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-sky-400">
                  verified_user
                </span>
                Clear policy wordings
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-emerald-400">
                  support_agent
                </span>
                Claims help with the same desk
              </span>
            </div>
            <Link
              href="/contact"
              className="rounded-lg bg-secondary px-4 py-2 text-xs font-bold text-white transition hover:bg-[#003ea8]"
            >
              Get a free quote
            </Link>
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-800 pt-6 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-300">Notice:</strong> Insurance is the
            subject matter of solicitation. BimaHub is a preview comparison desk.
            Policies are issued by the insurer you choose. Product details follow
            that insurer&apos;s approved terms.
          </p>
          <div className="flex flex-col items-center justify-between gap-3 pt-2 text-xs sm:flex-row">
            <p>© 2026 BimaHub. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact us
              </Link>
              <Link href="/claims" className="hover:text-white">
                Claims
              </Link>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
