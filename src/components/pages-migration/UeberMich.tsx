import { ArrowRight, Shield, Sparkles, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
const portraitImage = "/assets/mikela-blanck-portrait.webp";

const lifeStations = [
  "Abitur / kaufmännische Ausbildung",
  "Studium der sozialen Verhaltenswissenschaften B.A.",
  "Berufstätigkeit in der Wirtschaft und in verschiedenen Projekten",
  "Tätigkeit im öffentlichen Gesundheitswesen als Koordinatorin für die Integration von Geflüchteten und in der Hilfeplanung für Menschen mit besonderem Teilhabebedarf",
  "Begleitung von Menschen in der Qualifizierten Assistenz der Eingliederungshilfe",
  "Mitarbeit in einem Projekt zur sozialen Wohnraumversorgung",
  "Neuorientierung im künstlerisch-kreativen und therapeutischen Raum",
];

const qualifications = [
  "Studium Soziale Verhaltenswissenschaften B.A. Fernuniversität Hagen",
  "Studium Kunsttherapie 'Personenorientiertes Malen PM' am HiK – Hamburger Institut für Kunsttherapie (Britta Kuhlmann)",
  "Praktikum in der Parkklinik für Psychosomatik Bad Kissingen Bereich Kunsttherapie",
  "Aufbaufortbildung 'Lösungsorientierte Maltherapie LOM®' nach Dr. phil. Bettina Egger und Jörg Merz bei Ursula Riner (Schweiz) und Dagmar Kalder (Marburg)",
  "Heilpraktikerin ausschließlich auf dem Gebiet der Psychotherapie",
  "Alanus Hochschule Weiterbildung 'Körpererleben als Quelle schöpferischen Ausdrucks’ (Body-Mind-Centering Methode)",
  "Letzte-Hilfe-Kurs Home Care Berlin e.V.",
  "Zertifizierung in der BildASet-Methode® nach Antoaneta Slavova",
  "LOM Weiterbildungsmodule bei Ulrike Jünger zu: Genogram Arbeit, Lebensmelodie und LOM-Unfassbar",
  "Einwöchige Weiterbildung Systemischer Coach Kinder u. Jugendliche",
  "Einführungsworkshop 3 Tage IFS - Internal Family System",
  "Regelmäßige Supervision der eigenen therapeutischen Tätigkeit",
  "LOM Weiterbildungsmodul ADHS bei Britta Kuhlmann am HIK",
  "Teilnahme an fachgebundenen Netzwerkveranstaltungen",
  "Kontinuierliche Weiterbildung im therapeutischen Bereich",
];

const values = [
  {
    icon: Shield,
    title: "Sicherer Rahmen",
    description: "Ein geschützter Raum für deinen Prozess. Ich unterliege der Schweigepflicht. Du bist nicht allein.",
  },
  {
    icon: Sparkles,
    title: "Ressourcenorientiert",
    description: "Wir arbeiten mit deinen Qualitäten. Du bist wertvoll. In dir liegt die Lösung.",
  },
  {
    icon: RefreshCcw,
    title: "Qualitätssicherung",
    description: "Regelmäßige Supervision und kontinuierliche Weiterbildung. Mitglied im LOM Netzwerk Deutschland",
  },
];

export default function UeberMich({
  currentPath,
  portraitImg,
  malraumImg
}: {
  currentPath?: string;
  portraitImg?: any;
  malraumImg?: any;
}) {
  return (
    <Layout currentPath={currentPath}>
      {/* Hero / Introduction Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Portrait */}
            <div className="aspect-[4/5] rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src={portraitImg?.src || portraitImage}
                srcSet={portraitImg?.srcSet}
                sizes="(max-width: 768px) 100vw, 500px"
                alt="Mikela Blanck - Kunsttherapeutin"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-light text-foreground">
                Über mich
              </h1>
              <h2 className="text-xl md:text-2xl text-primary italic">
                Mein Weg und meine Begleitung heute
              </h2>
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  Mein Weg schlängelt sich nun schon seit über 55 Jahren durch
                  diese Welt. Es gab Zeiten, in denen ich ihm hektisch
                  nachgelaufen bin, andere Jahre, in denen ich ihn ruhig und
                  bewusst beschritten habe, und Phasen, in denen ich dort ging,
                  wo es noch keinen Weg gab.
                </p>
                <p>
                  Diese eigenen Erfahrungen sind Teil meiner Geschichte. Durch
                  sie habe ich gelernt, wie wertvoll ein Raum ist, in dem alles
                  sein darf, und wie heilsam es sein kann, dem Inneren auf die
                  Spur zu kommen. Und zwar nicht über Worte allein, sondern über
                  den malerischen Ausdruck im Bild und in der Bewegung mit
                  Farbe.
                </p>
                <p>
                  In meiner Arbeit lade ich dich ein, anzukommen, zuzulassen und
                  neu zu vertrauen. Malen und Gestalten öffnen einen Zugang zu
                  dem, was sich oft nicht in Worte fassen lässt. Erfahre mehr darüber, <a href="/methode-ablauf" className="text-primary hover:underline">wie ich arbeite</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={malraumImg?.src || "/assets/mikela-blanck-malraum.webp"}
                srcSet={malraumImg?.srcSet}
                sizes="(max-width: 768px) 100vw, 600px"
                alt="Der Malraum"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                Das Malen kann zeigen, wo althergebrachte Denkmuster sitzen, wo vielleicht schon
                Veränderungen gewachsen sind aber auch wo sich innere
                Qualitäten zeigen und neue Perspektiven entstehen dürfen.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ich begleite dich achtsam und wertfrei — in Einzelterminen, in
                kleinen Gruppen oder in besonderen thematischen Angeboten.
                Mein Raum ist so gestaltet, dass du dich sicher und angenommen
                fühlen kannst.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Beim Malen geht es nicht um Können oder richtig oder falsch.
                Es geht darum, dich selbst achtsam wahrzunehmen und zu
                entdecken. Dann kann Ruhe entstehen, Klarheit wachsen und eine
                Lösung zeigt sich dann oft von selber.
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
              Schreib mir einfach. Oder informiere dich zuerst über meine <a href="/angebot-preise" className="text-primary hover:underline">Angebote & Preise</a> und lies in meinem <a href="/blog" className="text-primary hover:underline">Blog</a>, was mich bewegt.
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