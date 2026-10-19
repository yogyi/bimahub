"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const LINKS = [
  { href: "/#covers", label: "Covers" },
  { href: "/#calculator", label: "Calculator" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/claims", label: "Claims" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const quoteHref = pathname === "/" ? "/#quote" : "/contact";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-40 px-3 md:top-4 md:px-4">
      <header className="nav-shadow pointer-events-auto mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 rounded-full border border-border bg-background/95 px-3 backdrop-blur md:px-5">
        <Link
          href="/"
          className="shrink-0 text-[1.1rem] font-semibold tracking-[-0.03em] text-foreground"
        >
          Bima Hub
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {LINKS.map((link) => {
            const active =
              link.href.startsWith("/") && !link.href.includes("#")
                ? pathname === link.href
                : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm whitespace-nowrap transition-colors duration-200",
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

        <div className="flex items-center gap-1.5">
          <a
            href="tel:+919876543210"
            className="mr-1 hidden text-sm font-medium text-foreground xl:inline"
          >
            +91 98765 43210
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 text-foreground"
            aria-label="Switch color theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun weight="regular" className="hidden size-5 dark:block" />
            <Moon weight="regular" className="size-5 dark:hidden" />
          </Button>

          <Link
            href={quoteHref}
            className={cn(buttonVariants(), "hidden sm:inline-flex")}
          >
            Get a quote
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="size-11 lg:hidden"
            aria-label="Open menu"
            onClick={() => dialogRef.current?.showModal()}
          >
            <List weight="regular" className="size-5" />
          </Button>
        </div>
      </header>

      <dialog ref={dialogRef} className="menu pointer-events-auto" aria-label="Menu">
        <div className="flex h-full flex-col px-5 pt-4 pb-10">
          <div className="flex items-center justify-between">
            <p className="text-[1.1rem] font-semibold tracking-[-0.03em]">Bima Hub</p>
            <Button
              variant="ghost"
              size="icon"
              className="size-11"
              aria-label="Close menu"
              onClick={() => dialogRef.current?.close()}
            >
              <X weight="regular" className="size-5" />
            </Button>
          </div>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Primary">
            {[
              ...LINKS,
              { href: "/motor", label: "Motor" },
              { href: "/health", label: "Health" },
              { href: "/life", label: "Life & LIC" },
              { href: "/non-motor", label: "Shop & home" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-3xl tracking-[-0.03em] text-foreground"
                onClick={() => dialogRef.current?.close()}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "mt-auto w-fit")}
            onClick={() => dialogRef.current?.close()}
          >
            Get a quote
          </Link>
        </div>
      </dialog>
    </div>
  );
}
