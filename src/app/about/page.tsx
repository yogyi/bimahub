import type { Metadata } from "next";
import Link from "next/link";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "About us",
  description:
    "BimaHub is an Indian insurance comparison desk for life including LIC, health, motor, and shop or home cover.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface pt-28">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-16 sm:px-8 md:grid-cols-12 md:pb-24">
          <div className="order-2 md:order-1 md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-outline-variant/40 shadow-sm">
              <Photo
                src="/images/advisor-portrait.jpg"
                alt="BimaHub advisor at the desk."
                ratio="aspect-[3/4]"
                sizes="(min-width: 768px) 36vw, 100vw"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-7 md:pt-4">
            <p className="text-xs font-bold tracking-widest text-secondary uppercase">
              About BimaHub
            </p>
            <h1 className="mt-2 max-w-xl text-[clamp(2.1rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight text-primary">
              A clear desk for the policies Indian families already buy.
            </h1>
            <div className="mt-6 flex max-w-[62ch] flex-col gap-4 text-base leading-relaxed text-on-surface-variant">
              <p>
                BimaHub compares life including LIC, health, motor, and shop or
                home cover. The desk is in Mumbai. Clients in other cities work
                with us by call and video.
              </p>
              <p>
                Advisors come from claims and underwriting backgrounds. The
                person who explains the schedule is still there when a surveyor
                or a hospital pre-authorisation is needed.
              </p>
              <p>
                You get two or three wordings side by side before you pay. We do
                not push a house favourite.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003ea8]"
              >
                Get a quote
              </Link>
              <Link
                href="/claims"
                className="rounded-lg border border-outline-variant bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-secondary/40"
              >
                Claims help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/40 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <h2 className="max-w-[12ch] text-3xl font-extrabold tracking-tight text-primary md:col-span-4 md:text-4xl">
            A first meeting
          </h2>
          <div className="flex max-w-[62ch] flex-col gap-4 leading-relaxed text-on-surface-variant md:col-span-8">
            <p>
              Forty minutes is usually enough. Bring the policies you already
              hold, including the ones you think are fine. We mark what is
              missing and what is duplicated.
            </p>
            <p>
              You leave with a written note of what we would change and what we
              would leave alone. Nothing is proposed until you ask.
            </p>
            <p className="font-medium text-primary">
              Mumbai desk · Weekdays by appointment · Helpline 1800-208-8777
            </p>
          </div>
        </div>
      </section>

      <CallbackBand title="Talk to the BimaHub desk" />
    </>
  );
}
