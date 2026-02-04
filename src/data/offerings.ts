import { Clock, Users, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface OfferingDetails {
    label: string;
    value: string;
}

export interface OfferingPricing {
    label: string;
    value: string;
}

export interface OfferingVariant {
    subtitle: string;
    icon: LucideIcon;
    details: OfferingDetails[];
    pricing: OfferingPricing[];
    note?: string;
    qualities: string[];
}

export interface MethodOffering {
    einzeltermin: OfferingVariant;
    gruppe: OfferingVariant;
}

export const pmOffering: MethodOffering = {
    einzeltermin: {
        subtitle: "Erwachsene & Jugendliche",
        icon: Clock,
        details: [
            { label: "Voraussetzung", value: "keine" },
            { label: "Dauer", value: "ca. 75 Minuten" },
            { label: "Termine", value: "nach Absprache" },
        ],
        pricing: [
            { label: "Einzeltermin", value: "79 €" }
        ],
        note: "Kinder & Jugendliche zahlen 69€",
        qualities: [
            "Großformatiges Malen mit Lascaux Gouache",
            "Freies Malen zu deinem Thema",
            "Ureigene Bilder – tiefer Kontakt mit dir selbst",
            "Durchgehende Begleitung im Malprozess",
            "Themenaufdeckend, Stärkung deiner Ressourcen"
        ]
    },
    gruppe: {
        subtitle: "Erwachsene",
        icon: Users,
        details: [
            { label: "Voraussetzung", value: "vorheriger Einzeltermin" },
            { label: "Dauer", value: "ca. 120 Minuten" },
            { label: "Termine", value: "nach Absprache" },
            { label: "Gruppe", value: "2–5 Personen" },
        ],
        pricing: [
            { label: "Pro Person", value: "49 €" }
        ],
        note: undefined,
        qualities: [
            "Großformatiges Malen mit Lascaux Gouache",
            "Freies Malen zu deinem Thema",
            "Ureigene Bilder – tiefer Kontakt mit dir selbst",
            "Durchgehende Begleitung im Malprozess",
            "Themenaufdeckend, Stärkung deiner Ressourcen"
        ]
    }
};

export const lomOffering: MethodOffering = {
    einzeltermin: {
        subtitle: "Erwachsene & Jugendliche",
        icon: Clock,
        details: [
            { label: "Voraussetzung", value: "keine" },
            { label: "Dauer", value: "ca. 75 Minuten" },
            { label: "Termine", value: "nach Absprache" },
        ],
        pricing: [
            { label: "Einzeltermin", value: "79 €" }
        ],
        note: "Kinder & Jugendliche zahlen 69€",
        qualities: [
            "Großformatiges Malen mit Lascaux Gouache",
            "Strukturierte Vorgehensweise mit bewährtem Protokoll",
            "Arbeit mit Bildkorrekturen und Metaphern",
            "Entlastung durch positive, klare innere Bilder",
            "Lösungsorientiert wirksam bei Symptomen, Traumata und allen anderen Anliegen"
        ]
    },
    gruppe: {
        subtitle: "Erwachsene",
        icon: Users,
        details: [
            { label: "Voraussetzung", value: "vorheriger Einzeltermin" },
            { label: "Dauer", value: "ca. 120 Minuten" },
            { label: "Termine", value: "nach Absprache" },
            { label: "Gruppe", value: "2–5 Personen" },
        ],
        pricing: [
            { label: "Pro Person", value: "49 €" }
        ],
        note: undefined,
        qualities: [
            "Großformatiges Malen mit Lascaux Gouache",
            "Strukturierte Vorgehensweise mit bewährtem Protokoll",
            "Arbeit mit Bildkorrekturen und Metaphern",
            "Entlastung durch positive, klare innere Bilder",
            "Lösungsorientiert wirksam bei Symptomen, Traumata und allen anderen Anliegen"
        ]
    }
};

export const bildASetOffering: MethodOffering = {
    einzeltermin: {
        subtitle: "Kunsttherapeutische Selbsterfahrung",
        icon: Layers,
        details: [
            { label: "Voraussetzung", value: "keine" },
            { label: "Dauer", value: "ca. 60 Minuten" },
            { label: "Termine", value: "nach Absprache" },
        ],
        pricing: [
            { label: "Einzeltermin", value: "40–55 €" }
        ],
        note: "Flow-Tarif (Du entscheidest was du zahlen kannst)",
        qualities: [
            "Intuitives Arbeiten mit Bildkarten",
            "Arbeit mit Übertragungsprozessen",
            "Gemeinsame Bildinterpretation & Analyse",
            "Entwicklung eigener Kartensets möglich",
            "Niedrigschwellige Selbsterfahrung und Psychohygiene",
            "Hilfreich für Menschen in helfenden Berufen",
            "Kleinformatig mit unterschiedlichen Farben & Online möglich"
        ]
    },
    gruppe: {
        subtitle: "Kunsttherapeutische Selbsterfahrung",
        icon: Users,
        details: [
            { label: "Voraussetzung", value: "vorheriger Einzeltermin" },
            { label: "Dauer", value: "ca. 120 Minuten" },
            { label: "Termine", value: "nach Absprache" },
            { label: "Frauengruppe", value: "3–6 Personen" },
        ],
        pricing: [
            { label: "Gruppe, p.P.", value: "30–55 €" }
        ],
        note: "Flow-Tarif (Du entscheidest was du zahlen kannst)",
        qualities: [
            "Intuitives Arbeiten mit Bildkarten",
            "Arbeit mit Übertragungsprozessen",
            "Gemeinsame Bildinterpretation & Analyse",
            "Entwicklung eigener Kartensets möglich",
            "Niedrigschwellige Selbsterfahrung und Psychohygiene",
            "Hilfreich für Menschen in helfenden Berufen",
            "Kleinformatig mit unterschiedlichen Farben & Online möglich"
        ]
    }
};

// Helper to get qualities for a method (uses einzeltermin qualities as default)
export const methodQualities = {
    PM: pmOffering.einzeltermin.qualities,
    LOM: lomOffering.einzeltermin.qualities,
    BildASet: bildASetOffering.einzeltermin.qualities,
};
