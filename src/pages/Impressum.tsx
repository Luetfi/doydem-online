import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Impressum – Doydem Restaurant Stuttgart</title>
        <meta name="description" content="Impressum des Doydem Restaurants in Stuttgart. Angaben gemäß § 5 TMG, Kontaktinformationen und rechtliche Hinweise." />
        <link rel="canonical" href="https://doydem-restaurant.de/impressum" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
            Impressum
          </h1>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-muted-foreground">
                Doydem Restaurant
                <br />
                Adalbert-Stifter-Straße 101
                <br />
                70437 Stuttgart
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                Kontakt
              </h2>
              <p className="text-muted-foreground">
                Telefon: 0162 3254444
                <br />
                E-Mail: info@doydem-restaurant.de
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
