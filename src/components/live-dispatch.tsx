"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "16,420 policies issued today · ₹46.2 Cr cashless claims this month",
  "312 health cashless approvals cleared in the last hour",
  "89 motor renewals completed in Mumbai RTO zone this morning",
  "147 families compared term plans and locked cover under ₹600/mo",
  "54 shop & fire quotes issued for SME clients since midnight",
  "23 claim advocates currently live on hospital & garage desks",
] as const;

type LiveDispatchProps = {
  tone?: "header" | "card";
};

export function LiveDispatch({ tone = "header" }: LiveDispatchProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % MESSAGES.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  if (tone === "card") {
    return (
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-outline-variant/40 bg-white px-4 py-2.5 shadow-sm">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 text-xs text-on-surface">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="shrink-0 font-bold text-secondary">LIVE DISPATCH:</span>
          <span
            key={index}
            className="truncate font-medium text-slate-600 transition-opacity duration-300"
          >
            {MESSAGES[index]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 text-xs">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="shrink-0 font-bold tracking-wide text-emerald-300">
        LIVE DISPATCH
      </span>
      <span className="hidden text-white/30 sm:inline">·</span>
      <span
        key={index}
        className="truncate font-medium text-slate-200 transition-opacity duration-300"
        aria-live="polite"
      >
        {MESSAGES[index]}
      </span>
    </div>
  );
}
