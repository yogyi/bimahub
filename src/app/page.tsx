import Link from "next/link";
import { cn } from "cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { CallbackForm } from "@/components/callback-form";
import { Photo } from "@/components/photo";
import { YearPan } from "@/components/year-pan";

const COVERS = [
  {
    href: "/motor",
    title: "Motor",
    scope: "Private cars, two-wheelers, and commercial vehicles.",
    body: "Own damage, third party, and the add-ons that match how the vehicle is used. We settle the insured declared value and the no-claim bonus before anyone talks about a cheaper premium.",
    src: "/images/motor-car.jpg",
    alt: "A silver hatchback parked on a tree-lined city street after rain.",
  },
  {
    href: "/health",
    title: "Health",
    scope: "Family floaters, senior plans, and super top-ups.",
    body: "The room-rent cap, the waiting period, and the hospital you would actually use. A low premium with a tight room limit is often the expensive policy once someone is admitted.",
    src: "/images/health-clinic.jpg",
    alt: "An older man and his daughter outside a modest clinic.",
  },
  {
    href: "/non-motor",
    title: "Non-motor",
    scope: "Shops, homes, stock, goods in transit, and liability.",
    body: "Fire, burglary, marine, and the public-liability line people skip until a visitor is hurt. Building, contents, and stock are written as separate sums.",
    src: "/images/shop-front.jpg",
    alt: "A hardware shopkeeper standing in his shop doorway.",
  },
  {
    href: "/life",
    title: "Life",
    scope: "LIC plans, and term cover from other life insurers.",
    body: "Tech Term, Jeevan Anand, Jeevan Labh, Jeevan Umang, Jeevan Shanti, and Amritbaal, read in plain language. We say when a simple term plan protects the family better.",
    src: "/images/life-notebook.jpg",
    alt: "Two generations of hands on a closed notebook by a window.",
  },
] as const;

const STEPS = [
  {
    title: "Call",
    body: "You bring the vehicle, the shop, the family, or the loan. We ask how it is used, who depends on it, and what a bad year would cost.",
  },
  {
    title: "Compare",
    body: "Two or three wordings, side by side. Room rent, declared value, waiting period, and the exclusion that would hurt you. The premium is the last column.",
  },
  {
    title: "Place",
    body: "You leave with the schedule, the nominee or the financier, and a short note of what is not covered. We do not send a PDF and disappear.",
  },
  {
    title: "Stay",
    body: "Renewal is a call from this desk, not a link from the insurer. If a claim opens, you reach the person who placed the policy.",
  },
];

const PANEL = [
  {
    title: "Life",
    names: ["LIC"],
  },
  {
    title: "Health",
    names: ["Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz"],
  },
  {
    title: "Motor and property",
    names: [
      "New India Assurance",
      "HDFC ERGO",
      "ICICI Lombard",
      "Bajaj Allianz",
      "Tata AIG",
      "SBI General",
    ],
  },
];

