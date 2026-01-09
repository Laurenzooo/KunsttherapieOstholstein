import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { toast } from "sonner";

export default function Kontakt({ currentPath }: { currentPath?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Vielen Dank! Deine Nachricht wurde gesendet.");
  };

  return (
    <Layout currentPath={currentPath}>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-foreground">Kontakt</h1>
            <p className="text-lg text-muted-foreground">
              Ich freue mich auf deine Nachricht. Schreib mir, worum es geht – ich melde mich zeitnah zurück.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-foreground mb-6">So erreichst du mich</h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:hallo@kunsttherapie-ostholstein.de"
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">E-Mail</p>
                        <p className="text-sm text-muted-foreground">hallo@kunsttherapie-ostholstein.de</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+4915174272814"
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Telefon</p>
                        <p className="text-sm text-muted-foreground">0151 74272814</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        Friedrichstraße 8c
                        <br />
                        23701 Eutin
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Termine</p>
                      <p className="text-sm text-muted-foreground">nach Absprache</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Cancellation Note */}
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Absage:</strong> Bitte bis 24 Stunden vorher absagen. Später
                  abgesagte Termine werden ggf. in Rechnung gestellt.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-lg bg-card border border-border">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-light text-foreground mb-2">Danke für deine Nachricht!</h3>
                  <p className="text-muted-foreground">Ich melde mich so bald wie möglich zurück.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-light text-foreground mb-2">Anfrage senden</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" type="text" placeholder="Dein Name" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" type="email" placeholder="deine@email.de" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefon (optional)</Label>
                      <Input id="phone" type="tel" placeholder="Deine Telefonnummer" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Dein Anliegen *</Label>
                      <Textarea
                        id="message"
                        placeholder="Erzähl mir kurz, worum es geht..."
                        rows={4}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="privacy" required className="mt-1" />
                      <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed">
                        Ich habe die{" "}
                        <a href="/datenschutz" className="text-primary underline hover:no-underline">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Anfrage senden
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">* Pflichtfelder</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
