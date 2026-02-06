import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="mb-1 font-medium">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-muted-foreground">
                Doydem Restaurant
                <br />
                Kaufpark Freiberg
                <br />
                Adalbert-Stifter-Straße 101
                <br />
                70437 Stuttgart
                <br />
                <br />
                Telefon: 0162 3254444
                <br />
                E-Mail: info@doydem-restaurant.de
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="mb-1 font-medium">
                Wer ist verantwortlich für die Datenerfassung?
              </h3>
              <p className="mb-4 text-muted-foreground">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>
              <h3 className="mb-1 font-medium">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-muted-foreground">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                4. Ihre Rechte
              </h2>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                5. Hosting
              </h2>
              <p className="text-muted-foreground">
                Wir hosten die Inhalte unserer Website bei einem externen
                Anbieter. Personenbezogene Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-primary">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
