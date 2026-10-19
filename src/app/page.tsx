import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { CallbackForm } from "@/components/callback-form";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { YearPan } from "@/components/year-pan";

const COVERS = [
  {
    href: "/motor",
    title: "Motor",
    body: "Private cars, two-wheelers, and commercial vehicles. Own damage, third party, and the add-ons that get used.",
    src: "/images/motor-car.jpg",
    alt: "A silver hatchback parked on a tree-lined city street after rain.",
    ratio: "aspect-[4/3]",
    className: "md:col-span-7",
  },
  {
    href: "/health",
    title: "Health",
    body: "Family floaters, senior plans, and top-ups. We read the room-rent cap before we talk about the premium.",
    src: "/images/health-clinic.jpg",
    alt: "An older man and his daughter outside a modest clinic.",
    ratio: "aspect-[4/3] md:aspect-[3/4]",
    className: "md:col-span-5 md:mt-16",
  },
  {
    href: "/non-motor",
    title: "Non-motor",
    body: "Shops, homes, stock, and goods on the road. Fire, burglary, marine, and liability.",
    src: "/images/shop-front.jpg",
    alt: "A hardware shopkeeper standing in his shop doorway.",
    ratio: "aspect-[4/3]",
    className: "md:col-span-5",
  },
  {
    href: "/life",
    title: "Life",
    body: "LIC plans and term cover from other life insurers. We say when a simple term plan is the better buy.",
    src: "/images/life-notebook.jpg",
    alt: "Two generations of hands on a closed notebook by a window.",
    ratio: "aspect-[3/4] md:aspect-[16/10]",
    className: "md:col-span-7 md:mt-10",
  },
] as const;

const STEPS = [
  {
    title: "Call",
    body: "Tell us the vehicle, the shop, the family, or the loan.",
  },
  {
    title: "Compare",
    body: "We read exclusions and limits, not only the premium.",
  },
  {
    title: "Place",
    body: "You get the schedule, the nominee, and what is not covered.",
  },
  {
    title: "Stay",
    body: "The same advisor answers when something goes wrong.",
  },
];

const INSURERS = [
  "LIC",
  "New India Assurance",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Tata AIG",
  "Star Health",
  "SBI General",
];

const QUESTIONS = [
  {
    q: "Do you only place LIC?",
    a: "No. Life includes LIC plans people already know, such as Tech Term, Jeevan Anand, Jeevan Labh, Jeevan Umang, Jeevan Shanti, and Amritbaal. We also place term plans from other life insurers when the premium or the wording fits better.",
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
            <p className="rise rise-delay mt-5 max-w-[34ch] text-base leading-relaxed text-foam-soft md:text-lg">
              Motor, property, health, and life policies, placed by one advisor
              who stays for the claim.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/#callback" className={buttonVariants()}>
                Request a callback
              </Link>
              <a
                href="#covers"
                className={buttonVariants({
                  variant: "outline",
                  className: "border-transparent bg-foam text-pine-deep hover:bg-foam/90",
                })}
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
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <h2 className="max-w-[14ch] text-3xl tracking-[-0.03em] md:text-5xl">
            What we place
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
            {COVERS.map((cover, index) => (
              <Reveal key={cover.href} className={cover.className} delay={index * 0.05}>
                <Link href={cover.href} className="cover-link group block">
                  <Photo src={cover.src} alt={cover.alt} ratio={cover.ratio} sizes="(min-width: 768px) 40vw, 100vw" />
                  <h3 className="mt-4 text-2xl tracking-[-0.03em]">{cover.title}</h3>
                  <p className="mt-2 max-w-[46ch] leading-relaxed text-muted-foreground">
                    {cover.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <h2 className="max-w-3xl text-3xl tracking-[-0.03em] md:text-5xl">
            How a policy actually gets placed
          </h2>
          <ol className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.title}>
                <h3 className="text-2xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 max-w-[28ch] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 pt-16 md:px-6 md:pt-24">
          <h2 className="max-w-3xl text-3xl tracking-[-0.03em] md:text-5xl">
            One desk through the year
          </h2>
          <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-muted-foreground">
            Renewals, a hospital admission, a shutter, a nominee. The same person picks up.
          </p>
        </div>
        <YearPan />
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <Photo
            src="/images/claims-desk.jpg"
            alt="An advisor on a landline, writing in a notebook at a wooden desk."
            ratio="aspect-[16/8]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />
          <figure className="mt-8 max-w-[40rem]">
            <blockquote className="text-2xl leading-snug tracking-[-0.03em] md:text-3xl">
              “She called the garage, then she called me. The surveyor was at the car the next morning.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Neelam Joshi, car policy, Kothrud
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-3xl tracking-[-0.03em] md:text-5xl">The panel</h2>
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">
            We place policies with these insurers. The list changes when a wording stops earning its place.
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {INSURERS.map((name) => (
              <li key={name} className="text-2xl tracking-[-0.03em] text-foreground">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
          <h2 className="max-w-[14ch] text-3xl tracking-[-0.03em] md:text-5xl">
            Before you sign
          </h2>
          <Accordion className="mt-10 max-w-3xl">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  <p>
                    {item.a}{" "}
                    {item.q.startsWith("What do I do") ? (
                      <Link href="/claims" className="text-foreground underline underline-offset-4">
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
            <p className="mt-4 max-w-[32ch] leading-relaxed text-foam-soft">
              A name, a mobile number, and the kind of policy. Weekday calls are before 7 pm.
            </p>
          </div>
          <div className="rounded-[12px] bg-background p-5 text-foreground md:col-span-8 md:p-8">
            <CallbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
