import { Suspense } from "react";
import { PageTransition } from "@/components/PageTransition";
import { BookContent } from "./BookContent";

export const metadata = {
  title: "Book a Session — Stephanie Guerra Photography",
  description: "Inquire about wedding, engagement, family, or motherhood photography with Stephanie Guerra.",
};

export default function BookPage() {
  return (
    <PageTransition>
      <Suspense>
        <BookContent />
      </Suspense>
    </PageTransition>
  );
}
