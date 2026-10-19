import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background pt-24">
      <div className="mx-auto flex min-h-[70dvh] max-w-[1200px] flex-col justify-center px-4 py-16 md:px-6">
        <h1 className="max-w-3xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
          That page is not on Bima Hub.
        </h1>
        <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-muted-foreground">
          This address does not match a page. Covers and the calculator are on the
          home page.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <Link href="/" className={buttonVariants()}>
            Home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
