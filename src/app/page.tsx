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
import {
  GlyphBike,
  GlyphCalc,
  GlyphCar,
  GlyphCommercial,
  GlyphHealth,
  GlyphLic,
  GlyphPension,
  GlyphShop,
  GlyphTerm,
  GlyphTopup,
} from "@/components/product-glyphs";
import { cn } from "cn";
import {
  CurrencyInr,
  Handshake,
  PhoneCall,
  SealCheck,
  UsersThree,
} from "@phosphor-icons/react/ssr";

const PRODUCTS = [
  {
    href: "/life",
    title: "Term life",
    hint: "High cover, low premium",
    Glyph: GlyphTerm,
  },
  {
    href: "/health",
    title: "Health",
    hint: "Family & senior plans",
    Glyph: GlyphHealth,
  },
  {
    href: "/motor",
    title: "Car",
    hint: "OD + third party",
    Glyph: GlyphCar,
  },
  {
    href: "/motor",
    title: "Bike",
    hint: "Two-wheeler cover",
    Glyph: GlyphBike,
  },
  {
    href: "/life",
    title: "LIC plans",
    hint: "Anand, Labh, Umang",
    Glyph: GlyphLic,
  },
  {
    href: "/non-motor",
    title: "Shop & home",
    hint: "Fire, stock, liability",
    Glyph: GlyphShop,
  },
  {
    href: "/health",
    title: "Super top-up",
    hint: "Extra hospital cover",
    Glyph: GlyphTopup,
  },
  {
    href: "/life",
    title: "Pension",
    hint: "Jeevan Shanti & more",
    Glyph: GlyphPension,
  },
  {
    href: "/motor",
    title: "Commercial",
    hint: "Goods & passenger",
    Glyph: GlyphCommercial,
  },
  {
    href: "/#calculator",
    title: "Calculators",
    hint: "Motor, health, term",
    Glyph: GlyphCalc,
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
      {/* Unique hero: colourful product glyphs + warm story panel */}
      <section className="hero-stage relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-4 pt-8 pb-6 md:px-6 md:pt-10">
          <div className="rise grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-brand shadow-sm dark:bg-card">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Made for Indian families &amp; shops
              </p>
              <h1 className="mt-4 text-[clamp(2.1rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-foreground">
                Bima that feels{" "}
                <span className="text-primary">personal</span>, not like a portal maze
              </h1>
              <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                Tap a colourful cover below. Compare term, health, motor, LIC, and
                shop plans with a desk that still picks up.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
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

            <div className="relative md:col-span-6">
              <div className="relative overflow-hidden rounded-[24px] shadow-[0_28px_60px_-28px_oklch(0.35_0.1_45/0.45)]">
                <Photo
                  src="/images/hero-table.jpg"
                  alt="Advisor explaining cover to a family at the dining table."
                  ratio="aspect-[16/11]"
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5 pt-16">
                  <p className="text-sm font-semibold text-white">
                    One desk from quote to claim
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Mumbai-based. India-wide by call.
                  </p>
                </div>
              </div>
              <div className="float-a absolute -top-3 -left-2 hidden size-14 rounded-full shadow-lg md:block">
                <GlyphHealth />
              </div>
              <div className="float-b absolute -right-2 top-10 hidden size-14 rounded-full shadow-lg md:block">
                <GlyphCar />
              </div>
              <div className="float-a absolute right-8 -bottom-4 hidden size-12 rounded-full shadow-lg md:block">
                <GlyphLic />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 pb-12 md:px-6 md:pb-16">
          <div className="rounded-[28px] border border-white/70 bg-white/75 p-4 shadow-[0_20px_50px_-30px_oklch(0.35_0.08_250/0.4)] backdrop-blur-md dark:border-border dark:bg-card/90 md:p-6">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-bold tracking-[-0.02em] text-foreground md:text-xl">
                  What do you want to protect today?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Bright icons, clear covers. Pick one to explore.
                </p>
              </div>
              <Link
                href="/#quote"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Not sure? Ask us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {PRODUCTS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="product-tile group flex flex-col items-center rounded-[18px] border border-border/80 bg-card px-2 py-4 text-center"
                >
                  <span className="glyph size-14 drop-shadow-sm md:size-16">
                    <item.Glyph />
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
      <section
        id="quote"
        className="scroll-mt-24 bg-[linear-gradient(145deg,oklch(0.26_0.07_265),oklch(0.32_0.09_250)_45%,oklch(0.4_0.12_45/0.55))]"
      >
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 md:grid-cols-12 md:gap-10 md:px-6 md:py-16">
          <div className="text-foam md:col-span-5">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Free quote · No obligation
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Tell us what needs cover. We handle the rest.
            </h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-foam/80">
              Share a few details. A Bima Hub advisor prepares options and calls on
              a weekday before 7 pm.
            </p>
            <ol className="mt-8 flex flex-col gap-4">
              {[
                "Fill the form with name, mobile, city, and cover",
                "We compare two or three wordings for you",
                "You decide. We place the policy and stay for claims",
              ].map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-foam/90">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              <a
                href="tel:+919876543210"
                className="rounded-[14px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur hover:bg-white/15"
              >
                <span className="block text-xs text-foam/70">Talk to expert</span>
                <span className="font-semibold">+91 98765 43210</span>
              </a>
              <a
                href="mailto:desk@bimahub.in"
                className="rounded-[14px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur hover:bg-white/15"
              >
                <span className="block text-xs text-foam/70">Email the desk</span>
                <span className="font-semibold">desk@bimahub.in</span>
              </a>
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

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-[24px] bg-card shadow-[0_30px_70px_-28px_oklch(0.15_0.05_265/0.65)]">
              <div className="border-b border-border bg-gradient-to-r from-sky/60 to-orange-50/80 px-5 py-5 dark:from-muted dark:to-muted md:px-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground">
                      Get a free quote
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Protect your family, vehicle, or shop in a few details.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Takes under 1 min
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-8">
                <CallbackForm />
              </div>
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
