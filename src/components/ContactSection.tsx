import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const openingHours = [
  { day: "Montag", hours: "Geschlossen" },
  { day: "Dienstag", hours: "11:00 - 21:30" },
  { day: "Mittwoch", hours: "11:00 - 21:30" },
  { day: "Donnerstag", hours: "11:00 - 21:30" },
  { day: "Freitag", hours: "11:00 - 03:00" },
  { day: "Samstag", hours: "13:00 - 03:00" },
  { day: "Sonntag", hours: "14:00 - 21:30" },
];

const ContactSection = () => {
  return (
    <section className="bg-card px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Kontakt & Standort
          </h2>
          <p className="text-muted-foreground">
            Besuche uns im Kaufpark Freiberg
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Adresse</h3>
                <p className="text-muted-foreground">
                  Kaufpark Freiberg
                  <br />
                  Adalbert-Stifter-Straße 101
                  <br />
                  70437 Stuttgart
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Telefon</h3>
                <a
                  href="tel:01623254444"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  0162 3254444
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">E-Mail</h3>
                <a
                  href="mailto:info@doydem-restaurant.de"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  info@doydem-restaurant.de
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="rounded-lg border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Öffnungszeiten
              </h3>
            </div>
            <Table>
              <TableBody>
                {openingHours.map((item) => (
                  <TableRow
                    key={item.day}
                    className="border-border hover:bg-muted/50"
                  >
                    <TableCell className="font-medium text-foreground">
                      {item.day}
                    </TableCell>
                    <TableCell
                      className={`text-right ${
                        item.hours === "Geschlossen"
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.hours}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
