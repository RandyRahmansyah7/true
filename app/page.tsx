import ScrollReset from "@/components/common/ScrollReset";
import ScrollObserver from "@/components/common/ScrollObserver";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import ConsultationSection from "@/components/sections/ConsultationSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollReset />
      <ScrollObserver />
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <WhyUsSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <FaqSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
