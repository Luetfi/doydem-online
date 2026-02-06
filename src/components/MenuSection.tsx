import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";
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

const MenuSection = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* Section Header */}
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Speisekarte
        </h2>
        <p className="mb-10 text-muted-foreground">
          Entdecke unsere authentische türkische Küche – von traditionellen Kebabs bis zu hausgemachten Meze.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href="/speisekarte.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5" />
              Speisekarte ansehen
            </a>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ExternalLink className="h-5 w-5" />
                Online bestellen
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
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
