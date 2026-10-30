import Link from "next/link";

const COLUMNS = [
  {
    title: "Insurance",
    links: [
      { href: "/motor", label: "Car insurance" },
      { href: "/motor", label: "Bike insurance" },
      { href: "/health", label: "Health insurance" },
      { href: "/life", label: "Term life" },
      { href: "/life", label: "LIC plans" },
      { href: "/non-motor", label: "Shop & home" },
      { href: "/claims", label: "Claims help" },
    ],
  },
  {
    title: "Calculators",
    links: [
      { href: "/#hero-quick-quote", label: "Motor premium" },
      { href: "/#hero-quick-quote", label: "Health premium" },
      { href: "/#hero-quick-quote", label: "Term life premium" },
      { href: "/#hero-quick-quote", label: "Compare covers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#reviews", label: "Customer reviews" },
      { href: "/#partners", label: "Insurance partners" },
      { href: "/#guide", label: "Bima Guide" },
      { href: "/about", label: "How we work" },
      { href: "/claims", label: "First hour of a claim" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact us" },
      { href: "/contact", label: "Get a quote" },
      { href: "/#support", label: "Talk to expert" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-foam">
      <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-8 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-base font-bold tracking-[-0.02em] text-white">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={column.title + link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-foam/75 transition-colors hover:text-white"
                    >
                      <span
                        className="flex size-4 items-center justify-center rounded-full border border-foam/30 text-[10px] leading-none"
                        aria-hidden
                      >
                        +
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-[16px] bg-white/5 px-5 py-5 md:grid-cols-3 md:items-center md:gap-0 md:divide-x md:divide-white/10">
          <div className="md:pr-6">
            <p className="text-xs font-semibold tracking-wide text-foam/60 uppercase">
              Ways to pay later
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["UPI", "Cards", "Netbanking", "NEFT"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="md:px-6">
            <p className="text-xs font-semibold tracking-wide text-foam/60 uppercase">
              Desk promise
            </p>
            <p className="mt-3 text-sm text-foam/85">
              Registration details shared before you sign. No fake licence number
              on this preview.
            </p>
          </div>
          <div className="md:pl-6">
            <p className="text-xs font-semibold tracking-wide text-foam/60 uppercase">
              Reach us
            </p>
            <p className="mt-3 text-sm">
              <a href="tel:+919876543210" className="font-semibold hover:underline">
                +91 98765 43210
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href="mailto:desk@bimahub.in" className="hover:underline">
                desk@bimahub.in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold tracking-wide text-foam/60 uppercase">
            Important links
          </p>
          <p className="mt-2 text-sm text-foam/75">
            <a
              href="https://irdai.gov.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline"
            >
              IRDAI
            </a>
            <span className="mx-2 text-foam/40">|</span>
            <a
              href="https://bimabharosa.irdai.gov.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline"
            >
              Bima Bharosa
            </a>
          </p>
          <ul className="mt-5 flex max-w-5xl flex-col gap-3 text-xs leading-relaxed text-foam/60">
            <li>
              Bima Hub is an insurance advisory preview desk in Andheri East,
              Mumbai. Phone +91 98765 43210. Email desk@bimahub.in. Policies are
              issued by the insurer you choose.
            </li>
            <li>
              Insurance is the subject matter of solicitation. Bima Hub is paid a
              commission by the insurer. Claim decisions stay with the insurer.
              The premium calculator is an estimate only.
            </li>
            <li>
              This website is a working preview. Quote requests are stored on the
              server running the site and are not delivered to a live desk yet.
            </li>
            <li>
              <span className="font-semibold text-foam/80">
                Beware of spurious phone calls and fraudulent offers.
              </span>{" "}
              IRDAI does not involve itself in selling insurance or investment
              products, or in bonus announcements. Report suspicious calls through
              official IRDAI channels.
            </li>
          </ul>
          <p className="mt-8 text-center text-xs text-foam/50">
            © {new Date().getFullYear()} Bima Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
