import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Mikela Blanck</h3>
              <p className="text-sm text-muted-foreground">Kunsttherapie</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wenn Worte nicht mehr weiterhelfen, kann beim Malen die Lösung im Bild entstehen.
            </p>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hallo@kunsttherapie-ostholstein.de"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  hallo@kunsttherapie-ostholstein.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915174272814"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  0151 74272814
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Friedrichstraße 10d<br />
                  23701 Eutin
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 flex-shrink-0" />
                Mo–Fr 10:00–19:00 (nach Termin)
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Start
                </a>
              </li>
              <li>
                <a href="/methode-ablauf" className="text-muted-foreground hover:text-primary transition-colors">
                  So arbeite ich
                </a>
              </li>
              <li>
                <a href="/angebot-preise" className="text-muted-foreground hover:text-primary transition-colors">
                  Angebot & Preise
                </a>
              </li>
              <li>
                <a href="/ueber-mich" className="text-muted-foreground hover:text-primary transition-colors">
                  Über mich
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Elements */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Vertrauen & Qualität</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Heilpraktikerin (Psychotherapie)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Schweigepflicht
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                25 Jahre in Ostholstein
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Regelmäßige Supervision
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mikela Blanck Kunsttherapie. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}