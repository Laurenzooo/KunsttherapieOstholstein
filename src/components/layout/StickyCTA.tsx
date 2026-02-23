import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:hidden">
      <Button asChild size="lg" className="rounded-full shadow-lg">
        <a href="/kontakt" data-umami-event="cta-sticky-mobile">
          <Phone className="mr-2 h-4 w-4" />
          Termin
        </a>
      </Button>
    </div>
  );
}