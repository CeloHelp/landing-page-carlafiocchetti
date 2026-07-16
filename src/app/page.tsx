import { AboutSection } from "@/components/AboutSection";
import { Benefits } from "@/components/Benefits";
import { ExperienceBlock } from "@/components/ExperienceBlock";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndicationSection } from "@/components/IndicationSection";
import { LocationSection } from "@/components/LocationSection";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <Header />
      <main id="inicio">
        <Hero />
        <TrustBadges />
        <IndicationSection />
        <Benefits />
        <ExperienceBlock />
        <AboutSection />
        <Testimonials />
        <FAQSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
