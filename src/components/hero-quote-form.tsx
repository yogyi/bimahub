"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "cn";

type TabId = "motor" | "health" | "life" | "sme";

const TABS: {
  id: TabId;
  label: string;
  icon: string;
  image: string;
  imageAlt: string;
  badge: string;
  caption: string;
  href: string;
}[] = [
  {
    id: "life",
    label: "Life & LIC",
    icon: "shield_person",
    image: "/images/design/family-cover.png",
    imageAlt: "Life cover and LIC savings for families",
    badge: "Term + LIC Savings",
    caption: "Pure term and LIC endowment options compared side by side.",
    href: "/life",
  },
  {
    id: "health",
    label: "Health",
    icon: "health_and_safety",
    image: "/images/design/health-hero.jpg",
    imageAlt: "Family health and hospital cover",
    badge: "14,500+ Cashless Hospitals",
    caption: "Family floater and individual plans with room-rent clarity.",
    href: "/health",
  },
  {
    id: "motor",
    label: "Motor",
    icon: "directions_car",
    image: "/images/design/motor-hero.jpg",
    imageAlt: "Car and bike insurance on Indian roads",
    badge: "Zero Dep & NCB Ready",
    caption: "Compare private car and two-wheeler rates with cashless garages.",
    href: "/motor",
  },
  {
    id: "sme",
    label: "SME",
    icon: "store",
    image: "/images/design/sme-hero.jpg",
    imageAlt: "Shop and commercial business cover",
    badge: "Shop & Fire Cover",
    caption: "Protect stock, premises, and commercial fleets for small business.",
    href: "/non-motor",
  },
];

