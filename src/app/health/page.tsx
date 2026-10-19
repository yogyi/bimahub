import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Health insurance",
  description:
    "Family floater, individual, senior citizen, and super top-up health insurance, read for room rent, waiting periods, and cashless hospitals.",
};

const READS = [
  {
    title: "Room rent",
    body: "A low premium with a small room-rent cap is often the expensive choice in a city hospital. If you take a higher room, many policies cut the whole bill, not only the room line. We show that cap before you compare prices.",
  },
  {
    title: "Waiting periods",
    body: "Accident cover is usually immediate. Illness often waits about 30 days. Named conditions and pre-existing illnesses commonly wait two or three years. The exact months are in the wording, and they differ by insurer.",
  },
  {
    title: "Who is on the policy",
    body: "A family floater covers the people named on it. Parents are not automatic. Adding them can price the policy at the eldest age. A separate senior plan, or a super top-up over a base policy, is sometimes the cleaner buy.",
  },
];

export default function HealthPage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto max-w-[1400px] px-4 pb-10 md:px-6 md:pb-14">
          <h1 className="max-w-3xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
            Read the room-rent line before the premium.
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            Family floaters, senior plans, and top-ups. Cashless only helps if the hospital and the room are both allowed.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <Photo
            src="/images/health-clinic.jpg"
            alt="An older man in a green shirt and his daughter outside a clinic."
            ratio="aspect-[16/9] md:aspect-[16/7]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex max-w-[760px] flex-col gap-12 px-4 py-16 md:px-6 md:py-20">
          {READS.map((item) => (
            <article key={item.title}>
              <h2 className="text-2xl tracking-[-0.03em]">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
          <p className="leading-relaxed text-foreground">
            If you already hold a policy, portability can keep waiting periods you have served. We check the rules before you switch, including any condition the new insurer will still exclude.
          </p>
        </div>
      </section>
      <CallbackBand title="A new plan, or a renewal you do not trust?" />
    </>
  );
}
