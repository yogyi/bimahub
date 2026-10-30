import type { Metadata } from "next";
import { DesignClaimsPage } from "@/components/design/claims-page";

export const metadata: Metadata = {
  title: "Claims assistance",
  description:
    "24x7 claim intimation, cashless support, and renewal vault tools from BimaHub.",
};

export default function ClaimsPage() {
  return <DesignClaimsPage />;
}
