import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center py-16 md:py-24 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* 404 Number */}
            <span className="text-[8rem] md:text-[12rem] font-light text-primary/30 leading-none select-none block">
              404
            </span>

            {/* Main message */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-light text-foreground">
                Diese Seite ist noch ein leeres Blatt
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Manchmal führen uns Wege an unerwartete Orte.
                Lass uns gemeinsam den richtigen Weg finden.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <a href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Zur Startseite
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Helpful links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Vielleicht suchst du nach:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: "Über mich", href: "/ueber-mich" },
                  { label: "So arbeite ich", href: "/so-arbeite-ich" },
                  { label: "Angebot & Preise", href: "/angebot-preise" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 text-foreground transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
