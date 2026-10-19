import Link from "next/link";

const LINKS = [
  { href: "/life", label: "Term & LIC" },
  { href: "/health", label: "Health" },
  { href: "/motor", label: "Car & bike" },
  { href: "/non-motor", label: "Shop & home" },
  { href: "/claims", label: "Claims" },
  { href: "/about", label: "About" },
  { href: "/#calculator", label: "Calculators" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-foam">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <p className="text-lg font-bold tracking-[-0.03em]">Bima Hub</p>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-foam/75">
            Compare and buy motor, health, life including LIC, and shop or home
            insurance in India.
          </p>
          <p className="mt-4 text-sm">
            <a href="tel:+919876543210" className="underline-offset-4 hover:underline">
              +91 98765 43210
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href="mailto:desk@bimahub.in"
              className="underline-offset-4 hover:underline"
            >
              desk@bimahub.in
            </a>
          </p>
          <p className="mt-3 text-sm text-foam/75">Andheri East, Mumbai</p>
        </div>
        <nav
          className="grid grid-cols-2 gap-x-6 gap-y-2 md:col-span-3"
          aria-label="Footer"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foam underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-foam underline-offset-4 hover:underline"
          >
            Get a quote
          </Link>
        </nav>
        <div className="md:col-span-4">
          <p className="max-w-[48ch] text-sm leading-relaxed text-foam/70">
            Insurance is the subject matter of solicitation. Policies are issued by
            the insurer. Bima Hub is paid a commission by the insurer. Claim
            decisions stay with the insurer. The premium calculator is an estimate
            only.
          </p>
          <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-foam/70">
            This is a working preview. Quote requests are stored on the server
            running the site. They are not delivered to a live desk yet.
          </p>
        </div>
      </div>
    </footer>
  );
}
