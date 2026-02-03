export interface QuizOption {
    text: string;
    scores: {
        PM: number;
        LOM: number;
        BildASet: number;
    };
}

export interface QuizQuestion {
    id: number;
    text: string;
    options: QuizOption[];
}

export interface MethodResult {
    title: string;
    description: string;
    ctaText: string;
}

export interface QuizData {
    quizTitle: string;
    methods: {
        PM: MethodResult;
        LOM: MethodResult;
        BildASet: MethodResult;
    };
    questions: QuizQuestion[];
}

export const quizData: QuizData = {
    quizTitle: "Welche kunsttherapeutische Methode passt zu dir?",
    methods: {
        PM: {
            title: "Personenorientiertes Malen (PM)",
            description:
                "Hier stehst du als Person im Mittelpunkt. Es geht um den wertfreien Ausdruck und das Erleben des Malprozesses nach Bettina Egger. Es gibt kein 'Richtig' oder 'Falsch'.",
            ctaText: "Mehr über PM erfahren",
        },
        LOM: {
            title: "Lösungsorientiertes Malen (LOM)",
            description:
                "Diese Methode ist ideal, wenn du gezielt an Symptomen, Traumata oder konkreten Wünschen arbeiten möchtest. Durch das Malen von Metaphern werden belastende Bilder im Gehirn 'umgeschrieben'.",
            ctaText: "Termin für LOM anfragen",
        },
        BildASet: {
            title: "BildASet Methode",
            description:
                "Nach Antoaneta Slavova: Ein strukturierter, materialgestützter Weg. Er hilft dir, deine aktuelle Lebenslage durch gezielte Aufgabenstellungen und visuelle Sets systematisch zu analysieren und Ressourcen zu finden.",
            ctaText: "BildASet Coaching buchen",
        },
    },
    questions: [
        {
            id: 1,
            text: "Was ist dein primäres Ziel für die Sitzung?",
            options: [
                {
                    text: "Ich möchte mich ohne Druck ausdrücken und schauen, was in mir vorgeht.",
                    scores: { PM: 3, LOM: 0, BildASet: 1 },
                },
                {
                    text: "Ich möchte ein ganz konkretes Problem oder ein belastendes Symptom bearbeiten.",
                    scores: { PM: 0, LOM: 3, BildASet: 0 },
                },
                {
                    text: "Ich möchte meine aktuelle Situation strukturiert analysieren und Klarheit gewinnen.",
                    scores: { PM: 0, LOM: 1, BildASet: 3 },
                },
            ],
        },
        {
            id: 2,
            text: "Wie viel Anleitung und Struktur wünschst du dir?",
            options: [
                {
                    text: "Ich brauche maximale Freiheit – keine Vorgaben, was ich malen soll.",
                    scores: { PM: 3, LOM: 0, BildASet: 0 },
                },
                {
                    text: "Ich brauche klare, methodische Anweisungen, um mein Ziel zu erreichen.",
                    scores: { PM: 0, LOM: 3, BildASet: 1 },
                },
                {
                    text: "Ich arbeite gerne mit vorgegebenen Strukturen oder Hilfsmitteln (Sets).",
                    scores: { PM: 0, LOM: 0, BildASet: 3 },
                },
            ],
        },
        {
            id: 3,
            text: "Welche Rolle spielt das fertige Bild für dich?",
            options: [
                {
                    text: "Das Malen an sich ist der Prozess, das fertige Bild ist nebensächlich.",
                    scores: { PM: 3, LOM: 0, BildASet: 0 },
                },
                {
                    text: "Das Bild ist ein Werkzeug, um eine Veränderung in meinem Befinden zu bewirken.",
                    scores: { PM: 0, LOM: 3, BildASet: 1 },
                },
                {
                    text: "Das Bild dient mir als visuelle Landkarte meiner aktuellen Ressourcen.",
                    scores: { PM: 1, LOM: 0, BildASet: 3 },
                },
            ],
        },
        {
            id: 4,
            text: "Wie ist deine aktuelle innere Verfassung?",
            options: [
                {
                    text: "Ich fühle mich emotional festgefahren und möchte wieder in den Fluss kommen.",
                    scores: { PM: 3, LOM: 1, BildASet: 0 },
                },
                {
                    text: "Ein bestimmtes Ereignis oder Bild lässt mich innerlich nicht los.",
                    scores: { PM: 0, LOM: 3, BildASet: 0 },
                },
                {
                    text: "Ich stehe vor einer Entscheidung und brauche einen Überblick über meine Optionen.",
                    scores: { PM: 0, LOM: 0, BildASet: 3 },
                },
            ],
        },
        {
            id: 5,
            text: "Was erwartest du von der therapeutischen Begleitung?",
            options: [
                {
                    text: "Dass jemand den geschützten Raum hält und mich in meinem Tempo lässt.",
                    scores: { PM: 3, LOM: 0, BildASet: 0 },
                },
                {
                    text: "Dass ich aktiv durch einen Prozess geführt werde, bis eine Lösung spürbar ist.",
                    scores: { PM: 0, LOM: 3, BildASet: 1 },
                },
                {
                    text: "Dass mir geholfen wird, meine Themen mit System und Material zu ordnen.",
                    scores: { PM: 0, LOM: 0, BildASet: 3 },
                },
            ],
        },
    ],
};
