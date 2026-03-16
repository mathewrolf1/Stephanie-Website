import { PageTransition } from "@/components/PageTransition";
import { AboutContent } from "./AboutContent";

export const metadata = {
  title: "About — Stephanie Guerra Photography",
  description: "Learn about Stephanie Guerra, fine art wedding photographer based in Northern California.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutContent />
    </PageTransition>
  );
}
