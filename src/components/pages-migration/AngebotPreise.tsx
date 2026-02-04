import { useState, useRef, useEffect, createContext, useContext, useCallback } from "react";
import { ArrowRight, Clock, User, Users, Euro, Heart, Layers, Calendar, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { pmOffering, lomOffering, bildASetOffering, type MethodOffering } from "@/data/offerings";

type OfferingData = MethodOffering;


// Context for coordinating heights across cards
const HeightSyncContext = createContext<{
  registerHeight: (id: string, height: number) => void;
  maxHeight: number;
  isDesktop: boolean;
} | null>(null);

function HeightSyncProvider({ children }: { children: React.ReactNode }) {
  const [heights, setHeights] = useState<Record<string, number>>({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const registerHeight = useCallback((id: string, height: number) => {
    setHeights(prev => {
      if (prev[id] === height) return prev;
      return { ...prev, [id]: height };
    });
  }, []);

  const maxHeight = isDesktop ? Math.max(...Object.values(heights), 0) : 0;

  return (
    <HeightSyncContext.Provider value={{ registerHeight, maxHeight, isDesktop }}>
      {children}
    </HeightSyncContext.Provider>
  );
}

function ToggleCard({ title, offering, cardId, isRecommended }: { title: string; offering: any; cardId: string; isRecommended?: boolean }) {
  const [isGruppe, setIsGruppe] = useState(false);
  const currentOffering = isGruppe ? offering.gruppe : offering.einzeltermin;
  const IconComponent = currentOffering.icon;

  const einzelRef = useRef<HTMLButtonElement>(null);
  const gruppeRef = useRef<HTMLButtonElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeRef = isGruppe ? gruppeRef : einzelRef;
    if (activeRef.current) {
      setSliderStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth,
      });
    }
  }, [isGruppe]);

  // Initial measurement
  useEffect(() => {
    if (einzelRef.current) {
      setSliderStyle({
        left: einzelRef.current.offsetLeft,
        width: einzelRef.current.offsetWidth,
      });
    }
  }, []);

  // Height sync
  const qualitiesRef = useRef<HTMLDivElement>(null);
  const syncContext = useContext(HeightSyncContext);

  useEffect(() => {
    if (!qualitiesRef.current || !syncContext) return;

    const observer = new ResizeObserver(() => {
      const element = qualitiesRef.current;
      if (!element) return;

      // Calculate natural height from children instead of modifying parent style
      const children = Array.from(element.children) as HTMLElement[];
      if (children.length === 0) return;

      // Get total height of all children plus gaps (space-y-3 = 0.75rem = 12px)
      const gap = 12; // space-y-3 in pixels
      const childrenHeight = children.reduce((total, child) => total + child.offsetHeight, 0);
      const naturalHeight = childrenHeight + (gap * (children.length - 1));

      syncContext.registerHeight(cardId, naturalHeight);
    });

    observer.observe(qualitiesRef.current);
    return () => observer.disconnect();
  }, [cardId, syncContext]);

  const qualitiesMinHeight = syncContext?.isDesktop && syncContext.maxHeight > 0
    ? syncContext.maxHeight
    : undefined;

  return (
    <div className={cn(
      "p-6 md:p-8 rounded-2xl bg-card flex flex-col h-full hover:shadow-xl transition-all duration-500 group relative",
      isRecommended
        ? "border-2 border-primary/40 ring-4 ring-primary/5 bg-primary/[0.01] shadow-lg scale-[1.02] z-10"
        : "border border-border"
    )}>
      {isRecommended && (
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap animate-in fade-in zoom-in duration-500 cursor-help">
                <Sparkles className="w-3 h-3 fill-current" />
                Deine Empfehlung
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[240px] text-center p-3 leading-relaxed">
              Basierend auf deinem Quiz-Ergebnis. Diese Empfehlung dient zur Orientierung und ersetzt kein persönliches Erstgespräch.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {/* Header with PM/LOM® title */}
      <div className="mb-4 min-h-[72px]">
        <div>
          <h3 className="text-xl font-light text-foreground leading-snug">{title}</h3>
          <p className="text-xs text-muted-foreground font-medium mt-1">{currentOffering.subtitle}</p>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative inline-flex items-center bg-muted rounded-full p-1">
          {/* Sliding background */}
          <div
            className="absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-in-out"
            style={{ left: sliderStyle.left, width: sliderStyle.width }}
          />
          <button
            ref={einzelRef}
            onClick={() => setIsGruppe(false)}
            className={cn(
              "relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center gap-1.5",
              !isGruppe
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <User className="h-4 w-4" />
            Einzeltermin
          </button>
          <button
            ref={gruppeRef}
            onClick={() => setIsGruppe(true)}
            className={cn(
              "relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center gap-1.5",
              isGruppe
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Users className="h-4 w-4" />
            Gruppe
          </button>
        </div>
      </div>

      {/* Qualities List - Dynamic min-height for alignment on lg screens */}
      <div
        ref={qualitiesRef}
        className="space-y-3 mb-8"
        style={{ minHeight: qualitiesMinHeight }}
      >
        {(currentOffering.qualities || []).map((quality: string) => (
          <div key={quality} className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-0.5 shrink-0">
              <Check className="h-3 w-3 text-primary stroke-[3]" />
            </div>
            <span className="text-sm text-foreground/80">{quality}</span>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="space-y-2 mb-8 pt-6 border-t border-border/50 min-h-[140px]">
        {currentOffering.details.map((detail: any) => (
          <div key={detail.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{detail.label}</span>
            <span className="text-foreground font-medium">{detail.value}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="mt-auto">
        <div className="min-h-[22px] mb-4 flex items-center justify-center">
          {currentOffering.note && (
            <p className="text-[10px] text-center text-muted-foreground">
              {currentOffering.note}
            </p>
          )}
        </div>

        <div className="pt-4 border-t border-border mb-4">
          {currentOffering.pricing.map((price) => (
            <div key={price.label} className="flex justify-between items-baseline">
              <span className="text-sm text-muted-foreground">{price.label}</span>
              <span className="text-2xl font-light text-foreground">{price.value}</span>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 group">
          <a href="/kontakt" className="flex items-center justify-center gap-2 text-sm">
            Termin anfragen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
}




export default function AngebotPreise({ currentPath }: { currentPath?: string }) {
  const [recommendedMethod, setRecommendedMethod] = useState<string | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("kunsttherapie-quiz-result");
    if (savedResult) {
      try {
        const { winningMethod } = JSON.parse(savedResult);
        setRecommendedMethod(winningMethod);
      } catch (e) {
        console.error("Failed to parse saved quiz result", e);
      }
    }
  }, []);

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

      {/* PM®, LOM® & bildASet Cards */}
      <section className="pb-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <HeightSyncProvider>
              <ToggleCard
                title="Personenorientiertes Malen (PM)"
                offering={pmOffering}
                cardId="pm"
                isRecommended={recommendedMethod?.toLowerCase() === "pm"}
              />
              <ToggleCard
                title="Lösungsorientiertes Malen (LOM®)"
                offering={lomOffering}
                cardId="lom"
                isRecommended={recommendedMethod?.toLowerCase() === "lom"}
              />
              <ToggleCard
                title="bildASet Methode"
                offering={bildASetOffering}
                cardId="bildASet"
                isRecommended={recommendedMethod?.toLowerCase() === "bildaset"}
              />
            </HeightSyncProvider>
          </div>
        </div>
      </section>

      {/* Workshops & Specials - Full Width Banner */}
      <section className="pb-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Workshops & Specials Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-light text-foreground mb-2">Workshops & Specials</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Informationen zu meinen aktuellen Workshops, neuen Angeboten und kreativen Impulsen findest du regelmäßig in meinem Blog.
                </p>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl h-12 px-8 group"
                >
                  <a href="/blog" className="flex items-center justify-center gap-2 text-sm">
                    Zum Blog
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
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
