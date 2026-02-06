import dishBurger from "@/assets/dish-burger.jpeg";
import dishSalad from "@/assets/dish-salad.jpeg";
import dishMeat from "@/assets/dish-meat.jpeg";
import dishMeze from "@/assets/dish-meze.jpeg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

const LIEFERANDO_URL = "https://www.lieferando.de/speisekarte/doydem?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_DEU_DE_%5BRES%5D_%5BENGM%5D_LH_National&utm_campaignid=21814098866&gad_source=1&gad_campaignid=21814098866&gbraid=0AAAAAD3ULIX8aq05AVwXmW7SyRCteojvm&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86sF3UU24rPX3l8XDCyl3eW0UCnOrkpzzhNSjPBZaU4DkyAAq4OaS0aAmFfEALw_wcB#pre-order";

const dishes = [
  {
    name: "Signature Burger",
    description: "Saftig, würzig und unverwechselbar",
    image: dishBurger,
  },
  {
    name: "Frischer Salat",
    description: "Knackig frisch mit hausgemachtem Dressing",
    image: dishSalad,
  },
  {
    name: "Köfte mit Reis",
    description: "Traditionell zubereitet nach Familienrezept",
    image: dishMeat,
  },
  {
    name: "Meze-Platte",
    description: "Vielfalt türkischer Vorspeisen",
    image: dishMeze,
  },
];

const MenuHighlights = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Unsere Highlights
          </h2>
          <p className="text-muted-foreground">
            Entdecke unsere beliebtesten Gerichte
          </p>
        </div>

        {/* Dish Cards Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <Card
              key={dish.name}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold text-foreground">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            disabled
          >
            <FileText className="h-5 w-5" />
            Speisekarte (PDF kommt bald)
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

export default MenuHighlights;
