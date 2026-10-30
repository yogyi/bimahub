import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteFooterDesign } from "@/components/design/site-footer-design";
import { SiteHeaderDesign } from "@/components/design/site-header-design";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bimahub.example"),
  title: {
    default: "BimaHub | Compare 50+ Insurers & Save on Premiums",
    template: "%s | BimaHub",
  },
  description:
    "India's insurance comparison hub for motor, health, life including LIC, and shop or home cover. Instant quotes, claim support, and IRDAI-aware guidance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="flex min-h-[100dvh] flex-col bg-surface text-on-surface">
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-on-surface"
          >
            Skip to content
          </a>
          <SiteHeaderDesign />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooterDesign />
        </Providers>
      </body>
    </html>
  );
}
