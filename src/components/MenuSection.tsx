import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const LIEFERANDO_URL = "https://www.lieferando.de/speisekarte/doydem?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_DEU_DE_%5BRES%5D_%5BENGM%5D_LH_National&utm_campaignid=21814098866&gad_source=1&gad_campaignid=21814098866&gbraid=0AAAAAD3ULIX8aq05AVwXmW7SyRCteojvm&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86sF3UU24rPX3l8XDCyl3eW0UCnOrkpzzhNSjPBZaU4DkyAAq4OaS0aAmFfEALw_wcB#pre-order";

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
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={LIEFERANDO_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              Online bestellen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
