import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero name="Steph Guerra" />
      <Gallery />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
