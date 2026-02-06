import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Doydem Restaurant",
  "image": "https://doydem-restaurant.de/doydem-logo.png",
  "url": "https://doydem-restaurant.de",
  "telephone": "+491623254444",
  "email": "info@doydem-restaurant.de",
  "servesCuisine": ["Türkisch", "Kebab", "Grill", "Meze"],
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adalbert-Stifter-Straße 101",
    "addressLocality": "Stuttgart",
    "addressRegion": "Baden-Württemberg",
    "postalCode": "70437",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.838268,
    "longitude": 9.165737
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "11:00", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "11:00", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "11:00", "closes": "21:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "11:00", "closes": "03:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "13:00", "closes": "03:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "14:00", "closes": "21:30" }
  ],
  "menu": "https://doydem-restaurant.de/speisekarte.pdf",
  "acceptsReservations": "True",
  "sameAs": [
    "https://www.instagram.com/doydem_stgt/"
  ]
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Doydem Restaurant Stuttgart – Türkische Küche, Kebab & Meze</title>
        <meta name="description" content="Doydem – Ihr türkisches Restaurant in Stuttgart-Freiberg. Authentische Kebabs, Meze, Grillgerichte & mehr. Jetzt online bestellen oder Tisch reservieren!" />
        <script type="application/ld+json">{JSON.stringify(restaurantJsonLd)}</script>
      </Helmet>
      <Header />
      <HeroSection />
      <section id="speisekarte" aria-label="Speisekarte">
        <MenuSection />
      </section>
      <section id="kontakt" aria-label="Kontakt und Standort">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
