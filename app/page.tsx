import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BannerCarousel from "@/components/sections/BannerCarousel";
import ClientsSection from "@/components/sections/ClientsSection";
import AboutSection from "@/components/sections/AboutSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StepsSection from "@/components/sections/StepsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import VirtualTourSection from "@/components/sections/VirtualTourSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClassroomPromo from "@/components/sections/ClassroomPromo";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import StickyCta from "@/components/StickyCta";
import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* padding bawah memberi ruang untuk StickyCta di mobile */}
      <main id="konten" className="pb-20 sm:pb-0">
        <BannerCarousel />
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <PainPointsSection />
        <FeaturesSection />
        <StepsSection />
        <BenefitsSection />
        <GallerySection />
        <VirtualTourSection />
        <TestimonialsSection />
        <ClassroomPromo />
        <BlogSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCta />
      <BackToTop />
      <ChatWidget />
      <ScrollReveal />
    </>
  );
}
