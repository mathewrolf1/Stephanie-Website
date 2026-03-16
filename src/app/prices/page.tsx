import { PageTransition } from "@/components/PageTransition";
import { PricesContent } from "./PricesContent";

export const metadata = {
  title: "Pricing — Stephanie Guerra Photography",
  description: "Wedding and portrait photography packages and pricing by Stephanie Guerra.",
};

export default function PricesPage() {
  return (
    <PageTransition>
      <PricesContent />
    </PageTransition>
  );
}
