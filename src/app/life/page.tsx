import type { Metadata } from "next";
import { DesignLifePage } from "@/components/design/life-page";

export const metadata: Metadata = {
  title: "Life insurance and LIC",
  description:
    "LIC savings plans, term cover, and retirement options compared with maturity estimates on BimaHub.",
};

export default function LifePage() {
  return <DesignLifePage />;
}
