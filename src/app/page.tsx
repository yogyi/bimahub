import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { CallbackForm } from "@/components/callback-form";
import { PremiumCalculator } from "@/components/premium-calculator";
import { cn } from "cn";
import {
  Bicycle,
  Buildings,
  Car,
  CurrencyInr,
  FirstAidKit,
  Handshake,
  Heart,
  IdentificationCard,
  PhoneCall,
  SealCheck,
  ShieldCheck,
  Storefront,
  UsersThree,
  Wallet,
} from "@phosphor-icons/react/ssr";

const PRODUCTS = [
  {
    href: "/life",
    title: "Term life",
    hint: "High cover, low premium",
    icon: IdentificationCard,
  },
  {
    href: "/health",
    title: "Health",
    hint: "Family & senior plans",
    icon: FirstAidKit,
  },
  {
    href: "/motor",
    title: "Car",
    hint: "OD + third party",
    icon: Car,
  },
  {
    href: "/motor",
    title: "Bike",
    hint: "Two-wheeler cover",
    icon: Bicycle,
  },
  {
    href: "/life",
    title: "LIC plans",
    hint: "Anand, Labh, Umang",
    icon: Heart,
  },
  {
    href: "/non-motor",
    title: "Shop & home",
    hint: "Fire, stock, liability",
    icon: Storefront,
  },
  {
    href: "/health",
    title: "Super top-up",
    hint: "Extra hospital cover",
    icon: ShieldCheck,
  },
  {
    href: "/life",
    title: "Pension",
    hint: "Jeevan Shanti & more",
    icon: Wallet,
  },
  {
    href: "/motor",
    title: "Commercial",
    hint: "Goods & passenger",
    icon: Buildings,
  },
  {
    href: "/#calculator",
    title: "Calculators",
    hint: "Motor, health, term",
    icon: CurrencyInr,
  },
] as const;

const PROMOS = [
  {
    title: "Term cover for the income that keeps the house",
    body: "Compare Tech Term and private term plans. We start from who depends on you, not from a plan name.",
    href: "/life",
    cta: "View term life",
    tone: "bg-brand text-white",
  },
  {
    title: "Health plans read for room rent first",
    body: "Family floaters and senior cover. A cheap premium with a tight room cap often costs more in hospital.",
    href: "/health",
    cta: "View health",
    tone: "bg-sky text-foreground",
  },
  {
    title: "Motor renewal without losing NCB by mistake",
    body: "Bring the previous policy. We set IDV and check whether a small claim is worth the bonus it removes.",
    href: "/motor",
    cta: "View motor",
    tone: "bg-navy text-foam",
  },
] as const;

const TRUST = [
  {
    icon: UsersThree,
    title: "Families & shopkeepers",
    body: "Cover placed for Indian households and small businesses, not only metros.",
  },
  {
    icon: Handshake,
    title: "8 insurer partners",
    body: "LIC, New India, HDFC ERGO, ICICI Lombard, Bajaj Allianz, Tata AIG, Star Health, SBI General.",
  },
  {
    icon: CurrencyInr,
    title: "Clear price first",
    body: "Wordings and exclusions sit beside the premium before you pay.",
  },
  {
    icon: PhoneCall,
    title: "Claims help built in",
    body: "The same desk that placed the policy helps with intimation and papers.",
  },
] as const;

const ADVANTAGE = [
  {
    title: "One of the clearer prices",
    body: "We compare limits before we chase the cheapest screenshot.",
  },
  {
    title: "Advice that keeps you first",
    body: "If a term plan pays us less and protects the family better, we say that.",
  },
  {
    title: "Placed with registered insurers",
    body: "Registration details are shared before you sign. We do not invent a licence number on this page.",
  },
  {
    title: "Claims support",
    body: "Surveyor, pre-authorisation, and papers. The insurer still decides.",
  },
  {
    title: "Happy to help",
    body: "Weekday calls before 7 pm. Mumbai desk, India-wide by phone and video.",
  },
] as const;

