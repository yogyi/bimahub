"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Photo } from "@/components/photo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PANELS = [
  {
    title: "Renewal",
    body: "The car policy ends in April. We start three weeks before, with the no-claim bonus still attached.",
    src: "/images/motor-car.jpg",
    alt: "A silver hatchback parked under trees on a residential street.",
  },
  {
    title: "Admission",
    body: "Cashless starts with the hospital list. We check the room category before the family agrees to a ward.",
    src: "/images/health-clinic.jpg",
    alt: "An older man and his daughter standing outside a clinic doorway.",
  },
  {
    title: "The shutter",
    body: "A theft or a fire needs photos, the policy number, and a surveyor. We book the surveyor. You stay with the shop.",
    src: "/images/shop-front.jpg",
    alt: "A shopkeeper in the doorway of a hardware shop.",
  },
  {
    title: "The nominee",
    body: "A life policy pays the person named on it. We review that name when the family changes.",
    src: "/images/life-notebook.jpg",
    alt: "Older and younger hands resting on a closed notebook.",
  },
];

export function YearPan() {
  const wrap = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = wrap.current;
      if (!root) return;
      const track = root.querySelector<HTMLElement>("[data-track]");
      if (!track) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          root.style.overflow = "hidden";
          track.style.willChange = "transform";
          const distance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
          return () => {
            root.style.overflow = "";
            track.style.willChange = "";
          };
        },
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { scope: wrap },
  );

  return (
    <section ref={wrap} className="year-wrap bg-background md:overflow-x-auto" aria-label="A year with the desk">
      <div data-track className="flex flex-col md:w-max md:flex-row">
        {PANELS.map((panel) => (
          <article
            key={panel.title}
            className="flex w-full shrink-0 flex-col gap-6 px-4 py-12 md:h-[100dvh] md:w-[72vw] md:flex-row md:items-center md:gap-12 md:px-10 md:pt-24"
          >
            <Photo
              src={panel.src}
              alt={panel.alt}
              ratio="aspect-[4/3] md:aspect-[4/3] md:h-[68dvh] md:w-[46%] md:shrink-0"
              className="md:aspect-auto"
              sizes="(min-width: 768px) 34vw, 100vw"
            />
            <div className="max-w-[34ch]">
              <h3 className="text-3xl tracking-[-0.03em] md:text-5xl">{panel.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {panel.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
