"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { CaretDown, List, Moon, Phone, Sun, X } from "@phosphor-icons/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const PRODUCTS = [
  { href: "/life", label: "Term life" },
  { href: "/health", label: "Health" },
  { href: "/motor", label: "Car & bike" },
  { href: "/life", label: "LIC & savings" },
  { href: "/non-motor", label: "Shop & home" },
  { href: "/#calculator", label: "Calculators" },
] as const;

const LINKS = [
  { href: "/claims", label: "Claims" },
  { href: "/about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const quoteHref = pathname === "/" ? "/#quote" : "/contact";

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <header className="nav-shadow mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="shrink-0 text-[1.2rem] font-bold tracking-[-0.03em] text-brand"
          >
            Bima Hub
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div className="relative">
              <button
                type="button"
                className="inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm font-medium text-foreground hover:bg-muted"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((open) => !open)}
              >
                Insurance products
                <CaretDown weight="bold" className="size-3.5" />
              </button>
              {productsOpen ? (
                <div className="absolute top-full left-0 z-50 mt-2 w-56 rounded-[12px] border border-border bg-card p-2 shadow-lg">
                  {PRODUCTS.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      className="block rounded-[10px] px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                      onClick={() => {
                        setProductsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm whitespace-nowrap transition-colors",
                    active
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="tel:+919876543210"
            className="mr-1 hidden items-center gap-1.5 text-sm font-medium text-foreground xl:inline-flex"
          >
            <Phone weight="fill" className="size-4 text-brand" />
            Talk to expert
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 text-foreground"
            aria-label="Switch color theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun weight="regular" className="hidden size-5 dark:block" />
            <Moon weight="regular" className="size-5 dark:hidden" />
          </Button>
          <Link href={quoteHref} className={cn(buttonVariants(), "hidden sm:inline-flex")}>
            Get a quote
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 lg:hidden"
            aria-label="Open menu"
            onClick={() => dialogRef.current?.showModal()}
          >
            <List weight="regular" className="size-5" />
          </Button>
        </div>
      </header>

      <dialog ref={dialogRef} className="menu" aria-label="Menu">
        <div className="flex h-full flex-col px-5 pt-4 pb-10">
          <div className="flex items-center justify-between">
            <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-brand">Bima Hub</p>
            <Button
              variant="ghost"
              size="icon"
              className="size-10"
              aria-label="Close menu"
              onClick={() => dialogRef.current?.close()}
            >
              <X weight="regular" className="size-5" />
            </Button>
          </div>
          <nav className="mt-8 flex flex-col gap-1" aria-label="Primary">
            {[...PRODUCTS, ...LINKS, { href: "/contact", label: "Get a quote" }].map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="py-2 text-2xl tracking-[-0.03em] text-foreground"
                onClick={() => dialogRef.current?.close()}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+919876543210"
            className="mt-auto inline-flex w-fit items-center gap-2 text-base font-medium"
          >
            <Phone weight="fill" className="size-5 text-brand" />
            +91 98765 43210
          </a>
        </div>
      </dialog>
    </div>
  );
}
