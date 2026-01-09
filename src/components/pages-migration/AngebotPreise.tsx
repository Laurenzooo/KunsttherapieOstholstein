import { ArrowRight, Clock, Users, Euro, HeartHandshake, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const offerings = [
  {
    title: "Einzelsitzung",
    duration: "90 Minuten",
    price: "85 €",
    icon: Clock,
    description: "Individuelle Begleitung in deinem Tempo. Wir nehmen uns Zeit für das, was sich zeigen will.",
  },
  {
    title: "Paarsitzung",
    duration: "90 - 120 Minuten",
    price: "120 € / 150 €",
    icon: Users,
    description: "Gemeinsam Lösungen finden und neue Wege der Kommunikation über das Bild entdecken.",
  },
  {
    title: "Gruppenangebot",
    duration: "3 Stunden",
    price: "45 €",
    icon: HeartHandshake,
    description: "In der Gemeinschaft malen, sich inspirieren lassen und den eigenen Raum halten.",
  },
  {
    title: "bildASet Methode",
    duration: "Wochenendkurs",
    price: "auf Anfrage",
    icon: Layers,
    description: "Intensive psychoanalytische Selbsterfahrung in der Gruppe nach der bildASet-Methode.",
  },
];

const faqs = [
  {
    question: "Übernimmt die Krankenkasse die Kosten?",
    answer: "Die Kosten für Kunsttherapie werden in der Regel nicht von den gesetzlichen Krankenkassen übernommen. Private Krankenkassen oder Zusatzversicherungen für Heilpraktikerleistungen übernehmen die Kosten manchmal anteilig. Bitte informiere dich vorab bei deiner Versicherung.",
  },
  {
    question: "Muss ich malen können?",
    answer: "Nein, absolut nicht! Es geht nicht um Kunst oder Ästhetik, sondern um den Prozess und den persönlichen Ausdruck. Jeder kann malen.",
  },
  {
    question: "Wie viele Termine sind nötig?",
    answer: "Das ist sehr individuell. Manchmal hilft schon ein einzelner Termin, um Klarheit zu finden. Oft ist ein Prozess über mehrere Sitzungen sinnvoll. Wir entscheiden das gemeinsam nach dem Erstgespräch.",
  },
];

export default function AngebotPreise({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-foreground">Angebot & Preise</h1>
            <p className="text-lg text-muted-foreground">
              Transparente Konditionen für deine persönliche Begleitung.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg bg-card border border-border flex flex-col h-full hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-light text-foreground mb-2">{item.title}</h3>
                <div className="text-sm text-muted-foreground mb-4 font-medium">{item.duration}</div>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{item.description}</p>
                <div className="text-2xl font-semibold text-foreground pt-4 border-t border-border">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-foreground">Wichtige Hinweise</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">01</span>
                  <p className="text-muted-foreground">
                    Das Erstgespräch (ca. 45 Min.) dient dem Kennenlernen und wird mit 40 € berechnet.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">02</span>
                  <p className="text-muted-foreground">
                    Solltest du einen Termin nicht wahrnehmen können, sage ihn bitte mindestens 24 Stunden vorher ab.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">03</span>
                  <p className="text-muted-foreground">
                    Alle Preise verstehen sich inklusive Materialkosten für Papier und Farben.
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-lg bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-light text-foreground mb-4 flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                Soziales Honorar
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mir ist es wichtig, dass Kunsttherapie für jeden zugänglich ist. Wenn du dich in einer schwierigen
                finanziellen Lage befindest, sprich mich bitte an. Wir finden gemeinsam eine Lösung im Rahmen meines
                sozialen Honorars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Hast du Fragen zum Ablauf?
            </h2>
            <p className="text-lg text-muted-foreground">
              Gerne klären wir Details in einem kurzen Telefonat oder beim Ersttermin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/kontakt">
                  Termin anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+4915174272814">0151 74272814</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
