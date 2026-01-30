import { ArrowRight, Sparkles, HeartCrack, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GDPRMap } from "@/components/ui/GDPRMap";

export default function LuebeckSEOPage({ currentPath }: { currentPath?: string }) {
    return (
        <Layout currentPath={currentPath}>
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
                <div
                    className="absolute inset-0 hero-bg-sharp"
                    style={{
                        backgroundImage: "url('/assets/hero_background.webp')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.5) 720px, rgba(255,255,255,0.1) 920px)",
                    }}
                />

                <div className="container relative z-10">
                    <div className="max-w-2xl space-y-6 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1]">
                            Kunsttherapie für Lübeck & Umgebung
                        </h1>
                        <p className="text-xl md:text-2xl text-primary italic w-full">
                            Heilung und persönliches Wachstum durch kreativen Ausdruck.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Willkommen auf meiner Seite für Kunsttherapie. Ich begleite Menschen aus Lübeck und der Umgebung auf ihrem Weg zu mehr Selbsterkenntnis und emotionaler Ausgeglichenheit.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-md transition-colors">
                                <a href="/kontakt">
                                    Termin anfragen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center">
                            Warum Kunsttherapie?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-center">
                            In der Kunsttherapie nutzen wir die Kraft der Bilder, um dort weiterzukommen, wo Worte allein oft nicht ausreichen. Es geht nicht um künstlerisches Talent, sondern um den Prozess des Gestaltens.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-medium">Kreativität</h3>
                                <p className="text-muted-foreground">Entdecke neue Ausdrucksmöglichkeiten und Perspektiven.</p>
                            </div>
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                                    <HeartCrack className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-medium">Begleitung</h3>
                                <p className="text-muted-foreground">Sensitive Unterstützung bei Krisen und Veränderungen.</p>
                            </div>
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                                    <Brain className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-medium">Klarheit</h3>
                                <p className="text-muted-foreground">Unbewusste Prozesse sichtbar machen und verstehen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground">
                                Ihr Weg aus Lübeck zu mir
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Mein Malraum in Eutin ist von Lübeck aus gut erreichbar. Nehmen Sie sich die Zeit für eine kreative Auszeit in der Holsteinischen Schweiz.
                            </p>
                        </div>
                        <GDPRMap height="400px" />
                        <div className="text-center">
                            <Button asChild variant="outline" size="lg">
                                <a href="/kontakt">Kontakt aufnehmen</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
