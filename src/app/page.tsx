import { FAQSection } from "@/components/FAQSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProtocolsSection } from "@/components/ProtocolsSection";
import { Testimonials } from "@/components/Testimonials";
import { Container } from "@/components/Section";
export default function Home() {
  return <div className="bg-background text-foreground">
    <Header />
    <main id="inicio">
      <Hero />
      <div className="bg-muted">
        <ProtocolsSection />
        <Container className="grid items-start gap-7 pb-10 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:pb-14">
          <Testimonials />
          <FAQSection />
        </Container>
      </div>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>;
}
