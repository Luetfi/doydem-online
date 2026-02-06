import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import doydemLogo from "@/assets/doydem-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={doydemLogo}
              alt="Doydem Restaurant"
              className="h-24 w-auto opacity-70 transition-opacity hover:opacity-100"
            />
          </Link>

          {/* Social & Legal Links */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/doydem_stgt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* Legal Links */}
            <nav className="flex items-center gap-6">
              <Link
                to="/impressum"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Doydem Restaurant. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
