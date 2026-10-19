import type { Metadata } from "next";
import { CallbackForm } from "@/components/callback-form";

export const metadata: Metadata = {
  title: "Request a callback",
  description:
    "Ask Straightline to call you about motor, non-motor, health, or life insurance, including LIC plans.",
};

const NEXT = [
  {
    title: "We read the note",
    body: "On the live desk, the cover decides who calls. Motor and non-motor go to Arvind. Health and life go to Meera.",
  },
  {
    title: "A weekday call",
    body: "Before 7 pm, once this preview is connected to a real phone. If we miss you, we try once more the next working day.",
  },
  {
    title: "You decide",
    body: "A callback is a conversation. It does not bind a policy, and it does not start a proposal until you ask for one.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-background pt-24">
      <div className="mx-auto max-w-[760px] px-4 pt-6 pb-20 md:px-6 md:pt-10 md:pb-28">
        <h1 className="text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
          Request a callback
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          Tell us the cover and the city. A sentence on the vehicle, the shop, or the family is enough. If a registration number, a current policy, or a set of ages is nearby, keep it with you. If it is not, send the note anyway.
        </p>
        <div id="callback" className="mt-10 scroll-mt-28">
          <CallbackForm />
        </div>
        <div className="mt-16 grid gap-8 border-t border-border pt-10">
          {NEXT.map((item) => (
            <article key={item.title}>
              <h2 className="text-xl tracking-[-0.03em]">{item.title}</h2>
              <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
