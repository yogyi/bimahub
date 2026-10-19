import type { Metadata } from "next";
import { CallbackForm } from "@/components/callback-form";

export const metadata: Metadata = {
  title: "Get a quote",
  description:
    "Request a free insurance quote from Bima Hub for motor, health, life including LIC, or shop and home cover in India.",
};

const NEXT = [
  {
    title: "We read the note",
    body: "Motor and shop or home go to the general desk. Health and life, including LIC, go to the life and health advisor.",
  },
  {
    title: "A weekday call",
    body: "Before 7 pm, once this preview is connected to a real phone. If we miss you, we try once more the next working day.",
  },
  {
    title: "You decide",
    body: "A quote request is a conversation. It does not bind a policy until you ask for a proposal.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-background pt-24">
      <div className="mx-auto max-w-[760px] px-4 pt-6 pb-20 md:px-6 md:pt-10 md:pb-28">
        <h1 className="text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
          Get a free quote
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          Tell us the cover and the city. A sentence on the vehicle, the shop, or
          the family is enough. Try the{" "}
          <a href="/#calculator" className="text-foreground underline underline-offset-4">
            premium calculator
          </a>{" "}
          first if you want a rough range.
        </p>
        <div id="callback" className="mt-10 scroll-mt-28">
          <CallbackForm />
        </div>
        <div className="mt-16 grid gap-8 border-t border-border pt-10">
          {NEXT.map((item) => (
            <article key={item.title}>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h2>
              <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
