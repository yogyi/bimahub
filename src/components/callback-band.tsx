import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

export function CallbackBand({
  title = "Tell us what needs cover.",
}: {
  title?: string;
}) {
  return (
    <section className="bg-pine text-foam">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-end md:justify-between md:px-6 md:py-16">
        <h2 className="max-w-[16ch] text-3xl leading-[1.1] tracking-[-0.03em] md:text-4xl">
          {title}
        </h2>
        <Link
          href="/contact"
          className={cn(
            buttonVariants(),
            "bg-foam text-pine-deep hover:bg-foam/90 dark:bg-foam dark:text-pine-deep dark:hover:bg-foam/90",
          )}
        >
          Request a callback
        </Link>
      </div>
    </section>
  );
}
