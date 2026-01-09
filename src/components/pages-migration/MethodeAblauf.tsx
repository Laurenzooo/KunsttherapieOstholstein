import { ArrowRight, HelpCircle, Brain, Sparkles, Target, Lightbulb, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
const handsImage = "/assets/MikelaBlanck_SoArbeiteIch-DY8h2Pt5.webp";
const malraumImage = "/assets/MikelaBlanck_Malraum-mtSuT8Kt.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const methods = [
  {
    title: "Personenorientiertes Malen (PM)",
    icon: Brain,
    subtitle: "Entdecken, was in dir liegt",
    description:
      "PM wurde von Bettina Egger und Jörg Merz entwickelt und basiert auf der Erkenntnis, dass Malen ein Spiegel unserer inneren Welt ist. Es geht nicht um künstlerisches Gestalten, sondern um einen begleiteten Prozess der Selbsterfahrung.",
    philosophy:
      "Beim PM entsteht das Bild aus dem Moment heraus – ohne Vorgabe, ohne Thema. Du malst, was gemalt werden will. Ich begleite dich währenddessen aufmerksam und wertfrei, stelle Fragen, biete Impulse an. So können verborgene Ressourcen, Qualitäten und auch Blockaden sichtbar werden.",
    details: [
      "Kein Leistungsdruck – es geht nie um schöne oder 'richtige' Bilder",
      "Du malst intuitiv, ohne vorher nachzudenken",
      "Ich begleite dich durchgehend im Malprozess",
      "Das Bild wird nicht interpretiert oder bewertet",
      "Deine Qualitäten und Ressourcen werden sichtbar gestärkt",
    ],
    suitable:
      "Für alle, die sich selbst besser kennenlernen möchten, ihre Kreativität entdecken oder einen Zugang zu ihren Gefühlen suchen.",
  },
  {
    title: "Lösungsorientiertes Malen (LOM®)",
    icon: Target,
    subtitle: "Eindruck statt Ausdruck",
    description:
      "LOM® wurde von Bettina Egger entwickelt und ist eine eigenständige Methode, die gezielt mit inneren Bildern arbeitet. Im Gegensatz zu ausdrucksorientiertem Malen geht es hier darum, neue, hilfreiche Bilder zu malen – und damit die belastenden inneren Bilder zu verändern.",
    philosophy:
      "Das Prinzip: Unser Gehirn speichert Erfahrungen als innere Bilder. Belastende Erlebnisse hinterlassen oft 'störende' Bilder, die uns unbewusst beeinflussen. Im LOM® malen wir gezielt neue, klare, angenehme Bilder – sogenannte Realbilder – die das Gehirn als neue Referenz abspeichert. So kann Belastendes in den Hintergrund treten.",
    details: [
      "Keine Bildinterpretation oder Analyse nötig",
      "Arbeit mit konkreten Realbildern und Metaphern",
      "Entlastung durch positive, klare innere Bilder",
      "Strukturierte Vorgehensweise mit bewährtem Protokoll",
      "Nachweislich wirksam bei Traumata, Ängsten, Belastungen",
    ],
    suitable:
      "Für Menschen mit konkreten Themen wie Ängsten, belastenden Erinnerungen, Traumata oder wiederkehrenden negativen Gedanken.",
  },
  {
    title: "bildASet Methode",
    icon: Layers,
    subtitle: "Psychoanalytische Selbsterfahrung",
    description:
      "bildASet ist eine psychoanalytisch fundierte Methode der Selbsterfahrung und Selbstreflexion der eigenen Lebensgeschichte. Durch Übertragungsprozesse im Malen können unbewusste Dynamiken sichtbar und bearbeitbar werden.",
    philosophy:
      "Im bildASet-Prozess werden durch das Malen unbewusste Beziehungsmuster und Lebensthemen an die Oberfläche geholt. Die Übertragung auf das Bild ermöglicht es, die eigene Geschichte aus neuer Perspektive zu betrachten und zu integrieren. So können frühe Prägungen erkannt und verarbeitet werden.",
    details: [
      "Psychoanalytisch fundierte Herangehensweise",
      "Arbeit mit Übertragungsprozessen im Malprozess",
      "Selbstreflexion der eigenen Lebensgeschichte",
      "Unbewusste Beziehungsmuster werden sichtbar",
      "Integration von frühen Prägungen und Erfahrungen",
    ],
    suitable:
      "Für Menschen, die ihre eigene Lebensgeschichte verstehen und aufarbeiten möchten, sowie für tiefenpsychologisch orientierte Selbsterfahrung.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Ankommen",
    description:
      "Anwärmen, Tee trinken…..Wie geht es Dir? Was hast Du mitgebracht? Wir explorieren dein Anliegen. Oft ergibt sich das Thema aber auch erst beim Malen. Ich frage ich die Höhe der Belastung ab (SUD - subjektive unit distress 0 - 10)",
  },
  {
    step: "2",
    title: "Malen",
    description:
      "Du startest mit Farbe an der Malwand - meist mit der linken (unkontrollierten) Hand. Ich bin dabei, beobachte, stelle manchmal Fragen, biete Interventionen an, halte den Raum. Der Fokus liegt auf dem Prozess, nicht auf dem Ergebnis.",
  },
  {
    step: "3",
    title: "Reinspüren",
    description:
      "Während des Malens schauen wir gemeinsam immer mal wieder mit Abstand auf das Bild: Was braucht es noch? Wie ist die Verbindung? Was hat sich vielleicht verändert? Kein Interpretieren, sondern Wahrnehmen. Spüren. Atmen.",
  },
  {
    step: "4",
    title: "Bildresonanz",
    description:
      "Ein „gutes“ Bild im Sinne von Wirkung lässt die Belastung des Anliegens, mit dem Du gekommen bist , sinken. Positive Kognitionen werden gestärkt. Das Bild wirkt nach. Auch oft in Träumen. SUD Abfrage Anfang/Ende.",
  },
  {
    step: "5",
    title: "Ende Malsession",
    description:
      "Wir schauen, ob Du noch etwas brauchst - ob der Malprozess für den Termin so abgeschlossen ist, dass Du gut nach Hause gehen kannst. Wir besprechen den weiteren Ablauf und Termine. Fertige Bilder können im Malraum bleiben, bis sie getrocknet und gerollt mitgenommen werden.",
  },
];

