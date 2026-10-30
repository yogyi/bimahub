import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface pt-28">
      <div className="mx-auto flex min-h-[60dvh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-8">
        <p className="text-xs font-bold tracking-widest text-secondary uppercase">
          404
        </p>
        <h1 className="mt-2 max-w-3xl text-[clamp(2.1rem,4vw,3.2rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
          That page is not on BimaHub.
        </h1>
        <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-on-surface-variant">
          This address does not match a page. Try home, a product line, or
          request a quote.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003ea8]"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-outline-variant bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-secondary/40"
          >
            Get a quote
          </Link>
          <Link
            href="/life"
            className="rounded-lg border border-outline-variant bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-secondary/40"
          >
            Life &amp; LIC
          </Link>
        </div>
      </div>
    </section>
  );
}
