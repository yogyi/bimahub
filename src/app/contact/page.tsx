import type { Metadata } from "next";
import Link from "next/link";
import { CallbackForm } from "@/components/callback-form";
import { Clock, PhoneCall, SealCheck } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Request a free insurance quote from BimaHub for motor, health, life including LIC, or shop and home cover.",
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
    body: "Before 7 pm on a working day. If we miss you, we try once more the next working day.",
  },
  {
    icon: Clock,
    title: "You decide",
    body: "A quote request is a conversation. It does not bind a policy until you ask for a proposal.",
  },
] as const;

export default function ContactPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#eff4ff,#f8f9ff_45%)] pt-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-4 pb-20 sm:px-8 md:grid-cols-12 md:pt-8 md:pb-28">
        <div className="md:col-span-5 md:pt-4">
          <p className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
            Free quote · Weekday callback
          </p>
          <h1 className="mt-4 text-[clamp(2.1rem,4vw,3.1rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
            Contact us for a free quote
          </h1>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-on-surface-variant">
            Tell us the cover and the city. Or start from the{" "}
            <Link
              href="/#hero-quick-quote"
              className="font-semibold text-secondary underline underline-offset-4"
            >
              quick quote form
            </Link>{" "}
            on the home page.
          </p>
          <div className="mt-8 flex flex-col gap-5">
            {NEXT.map((item) => (
              <article key={item.title} className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-container-low text-secondary">
                  <item.icon weight="duotone" className="size-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-on-surface-variant">
            Helpline{" "}
            <a className="font-semibold text-primary" href="tel:18002088777">
              1800-208-8777
            </a>
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-outline-variant/50 bg-white shadow-[0_24px_60px_-28px_rgba(11,32,66,0.35)]">
            <div className="border-b border-outline-variant/40 bg-gradient-to-r from-surface-container-low to-white px-5 py-5 md:px-8">
              <h2 className="text-xl font-bold tracking-tight text-primary">
                Request details
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
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