const faqs = [
  {
    question: "Muss ich malen können?",
    answer:
      "Nein, überhaupt nicht. Es geht nicht um künstlerisches Talent, Ästhetik oder schöne Bilder. So ist auch nicht das Ergebnis ausschlaggebend, sondern der Malprozess an sich ist die heilsame Erfahrung.",
  },
  {
    question: "Wie lange dauert eine Einheit?",
    answer:
      "Ein Einzeltermin dauert ca. 75 Minuten, manchmal auch etwas länger, je nach Prozess und Absprache. Gruppenformate gehen in der Regel 120 Minuten, damit genug Zeit für alle ist.",
  },
  {
    question: "Wie viele Termine brauche ich?",
    answer:
      "Das ist sehr individuell und hängt von deinem Anliegen ab. Manche Themen brauchen mehrere Bilder, andere lösen sich schneller. Das Tempo richtet sich immer nach deinem Prozess – nicht nach einem festen Plan.",
  },
  {
    question: "Was ist der Unterschied zu anderen Methoden?",
    answer:
      "PM und LOM® sind spezielle Methoden, die sich vom klassischen gestalterischen Arbeiten unterscheiden. Gerade LOM ist eine Methode, die dann weiterhilft, wenn die Analyse, das Durchdenken und Erklären nicht helfen.",
  },
  {
    question: "Gilt Schweigepflicht?",
    answer:
      "Ja, selbstverständlich. Als Heilpraktikerin für Psychotherapie unterliege ich der gesetzlichen Schweigepflicht. Was im Malraum passiert, bleibt im Malraum.",
  },
  {
    question: "Kann ich das auch online machen?",
    answer:
      "Die Arbeit an der Malwand ist ein zentrales Element der Methode. Für bestimmte Anliegen gibt es allerdings die Möglichkeiten der Begleitung per Video – sprich mich gerne an. Die Arbeit mit der bildASet Methode kann auch online genutzt werden. Entsprechende Gruppen werden dazu angeboten. Für eine Einzelsitzung sprich mich gerne an.",
  },
];

