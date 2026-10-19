import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Motor insurance",
  description:
    "Private car, two-wheeler, and commercial vehicle insurance. Own damage, third party, no-claim bonus, and add-ons.",
};

const VEHICLES = [
  {
    title: "Private car",
    body: "Own damage plus third party for the family car. We check the insured declared value, the voluntary deductible, and whether a claim would cost more than the no-claim bonus it removes.",
  },
  {
    title: "Two-wheeler",
    body: "Scooters and bikes, including a vehicle used for daily commuting. Third party is mandatory. Own damage is the part that pays for your vehicle, and it is the part people drop too quickly.",
  },
  {
    title: "Commercial",
    body: "Goods carrying and passenger vehicles used for work. The permit, the use, and the driver clause have to match how the vehicle actually runs. A private-car wording will not save a vehicle that earns.",
  },
];

const GROUPS = [
  {
    title: "If you drive it daily",
    items: [
      "Zero depreciation, so plastic and metal parts are not cut for age on a claim.",
      "Roadside assistance, for a flat tyre or a battery on the highway.",
    ],
  },
  {
    title: "If the car is new",
    items: [
      "Engine protect, for water ingress and hydrostatic lock after flooded roads.",
      "Consumables, for oil, nuts, and clips that a garage bill always includes.",
    ],
  },
  {
    title: "If a bank is on the RC",
    items: [
      "The policy must name the financier. A claim cheque in only your name can stall.",
      "Bring the RC, the previous policy, and a driving licence when we place it.",
    ],
  },
];

export default function MotorPage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto grid max-w-[1400px] items-end gap-8 px-4 pb-12 md:grid-cols-12 md:px-6 md:pb-16">
          <div className="md:col-span-5">
            <h1 className="text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
              Cars, bikes, and the vehicle that earns.
            </h1>
            <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-muted-foreground">
              Own damage and third party, compared on the wording first. The premium comes after the exclusions.
            </p>
          </div>
          <div className="md:col-span-7">
            <Photo
              src="/images/motor-car.jpg"
              alt="A silver hatchback parked beside a compound wall on a wet residential street."
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-4 py-16 md:px-6 md:py-20">
          {VEHICLES.map((item) => (
            <article key={item.title} className="grid gap-3 md:grid-cols-12 md:gap-8">
              <h2 className="text-2xl tracking-[-0.03em] md:col-span-4 md:text-3xl">
                {item.title}
              </h2>
              <p className="max-w-[58ch] leading-relaxed text-muted-foreground md:col-span-8">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            Add-ons, grouped by how you use the vehicle
          </h2>
          <div className="mt-10 flex max-w-3xl flex-col gap-10">
            {GROUPS.map((group) => (
              <article key={group.title}>
                <h3 className="text-xl tracking-[-0.03em]">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallbackBand title="Renewal coming up, or a new vehicle?" />
    </>
  );
}
