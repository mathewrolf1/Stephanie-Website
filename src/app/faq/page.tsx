import { PageTransition } from "@/components/PageTransition";
import { FaqContent } from "./FaqContent";

export const metadata = {
  title: "FAQ — Stephanie Guerra Photography",
  description: "Answers to common questions about booking, editing style, delivery, and more.",
};

export default function FaqPage() {
  return (
    <PageTransition>
      <FaqContent />
    </PageTransition>
  );
}
