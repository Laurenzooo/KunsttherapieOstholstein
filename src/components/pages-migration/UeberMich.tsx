import { ArrowRight, Shield, Sparkles, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import portraitImage from "@/assets/portrait-therapist.jpg?url";

const lifeStations = [
  "Abitur / kaufmännische Ausbildung",
  "Studium der sozialen Verhaltenswissenschaften B.A.",
  "Langjährige Berufstätigkeit in der Wirtschaft im Bereich Umweltpsychologie",
  "Tätigkeit im öffentlichen Gesundheitswesen: Koordination von Geflüchteten und Hilfeplanung für Menschen mit besonderem Teilhabebedarf",
  "Neuorientierung im künstlerisch-kreativen und therapeutischen Raum",
];

const qualifications = [
  "Studium Kunsttherapie 'Personenorientiertes Malen PM' am HiK – Hamburger Institut für Kunsttherapie (Britta Kuhlmann)",
  "Praktikum in der Parkklinik für Psychosomatik Bad Kissingen",
  "Aufbaufortbildung 'Lösungsorientierte Maltherapie LOM®' nach Dr. phil. Bettina Egger und Jörg Merz bei Ursula Riner (Schweiz) und Dagmar Kalder (Marburg)",
  "Heilpraktikerin ausschließlich auf dem Gebiet der Psychotherapie",
  "Alanus Hochschule Weiterbildung 'Körpererleben als Quelle schöpferischen Ausdrucks' (Body-Mind-Centering Methode)",
  "Letzte-Hilfe-Kurs Home Care Berlin e.V.",
  "Zertifizierung in der BildASet-Methode® nach Antoaneta Slavova",
  "Regelmäßige Supervision der eigenen therapeutischen Tätigkeit",
  "Kontinuierliche Weiterbildung im therapeutischen Bereich",
];

const values = [
  {
    icon: Shield,
    title: "Sicherer Rahmen",
    description: "Schweigepflicht und ein geschützter Raum für deinen Prozess.",
  },
  {
    icon: Sparkles,
    title: "Ressourcenorientiert",
    description: "Ich arbeite mit dem, was in dir steckt – nicht gegen dich.",
  },
  {
    icon: RefreshCcw,
    title: "Qualitätssicherung",
    description: "Regelmäßige Supervision und kontinuierliche Weiterbildung.",
  },
];

export default function UeberMich({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Portrait */}
            <div className="aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src={portraitImage}
                alt="Mikela Blanck - Kunsttherapeutin"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-1 md:order-2">
              <h1 className="text-4xl md:text-6xl font-light text-foreground">
                Über mich
              </h1>
              <p className="text-lg text-muted-foreground">
                Seit 25 Jahren lebe ich im schönen Ostholstein und ich liebe es.
                Ich habe drei erwachsene wunderbare hausflüchtige Kinder und bin,
                wie wir alle, auf der spannenden Reise des Lebens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-12">
              Meine Haltung
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-background hover:shadow-md">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-light text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lebensweg */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-4">
              Mein Weg
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Einige Eckpunkte und Haltestellen aus meinem Leben
            </p>

            {/* Timeline Container */}
            <div className="relative mb-16">
              {/* Continuous vertical line */}
              <div className="absolute left-4 top-6 bottom-6 w-1 bg-primary rounded-full -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-4">
                {lifeStations.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    {/* Marker with target/bullseye design */}
                    <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-primary/20 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-card p-5 rounded-xl border border-border">
                      <p className="text-foreground text-sm md:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-12">
              Qualifikationen
            </h2>
            <ul className="space-y-4">
              {qualifications.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Passt das zu dir?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wenn du prüfen willst, ob ich die Richtige für dein Anliegen bin:
              Schreib mir einfach.
            </p>
            <Button asChild size="lg">
              <a href="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}