import { ArrowRight, Heart, Users, Compass, Brain, Zap, Sparkles, HeartCrack, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lazy load heavy components
const GDPRMap = lazy(() => import("@/components/ui/GDPRMap").then(m => ({ default: m.GDPRMap })));

const helpTopics = [
    {
        icon: Heart,
        label: "Symptome",
        description:
            "Emotionen und Gefühle zeigen sich oft als körperliche und verhaltensbestimmende Symptome – z.B. Flugangst, die sich mit Panik und Angstzuständen sichtbar bemerkbar macht.",
        link: "/kontakt",
        bgImage: "/assets/symptome.webp",
    },
    {
        icon: Sparkles,
        label: "Wünsche",
        description:
            "Wir alle tragen bewusste oder unbewusste Wünsche in uns. Was hält uns davon ab, dass diese in Erfüllung gehen? Welche Erfahrungen stehen uns im Weg?",
        link: "/kontakt",
        bgImage: "/assets/wuensche.webp",
    },
    {
        icon: Users,
        label: "Beziehungen",
        description:
            "Wieso gibt es Baustellen in unseren Beziehungen? Welche Muster tauchen immer wieder auf? Wenn wir uns dessen gewahr werden, können Veränderungen stattfinden.",
        link: "/kontakt",
        bgImage: "/assets/beziehungen.webp",
    },
    {
        icon: HeartCrack,
        label: "Trauer & Abschied",
        description:
            "Das Leben ist voller Abschiede – von geliebten Menschen, Trennungen oder von Träumen und Zielen. Wir dürfen lernen, achtsam mit uns umzugehen.",
        link: "/trauer-abschied",
        bgImage: "/assets/trauer-abschied.webp",
    },
    {
        icon: Brain,
        label: "Entscheidungen",
        description:
            "Was wollen wir wirklich? In der Maltherapie können auch unbewusste Motivationen und Wünsche ins Sichtbare kommen. Wir werden gestärkt, uns selbst zu vertrauen.",
        link: "/kontakt",
        bgImage: "/assets/entscheidungen.webp",
    },
    {
        icon: Zap,
        label: "Traumata",
        description:
            "Traumata können Ereignisse sein, die tiefgreifende Ausmaße haben. Im Malen finden wir einen sicheren Zugang. Maltherapie wirkt hier stabilisierend.",
        link: "/kontakt",
        bgImage: "/assets/traumata.webp",
    },
];

const methods = [
    {
        title: "Personenorientiertes Malen (PM)",
        description: "Qualitäten und Ressourcen stärken - intuitiv und frei entdecken, was in dir liegt und was gesehen werden will.",
    },
    {
        title: "Lösungsorientiertes Malen (LOM®)",
        description: "Neue, entlastende Bilder ersetzen alte störende Erinnerungen und Bilder. Bildmetaphern regulieren das Nervensystem nachhaltig.",
    },
    {
        title: "Außerdem...",
        description: "Ich biete immer verschiedene Workshops und andere kreative Aktivitäten an. Auf meinem Blog erfährst du alles über die aktuellen Angebote. ",
    },
];

const testimonials = [
    {
        quote: "Ich habe mich auf jeden Fall in dem Jahr verändert. Mich belastende Umstände sind geschrumpft, weil ich eine andere Perspektive einnehmen konnte. Manche Glaubenssätze sind verstummt und Neues ist entstanden.",
        name: "Melanie",
    },
    {
        quote: "Ich bin sehr begeistert und freue mich auf weitere intensive Zeiten und Erfahrungen auf diesem Weg.",
        name: "Julia",
    },
    {
        quote: "Für mich ist die Zeit bei Mikela sehr wertvoll, es ist eine Oase, an der ich sein darf und mich selbst noch besser kennen und verstehen lernen darf. Ich muss nichts leisten.",
        name: "Sabine",
    },
];

export default function Index({
    currentPath,
    symptomeImg,
    wuenscheImg,
    beziehungenImg,
    trauerImg,
    entscheidungenImg,
    traumataImg
}: {
    currentPath?: string;
    symptomeImg?: any;
    wuenscheImg?: any;
    beziehungenImg?: any;
    trauerImg?: any;
    entscheidungenImg?: any;
    traumataImg?: any;
}) {
    const topicImages = {
        "Symptome": symptomeImg,
        "Wünsche": wuenscheImg,
        "Beziehungen": beziehungenImg,
        "Trauer & Abschied": trauerImg,
        "Entscheidungen": entscheidungenImg,
        "Traumata": traumataImg
    };

    const [mapVisible, setMapVisible] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMapVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' } // Load map slightly before it comes into view
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Layout currentPath={currentPath}>
            {/* Hero Section - Background image is now rendered by Astro for LCP optimization */}
            <section className="relative min-h-[calc(100dvh-5rem)] flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
                {/* Mobile: Full white overlay for text readability */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{
                        background: "rgba(255,255,255,0.75)",
                    }}
                />

                {/* Desktop: White gradient overlay for text readability - solid until text box edge, then fades */}
                <div
                    className="absolute inset-0 hidden md:block"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.5) 720px, rgba(255,255,255,0.1) 920px)",
                    }}
                />

                <div className="container relative z-10">
                    <div className="max-w-2xl space-y-6 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1]">
                            Wenn Worte nicht mehr weiterhelfen …
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-primary italic w-full animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            … dann kann beim Malen die Lösung im Bild entstehen.
                        </p>
                        <p
                            className="text-lg text-muted-foreground max-w-xl animate-fade-in leading-relaxed"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Ich lade dich ein, über Farbe und Bild mit dir selbst in Kontakt zu treten und einen kreativen
                            Veränderungsprozess zu beginnen.
                        </p>
                        <div
                            className="flex flex-wrap gap-4 pt-2 animate-fade-in"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-md transition-colors">
                                <a href="/kontakt">
                                    Termin anfragen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-base border-input hover:bg-accent hover:text-accent-foreground px-8 h-12 rounded-md">
                                <a href="/so-arbeite-ich">So arbeite ich</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Topics Section */}
            <section id="hilfe" className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                            Wobei kann Malen hilfreich sein?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {helpTopics.map((topic) => (
                            <div
                                key={topic.label}
                                className="group relative overflow-hidden p-6 rounded-2xl bg-background border border-border/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col min-h-[220px]"
                            >
                                {/* Background Sketch Image */}
                                <div className="absolute inset-0 pointer-events-none opacity-30 bg-background">
                                    <img
                                        src={topicImages[topic.label as keyof typeof topicImages]?.src || topic.bgImage}
                                        srcSet={topicImages[topic.label as keyof typeof topicImages]?.srcSet}
                                        sizes="(max-width: 768px) 50vw, 300px"
                                        alt=""
                                        className="absolute right-[-5%] bottom-[-5%] w-2/3 h-full object-contain object-right-bottom scale-105 mix-blend-multiply"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="relative z-10 space-y-3 max-w-[75%]">
                                    <div className="inline-flex p-2 rounded-xl bg-primary/5 text-primary group-hover:scale-105 transition-transform duration-300">
                                        <topic.icon className="h-7 w-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground tracking-tight">
                                        {topic.label}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {topic.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Steps Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                            In 3 Schritten zur Begleitung
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                step: "1",
                                title: "Anfrage senden",
                                description: "Per E-Mail oder Formular – kurz dein Anliegen und gewünschte Zeitfenster nennen. Ebenso ist ein erster Telefontermin möglich, um offene Fragen zu klären.",
                            },
                            {
                                step: "2",
                                title: "Ersttermin im Malraum",
                                description: "Ankommen, eine Tasse Tee, Anliegen klären, erste Erfahrung mit dem Malen machen.",
                            },
                            {
                                step: "3",
                                title: "Individueller Prozess",
                                description: "Einzel oder Gruppe – Tempo und Anzahl der Termine nach deinem Bedarf.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative text-center p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-md"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-semibold mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-light text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Button asChild size="lg">
                            <a href="/kontakt">
                                Termin anfragen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Methods Teaser Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Meine Methoden</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Für keine der Methoden musst du malen können – es geht nicht um künstlerisches Talent. So ist auch nicht das Ergebnis ausschlaggebend, sondern der Malprozess an sich ist die heilsame Erfahrung.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {methods.map((method) => (
                            <div
                                key={method.title}
                                className="p-8 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-xl font-light text-foreground mb-3">{method.title}</h3>
                                <p className="text-muted-foreground">{method.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Button asChild variant="outline" size="lg">
                            <a href="/so-arbeite-ich">
                                Mehr erfahren
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Was andere sagen</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-xl bg-background border border-border shadow-sm flex flex-col h-full"
                            >
                                <blockquote className="flex-grow">
                                    <p className="text-lg leading-relaxed text-foreground/90 italic mb-8">
                                        "{item.quote}"
                                    </p>
                                </blockquote>
                                <div className="pt-6 mt-auto">
                                    <cite className="not-italic font-medium text-foreground/70">
                                        — {item.name}
                                    </cite>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-10 text-xs text-muted-foreground italic">
                        Hinweis: Die Namen der Klienten wurden zum Schutz der Privatsphäre anonymisiert.
                    </p>
                </div>
            </section>

            {/* Service Area Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground">
                                Kunsttherapie für die Region & Online
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-stretch">
                            {/* Map Column */}
                            <div ref={mapRef} className="w-full order-2 md:order-1 h-full min-h-[300px]">
                                {mapVisible && (
                                    <Suspense fallback={<div className="w-full h-full bg-muted animate-pulse rounded-xl" style={{ minHeight: "300px" }} />}>
                                        <GDPRMap height="100%" />
                                    </Suspense>
                                )}
                            </div>

                            {/* Text Column */}
                            <div className="space-y-6 order-1 md:order-2">
                                <div className="space-y-4">
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Mein Atelier befindet sich zentral in Eutin in Ostholstein, im Herzen der Holsteinischen Schweiz. Ich bin für Menschen aus dem gesamten Raum Schleswig-Holstein da – zum Beispiel aus <a href="/kunsttherapie-luebeck" className="text-primary hover:underline">Lübeck</a>, <a href="/kunsttherapie-kiel" className="text-primary hover:underline">Kiel</a>, Malente, Plön, Neustadt oder Heiligenhafen.
                                    </p>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Auch eine längere Anfahrt kann sich lohnen und oft schon als wertvoller Puffer dienen, um den Alltag hinter sich zu lassen und in die Ruhe der Natur einzutauchen.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                                    <h3 className="text-xl font-light text-foreground mb-3">Ortsunabhängig: Online-Kunsttherapie</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Sollte dir der Weg nach Eutin nicht möglich sein, biete ich mit der bildASet-Methode auch die Möglichkeit für Online-Sitzungen an. So können wir ganz flexibel und ortsunabhängig an deinem Anliegen arbeiten.
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
                            Bereit für den ersten Schritt?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Wenn du Fragen hast oder einen Termin vereinbaren möchtest, melde dich gern. Selbstverständlich gilt
                            Schweigepflicht.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <a href="/kontakt">
                                    Kontakt aufnehmen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
}
