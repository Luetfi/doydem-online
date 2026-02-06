import { MapPin, Phone, Mail, Clock, Send, PhoneCall } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name ist zu lang"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail ist zu lang"),
  phone: z.string().max(50, "Telefonnummer ist zu lang").optional(),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht ist zu lang"),
});

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || undefined,
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

        {/* Reservation CTA */}
        <div className="mb-12 rounded-lg border border-primary/30 bg-primary/5 p-6 text-center md:p-8">
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            Tisch reservieren
          </h3>
          <p className="mb-6 text-muted-foreground">
            Für Reservierungen rufen Sie uns einfach an – wir freuen uns auf
            Ihren Besuch!
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="tel:01623254444">
              <PhoneCall className="h-5 w-5" />
              Jetzt anrufen: 0162 3254444
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column: Contact Info + Opening Hours */}
          <div className="space-y-8">
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

          {/* Right Column: Contact Form */}
          <div className="rounded-lg border border-border bg-background p-6">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Kontaktformular
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Haben Sie Fragen oder Anregungen? Schreiben Sie uns!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                  className={`bg-card ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                  required
                  className={`bg-card ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ihre Telefonnummer"
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  required
                  rows={4}
                  className={`bg-card ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
