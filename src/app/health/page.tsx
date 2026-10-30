import type { Metadata } from "next";
import { DesignHealthPage } from "@/components/design/health-page";

export const metadata: Metadata = {
  title: "Health insurance",
  description:
    "Compare family floater and individual health plans, cashless hospitals, and Section 80D savings on BimaHub.",
};

export default function HealthPage() {
  return <DesignHealthPage />;
}
