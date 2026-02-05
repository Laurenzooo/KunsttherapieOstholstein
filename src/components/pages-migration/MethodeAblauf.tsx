"use client";

import { useState } from "react";
import { ArrowRight, HelpCircle, Brain, Sparkles, Target, Lightbulb, Layers, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
const handsImage = "/assets/mikela-blanck-so-arbeite-ich.webp";
const malraumImage = "/assets/malraum-mit-lascaux-gouache-farben.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity";

interface BlogPost {
  title: string;
  subheading?: string | any[];
  slug: string;
  mainImage: any;
  publishedAt: string;
  categories?: string[];
}

const toPlainText = (blocks: any[] = []) => {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
};

const methods = [
  {
    title: "Personenorientiertes Malen (PM)",
    icon: Brain,
    subtitle: "Im Malprozess Gedanken und Gefühle klären",
    description:
      "POM wurde von der Schweizerin Dr. Phil. Bettina Egger entwickelt. Der Schwerpunkt liegt auf dem Dialog zwischen der malenden Person und dem Bild. Von Geburt an tragen wir einzigartige Eigenschaften in uns. Durch Erfahrungen und Prägungen im Laufe unseres Lebens kann der Zugang zu diesem inneren Kern jedoch verblassen. Das Begleitete Malen macht sichtbar, welche inneren Hindernisse dieser Verbindung im Weg stehen – vor allem Ängste und Glaubenssätze, die unsere Offenheit, Lebensfreude und Handlungsfähigkeit einschränken.",
    philosophy:
      "Beim PM entsteht das Bild aus dem Moment heraus – ohne Vorgabe, ohne Thema. Du malst, was gemalt werden will. Ich begleite und unterstütze dich währenddessen aufmerksam und wertfrei, stelle Fragen, biete Interventionen an.",
    details: [
      "Kein Leistungsdruck – es geht nie um schöne oder 'richtige' Bilder",
      "Ureigene Bilder ermöglichen den tiefen Kontakt mit dir selber",
      "Ich begleite dich durchgehend im Malprozess - Du bist nicht alleine",
      "Das Bild wird nicht interpretiert oder bewertet",
      "Deine ursprünglichen Qualitäten und Ressourcen werden gestärkt",
    ],
    suitable:
      "Für alle, die sich selbst besser kennenlernen möchten. Die sich langsam an die Maltherapie herantasten möchten. Die hochwertige Farben haptisch und sinnlich genießen möchten. Niedrigschwellig und doch tief gehend. Kreativitätsfördernd.",
    blog: {
      title: "Der Dialog mit dem Bild",
      category: "Methoden",
      slug: "personenorientierte-maltherapie",
      image: handsImage,
      date: "2024-01-15",
      excerpt: "Wie die malerische Selbsterfahrung hilft, innere Blockaden zu lösen."
    }
  },
  {
    title: "Lösungsorientiertes Malen (LOM®)",
    icon: Target,
    subtitle: "Eindruck statt Ausdruck",
    description:
      "LOM® wurde von den Schweizern Jörg Merz und Dr. Phil Bettina Egger entwickelt und ist eine eigenständige Methode, die gezielt mit inneren Bildern arbeitet. Im Gegensatz zu ausdrucksorientiertem Malen geht es hier darum, neue, hilfreiche Bilder zu malen – und damit die belastenden inneren Bilder zu verändern. LOM® wirkt primär auf neuronaler Ebene und unterstützt nachhaltige Veränderungen, die zu einer spürbaren Verbesserung der Lebensqualität beitragen.",
    descriptionExtended:
      "Die maltherapeutische Arbeit basiert auf standardisierten Erhebungen; der Entwicklungsverlauf wird zu Beginn und am Ende auf einer Skala von 0 bis 10 eingeschätzt. Die Wirksamkeit von LOM® ist wissenschaftlich belegt. Die Maltherapeutin bzw. der Maltherapeut schlägt eine zum Anliegen passende, klar strukturierte Vorgehensweise vor und begleitet die Malenden während des gesamten Malprozesses achtsam.",
    philosophy:
      "Das Prinzip: Unser Gehirn speichert Erfahrungen als innere Bilder. Belastende Erlebnisse hinterlassen oft 'störende' Bilder, die uns unbewusst beeinflussen. Im LOM® malen wir gezielt neue, klare, störungsfreie Bilder – sogenannte Realbilder – die das Gehirn als neue Referenz abgespeichert. Veränderungen der Emotionen werden möglich durch Veränderungen am Bild. Metaphern regulieren Emotionen.",
    details: [
      "Keine Bildinterpretation oder Analyse",
      "Klar strukturierte Vorgehensweise",
      "Arbeit mit Bildkorrekturen und Metaphern",
      "Entlastung durch positive, klare innere Bilder",
      "Strukturierte Vorgehensweise mit bewährtem Protokoll",
      "Lösungsorientiert wirksam bei Symptomen, Traumata, Ängsten, Beziehungsproblemen etc.",
    ],
    suitable:
      "Für Menschen mit konkreten Themen, die unter Anleitung strukturiert und relativ geführt ihr Anliegen bearbeiten möchten. Die sich eine zeitnahe Entlastung wünschen.",
    blog: {
      title: "Worauf es beim LOM® ankommt",
      category: "Therapie",
      slug: "lom-maltherapie",
      image: malraumImage,
      date: "2024-02-01",
      excerpt: "Wieso Realbilder so wirkungsvoll auf unser Gehirn wirken."
    }
  },
  {
    title: "bildASet Methode",
    icon: Layers,
    subtitle: "Übertragungsgeschehen in der kunsttherapeutischen Selbsterfahrung",
    description:
      "Die BildASet Methode wurde von Antoaneta Slavova entwickelt. Im Mittelpunkt steht nicht das Gespräch als vermittelnde Instanz zwischen zwei Menschen, sondern die unbewusste Resonanz zwischen den entstandenen Bildern. Diese eröffnet einen neuen, bildhaften Kommunikationsraum. Durch den Austausch von Bildern können unbewusste Emotionen und innere Ressourcen sichtbar werden und in Bewegung kommen.",
    descriptionExtended:
      "Gleichzeitig lädt die Methode dazu ein, Prozesse zu verlangsamen und bewusst Raum für Reflexion zu schaffen. Auf diese Weise werden innere Widerstände behutsam wahrnehmbar und können achtsam angesprochen und integriert werden.",
    philosophy:
      "Die bildASet-Methode macht die visuellen Entsprechungen innerer Themen auf unmittelbare Weise zugänglich, sodass sie erkannt und in einen Wandlungsprozess geführt werden können.",
    details: [
      "Intuitives Arbeiten mit Bildkarten der Kunsttherapeutin",
      "Arbeit mit Übertragungsprozessen im Malprozess",
      "Gemeinsame Bildinterpretation und Analyse",
      "Niedrigschwellige Methode geeignet auch zur Psychohygiene in helfenden Berufen",
      "Eigene Kartensets können entwickelt werden",
      "Kleinformatiges Malen am Tisch",
      "Online-Sitzungen möglich",
    ],
    suitable:
      "Für Menschen, die kreativ and aktiv in die eigene intensive Selbsterfahrung - vorrangig in der Gruppe - einsteigen möchten. Die auf das Übertragungsgeschehen und Themen der Gruppe neugierig sind.",
    blog: {
      isPlaceholder: true,
      title: "Die BildASet Methode",
      category: "Selbsterfahrung",
      slug: "#",
      image: "/assets/bildaset-methode-karten.webp",
      date: "Bald verfügbar",
      excerpt: "In diesem kommenden Artikel erfährst du alles über die unbewusste Resonanz zwischen Bildern."
    }
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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

function BlogCard({ blog, isMobile }: { blog: any, isMobile?: boolean }) {
  if (!blog) return null;
  const isPlaceholder = blog.isPlaceholder;

  // Use Sanity data if available, otherwise fallback to static placeholder data
  const title = blog.title;
  const slug = isPlaceholder ? "#" : blog.slug;
  const image = (isPlaceholder || !blog.mainImage) ? blog.image : urlFor(blog.mainImage).width(600).height(375).url();
  const date = isPlaceholder ? blog.date : formatDate(blog.publishedAt);
  const category = isPlaceholder ? blog.category : (blog.categories && blog.categories.length > 0 ? blog.categories[0] : 'Artikel');
  const excerpt = isPlaceholder ? blog.excerpt : (blog.subheading ? (typeof blog.subheading === 'string' ? blog.subheading : toPlainText(blog.subheading as any)) : '');

  const content = (
    <div
      className={cn(
        "group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm transition-all duration-500 border border-border/50",
        !isPlaceholder && "hover:shadow-xl hover:-translate-y-1",
        isMobile ? "max-w-sm mx-auto w-full" : "h-fit w-full",
        isPlaceholder && "opacity-80"
      )}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            !isPlaceholder && "group-hover:scale-105"
          )}
        />
        {!isPlaceholder && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-[10px] font-medium text-muted-foreground"
          >
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            {category}
          </span>
        </div>

        <h4 className="text-lg font-light tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
          {title}
        </h4>

        {excerpt && (
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-6">
            {excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center text-foreground font-medium group/link text-xs">
          <span className="border-b border-foreground/10 group-hover/link:border-primary transition-colors duration-300">
            {isPlaceholder ? "Artikel in Arbeit" : "Weiterlesen"}
          </span>
          {!isPlaceholder && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );

  if (isPlaceholder) return content;

  return (
    <a href={`/blog/${slug}`} className="block h-full">
      {content}
    </a>
  );
}

function MethodCard({ method }: { method: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="p-8 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
    >
      <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
        {/* Blog Column (Left) */}
        <div className="hidden md:block">
          <BlogCard blog={method.blog} />
        </div>

        {/* Text Column (Right) */}
        <div>
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

          {/* Mobile Blog Card */}
          <div className="md:hidden mt-6 mb-8 bg-background/50 p-6 rounded-xl border border-border/50">
            <BlogCard blog={method.blog} isMobile />
          </div>

          {isOpen && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              {method.descriptionExtended && (
                <p className="text-muted-foreground mb-4">{method.descriptionExtended}</p>
              )}

              <div className="bg-background p-4 rounded-lg border border-border mb-4">
                <p className="text-sm text-muted-foreground italic">{method.philosophy}</p>
              </div>

              <h4 className="font-light text-foreground mb-3">Was das bedeutet:</h4>
              <ul className="space-y-2 mb-4">
                {method.details.map((detail: string) => (
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
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 h-auto p-0 hover:bg-transparent text-primary hover:text-primary/80 font-medium flex items-center gap-1 group"
          >
            {isOpen ? (
              <>
                Weniger anzeigen
                <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                Details anzeigen
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function MethodeAblauf({ currentPath, pmBlogPost, lomBlogPost }: { currentPath?: string, pmBlogPost?: any, lomBlogPost?: any }) {
  // Merge real blog data into methods array
  const methodsWithBlogs = methods.map(method => {
    if (method.title.includes("Personenorientiertes")) {
      return { ...method, blog: pmBlogPost || method.blog };
    }
    if (method.title.includes("Lösungsorientiertes")) {
      return { ...method, blog: lomBlogPost || method.blog };
    }
    return method;
  });

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
            <div className="grid md:grid-cols-[6fr_7fr] gap-8 items-center">
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
              {methodsWithBlogs.map((method) => (
                <MethodCard key={method.title} method={method} />
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