const QUESTIONS = [
  {
    q: "Do you only place LIC?",
    a: "No. Life includes LIC plans people already know, such as Tech Term, Jeevan Anand, Jeevan Labh, Jeevan Umang, Jeevan Shanti, and Amritbaal. We also place term plans from other life insurers when the premium or the wording fits better.",
  },
  {
    q: "Will you renew a policy I bought somewhere else?",
    a: "Yes. Bring the current schedule. We read it before we suggest a switch. On health, portability can keep waiting periods you have already served. On motor, the no-claim bonus needs the previous policy, not a memory of the discount.",
  },
  {
    q: "What is no-claim bonus, in practice?",
    a: "It is a discount on the own-damage part of a motor policy after a claim-free year. It does not cut the third-party premium. A claim can reduce it. For a small dent, we tell you the cost of claiming before you file.",
  },
  {
    q: "Can a family floater include my parents?",
    a: "Only if the insurer accepts them on that policy. Adding a parent often prices the whole floater at the eldest age, and some plans refuse it. We check the rule before you pay, and we say when a separate senior plan is cleaner.",
  },
  {
    q: "Do you come to the shop or the house?",
    a: "For a first shop, a godown, or an unusual vehicle in Pune, Arvind will come. Health and life are usually a call, or a visit to the desk on Karve Road. Clients in other cities work with us by call and video.",
  },
  {
    q: "What do I do in the first hour after a crash?",
    a: "See that people are safe, photograph the vehicles and the road, and call this desk. If anyone is hurt, or the law requires it, file with the police. Do not agree fault at the roadside.",
  },
  {
    q: "Do I pay you a fee?",
    a: "No separate fee. The insurer pays us a commission from the premium. That commission is not a reason to choose a weaker policy, and we will say so when a cheaper plan has a bad exclusion.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="min-h-[100dvh] bg-pine text-foam">
        <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] items-start gap-10 px-4 pt-24 pb-12 md:grid-cols-12 md:items-center md:px-6 md:pb-16">
          <div className="rise md:col-span-5">
            <h1 className="text-[clamp(2.35rem,4.2vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
              Cover you can explain at the{" "}
              <span className="font-semibold">dining table.</span>
            </h1>
            <p className="rise rise-delay mt-5 max-w-[36ch] text-base leading-relaxed text-foam-soft md:text-lg">
              Motor, property, health, and life, including LIC. Placed from
              Karve Road, and still answered by the person who placed it.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/#callback" className={buttonVariants()}>
                Request a callback
              </Link>
              <a
                href="#covers"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-transparent bg-foam text-pine-deep hover:bg-foam/90 dark:border-transparent dark:bg-foam dark:text-pine-deep dark:hover:bg-foam/90",
                )}
              >
                View covers
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <Photo
              src="/images/hero-table.jpg"
              alt="An advisor speaking with a couple at a dining table, a laptop and car key between them."
              ratio="aspect-[16/10]"
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              imageClassName="hero-photo"
            />
          </div>
        </div>
      </section>

      <section id="covers" className="scroll-mt-28 bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
          <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
            <h2 className="max-w-[12ch] text-3xl tracking-[-0.03em] md:text-5xl">
              What we place
            </h2>
            <p className="mt-4 max-w-[32ch] text-lg leading-relaxed text-muted-foreground">
              Four lines. The schedule stays with the advisor who explained it.
            </p>
          </div>
          <div className="md:col-span-8">
            {COVERS.map((cover) => (
              <Link
                key={cover.href}
                href={cover.href}
                className="cover-link group grid gap-5 border-t border-border py-8 last:border-b md:grid-cols-12 md:gap-8"
              >
                <Photo
                  src={cover.src}
                  alt={cover.alt}
                  ratio="aspect-[4/3]"
                  sizes="(min-width: 768px) 28vw, 100vw"
                  className="md:col-span-5"
                />
                <div className="md:col-span-7 md:py-1">
                  <h3 className="text-3xl tracking-[-0.03em]">{cover.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground">{cover.scope}</p>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">
                    {cover.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine text-foam">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
          <div className="md:col-span-5">
            <Photo
              src="/images/advisor-portrait.jpg"
              alt="Arvind Deshpande, in an olive shirt, in the Straightline office."
              ratio="aspect-[4/5]"
              sizes="(min-width: 768px) 36vw, 100vw"
            />
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-foam-soft">
              Arvind Deshpande. The desk is on Karve Road, Pune.
            </p>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <h2 className="max-w-[14ch] text-3xl tracking-[-0.03em] md:text-5xl">
              Who picks up
            </h2>
            <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-foam-soft">
              Two advisors. You do not get a call centre, and you do not explain the claim to a stranger.
            </p>
            <div className="mt-10 border-t border-foam/25 pt-8">
              <h3 className="text-2xl tracking-[-0.03em]">Arvind Deshpande</h3>
              <p className="mt-3 max-w-[54ch] leading-relaxed text-foam-soft">
                Motor and non-motor. Eight years in claims at a general insurer, then this desk, opened in 2014. He visits a first shop or an unusual vehicle when it is in Pune.
              </p>
            </div>
            <div className="mt-8 border-t border-foam/25 pt-8">
              <h3 className="text-2xl tracking-[-0.03em]">Meera Kulkarni</h3>
              <p className="mt-3 max-w-[54ch] leading-relaxed text-foam-soft">
                Health and life, including LIC. She joined in 2019. She is the advisor at the dining table on this page, and the person on the claims phone.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block text-base text-foam underline underline-offset-4"
            >
              How the desk is paid
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <h2 className="max-w-[16ch] text-3xl tracking-[-0.03em] md:text-5xl">
            How a policy actually gets placed
          </h2>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-muted-foreground">
            You bring the facts. You leave with a schedule you can explain to the family.
          </p>
          <ol className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.title}>
                <h3 className="text-2xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 max-w-[32ch] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 pt-16 md:px-6 md:pt-24">
          <h2 className="max-w-[14ch] text-3xl tracking-[-0.03em] md:text-5xl">
            One desk through the year
          </h2>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            A motor renewal, a hospital admission, a shutter, a nominee. Different months. The same two people.
          </p>
        </div>
        <YearPan />
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
          <div className="md:col-span-7">
            <Photo
              src="/images/claims-desk.jpg"
              alt="Meera Kulkarni on a landline, writing in a notebook at a wooden desk."
              ratio="aspect-[16/10]"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
          <figure className="md:col-span-5">
            <blockquote className="text-2xl leading-snug tracking-[-0.03em] md:text-3xl">
              “She called the garage, then she called me. The surveyor was at the car the next morning.”
            </blockquote>
            <figcaption className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Neelam Joshi, car policy, Kothrud. The survey was booked from this desk.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-6 md:grid-cols-12">
            <h2 className="text-3xl tracking-[-0.03em] md:col-span-4 md:text-5xl">
              The panel
            </h2>
            <p className="max-w-[46ch] leading-relaxed text-muted-foreground md:col-span-8 md:pt-3">
              Insurers we place with, set in type. A name can sit on more than one line. The list changes when a wording stops earning its place.
            </p>
          </div>
          <div className="mt-12">
            {PANEL.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-t border-border py-8 md:grid-cols-12"
              >
                <h3 className="text-2xl tracking-[-0.03em] md:col-span-4">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2 md:col-span-8">
                  {group.names.map((name) => (
                    <li key={name} className="text-xl tracking-[-0.03em] md:text-2xl">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
          <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
            <h2 className="max-w-[12ch] text-3xl tracking-[-0.03em] md:text-5xl">
              Before you sign
            </h2>
            <p className="mt-4 max-w-[32ch] leading-relaxed text-muted-foreground">
              Short answers we give on the phone. The policy wording still governs.
            </p>
          </div>
          <Accordion className="md:col-span-8">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  <p>
                    {item.a}{" "}
                    {item.q.startsWith("What do I do") ? (
                      <Link
                        href="/claims"
                        className="text-foreground underline underline-offset-4"
                      >
                        Read the claims page
                      </Link>
                    ) : null}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="callback" className="scroll-mt-28 bg-pine text-foam">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
          <div className="md:col-span-4">
            <h2 className="text-3xl leading-[1.1] tracking-[-0.03em] md:text-4xl">
              Tell us what needs cover.
            </h2>
            <p className="mt-4 max-w-[34ch] leading-relaxed text-foam-soft">
              Name, mobile, city, and the line. In the note, a vehicle number, a shop, or who needs the health cover is enough.
            </p>
            <ul className="mt-6 flex max-w-[34ch] flex-col gap-3 text-sm leading-relaxed text-foam-soft">
              <li>Weekday calls are before 7 pm.</li>
              <li>Motor and non-motor go to Arvind. Health and life, including LIC, go to Meera.</li>
              <li>If you are in Pune, you can sit at the desk on Karve Road.</li>
            </ul>
          </div>
          <div className="rounded-[12px] bg-background p-5 text-foreground md:col-span-8 md:p-8">
            <CallbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
