import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Start", path: "/" },
  { label: "So arbeite ich", path: "/methode-ablauf" },
  { label: "Angebot & Preise", path: "/angebot-preise" },
  { label: "Über mich", path: "/ueber-mich" },
  { label: "Kontakt", path: "/kontakt" },
];

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/MomLogo.svg" alt="Mikela Blanck Kunsttherapie" className="h-9 md:h-11 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors hover:text-primary",
                currentPath === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-md px-6">
            <a href="/kontakt">
              <Phone className="mr-2 h-4 w-4" />
              Termin anfragen
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors py-4 px-2",
                  currentPath === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4 w-full sm:hidden">
              <a href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                Termin anfragen
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}