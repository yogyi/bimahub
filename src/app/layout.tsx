import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bimahub.example"),
  title: {
    default: "Bima Hub | Insurance for Indian families and businesses",
    template: "%s | Bima Hub",
  },
  description:
    "Compare and buy motor, health, life including LIC, and shop or home insurance in India. Premium calculator and free quote from Bima Hub.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-[100dvh] flex-col">
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="content" className="flex-1 pt-0">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
