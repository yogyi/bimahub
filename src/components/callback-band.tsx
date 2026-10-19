import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

export function CallbackBand({
  title = "Ready for a clear quote?",
}: {
  title?: string;
}) {
  return (
    <section className="bg-navy text-foam">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-end md:justify-between md:px-6 md:py-16">
        <div>
          <h2 className="max-w-[18ch] text-3xl leading-[1.1] tracking-[-0.03em] md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-[40ch] text-foam/75">
            Tell us the cover. A Bima Hub advisor calls on a weekday before 7 pm.
          </p>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants(),
            "bg-accent text-accent-foreground hover:bg-accent/90",
          )}
        >
          Get a quote
        </Link>
      </div>
    </section>
  );
}
