import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Life insurance and LIC",
  description:
    "LIC plans and term life cover. Tech Term, Jeevan Anand, Jeevan Labh, Jeevan Umang, Jeevan Shanti, and Amritbaal, compared in plain language.",
};

const BRING = [
  "Any LIC bond you already hold, or the plan name and policy number.",
  "Dates of birth for the person to be covered and for the nominee.",
  "Who depends on the income, in plain words.",
  "A loan the cover is meant to clear, if that is the reason for the call.",
];

const GROUPS = [
  {
    title: "Term",
    body: "A high sum if you die during the term, and little or nothing if you survive. LIC Tech Term sits here, and so do term plans from other life insurers. For a young earner with dependents, this is often the plan we recommend first.",
  },
  {
    title: "Endowment and whole life",
    body: "Jeevan Anand, Jeevan Labh, and Jeevan Umang are the names families bring to the desk. They mix protection with a savings element. We will not quote a bonus on this page. The illustration the insurer issues is the number that matters, and we read it with you.",
  },
  {
    title: "Pension and children",
    body: "Jeevan Shanti is an annuity people ask about when they want a pension. Amritbaal is a child plan families ask about by name. We compare both with a term plan plus a separate investment, and we say which one we would buy.",
  },
];

export default function LifePage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 md:grid-cols-12 md:px-6 md:pb-20">
          <div className="order-2 md:order-1 md:col-span-5">
            <Photo
              src="/images/life-notebook.jpg"
              alt="An older person's hands and a younger person's hands on a closed notebook."
              ratio="aspect-[3/4]"
              sizes="(min-width: 768px) 36vw, 100vw"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <h1 className="max-w-xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
              LIC when it fits. Term when it is cleaner.
            </h1>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              We place LIC policies and plans from other life insurers. The commission is not the reason we pick one.
            </p>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">
              Meera reads the bond you already hold before she names a new plan. If a term plan is the cleaner buy, she says that first.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-col px-4 md:px-6">
          {GROUPS.map((group) => (
            <article
              key={group.title}
              className="grid gap-3 border-t border-border py-10 first:border-t-0 md:grid-cols-12 md:gap-8"
            >
              <h2 className="text-2xl tracking-[-0.03em] md:col-span-4 md:text-3xl">
                {group.title}
              </h2>
              <p className="max-w-[62ch] leading-relaxed text-muted-foreground md:col-span-8">
                {group.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
          <h2 className="max-w-[14ch] text-3xl tracking-[-0.03em] md:col-span-4 md:text-4xl">
            Before we open an illustration
          </h2>
          <div className="md:col-span-8">
            <p className="max-w-[62ch] leading-relaxed text-muted-foreground">
              We start with the income that would stop, not with the plan a family has heard of. If Tech Term or another term plan covers that income, we say so before we open Jeevan Anand. If you want a savings element, we read the insurer&apos;s illustration with you. This page does not print a return.
            </p>
            <h3 className="mt-8 text-xl tracking-[-0.03em]">Bring these if you have them</h3>
            <ul className="mt-4 flex max-w-[62ch] flex-col gap-2">
              {BRING.map((item) => (
                <li key={item} className="leading-relaxed text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CallbackBand title="Bring the policy you already hold." />
    </>
  );
}
