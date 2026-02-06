import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="speisekarte">
        <MenuSection />
      </div>
      <div id="kontakt">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
