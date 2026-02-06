import { useState } from "react";
import { Link } from "react-router-dom";
import doydemLogo from "@/assets/doydem-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";

const LIEFERANDO_URL = "https://www.lieferando.de/speisekarte/doydem?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_DEU_DE_%5BRES%5D_%5BENGM%5D_LH_National&utm_campaignid=21814098866&gad_source=1&gad_campaignid=21814098866&gbraid=0AAAAAD3ULIX8aq05AVwXmW7SyRCteojvm&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86sF3UU24rPX3l8XDCyl3eW0UCnOrkpzzhNSjPBZaU4DkyAAq4OaS0aAmFfEALw_wcB#pre-order";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("speisekarte")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Speisekarte
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Kontakt
          </button>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={LIEFERANDO_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Bestellen
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
              <a href={LIEFERANDO_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Jetzt bestellen
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
