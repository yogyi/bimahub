"use client";

import { useState } from "react";
import { cn } from "cn";

const ITEMS = [
  {
    q: "How does BimaHub offer lower premiums than insurer websites directly?",
    a: "We compare multiple wordings side by side and highlight room-rent caps, IDV, and exclusions before you buy. Lower premium is never the only reason we recommend a plan.",
  },
  {
    q: "Is BimaHub an insurer?",
    a: "No. We are a comparison and advisory desk. The policy is issued by the insurer you choose, and claim decisions stay with that insurer.",
  },
  {
    q: "Do you only sell LIC?",
    a: "No. LIC is a product line many families already know. We also compare term and health options when those fit better.",
  },
  {
    q: "Is the calculator the final premium?",
    a: "No. It is a planning range. Age, medicals, IDV, city, and add-ons change the real quote we send you.",
  },
] as const;

export function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3" id="faq-container">
      {ITEMS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className="rounded-xl border border-outline-variant/40 bg-white shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-sm font-semibold text-primary">{item.q}</span>
              <span
                className="material-symbols-outlined shrink-0 text-[20px] text-secondary"
                aria-hidden
              >
                {isOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            <div
              className={cn(
                "px-4 pb-4 text-xs leading-relaxed text-slate-600 sm:text-sm",
                !isOpen && "hidden",
              )}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