const REVIEWS = [
  {
    name: "Neelam Joshi",
    place: "Kothrud · Car",
    quote:
      "She called the garage, then she called me. The surveyor was at the car the next morning.",
  },
  {
    name: "Ravi Mehta",
    place: "Surat · Shop",
    quote:
      "Stock and building were written as two sums. After the short circuit, the surveyor already had our bills.",
  },
  {
    name: "Ananya Iyer",
    place: "Bengaluru · Health",
    quote:
      "They stopped a cheap plan with a tiny room-rent cap. Our hospital would have cut the whole bill.",
  },
  {
    name: "Suresh Patil",
    place: "Nashik · LIC term",
    quote:
      "We kept the old Jeevan Anand and added Tech Term for the loan. Clear, no pressure.",
  },
] as const;

const PARTNERS = [
  "LIC",
  "New India Assurance",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Tata AIG",
  "Star Health",
  "SBI General",
] as const;

const QUESTIONS = [
  {
    q: "Is Bima Hub an insurer?",
    a: "No. We are an advisory desk. Policies are issued by the insurer you choose. Claim decisions stay with that insurer.",
  },
  {
    q: "Can I compare plans like on a marketplace?",
    a: "Yes. Pick a product tile, use the calculator for a range, then request a quote. We send two or three wordings side by side.",
  },
  {
    q: "Do you only sell LIC?",
    a: "No. LIC plans many families already know, plus term and health from other insurers when that fits better.",
  },
  {
    q: "Is the calculator the final premium?",
    a: "No. It is a planning range in rupees. Age, medicals, IDV, city, and add-ons change the real quote.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero: product hub + promos, Policybazaar-style marketplace */}
      <section className="bg-[linear-gradient(180deg,oklch(0.96_0.03_240),oklch(0.99_0.005_250)_55%)] dark:bg-none dark:bg-background">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-12 md:px-6 md:py-14">
          <div className="rise md:col-span-7">
            <h1 className="text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
              Let&apos;s find you the{" "}
              <span className="text-brand">best insurance</span> in India
            </h1>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Compare term, health, motor, LIC, and shop or home cover. Get a
              quote from Bima Hub without the jargon trap.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {PRODUCTS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="product-tile flex flex-col items-center rounded-[14px] border border-border bg-card px-2 py-4 text-center"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-sky text-brand">
                    <item.icon weight="duotone" className="size-6" />
                  </span>
                  <span className="mt-3 text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {item.hint}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#quote" className={buttonVariants()}>
                Get a free quote
              </Link>
              <Link
                href="/#calculator"
                className={buttonVariants({ variant: "outline" })}
              >
                Check premium
              </Link>
            </div>
          </div>

          <div className="rise rise-delay flex flex-col gap-3 md:col-span-5">
            {PROMOS.map((promo) => (
              <article
                key={promo.title}
                className={cn("rounded-[16px] p-5", promo.tone)}
              >
                <h2 className="text-lg font-semibold leading-snug tracking-[-0.02em]">
                  {promo.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{promo.body}</p>
                <Link
                  href={promo.href}
                  className="mt-4 inline-flex text-sm font-semibold underline underline-offset-4"
                >
                  {promo.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {TRUST.map((item) => (
            <article key={item.title} className="flex gap-3">
              <item.icon weight="duotone" className="mt-0.5 size-8 shrink-0 text-brand" />
              <div>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Popular picks */}
      <section id="covers" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                Popular insurance on Bima Hub
              </h2>
              <p className="mt-2 max-w-[48ch] text-muted-foreground">
                Start with the line you need. Each page explains what we check
                before a quote.
              </p>
            </div>
            <Link href="/#quote" className={cn(buttonVariants(), "w-fit")}>
              Talk to an expert
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/life",
                title: "Term life insurance",
                body: "Cover for dependents and loans. LIC Tech Term and private term compared in plain language.",
              },
              {
                href: "/health",
                title: "Health insurance",
                body: "Family floaters, parents, and top-ups. Room rent and waiting periods before premium.",
              },
              {
                href: "/motor",
                title: "Car & bike insurance",
                body: "Own damage, third party, NCB, and add-ons matched to how the vehicle is used.",
              },
              {
                href: "/non-motor",
                title: "Shop & home insurance",
                body: "Fire, burglary, stock, goods on the road, and home structure plus contents.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="product-tile rounded-[16px] border border-border bg-card p-5"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">
                  View plans
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section id="calculator" className="scroll-mt-24 bg-muted/60">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Insurance calculators
          </h2>
          <p className="mt-2 max-w-[52ch] text-muted-foreground">
            Rough yearly ranges in Indian rupees for motor, health, and term life.
            Use them to plan, then ask for a real quote.
          </p>
          <div className="mt-8">
            <PremiumCalculator />
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-center text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            Bima Hub advantage
          </h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-center text-muted-foreground">
            When you place cover with us, you get more than a PDF. You get a desk
            that still answers.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {ADVANTAGE.map((item) => (
              <article
                key={item.title}
                className="rounded-[14px] border border-border bg-card p-4"
              >
                <SealCheck weight="fill" className="size-6 text-primary" />
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 bg-sky/40 dark:bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-center text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            What our customers are saying
          </h2>
          <p className="mx-auto mt-3 max-w-[40ch] text-center text-muted-foreground">
            Real situations from Indian cities. The insurer still decides the claim.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="rounded-[16px] border border-border bg-card p-5"
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="mt-0.5 block text-muted-foreground">
                    {review.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-[-0.03em]">
            Our partners
          </h2>
          <p className="mx-auto mt-2 max-w-[40ch] text-center text-muted-foreground">
            Leading insurers we place with, set in type. The list changes when a
            wording stops earning its place.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {PARTNERS.map((name) => (
              <li
                key={name}
                className="text-lg font-semibold tracking-[-0.02em] text-foreground/80"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Help + quote */}
      <section id="quote" className="scroll-mt-24 bg-navy text-foam">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:grid-cols-12 md:px-6 md:py-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Have a question? Here to help.
            </h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-foam/80">
              Our desk is your extended family for cover questions. Call, request a
              callback, or leave a note. Weekdays before 7 pm.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="text-foam/70">Sales & quotes </span>
                <a href="tel:+919876543210" className="font-semibold hover:underline">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <span className="text-foam/70">Email </span>
                <a
                  href="mailto:desk@bimahub.in"
                  className="font-semibold hover:underline"
                >
                  desk@bimahub.in
                </a>
              </p>
              <p className="text-foam/70">Andheri East, Mumbai</p>
            </div>
            <Accordion className="mt-8 max-w-md border-t border-foam/20">
              {QUESTIONS.map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border-foam/20">
                  <AccordionTrigger className="text-left text-sm font-medium text-foam hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foam/75">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="rounded-[16px] bg-card p-5 text-foreground md:col-span-7 md:p-8">
            <h3 className="text-2xl font-bold tracking-[-0.03em]">Get a free quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Protect your family, vehicle, or shop. We call back on a weekday.
            </p>
            <div className="mt-6">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* Short about strip */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-6">
          <h2 className="text-2xl font-bold tracking-[-0.03em]">
            Buy insurance at Bima Hub
          </h2>
          <p className="mt-3 max-w-[72ch] leading-relaxed text-muted-foreground">
            Based in Mumbai, Bima Hub helps Indian buyers compare and place motor,
            health, life including LIC, and shop or home cover. You get plan
            features, exclusions, and a premium range in a few steps from home. We
            are paid a commission by the insurer. You do not pay a separate advice
            fee. For claims, call the desk that placed the policy.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-semibold text-brand underline underline-offset-4"
          >
            About the desk
          </Link>
        </div>
      </section>
    </>
  );
}
