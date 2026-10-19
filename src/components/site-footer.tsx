import Link from "next/link";

const LINKS = [
  { href: "/motor", label: "Motor" },
  { href: "/non-motor", label: "Non-motor" },
  { href: "/health", label: "Health" },
  { href: "/life", label: "Life" },
  { href: "/claims", label: "Claims" },
  { href: "/about", label: "Advisors" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <p className="text-lg font-medium tracking-[-0.03em]">Straightline</p>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
            Motor, non-motor, health, and life, including LIC plans. The desk is
            on Karve Road, Pune.
          </p>
          <p className="mt-4 text-sm text-foreground">
            <a href="tel:+919822046173" className="underline-offset-4 hover:underline">
              +91 98220 46173
            </a>
          </p>
          <p className="mt-1 text-sm text-foreground">
            <a
              href="mailto:desk@straightline.in"
              className="underline-offset-4 hover:underline"
            >
              desk@straightline.in
            </a>
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 md:col-span-3" aria-label="Footer">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-foreground underline-offset-4 hover:underline"
          >
            Request a callback
          </Link>
        </nav>
        <div className="md:col-span-4">
          <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            Insurance is the subject matter of solicitation. Policies are issued
            by the insurer, and the wording governs the cover. Straightline is
            paid a commission by the insurer. Claim decisions stay with the
            insurer.
          </p>
          <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            This is a working preview. Callback requests are stored on the
            server running the site. They are not delivered to a live desk yet.
          </p>
        </div>
      </div>
    </footer>
  );
}
