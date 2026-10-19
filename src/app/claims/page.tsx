import type { Metadata } from "next";
import { CallbackBand } from "@/components/callback-band";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Claims",
  description:
    "What to do in the first hour after a motor accident, a hospital admission, or damage at a shop or home.",
};

const MOTOR = [
  "See that people are safe before you talk about the policy.",
  "Photograph the vehicles, the road, and any marks, before they are moved if you can do that safely.",
  "Call this desk, not only the insurer toll-free line.",
  "If anyone is hurt, or the law requires it, file with the police and keep the number.",
  "Do not agree fault at the roadside. Fault is for the survey and, if needed, the police.",
];

const AFTER = [
  {
    title: "The same day",
    body: "We confirm the policy is in force, tell you which photographs still matter, and open the intimation with the insurer if you want us to.",
  },
  {
    title: "The survey or the hospital",
    body: "On motor and property we press for the surveyor. On health we stay with the pre-authorisation and the room category, because that is where bills go wrong.",
  },
  {
    title: "Until it is decided",
    body: "You get a plain update when the insurer asks for a paper, and when they accept or reject. The decision is still theirs. We do not promise a number.",
  },
];

const HEALTH = [
  "Carry the health card and a photo identity.",
  "Ask the hospital to start pre-authorisation, and tell us the room category they have offered.",
  "If the room is above the policy cap, call before you accept it. The cut can apply to the whole bill.",
  "For reimbursement, keep original bills, the discharge summary, reports, and the cancelled cheque.",
];

export default function ClaimsPage() {
  return (
    <>
      <section className="bg-background pt-24">
        <div className="mx-auto max-w-[1400px] px-4 pb-8 md:px-6">
          <h1 className="max-w-3xl text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.03em]">
            Call the person who placed the policy.
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            The insurer still decides the claim. We gather the papers, book the surveyor, and stay on the call.
          </p>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <Photo
            src="/images/claims-desk.jpg"
            alt="Bima Hub advisor on a landline at the desk, taking notes."
            ratio="aspect-[16/8]"
            sizes="(min-width: 768px) 90vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[760px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl tracking-[-0.03em]">A motor accident</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {MOTOR.map((item) => (
              <li key={item} className="leading-relaxed text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[760px] px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-3xl tracking-[-0.03em]">After you call</h2>
          <div className="mt-8 flex flex-col">
            {AFTER.map((item, index) => (
              <article
                key={item.title}
                className={index === 0 ? "py-6" : "border-t border-border py-6"}
              >
                <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <h2 className="text-3xl tracking-[-0.03em]">A hospital admission</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {HEALTH.map((item) => (
                <li key={item} className="leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <Photo
              src="/images/health-clinic.jpg"
              alt="A father and daughter leaving a clinic in daylight."
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy text-foam">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-16 md:grid-cols-12 md:px-6">
          <div className="md:col-span-6">
            <h2 className="text-3xl tracking-[-0.03em]">A shop or a house</h2>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-foam-soft">
              Make the place safe. Photograph the damage before debris is cleared. Call us the same day so a surveyor can be booked. Keep purchase bills for stock if you have them. Do not start major repairs until the surveyor has seen the loss, unless waiting would make it worse.
            </p>
          </div>
          <div className="md:col-span-6">
            <Photo
              src="/images/house-lane.jpg"
              alt="A family house on a residential lane, seen from the street."
              ratio="aspect-[16/10]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>
      <CallbackBand title="A claim is open, or you want the desk number saved." />
    </>
  );
}
