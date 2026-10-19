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
import { PremiumCalculator } from "@/components/premium-calculator";
import { cn } from "cn";
import {
  Car,
  FirstAid,
  House,
  IdentificationCard,
  PhoneCall,
  SealCheck,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/ssr";

const BENEFITS = [
  {
    icon: SealCheck,
    title: "Compare before you pay",
    body: "We put two or three wordings side by side. Premium is the last column, not the first.",
  },
  {
    icon: PhoneCall,
    title: "Same desk for the claim",
    body: "The person who places the policy is the person you call when something goes wrong.",
  },
  {
    icon: ShieldCheck,
    title: "Indian covers, plain Hindi or English",
    body: "Motor, health, LIC and term life, shop and home. Explained for your city, not a brochure.",
  },
  {
    icon: UsersThree,
    title: "Families and small businesses",
    body: "From a hatchback in Pune to a hardware shop in Surat. One hub for both.",
  },
];

const COVERS = [
  {
    href: "/motor",
    title: "Motor insurance",
    icon: Car,
    body: "Private cars, two-wheelers, and commercial vehicles. Own damage, third party, NCB, and add-ons that match how you drive.",
    points: ["IDV set from the vehicle", "NCB protected when it should be", "Bank on RC named correctly"],
  },
  {
    href: "/health",
    title: "Health insurance",
    icon: FirstAid,
    body: "Family floaters, senior plans, and super top-ups. We read the room-rent cap before we talk about the premium.",
    points: ["Cashless hospital list check", "Waiting periods explained", "Portability when you switch"],
  },
  {
    href: "/life",
    title: "Life & LIC",
    icon: IdentificationCard,
    body: "LIC Tech Term, Jeevan Anand, Jeevan Labh, Jeevan Umang, Jeevan Shanti, Amritbaal, plus term from other life insurers.",
    points: ["Term when it is cleaner", "Illustration read with you", "Nominee written correctly"],
  },
  {
    href: "/non-motor",
    title: "Shop & home",
    icon: House,
    body: "Fire, burglary, stock, goods on the road, and home structure plus contents. The trade calls this non-motor.",
    points: ["Building and stock as separate sums", "Marine for goods in transit", "Public liability when needed"],
  },
];

const STEPS = [
  {
    title: "Tell us what needs cover",
    body: "Use the quote form or the calculator. A vehicle number, ages, or a shop photo is enough to start.",
  },
  {
    title: "We prepare options",
    body: "You get a short comparison of limits and exclusions, not only a cheapest-premium screenshot.",
  },
  {
    title: "You decide, we place",
    body: "Proposal, payment link, and the schedule. We stay for renewal and for the claim.",
  },
];

const REVIEWS = [
  {
    name: "Neelam Joshi",
    cover: "Car policy, Kothrud",
    quote:
      "She called the garage, then she called me. The surveyor was at the car the next morning.",
  },
  {
    name: "Ravi Mehta",
    cover: "Shop package, Surat",
    quote:
      "They wrote stock and building as two sums. After the short circuit, the surveyor already had the bills we kept.",
  },
  {
    name: "Ananya Iyer",
    cover: "Family floater, Bengaluru",
    quote:
      "They stopped us buying a cheap plan with a tiny room-rent cap. The hospital we use would have cut the whole bill.",
  },
  {
    name: "Suresh Patil",
    cover: "LIC term, Nashik",
    quote:
      "We brought an old Jeevan Anand. They said keep it, and add Tech Term for the loan. Clear, no pressure.",
  },
];

const FEATURES = [
  {
    title: "IRDAI-registered placement",
    body: "Registration details are shared before you sign a proposal. We do not print a licence number we have not handed you.",
  },
  {
    title: "Premium calculator",
    body: "Motor, health, and term life ranges in rupees. Useful for planning. The insurer quote is what binds.",
  },
  {
    title: "Multi-insurer panel",
    body: "LIC, New India, HDFC ERGO, ICICI Lombard, Bajaj Allianz, Tata AIG, Star Health, SBI General, and more when the wording fits.",
  },
  {
    title: "Claims hand-holding",
    body: "Intimation, surveyor, pre-authorisation, papers. The insurer still decides. You are not alone on the toll-free line.",
  },
];

const QUESTIONS = [
  {
    q: "Is the calculator the final premium?",
    a: "No. It is a planning range based on common Indian market rates. Age, medicals, IDV, city, add-ons, and underwriting change the real quote.",
  },
  {
    q: "Do you sell only LIC?",
    a: "No. Life includes LIC plans people know by name, and term plans from other life insurers when that protects the family better.",
  },
  {
    q: "Can I renew a policy I bought elsewhere?",
    a: "Yes. Bring the current schedule. On health, portability can keep waiting periods you have already served.",
  },
  {
    q: "Do I pay Bima Hub a fee?",
    a: "No separate advice fee. The insurer pays a commission from the premium. We will still say when a cheaper plan has a bad exclusion.",
  },
  {
    q: "Which cities do you cover?",
    a: "The desk sits in Andheri East, Mumbai. Clients across India work with us by call and video. Visits are arranged in Mumbai and Pune when the risk needs eyes on it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,oklch(0.78_0.12_230/0.45),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_8%,oklch(0.82_0.12_70/0.35),transparent_50%)]"
        />
        <div className="relative mx-auto grid min-h-[100dvh] max-w-[1200px] items-center gap-10 px-4 pt-28 pb-14 md:grid-cols-12 md:px-6 md:pb-20">
          <div className="rise md:col-span-6">
            <h1 className="text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
              Bima Hub
            </h1>
            <p className="mt-4 text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium leading-snug tracking-[-0.02em] text-white">
              The right cover for your family, vehicle, or shop. Compare first.
              Pay once you understand it.
            </p>
            <p className="rise rise-delay mt-5 max-w-[40ch] text-base leading-relaxed text-white/85 md:text-lg">
              Motor, health, life including LIC, and shop or home cover. Compare
              wordings, estimate a premium, and request a free quote from Bima Hub.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#quote"
                className={cn(
                  buttonVariants(),
                  "bg-accent text-accent-foreground hover:bg-accent/90",
                )}
              >
                Get a free quote
              </a>
              <a
                href="#calculator"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-transparent bg-white text-navy hover:bg-white/90 dark:border-transparent dark:bg-white dark:text-navy",
                )}
              >
                Try the calculator
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <li>Weekday calls before 7 pm</li>
              <li>No separate advice fee</li>
              <li>Claims help included</li>
            </ul>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-[16px] bg-background p-5 text-foreground shadow-[0_24px_60px_-28px_oklch(0.2_0.06_265/0.55)] md:p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                    Get a free quote
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Protect your family, vehicle, or shop.
                  </p>
                </div>
              </div>
              <CallbackForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
          {BENEFITS.map((item) => (
            <article key={item.title} className="flex flex-col gap-3">
              <item.icon weight="duotone" className="size-9 text-primary" />
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="covers" className="scroll-mt-28 border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Covers Indians actually buy
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Four lines. Tap through for detail, or start with a quote.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {COVERS.map((cover) => (
              <Link
                key={cover.href}
                href={cover.href}
                className="cover-link group rounded-[16px] border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <cover.icon weight="duotone" className="size-9 text-primary" />
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  {cover.title}
                </h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-muted-foreground">
                  {cover.body}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5 text-sm text-foreground">
                  {cover.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary" aria-hidden>
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Insurance premium calculator
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Rough yearly ranges in Indian rupees for motor, health, and term life.
              Use it to plan, then ask for a real quote.
            </p>
          </div>
          <div className="mt-10">
            <PremiumCalculator />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-sky/50">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
          <div className="md:col-span-5">
            <Photo
              src="/images/advisor-portrait.jpg"
              alt="Bima Hub advisor in the Mumbai desk."
              ratio="aspect-[4/5]"
              sizes="(min-width: 768px) 36vw, 100vw"
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Who we are
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
              Bima Hub is an Indian insurance advisory desk. We place policies for
              families and small businesses, and we stay on the phone when a claim
              opens.
            </p>
            <Accordion className="mt-8 max-w-xl">
              <AccordionItem value="mission">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  What is our mission?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Make the schedule something you can explain at home. No jargon
                  trap, no silent exclusion, no stranger on the claim call.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="believe">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  What we believe
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A cheaper premium with a bad room-rent cap or a wrong use clause
                  is expensive later. We say that before you pay.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="paid">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  How Bima Hub is paid
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Insurers pay a commission from the premium. You do not pay a
                  separate advice fee. Registration details are shared before you
                  sign.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4"
            >
              Meet the advisors
            </Link>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-center text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Reviews from Indian clients
          </h2>
          <p className="mx-auto mt-3 max-w-[42ch] text-center text-muted-foreground">
            Real situations. The insurer still decides the claim. We stay in the middle.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="rounded-[16px] border border-border bg-card p-6"
              >
                <blockquote className="text-lg leading-snug tracking-[-0.02em]">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-foreground">{review.name}</span>
                  <span className="text-muted-foreground"> · {review.cover}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-foam">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-14 md:grid-cols-12 md:px-6 md:py-16">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              We have got you <span className="text-accent">covered</span>
            </h2>
            <p className="mt-3 max-w-[48ch] text-foam/75">
              Better coverage when the wording is right. Cost that makes sense once
              exclusions are honest.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <a
              href="#quote"
              className={cn(
                buttonVariants(),
                "bg-accent text-accent-foreground hover:bg-accent/90",
              )}
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-center text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Why families choose Bima Hub
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            How a policy gets placed
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm font-medium text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[36ch] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-20">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Before you sign
            </h2>
            <p className="mt-3 text-muted-foreground">
              Short answers. The policy wording still governs.
            </p>
          </div>
          <Accordion className="md:col-span-8">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="quote" className="scroll-mt-28 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid overflow-hidden rounded-[20px] md:grid-cols-2">
            <div className="quote-panel flex flex-col justify-center p-8 text-foam md:p-10">
              <p className="text-xl font-semibold">Clear quotes. Honest exclusions.</p>
              <p className="mt-4 max-w-[36ch] leading-relaxed text-foam/85">
                Tell us the cover. We prepare options, talk them through, and place
                the policy you choose.
              </p>
              <p className="mt-8 text-lg font-medium">What happens next</p>
              <ul className="mt-3 flex flex-col gap-2 text-foam/85">
                <li>We prepare a short proposal</li>
                <li>Together we discuss limits and premium</li>
                <li>You decide, we start the policy</li>
              </ul>
              <p className="mt-8 text-sm text-foam/75">Talk to an advisor</p>
              <p className="mt-1 text-lg font-semibold">
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </p>
              <p className="mt-1 text-sm text-foam/75">desk@bimahub.in · Andheri East, Mumbai</p>
            </div>
            <div className="bg-card p-8 md:p-10">
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Get a free quote</h2>
              <p className="mt-2 text-muted-foreground">
                Protect your family, vehicle, or shop.
              </p>
              <div className="mt-6">
                <CallbackForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-14 md:grid-cols-12 md:px-6">
          <div className="md:col-span-7">
            <Photo
              src="/images/hero-table.jpg"
              alt="Advisor explaining a policy at a dining table in India."
              ratio="aspect-[16/10]"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              From the dining table to the claim desk
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Bima Hub is built for Indian households and shopkeepers who want cover
              they can explain, and a phone number that still answers.
            </p>
            <Link
              href="/claims"
              className="mt-5 inline-block text-sm font-medium text-primary underline underline-offset-4"
            >
              What to do in the first hour of a claim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
