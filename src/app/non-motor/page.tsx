import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Non-motor insurance",
  description:
    "Shop, home, stock, marine transit, and liability cover for businesses and families.",
};

const CLUSTERS = [
  {
    title: "Premises",
    body: "Fire for the building and the stock. Burglary for what can be carried out. A shopkeeper package folds several of these into one schedule, which we read line by line so a burst pipe is not assumed to be covered.",
  },
  {
    title: "Goods on the road",
    body: "Inland marine for stock moving between a godown, a shop, and a customer. The policy has to match the mode, usually road, and the sum has to match a real consignment, not a round number chosen in a hurry.",
  },
  {
    title: "If someone is hurt on your premises",
    body: "Public liability for a visitor, a customer, or a neighbour. It is the cover people skip until a fall or a fire spreads. We place it with the shop or the home, not as an afterthought.",
  },
];

export default function NonMotorPage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto max-w-[1400px] px-4 pb-8 md:px-6">
          <h1 className="max-w-3xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
            The shop, the house, and the goods on the road.
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            The trade calls this non-motor. It is fire, burglary, marine, home, and liability.
          </p>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 pb-12 md:px-6 md:pb-16">
          <Photo
            src="/images/shop-front.jpg"
            alt="Paint tins and coils of rope outside a hardware shop, the owner in the doorway."
            ratio="aspect-[16/9]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-4 py-16 md:px-6 md:py-20">
          {CLUSTERS.map((cluster) => (
            <article key={cluster.title} className="grid gap-3 md:grid-cols-12">
              <h2 className="text-2xl tracking-[-0.03em] md:col-span-4">{cluster.title}</h2>
              <p className="max-w-[58ch] leading-relaxed text-muted-foreground md:col-span-7">
                {cluster.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-pine text-foam">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            A home is a building plus what is inside it.
          </h2>
          <p className="mt-4 max-w-[48ch] leading-relaxed text-foam-soft">
            Structure and contents are different sums. A flood, a short circuit, or a theft of jewellery sits in different sections. We write both down before the policy is issued.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-6 md:py-16">
          <Photo
            src="/images/house-lane.jpg"
            alt="A two-storey house on a quiet lane, with a scooter parked by the front wall."
            ratio="aspect-[16/8]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />
        </div>
      </section>
      <CallbackBand title="A shop, a godown, or a house?" />
    </>
  );
}
