import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

export function CallbackBand({
  title = "Ready for a clear quote?",
}: {
  title?: string;
}) {
  return (
    <section className="bg-primary text-on-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-8 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <h2 className="max-w-[18ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-[40ch] text-slate-300">
            Tell us the cover. A BimaHub advisor calls on a weekday before 7 pm.
          </p>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants(),
            "bg-secondary text-white hover:bg-[#003ea8]",
          )}
        >
          Get a quote
        </Link>
      </div>
    </section>
  );
}
