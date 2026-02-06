import heroVideo from "@/assets/hero-video.mp4";
import doydemLogo from "@/assets/doydem-logo.png";
import { Button } from "@/components/ui/button";
import { ExternalLink, PhoneCall } from "lucide-react";

const LIEFERANDO_URL = "https://www.lieferando.de/speisekarte/doydem?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_DEU_DE_%5BRES%5D_%5BENGM%5D_LH_National&utm_campaignid=21814098866&gad_source=1&gad_campaignid=21814098866&gbraid=0AAAAAD3ULIX8aq05AVwXmW7SyRCteojvm&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86sF3UU24rPX3l8XDCyl3eW0UCnOrkpzzhNSjPBZaU4DkyAAq4OaS0aAmFfEALw_wcB#pre-order";
const PHONE_NUMBER = "tel:01623254444";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Logo */}
        <img
          src={doydemLogo}
          alt="Doydem Restaurant Logo"
          className="mb-8 h-40 w-auto drop-shadow-2xl md:h-56 lg:h-72"
        />

        {/* H1 for SEO */}
        <h1 className="mb-8 text-center text-lg font-normal text-foreground/80 md:text-xl">
          Authentische türkische Küche in Stuttgart
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/25"
          >
            <a href={LIEFERANDO_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              Jetzt bestellen
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-primary/50 px-8 py-6 text-lg font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:bg-primary/10 hover:border-primary"
          >
            <a href={PHONE_NUMBER}>
              <PhoneCall className="h-5 w-5" />
              Reservieren
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-primary/50">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
