import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Gallery images
import salad from "@/assets/gallery/salad.jpeg";
import meatRice1 from "@/assets/gallery/meat-rice-1.jpeg";

import burger1 from "@/assets/gallery/burger-1.jpeg";
import burger3 from "@/assets/gallery/burger-3.jpeg";
import meze from "@/assets/gallery/meze.jpeg";
import burgerMenu from "@/assets/gallery/burger-menu.jpeg";

const galleryImages = [
  { src: burger1, alt: "Türkischer Burger im Doydem Restaurant Stuttgart" },
  { src: salad, alt: "Frischer Salat – gesunde türkische Küche in Stuttgart" },
  { src: meatRice1, alt: "Gegrilltes Fleisch mit Reis – türkisches Gericht Stuttgart" },
  { src: meze, alt: "Meze Platte – türkische Vorspeisen im Restaurant Doydem Stuttgart" },
  { src: burgerMenu, alt: "Burger Menü mit Pommes – Doydem Restaurant Stuttgart" },
  { src: burger3, alt: "Gourmet Burger – Doydem türkisches Restaurant Stuttgart" },
];

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Galerie – Doydem Restaurant Stuttgart | Türkische Küche Bilder</title>
        <meta name="description" content="Bildergalerie vom Doydem Restaurant in Stuttgart. Entdecken Sie unsere türkischen Gerichte: Kebab, Meze, Burger & Grillspezialitäten – frisch zubereitet!" />
        <link rel="canonical" href="https://doydem-restaurant.de/galerie" />
        <meta property="og:title" content="Galerie – Doydem Restaurant Stuttgart" />
        <meta property="og:description" content="Bildergalerie vom Doydem Restaurant in Stuttgart. Türkische Gerichte: Kebab, Meze, Burger & Grillspezialitäten." />
        <meta property="og:url" content="https://doydem-restaurant.de/galerie" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
            Galerie – Unsere türkischen Spezialitäten
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Einblicke in unsere kulinarischen Kreationen – authentische türkische Küche in Stuttgart, frisch zubereitet mit Liebe und Tradition.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -right-2 -top-10 text-white transition-colors hover:text-primary"
            aria-label="Schließen"
          >
            <X className="h-8 w-8" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Vergrößerte Ansicht – Doydem Restaurant Stuttgart"
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galerie;
