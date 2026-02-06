import heroVideo from "@/assets/hero-video.mp4";
import doydemLogo from "@/assets/doydem-logo.png";
import { Button } from "@/components/ui/button";
import { ExternalLink, PhoneCall, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DELIVERY_SERVICES = [
  {
    name: "Lieferando",
    url: "https://www.lieferando.de/speisekarte/doydem",
  },
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com/de/store/restaurant-doydem/8GcqO8fZSn-50n6Mgj4Gbg",
  },
  {
    name: "Wolt",
    url: "https://wolt.com/de/deu/stuttgart/restaurant/doydem",
  },
];
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="gap-2 bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/25"
              >
                <ExternalLink className="h-5 w-5" />
                Jetzt bestellen
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[180px] bg-popover">
              {DELIVERY_SERVICES.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full cursor-pointer items-center gap-2 px-3 py-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {service.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
