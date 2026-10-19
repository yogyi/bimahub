import type { Metadata } from "next";
import Link from "next/link";
import { CallbackForm } from "@/components/callback-form";
import {
  Clock,
  PhoneCall,
  SealCheck,
} from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Get a quote",
  description:
    "Request a free insurance quote from Bima Hub for motor, health, life including LIC, or shop and home cover in India.",
};

const NEXT = [
  {
    icon: SealCheck,
    title: "We read the note",
    body: "Motor and shop or home go to the general desk. Health and life, including LIC, go to the life and health advisor.",
  },
  {
    icon: PhoneCall,
    title: "A weekday call",
    body: "Before 7 pm, once this preview is connected to a real phone. If we miss you, we try once more the next working day.",
  },
  {
    icon: Clock,
    title: "You decide",
    body: "A quote request is a conversation. It does not bind a policy until you ask for a proposal.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-[linear-gradient(180deg,oklch(0.96_0.03_240),oklch(0.99_0.005_250)_40%)] dark:bg-none dark:bg-background pt-10">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 pt-4 pb-20 md:grid-cols-12 md:px-6 md:pt-8 md:pb-28">
        <div className="md:col-span-5 md:pt-4">
          <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Free quote · Weekday callback
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em]">
            Get a free quote
          </h1>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-muted-foreground">
            Tell us the cover and the city. Try the{" "}
            <Link
              href="/#calculator"
              className="font-semibold text-brand underline underline-offset-4"
            >
              premium calculator
            </Link>{" "}
            first if you want a rough range in rupees.
          </p>
          <div className="mt-8 flex flex-col gap-5">
            {NEXT.map((item) => (
              <article key={item.title} className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-sky text-brand">
                  <item.icon weight="duotone" className="size-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-[0_24px_60px_-28px_oklch(0.35_0.08_250/0.45)]">
            <div className="border-b border-border bg-gradient-to-r from-sky/50 to-orange-50/70 px-5 py-5 dark:from-muted dark:to-muted md:px-8">
              <h2 className="text-xl font-bold tracking-[-0.03em]">
                Request details
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We only use this to prepare your quote and call you back.
              </p>
            </div>
            <div className="p-5 md:p-8">
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
