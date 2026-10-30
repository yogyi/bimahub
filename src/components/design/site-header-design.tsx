"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { cn } from "cn";

const NAV = [
  { href: "/motor", label: "Motor" },
  { href: "/health", label: "Health" },
  { href: "/life", label: "Life & LIC" },
  { href: "/claims", label: "Claims" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
] as const;

export function SiteHeaderDesign() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="border-b border-primary-container bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-8">
          <p className="font-medium text-slate-200">
            IRDAI-aware advisory desk · 24x7 claim helpline{" "}
            <a
              className="font-semibold text-white underline-offset-2 hover:underline"
              href="tel:18002088777"
            >
              1800-208-8777
            </a>
          </p>
          <Link
            href="/contact"
            className="font-semibold text-tertiary-fixed transition-colors hover:text-white"
          >
            Request a callback
          </Link>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-lg bg-secondary text-sm font-extrabold text-white shadow-sm transition group-hover:bg-[#003ea8]"
          >
            BH
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-primary">
              Bima<span className="text-secondary">Hub</span>
            </span>
            <span className="hidden text-[10px] font-semibold tracking-wider text-slate-500 uppercase sm:block">
              Insurance comparison
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-surface-container-low text-secondary"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-secondary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-lg border border-outline-variant/70 px-3 py-2 text-sm font-semibold text-on-surface transition hover:border-secondary/40 hover:text-secondary sm:inline-flex"
          >
            <Phone weight="bold" className="size-4" />
            Call desk
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-secondary px-3.5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#003ea8]"
          >
            Get a quote
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-outline-variant/70 text-on-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X weight="bold" className="size-5" /> : <List weight="bold" className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-outline-variant/50 bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8" aria-label="Mobile">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-semibold",
                    active
                      ? "bg-surface-container-low text-secondary"
                      : "text-on-surface hover:bg-surface-container-low",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-secondary px-3 py-3 text-center text-base font-bold text-white"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