export function HeroQuoteForm() {
  const [tab, setTab] = useState<TabId>("life");
  const [vehicle, setVehicle] = useState<"car" | "bike">("car");
  const active = TABS.find((item) => item.id === tab) ?? TABS[0];

  return (
    <div
      className="order-first lg:order-none lg:col-span-6 xl:col-span-5"
      id="hero-quick-quote"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl border-x border-t border-outline-variant/40 shadow-lg sm:h-52">
        <img
          key={active.image}
          src={active.image}
          alt={active.imageAlt}
          className="h-full w-full object-cover object-center transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/35 to-transparent p-4 text-white">
          <span className="mb-1 w-fit rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-bold backdrop-blur-sm">
            {active.badge}
          </span>
          <p className="text-xs font-medium text-slate-100 sm:text-sm">
            {active.caption}
          </p>
        </div>
      </div>

      <div className="space-y-5 rounded-b-2xl border-x border-b border-outline-variant/40 bg-white p-5 shadow-xl sm:p-6">
        <div
          className="flex overflow-x-auto rounded-xl bg-surface-container-low p-1 text-xs font-semibold"
          role="tablist"
          aria-label="Quote category"
        >
          {TABS.map((item) => {
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-center transition-all",
                  selected
                    ? "bg-secondary font-bold text-white shadow-sm"
                    : "font-semibold text-slate-600 hover:text-primary",
                )}
                onClick={() => setTab(item.id)}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>

        {tab === "motor" ? (
          <div className="space-y-4" role="tabpanel">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">
                Instant Car &amp; Two-Wheeler Rates
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-secondary">
                Save up to 85%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl p-2.5 text-xs font-bold transition-all",
                  vehicle === "car"
                    ? "border border-secondary bg-primary-container text-white"
                    : "border border-transparent bg-surface-container-low text-on-surface",
                )}
                onClick={() => setVehicle("car")}
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden>
                  directions_car
                </span>
                Private Car
              </button>
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl p-2.5 text-xs font-bold transition-all",
                  vehicle === "bike"
                    ? "border border-secondary bg-primary-container text-white"
                    : "border border-transparent bg-surface-container-low text-on-surface",
                )}
                onClick={() => setVehicle("bike")}
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden>
                  two_wheeler
                </span>
                Two Wheeler
              </button>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Vehicle Registration Number
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center rounded bg-slate-100 px-1.5 py-0.5 text-xs font-bold text-slate-500">
                  IND
                </div>
                <input
                  className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 py-3 pr-4 pl-16 text-base font-bold text-primary uppercase outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/20"
                  placeholder="MH 02 CD 1234"
                  type="text"
                  defaultValue="MH 02 DJ 4518"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <Link
                href="/motor"
                className="font-semibold text-secondary hover:underline"
              >
                Brand new vehicle? Click here
              </Link>
              <span className="text-slate-400">No RTO inspection</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Zero Dep Available",
                "NCB Transfer Up to 50%",
                "10,000+ Garages",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded bg-surface-container-low px-2 py-0.5 text-[11px] font-medium text-slate-700"
                >
                  <span
                    className="material-symbols-outlined text-[13px] text-emerald-600"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/motor"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#003ea8] hover:shadow-lg"
            >
              <span>View Instant Quotes (Save Up to 85%)</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        ) : null}

        {tab === "health" ? (
          <div className="space-y-4" role="tabpanel">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">
                Family Health Coverage
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                ₹1 Cr from ₹390/mo
              </span>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-500">
                Select Insured Family Members
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: "Self & Spouse", checked: true },
                  { label: "Son / Daughter", checked: true },
                  { label: "Father / Mother", checked: false },
                  { label: "In-Laws", checked: false },
                ].map((member) => (
                  <label
                    key={member.label}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-outline-variant/40 bg-surface-container-low p-2 font-medium"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={member.checked}
                      className="rounded text-secondary focus:ring-secondary"
                    />
                    <span>{member.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Your Residential Pincode
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 px-3.5 py-2.5 text-base font-bold text-primary outline-none focus:border-secondary focus:bg-white"
                placeholder="e.g. 400051 or 110001"
                type="text"
                defaultValue="400051"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Cashless hospitals",
                "No room rent traps",
                "Section 80D ready",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded bg-surface-container-low px-2 py-0.5 text-[11px] font-medium text-slate-700"
                >
                  <span
                    className="material-symbols-outlined text-[13px] text-emerald-600"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/health"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#003ea8]"
            >
              <span>Calculate 14,500+ Hospital Plans</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        ) : null}

        {tab === "life" ? (
          <div className="space-y-4" role="tabpanel">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">
                Term Insurance &amp; LIC Savings
              </span>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                Tax Free 80C
              </span>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Desired Sum Assured
              </label>
              <select
                className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-primary outline-none focus:border-secondary focus:bg-white"
                defaultValue="1cr"
              >
                <option value="1cr">
                  ₹1 Crore Pure Protection (from ₹490/m)
                </option>
                <option value="2cr">₹2 Crore Comprehensive Cover</option>
                <option value="labh">LIC Guaranteed Return (Jeevan Labh)</option>
                <option value="child">
                  Child Education &amp; Future Wealth Builder
                </option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Your Current Age
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 px-3.5 py-2.5 text-base font-bold text-primary outline-none focus:border-secondary focus:bg-white"
                placeholder="e.g. 30"
                type="number"
                defaultValue={30}
              />
            </div>
            <Link
              href="/life"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#003ea8]"
            >
              <span>Check Guaranteed Payouts</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        ) : null}

        {tab === "sme" ? (
          <div className="space-y-4" role="tabpanel">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">
                Business &amp; Commercial Cover
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-secondary">
                SME Specialized
              </span>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Business Protection Type
              </label>
              <select
                className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-primary outline-none focus:border-secondary focus:bg-white"
                defaultValue="shop"
              >
                <option value="shop">
                  Shopkeeper &amp; Fire Insurance (Bharat Sookshma)
                </option>
                <option value="fleet">
                  Commercial Vehicle Fleet (Trucks &amp; Taxis)
                </option>
                <option value="group">
                  Group Health Insurance for Employees (From ₹150/emp)
                </option>
                <option value="do">
                  Director &amp; Officer Liability (D&amp;O)
                </option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Total Asset / Stock Value (₹ Lakhs)
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant/60 bg-slate-50 px-3.5 py-2.5 text-base font-bold text-primary outline-none focus:border-secondary focus:bg-white"
                placeholder="e.g. 50"
                type="number"
                defaultValue={50}
              />
            </div>
            <Link
              href="/non-motor"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#003ea8]"
            >
              <span>Get SME Instant Quote</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        ) : null}

        <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-1 text-xs text-slate-400">
          <span
            className="material-symbols-outlined text-[15px] text-emerald-600"
            aria-hidden
          >
            verified
          </span>
          <span>
            45-second issuance · Policy PDF on WhatsApp · Zero spam call
            guarantee
          </span>
        </div>
      </div>
    </div>
  );
}