export default function MethodeAblauf({ currentPath }: { currentPath?: string }) {
  return (
    <Layout currentPath={currentPath}>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-light text-foreground">So arbeite ich</h1>
                <p className="text-xl text-muted-foreground italic">
                  Die Lösung liegt in dir – ich begleite dich dorthin.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ich arbeite mit zwei wissenschaftlich fundierten Methoden: dem Personenorientierten Malen (PM) und dem
                    Lösungsorientierten Malen (LOM®).
                  </p>
                  <p>
                    Beide nutzen das Malen als therapeutischen Weg zur Selbsterfahrung und zur Lösung von Anliegen – ohne
                    dass du „malen können" musst.
                  </p>
                  <p>
                    Die BildASet Methode arbeitet mit bereitgestellten Bildkarten. Mit diesen kann auf unterschiedliche Art
                    und Weise kreativ gearbeitet werden. Auch hierfür brauchst Du keine Vorkenntnisse.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={handsImage}
                  alt="Hände die sich begegnen als Symbol für Unterstützung"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grundprinzip */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Lightbulb className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-light text-foreground">Das Grundprinzip</h2>
            <p className="text-lg text-muted-foreground">
              Malen ist mehr als Kreativität und Ausdruck. In der Maltherapie zeigt sich, was ist und was gesehen werden will – auch das, was du mit Worten nicht fassen kannst. Auch das, was Du vielleicht noch garnicht weißt.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-lg bg-background border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30 text-center">
                <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-light text-foreground mb-2">Kein Talent nötig</h3>
                <p className="text-sm text-muted-foreground">
                  Ein offenes Herz, Mut und Neugierde sind ausreichend.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30 text-center">
                <Brain className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-light text-foreground mb-2">Zugang zum Unbekannten und Unbewussten</h3>
                <p className="text-sm text-muted-foreground">
                  Das Malen öffnet eine Tür, zu dem, was wir noch nicht wissen.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30 text-center">
                <Target className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-light text-foreground mb-2">Wirksame Veränderung</h3>
                <p className="text-sm text-muted-foreground">
                  Neue innere Bilder können alte Muster, Ängste und Blockaden nachhaltig auflösen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Der Malraum */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-4">
              Der Malraum
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ein besonderer Ort.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={malraumImage}
                  alt="Der Malraum - ein geschützter Ort für therapeutisches Malen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Der Malraum ist schlicht aber einladend gestaltet – ohne Ablenkung, ohne Bewertung. Hier bist du sicher und kannst dich ganz auf deinen inneren Prozess einlassen. Du malst im Stehen an einer großen Malwand auf großformatigem (70cm x 100 cm) Papier. So bist Du mit deinem Bild auf Augenhöhe. Das aufrechte Stehen fördert die Bildbeziehung.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Solltest Du körperliche Einschränkungen haben, finden wir einen guten Weg für Dich zum Malen. Ich arbeite mit hochwertigen Bioresonanz Gouache-Farben der Schweizer Marke Lascaux Resonanz. An zwei großen Tischen ist Platz für kleinere Arbeiten und Gruppen. Bei der bildASet Methode arbeiten wir kleinformatig an Tischen im Sitzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-4">
              Die Methoden im Detail
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            </p>
            <div className="space-y-12">
              {methods.map((method) => (
                <div
                  key={method.title}
                  className="p-8 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-foreground">{method.title}</h3>
                      <p className="text-primary font-medium">{method.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{method.description}</p>

                  <div className="bg-background p-4 rounded-lg border border-border mb-4">
                    <p className="text-sm text-muted-foreground italic">{method.philosophy}</p>
                  </div>

                  <h4 className="font-light text-foreground mb-3">Was das bedeutet:</h4>
                  <ul className="space-y-2 mb-4">
                    {method.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm">
                        <span className="text-primary shrink-0">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm">
                      <strong className="text-foreground">Geeignet für:</strong>{" "}
                      <span className="text-muted-foreground">{method.suitable}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf einer Sitzung */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-4">
              Ablauf einer Sitzung
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              So sieht ein typischer Termin aus – auch wenn jeder Termin anders ist.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "flex gap-4 p-6 rounded-lg bg-background border border-border transition-all duration-300 hover:shadow-md hover:border-primary/30",
                    index === 4 && "md:col-span-2"
                  )}
                >
                  {index < 4 && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {step.step}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-light text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Häufige Fragen</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-lg border border-border px-6 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">Unsicher, ob das passt?</h2>
            <p className="text-lg text-muted-foreground">
              Schreib mir 3 Sätze zu deiner Situation – ich antworte dir persönlich und wir finden heraus, ob und wie
              ich dich unterstützen kann.
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
