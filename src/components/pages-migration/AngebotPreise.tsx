import { ArrowRight, Clock, Users, Euro, Heart, Layers, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const offerings = [
  {
    title: "Einzeltermin PM/LOM®",
    subtitle: "Erwachsene & Jugendliche",
    icon: Clock,
    details: [
      { label: "Dauer", value: "ca. 75 Minuten" },
      { label: "Termine", value: "nach Absprache" },
    ],
    pricing: [
      { label: "Einzeltermin", value: "79 €" }
    ],
    note: "Kinder & Jugendliche zahlen 69€"
  },
  {
    title: "Gruppe PM/LOM®",
    subtitle: "Erwachsene",
    icon: Users,
    details: [
      { label: "Voraussetzung", value: "vorheriger Einzeltermin" },
      { label: "Gruppe", value: "2–5 Personen" },
      { label: "Dauer", value: "ca. 120 Minuten" },
      { label: "Termine", value: "nach Absprache" },
    ],
    pricing: [
      { label: "Pro Person", value: "49 €" }
    ]
  }
];

const additionalOfferings = [
  {
    title: "Trauer & Abschied",
    subtitle: "Trauerbegleitung Kreativ Gruppe. Wir arbeiten mit verschiedenen Materialien",
    icon: Heart,
    details: [
      { label: "Gruppe", value: "3–6 Personen" },
      { label: "Dauer", value: "ca. 120 Minuten" },
      { label: "Termine", value: "Freitags 10.30 – 12.30 Uhr" },
      { label: "Einzeltermine", value: "nach Absprache" },
    ],
    pricing: [
      { label: "Gruppe, p.P.", value: "30–55 €" },
      { label: "Einzeltermin", value: "40–55 €" }
    ],
    note: "Flow-Tarif (Du entscheidest was du zahlen kannst)",
    buttonText: "Trauerbegleitung anfragen",
    link: "/kontakt"
  },
  {
    title: "bildASet Methode",
    subtitle: "Kunsttherapeutische Selbsterfahrung",
    icon: Layers,
    details: [
      { label: "Vorgehensweise", value: "Tiefenpsychologisch" },
      { label: "Frauengruppe 3–6 Personen", value: "ca. 120 Minuten" },
      { label: "Einzeltermine", value: "ca. 60 Minuten" },
      { label: "Termine", value: "nach Absprache" },
    ],
    pricing: [
      { label: "Gruppe, p.P.", value: "30–55 €" },
      { label: "Einzeltermin", value: "40–55 €" }
    ],
    note: "Flow-Tarif (Du entscheidest was du zahlen kannst)",
    buttonText: "Mehr erfahren",
    link: "/methode-ablauf"
  },
  {
    title: "Workshops & Specials",
    subtitle: "Aktuelle Gruppenangebote",
    icon: Calendar,
    description: "Informationen zu meinen aktuellen Workshops, neuen Angeboten und kreativen Impulsen findest du regelmäßig in meinem Blog.",
    buttonText: "Zum Blog",
    link: "/blog",
    variant: "outline"
  }
];



export default function AngebotPreise({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-foreground">Meine Angebote</h1>
            <p className="text-lg text-muted-foreground">
              Transparente Konditionen für deine persönliche Begleitung.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col h-full hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{item.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {item.details.map((detail) => (
                    <div key={detail.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="text-foreground font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="pt-4 border-t border-border mb-4">
                    {item.pricing.map((price) => (
                      <div key={price.label} className="flex justify-between items-baseline">
                        <span className="text-sm text-muted-foreground">{price.label}</span>
                        <span className="text-2xl font-light text-foreground">{price.value}</span>
                      </div>
                    ))}
                  </div>

                  {item.note && (
                    <p className="text-[10px] text-center text-muted-foreground mb-6">
                      {item.note}
                    </p>
                  )}

                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 group">
                    <a href="/kontakt" className="flex items-center justify-center gap-2 text-sm">
                      Termin anfragen
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings Header */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">Weitere Angebote</h2>
          </div>
        </div>
      </section>

      {/* Additional Pricing Cards */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalOfferings.map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col h-full hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{item.subtitle}</p>
                  </div>
                </div>

                {item.details ? (
                  <div className="space-y-2 mb-8">
                    {item.details.map((detail) => (
                      <div key={detail.label} className="flex justify-between text-[13px] gap-2">
                        <span className="text-muted-foreground shrink-0">{detail.label}</span>
                        <span className="text-foreground font-medium text-right">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto">
                  {item.pricing && (
                    <div className="pt-4 border-t border-border mb-4 space-y-2">
                      {item.pricing.map((price) => (
                        <div key={price.label} className="flex justify-between items-baseline">
                          <span className="text-sm text-muted-foreground">{price.label}</span>
                          <span className="text-xl font-light text-foreground">{price.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.note && (
                    <p className="text-[10px] text-center text-muted-foreground mb-6">
                      {item.note}
                    </p>
                  )}

                  <Button
                    asChild
                    size="lg"
                    variant={(item.variant as "outline") || "default"}
                    className={cn(
                      "w-full rounded-xl h-12 group",
                      !item.variant && "bg-primary hover:bg-primary/90 text-white"
                    )}
                  >
                    <a href={item.link} className="flex items-center justify-center gap-2 text-sm">
                      {item.buttonText}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-light text-foreground">Wichtige Hinweise</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 rounded-xl bg-background/50 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Euro className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Kostenerstattung</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In der Regel Selbstzahler. Einige Krankenkassen können Kosten übernehmen oder bezuschussen – bitte individuell bei deiner Kasse nachfragen.
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-background/50 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Terminabsage</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Solltest du einen Termin nicht wahrnehmen können, sage ihn bitte mindestens 24 Stunden vorher ab.
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-background/50 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Materialkosten</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Alle Preise verstehen sich inklusive Materialkosten für Papier und Farben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Noch Fragen?
            </h2>
            <p className="text-lg text-muted-foreground">
              Schreib mir kurz, worum es geht – ich melde mich zeitnah zurück.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-xl px-10">
                <a href="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
