import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "About the desk",
  description:
    "Straightline is a two-advisor insurance desk in Pune for motor, non-motor, health, and life policies, including LIC.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-4 pb-16 md:grid-cols-12 md:px-6 md:pb-24">
          <div className="order-2 md:order-1 md:col-span-5">
            <Photo
              src="/images/advisor-portrait.jpg"
              alt="Arvind Deshpande, in an olive shirt, in the Straightline office."
              ratio="aspect-[3/4]"
              sizes="(min-width: 768px) 36vw, 100vw"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-7 md:pt-6">
            <h1 className="max-w-xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
              Two advisors. The policies you already buy.
            </h1>
            <div className="mt-6 flex max-w-[62ch] flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Arvind Deshpande sits the desk. He spent eight years in claims at a general insurer, then opened Straightline in 2014 so the person who explains the policy is still there when it is used.
              </p>
              <p>
                Meera Kulkarni joined in 2019. She handles health and life conversations, including LIC plans a family already holds and wants read in plain language. She is the advisor in the dining-table photograph on the home page.
              </p>
              <p>
                The desk is on Karve Road in Pune. We place policies for clients in other cities by call and video. Registration details are shared before you sign a proposal. We do not print a licence number we have not handed you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
          <h2 className="max-w-[12ch] text-3xl tracking-[-0.03em] md:col-span-4 md:text-4xl">
            A first meeting
          </h2>
          <div className="flex max-w-[62ch] flex-col gap-4 leading-relaxed text-muted-foreground md:col-span-8">
            <p>
              Forty minutes is usually enough. Bring the policies you already hold, including the ones you think are fine. We mark what is missing and what is duplicated.
            </p>
            <p>
              You leave with a written note of what we would change and what we would leave alone. Nothing is proposed until you ask.
            </p>
            <p className="text-foreground">
              Karve Road, Pune. Weekdays, by appointment, before 7 pm. Other cities by call and video. Phone +91 98220 46173.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[760px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl tracking-[-0.03em]">How the desk is paid</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Insurers pay a commission from the premium. You do not pay a separate advice fee. The commission is not a reason to pick a weaker wording. If a term plan pays us less and protects the family better, we say that.
          </p>
        </div>
      </section>
      <CallbackBand />
    </>
  );
}
