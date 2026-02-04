import { ArrowRight, Car, Train, MapPin, Clock, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GDPRMap } from "@/components/ui/GDPRMap";

const portraitImage = "/assets/MikelaBlanck_About-Bk5OmPVp.webp";
const atelierImage = "/assets/MikelaBlanck_Malraum-mtSuT8Kt.webp";

export default function KielSEOPage({ currentPath }: { currentPath?: string }) {
    return (
        <Layout currentPath={currentPath}>
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
                {/* Sharp background image layer */}
                <div
                    className="absolute inset-0 hero-bg-sharp"
                    style={{
                        backgroundImage: "url('/assets/hero_background.webp')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <style>{`
                    .hero-bg-sharp { background-position: right center; }
                    @media (min-width: 768px) {
                        .hero-bg-sharp { background-position: center; }
                    }
                `}</style>
                {/* Mobile: Full blur overlay */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{
                        backgroundImage: "url('/assets/hero_background.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                        filter: "blur(8px)",
                    }}
                />
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] animate-fade-in">
                            Kunsttherapie für Kiel & Umgebung
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-primary italic w-full animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Deine kunsttherapeutische Anlaufstelle für Kiel, Preetz und Schwentinental
                        </p>
                        <p
                            className="text-lg text-muted-foreground max-w-xl animate-fade-in leading-relaxed"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Ich lade dich ein, über Farbe und Bild mit dir selbst in Kontakt zu treten und einen kreativen Veränderungsprozess zu beginnen.
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
                            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 rounded-md transition-colors">
                                <a href="/kunsttherapie">
                                    So arbeite ich
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Introduction Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Text Column */}
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground">
                                Schön, dass du hierher gefunden hast
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Vielleicht suchst du gerade nach einem Weg, deine Gedanken zu ordnen, belastende Gefühle loszulassen oder einfach wieder mehr Lebendigkeit in deinem Alltag zu spüren.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Aus meiner Erfahrung weiß ich, dass gerade die Fahrt von Kiel hinaus in die Ruhe der Holsteinischen Schweiz ein wertvoller Teil deiner persönlichen Auszeit sein kann.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild variant="outline" size="lg">
                                    <a href="/#hilfe">
                                        Wobei hilft Kunsttherapie konkret?
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <a href="/ueber-mich">
                                        Erfahre mehr über mich
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="aspect-[4/5] rounded-lg overflow-hidden order-1 md:order-2">
                            <img
                                src={portraitImage}
                                alt="Mikela Blanck - Kunsttherapeutin"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground">
                            Warum sich der Weg aus Kiel und Umgebung für dich lohnt
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-medium">Ein Puffer zwischen Alltag und Therapie</h3>
                                <p className="text-muted-foreground">
                                    Die ca. 35–45 Minuten Fahrtzeit aus Kiel, Preetz oder Schwentinental über die B76 eignen sich gut, um die Hektik hinter dir zu lassen. Wenn du in Eutin ankommst, hat der Alltag oft schon ein Stück an Gewicht verloren.
                                </p>
                            </div>

                            <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                    <TreePine className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-medium">Ruhe und Fokus</h3>
                                <p className="text-muted-foreground">
                                    In meinem Atelier erwartet dich eine ruhige Atmosphäre. Parkplatzsuche ist kein Problem und die Natur der Holsteinischen Schweiz bietet den idealen Rahmen, um sich voll auf dein Anliegen zu konzentrieren.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Image Column */}
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            <img
                                src={atelierImage}
                                alt="Blick in das Atelier - Malraum"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text Column */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground">
                                Was dich im Atelier erwartet
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                In der Kunsttherapie musst du nicht „malen können". Es geht nicht um Perfektion, sondern um deinen ganz persönlichen Ausdruck. Gemeinsam nutzen wir verschiedene wissenschaftliche Methoden, um dein persönliches Anliegen bestmöglich zu bearbeiten.
                            </p>
                            <div>
                                <Button asChild variant="outline" size="lg">
                                    <a href="/kunsttherapie">
                                        So arbeite ich
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directions Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-5xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center">
                            Ganz unkompliziert: So findest du zu mir
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Map Column */}
                            <div className="w-full">
                                <GDPRMap height="400px" />
                            </div>

                            {/* Text Column */}
                            <div className="space-y-4">
                                <div className="space-y-3 p-5 rounded-xl bg-card border border-border">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                            <Car className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-medium">Mit dem Auto</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Von Kiel, Preetz und Schwentinental aus erreichst du mich über die B76 in etwa 35–45 Minuten. Das Atelier liegt gut angebunden in Eutin.
                                    </p>
                                </div>

                                <div className="space-y-3 p-5 rounded-xl bg-card border border-border">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                            <Train className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-medium">Mit der Bahn</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Die Regionalbahn (RB 84) fährt regelmäßig in etwa 45–50 Minuten direkt von Kiel Hbf nach Eutin. Vom Bahnhof Eutin ist es nur ein kurzer Spaziergang bis zu meinem Atelier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground">
                            Einladung zum Kennenlernen
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Therapie ist Vertrauenssache. Lass uns in einem unverbindlichen Telefonat oder mit einem kurzen Text herausfinden, ob sich meine Begleitung für dich richtig anfühlt. Ich freue mich darauf, dich kennenzulernen.
                        </p>
                        <div className="pt-4">
                            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-md transition-colors">
                                <a href="/kontakt">
                                    Jetzt Kontakt aufnehmen
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
