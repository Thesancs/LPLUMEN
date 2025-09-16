import { HeroSection } from "@/components/landing/hero-section";
import { NumbersSection } from "@/components/landing/numbers-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhyLumenSection } from "@/components/landing/why-lumen-section";
import { MethodSection } from "@/components/landing/method-section";
import { SecurityAlertSection } from "@/components/landing/security-alert-section";
import { OfferSection } from "@/components/landing/offer-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";
import { TopBar } from "@/components/layout/top-bar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopBar />
      <main className="flex-grow">
        <HeroSection />
        <NumbersSection />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyLumenSection />
        <MethodSection />
        <SecurityAlertSection />
        <OfferSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
