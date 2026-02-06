import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuHighlights from "@/components/MenuHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="speisekarte">
        <MenuHighlights />
      </div>
      <div id="kontakt">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
