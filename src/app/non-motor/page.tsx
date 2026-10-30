import type { Metadata } from "next";
import Link from "next/link";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Shop & home insurance",
  description:
    "Shop, home, stock, marine transit, and liability cover for businesses and families on BimaHub.",
};

const BRING = [
  "A normal day's stock figure, not only the busiest week.",
  "The previous fire, shop, or home policy, if one exists.",
  "Construction of the building, and what is stored overnight.",
  "Whether goods leave the premises, and by what road.",
] as const;

const CLUSTERS = [
  {
    title: "Premises",
    body: "Fire for the building and the stock. Burglary for what can be carried out. A shopkeeper package folds several of these into one schedule, which we read line by line.",
  },
  {
    title: "Goods on the road",
    body: "Inland marine for stock moving between a godown, a shop, and a customer. The sum has to match a real consignment, not a round number chosen in a hurry.",
  },
  {
    title: "If someone is hurt on your premises",
    body: "Public liability for a visitor, customer, or neighbour. We place it with the shop or the home, not as an afterthought.",
  },
] as const;

export default function NonMotorPage() {
  return (
    <>
      <section className="bg-surface pt-28">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-8">
          <p className="text-xs font-bold tracking-widest text-secondary uppercase">
            Shop &amp; home
          </p>
          <h1 className="mt-2 max-w-3xl text-[clamp(2.1rem,4vw,3.2rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
            The shop, the house, and the goods on the road.
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-on-surface-variant">
            Fire, burglary, marine, home, and liability cover compared in plain
            language for families and small businesses.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003ea8]"
          >
            Get a shop or home quote
          </Link>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-8 md:pb-16">
          <div className="overflow-hidden rounded-2xl border border-outline-variant/40 shadow-sm">
            <Photo
              src="/images/shop-front.jpg"
              alt="Hardware shop front with stock and open shutter."
              ratio="aspect-[16/9]"
              sizes="(min-width: 768px) 90vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/40 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-8 md:py-20">
          {CLUSTERS.map((cluster) => (
            <article
              key={cluster.title}
              className="grid gap-3 border-b border-outline-variant/30 pb-10 last:border-0 last:pb-0 md:grid-cols-12"
            >
              <h2 className="text-2xl font-bold tracking-tight text-primary md:col-span-4">
                {cluster.title}
              </h2>
              <p className="max-w-[58ch] leading-relaxed text-on-surface-variant md:col-span-7">
                {cluster.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <h2 className="max-w-[14ch] text-3xl font-extrabold tracking-tight text-primary md:col-span-4 md:text-4xl">
            Before we quote the premises
          </h2>
          <div className="md:col-span-8">
            <p className="max-w-[62ch] leading-relaxed text-on-surface-variant">
              Building, contents, and stock are three sums. We write those
              numbers down before a schedule is issued, so a burst pipe or a
              missing chain is not a surprise.
            </p>
            <h3 className="mt-8 text-xl font-bold tracking-tight text-primary">
              Bring these if you have them
            </h3>
            <ul className="mt-4 flex max-w-[62ch] flex-col gap-2">
              {BRING.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-on-surface-variant"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallbackBand title="Ready to cover the shop or home?" />
    </>
  );
}
