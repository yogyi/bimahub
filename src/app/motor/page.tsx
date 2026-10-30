import type { Metadata } from "next";
import { DesignMotorPage } from "@/components/design/motor-page";

export const metadata: Metadata = {
  title: "Motor insurance",
  description:
    "Compare car and bike insurance quotes, IDV, add-ons, and cashless garages on BimaHub.",
};

export default function MotorPage() {
  return <DesignMotorPage />;
}
