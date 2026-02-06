import doydemLogo from "@/assets/doydem-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <img
          src={doydemLogo}
          alt="Doydem Restaurant"
          className="h-12 w-auto opacity-70"
        />
        <p className="text-sm text-muted-foreground">
          © {currentYear} Doydem Restaurant. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
