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
    <section className="bg-card px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Kontakt & Standort in Stuttgart
          </h2>
          <p className="text-muted-foreground">
            Besuchen Sie uns im Kaufpark Freiberg – Ihr türkisches Restaurant in Stuttgart-Nord
          </p>
        </div>

        {/* Reservation CTA */}
        <div className="mb-10 rounded-lg border border-primary/30 bg-primary/5 p-5 text-center md:p-6">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            Tisch reservieren
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
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

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column: Contact Info + Opening Hours */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-0.5 text-sm font-semibold text-foreground">Adresse</h3>
                  <p className="text-sm text-muted-foreground">
                    Kaufpark Freiberg
                    <br />
                    Adalbert-Stifter-Straße 101
                    <br />
                    70437 Stuttgart
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2.5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-0.5 text-sm font-semibold text-foreground">Telefon</h3>
                  <a
                    href="tel:01623254444"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    0162 3254444
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2.5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-0.5 text-sm font-semibold text-foreground">E-Mail</h3>
                  <a
                    href="mailto:info@doydem-restaurant.de"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    info@doydem-restaurant.de
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="rounded-full bg-primary/10 p-2.5">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
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
                      <TableCell className="py-2 text-sm font-medium text-foreground">
                        {item.day}
                      </TableCell>
                      <TableCell
                        className={`py-2 text-right text-sm ${
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
          <div className="rounded-lg border border-border bg-background p-4 md:p-5">
            <h3 className="mb-1 text-lg font-semibold text-foreground">
              Kontaktformular
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Haben Sie Fragen oder Anregungen? Schreiben Sie uns!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                  className={`h-9 bg-card text-sm ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    required
                    className={`h-9 bg-card text-sm ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs">Telefon (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ihre Telefonnummer"
                    className="h-9 bg-card text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs">Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  required
                  rows={3}
                  className={`bg-card text-sm ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
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

        {/* Google Maps */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8477647989514!2d9.163547776891977!3d48.83826097132985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da3c13c77777%3A0x7f3a4b4b4b4b4b4b!2sAdalbert-Stifter-Stra%C3%9Fe%20101%2C%2070437%20Stuttgart!5e0!3m2!1sde!2sde!4v1699999999999!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Doydem Restaurant Standort"
              className="w-full"
            />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            <a
              href="https://www.google.com/maps/dir//Adalbert-Stifter-Stra%C3%9Fe+101,+70437+Stuttgart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <MapPin className="h-4 w-4" />
              Route in Google Maps öffnen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
