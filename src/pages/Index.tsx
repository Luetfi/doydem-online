import HeroSection from "@/components/HeroSection";
import MenuHighlights from "@/components/MenuHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MenuHighlights />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
