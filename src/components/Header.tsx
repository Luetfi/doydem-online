import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import doydemLogo from "@/assets/doydem-logo-small.png";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall, ExternalLink, ChevronDown, Instagram } from "lucide-react";

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={doydemLogo}
            alt="Doydem Restaurant"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("speisekarte")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Speisekarte
          </button>
          <Link
            to="/galerie"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Galerie
          </Link>
          
          {/* Bestellen Hover Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsOrderDropdownOpen(true)}
            onMouseLeave={() => setIsOrderDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
              Bestellen
              <ChevronDown className={`h-3 w-3 transition-transform ${isOrderDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOrderDropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[160px] rounded-md border border-border bg-popover p-1 shadow-lg">
                  {DELIVERY_SERVICES.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Kontakt
          </button>
          <a
            href="https://www.instagram.com/doydem_stgt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={PHONE_NUMBER}>
              <PhoneCall className="h-4 w-4" />
              Reservieren
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-foreground md:hidden"
          aria-label="Menü öffnen"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("speisekarte")}
              className="text-left text-muted-foreground transition-colors hover:text-primary"
            >
              Speisekarte
            </button>
            <Link
              to="/galerie"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-muted-foreground transition-colors hover:text-primary"
            >
              Galerie
            </Link>
            
            {/* Mobile Bestellen Links */}
            <div className="flex flex-col gap-2 pl-2 border-l-2 border-primary/20">
              <span className="text-sm font-medium text-foreground">Bestellen via:</span>
              {DELIVERY_SERVICES.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  {service.name}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-left text-muted-foreground transition-colors hover:text-primary"
            >
              Kontakt
            </button>
            <Button
              asChild
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={PHONE_NUMBER}>
                <PhoneCall className="h-4 w-4" />
                Reservieren
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
