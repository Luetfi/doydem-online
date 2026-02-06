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
  "alternateName": "Doydem Stuttgart",
  "description": "Authentisches türkisches Restaurant in Stuttgart-Freiberg mit Kebab, Meze, Grillgerichten und mehr. Frisch zubereitet mit traditionellen Rezepten.",
  "image": "https://doydem-restaurant.de/doydem-logo.png",
  "url": "https://doydem-restaurant.de",
  "telephone": "+491623254444",
  "email": "info@doydem-restaurant.de",
  "servesCuisine": ["Türkisch", "Kebab", "Grill", "Meze", "Döner", "Halal"],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
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
  "areaServed": {
    "@type": "City",
    "name": "Stuttgart"
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
  "hasMenu": {
    "@type": "Menu",
    "name": "Speisekarte",
    "url": "https://doydem-restaurant.de/speisekarte.pdf"
  },
  "acceptsReservations": "True",
  "sameAs": [
    "https://www.instagram.com/doydem_stgt/",
    "https://www.lieferando.de/speisekarte/doydem",
    "https://www.ubereats.com/de/store/restaurant-doydem/8GcqO8fZSn-50n6Mgj4Gbg",
    "https://wolt.com/de/deu/stuttgart/restaurant/doydem"
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+491623254444",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Tischreservierung"
      }
    },
    {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.lieferando.de/speisekarte/doydem",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      }
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wo befindet sich das Doydem Restaurant in Stuttgart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Doydem Restaurant befindet sich im Kaufpark Freiberg, Adalbert-Stifter-Straße 101, 70437 Stuttgart."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Öffnungszeiten hat das Doydem Restaurant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dienstag bis Donnerstag: 11:00–21:30 Uhr, Freitag: 11:00–03:00 Uhr, Samstag: 13:00–03:00 Uhr, Sonntag: 14:00–21:30 Uhr. Montag ist Ruhetag."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man beim Doydem Restaurant online bestellen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Sie können über Lieferando, Uber Eats oder Wolt online bestellen und sich türkische Gerichte direkt nach Hause liefern lassen."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man im Doydem Restaurant einen Tisch reservieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Tischreservierungen sind telefonisch unter 0162 3254444 möglich."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Küche bietet das Doydem Restaurant an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Doydem Restaurant bietet authentische türkische Küche: Kebab, Meze, Grillgerichte, Burger und vieles mehr – alles frisch zubereitet."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://doydem-restaurant.de/"
    }
  ]
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Doydem Restaurant Stuttgart – Türkische Küche, Kebab & Meze</title>
        <meta name="description" content="Doydem – Ihr türkisches Restaurant in Stuttgart-Freiberg. Authentische Kebabs, Meze, Grillgerichte & mehr. Jetzt online bestellen oder Tisch reservieren!" />
        <script type="application/ld+json">{JSON.stringify(restaurantJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />
      <HeroSection />
      <section id="speisekarte" aria-label="Speisekarte – Türkische Gerichte in Stuttgart">
        <MenuSection />
      </section>
      <section id="kontakt" aria-label="Kontakt und Standort – Doydem Restaurant Stuttgart">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
