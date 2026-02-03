import { useState, useEffect } from "react";
import { ArrowRight, RotateCcw, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { quizData } from "./quizData";
import { methodQualities } from "@/data/offerings";
import confetti from "canvas-confetti";
import { urlFor } from "@/lib/sanity";

type MethodKey = "PM" | "LOM" | "BildASet";

interface Scores {
    PM: number;
    LOM: number;
    BildASet: number;
}

interface BlogPost {
    title: string;
    subheading?: string | any[];
    slug: string;
    mainImage: any;
    publishedAt: string;
    categories?: string[];
}

interface MethodFinderProps {
    currentPath?: string;
    lomBlogPost?: BlogPost;
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

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

export default function MethodFinder({ currentPath, lomBlogPost }: MethodFinderProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Scores>({ PM: 0, LOM: 0, BildASet: 0 });
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [answeredCount, setAnsweredCount] = useState(0);

    const STORAGE_KEY = "kunsttherapie-quiz-result";

    // Load persisted result on mount
    useEffect(() => {
        const savedResult = localStorage.getItem(STORAGE_KEY);
        if (savedResult) {
            try {
                const { winningMethod: savedMethod, savedScores, savedQuestionIndex, savedAnsweredCount } = JSON.parse(savedResult);
                if (savedMethod) {
                    setShowResult(true);
                    // Re-hydrate state to correctly determine winning method if needed
                    if (savedScores) setScores(savedScores);
                    if (savedQuestionIndex !== undefined) setCurrentQuestionIndex(savedQuestionIndex);
                    if (savedAnsweredCount !== undefined) setAnsweredCount(savedAnsweredCount);
                }
            } catch (e) {
                console.error("Failed to parse saved quiz result", e);
            }
        }
    }, []);

    const totalQuestions = quizData.questions.length;
    const currentQuestion = quizData.questions[currentQuestionIndex];

    const quizProgress = (currentQuestionIndex / totalQuestions) * 100;
    const answeredProgress = (answeredCount / totalQuestions) * 100;
    const progress = Math.min(answeredProgress, 100);

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#A68B6A", "#B8D4E3", "#D4A574", "#8FBC8F"],
        });
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (isTransitioning) return;

        setSelectedOption(optionIndex);
        const option = currentQuestion.options[optionIndex];

        // Update scores
        const newScores = { ...scores };
        (Object.keys(option.scores) as MethodKey[]).forEach((method) => {
            newScores[method] += option.scores[method];
        });
        setScores(newScores);

        // Update progress immediately
        setAnsweredCount((prev) => prev + 1);

        // Transition to next question or show result
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentQuestionIndex < totalQuestions - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedOption(null);
                setIsTransitioning(false);
            } else {
                // Last question - show confetti and result
                const winningMethod = getWinningMethod(newScores);
                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    winningMethod,
                    savedScores: newScores,
                    savedQuestionIndex: currentQuestionIndex,
                    savedAnsweredCount: answeredCount + 1
                }));
                triggerConfetti();
                setShowResult(true);
                setIsTransitioning(false);
            }
        }, 400);
    };

    const getWinningMethod = (currentScores?: Scores): MethodKey => {
        const scoresToUse = currentScores || scores;
        const entries = Object.entries(scoresToUse) as [MethodKey, number][];
        return entries.reduce((max, [key, value]) =>
            value > scoresToUse[max] ? key : max
            , "PM" as MethodKey);
    };

    const resetQuiz = () => {
        localStorage.removeItem(STORAGE_KEY);
        setCurrentQuestionIndex(0);
        setScores({ PM: 0, LOM: 0, BildASet: 0 });
        setSelectedOption(null);
        setShowResult(false);
        setIsTransitioning(false);
        setAnsweredCount(0);
    };

    const winningMethod = getWinningMethod();
    const result = quizData.methods[winningMethod];

    return (
        <Layout currentPath={currentPath}>
            <section className="min-h-[calc(100vh-80px)] flex flex-col">
                {/* Progress Bar moved into container */}

                {!showResult ? (
                    /* Quiz Content - 2 Column Layout */
                    <div className="flex-1 flex items-center">
                        <div className="container px-4 md:px-6 py-8 md:py-10">
                            <div className="max-w-5xl mx-auto">
                                {/* Quiz Title & Integrated Progress Bar */}
                                <div className="mb-12">
                                    <p className="text-sm md:text-base text-primary/80 mb-6 uppercase tracking-[0.2em] font-medium">
                                        {quizData.quizTitle}
                                    </p>
                                    <div className="flex justify-between text-xs text-muted-foreground mb-2 uppercase tracking-widest">
                                        <span>Frage {currentQuestionIndex + 1} / {totalQuestions}</span>
                                        <span>{Math.round(progress)}%</span>
                                    </div>
                                    <Progress value={progress} className="h-2 transition-all duration-500" />
                                </div>

                                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-24 items-start transition-all duration-300 ${isTransitioning
                                    ? "opacity-0 translate-y-2"
                                    : "opacity-100 translate-y-0"
                                    }`}>
                                    {/* Left Column - Question */}
                                    <div className="lg:pr-8">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight">
                                            {currentQuestion.text}
                                        </h2>
                                    </div>

                                    {/* Right Column - Options */}
                                    <div className="space-y-3">
                                        {currentQuestion.options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleOptionSelect(index)}
                                                disabled={isTransitioning}
                                                className={`
                                                    w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-200
                                                    ${selectedOption === index
                                                        ? "border-primary bg-primary/5 shadow-sm"
                                                        : "border-border hover:border-primary/40 hover:bg-card/50"
                                                    }
                                                    ${isTransitioning ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
                                                `}
                                            >
                                                <span className="text-foreground text-sm md:text-base leading-relaxed">{option.text}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Result View - Optimized Compact Layout with Two Columns */
                    <div className="flex-1 flex items-center animate-fade-in">
                        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                                    {/* Right Side on Desktop, Top on Mobile: Header & Information */}
                                    <div className="lg:col-span-8 lg:order-2 flex flex-col space-y-6">
                                        {/* Result Header */}
                                        <div className="flex flex-col items-start text-left">
                                            <div className="inline-flex items-center gap-3 mb-3">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                                    <Sparkles className="w-4 h-4" />
                                                </div>
                                                <p className="text-xs md:text-sm text-primary/70 uppercase tracking-[0.2em] font-bold">Deine Empfehlung</p>
                                            </div>
                                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight mb-3">
                                                {result.title}
                                            </h1>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                                                {result.description}
                                            </p>
                                        </div>

                                        {/* Qualities & Actions Box */}
                                        <div className="bg-card/40 border border-border/50 rounded-2xl p-6 md:p-8 flex-1 flex flex-col space-y-6">
                                            <div className="space-y-4">
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold opacity-70">
                                                    Besonderheiten der Methode:
                                                </p>
                                                <div className="grid sm:grid-cols-1 gap-2.5">
                                                    {methodQualities[winningMethod].map((quality) => (
                                                        <div key={quality} className="flex items-start gap-3">
                                                            <div className="mt-0.5 bg-primary/10 rounded-full p-1 shrink-0">
                                                                <Check className="h-3 w-3 text-primary stroke-[3]" />
                                                            </div>
                                                            <span className="text-foreground/90 text-sm leading-snug">{quality}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-2 mt-auto">
                                                <Button asChild className="text-sm h-11 flex-1 justify-center">
                                                    <a href="/kontakt">
                                                        {result.ctaText}
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={resetQuiz}
                                                    className="text-[10px] h-11 flex-1 lg:flex-none xl:flex-1 justify-center text-muted-foreground hover:text-foreground"
                                                >
                                                    <RotateCcw className="mr-2 h-3 w-3" />
                                                    Quiz wiederholen
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Left Side on Desktop, Bottom on Mobile: Blog Card */}
                                    <div className="lg:col-span-4 lg:col-start-1 lg:order-1">
                                        {/* Blog Article Card for LOM */}
                                        {winningMethod === "LOM" && lomBlogPost && (
                                            <a
                                                href={`/blog/${lomBlogPost.slug}`}
                                                className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50"
                                            >
                                                {/* Image Container */}
                                                <div className="aspect-[16/9] overflow-hidden relative">
                                                    {lomBlogPost.mainImage ? (
                                                        <img
                                                            src={urlFor(lomBlogPost.mainImage).width(600).height(340).url()}
                                                            alt={lomBlogPost.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-muted flex items-center justify-center">
                                                            <span className="text-muted-foreground italic text-xs">Kein Bild</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 flex flex-col flex-1">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <time
                                                            dateTime={lomBlogPost.publishedAt}
                                                            className="text-[10px] font-medium text-muted-foreground"
                                                        >
                                                            {formatDate(lomBlogPost.publishedAt)}
                                                        </time>
                                                        <span className="w-1 h-1 rounded-full bg-border" />
                                                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                                                            {lomBlogPost.categories && lomBlogPost.categories.length > 0 ? lomBlogPost.categories.join(', ') : 'Artikel'}
                                                        </span>
                                                    </div>

                                                    <h2 className="text-xl font-light tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                                        {lomBlogPost.title}
                                                    </h2>

                                                    {lomBlogPost.subheading && (
                                                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6">
                                                            {typeof lomBlogPost.subheading === 'string' ? lomBlogPost.subheading : toPlainText(lomBlogPost.subheading as any)}
                                                        </p>
                                                    )}

                                                    <div className="mt-auto flex items-center text-xs text-foreground font-medium group/link">
                                                        <span className="border-b border-foreground/10 group-hover/link:border-primary transition-colors duration-300">
                                                            Weiterlesen
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-3.5 w-3.5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        )}

                                        {/* Placeholder Blog Card for PM */}
                                        {winningMethod === "PM" && (
                                            <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 opacity-80">
                                                <div className="aspect-[16/9] overflow-hidden relative bg-muted/50">
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                </svg>
                                                            </div>
                                                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Blog-Artikel</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <div className="mb-3">
                                                        <span className="text-[9px] uppercase tracking-wider text-primary/60 font-bold">
                                                            Bald verfügbar
                                                        </span>
                                                    </div>
                                                    <h2 className="text-xl font-light tracking-tight mb-3 text-foreground leading-tight">
                                                        Personenorientiertes Malen
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                                                        Erfahre mehr über die PM-Methode und wie sie dir helfen kann, deine inneren Ressourcen zu entdecken. In diesem kommenden Artikel gehen wir tief in die Theorie und Praxis ein.
                                                    </p>
                                                    <div className="mt-auto flex items-center text-[10px] text-muted-foreground/60 font-medium">
                                                        <span>Artikel in Arbeit</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Placeholder Blog Card for BildASet */}
                                        {winningMethod === "BildASet" && (
                                            <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 opacity-80">
                                                <div className="aspect-[16/9] overflow-hidden relative bg-muted/50">
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                </svg>
                                                            </div>
                                                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Blog-Artikel</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <div className="mb-3">
                                                        <span className="text-[9px] uppercase tracking-wider text-primary/60 font-bold">
                                                            Bald verfügbar
                                                        </span>
                                                    </div>
                                                    <h2 className="text-xl font-light tracking-tight mb-3 text-foreground leading-tight">
                                                        Die BildASet Methode
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                                                        Erfahre mehr über BildASet und wie diese innovative Methode dir helfen kann, emotionale Themen durch systemische Anordnung und Materialarbeit zu klären.
                                                    </p>
                                                    <div className="mt-auto flex items-center text-[10px] text-muted-foreground/60 font-medium">
                                                        <span>Artikel in Arbeit</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Privacy & Healthcare Disclaimer */}
                                <div className="mt-12 md:mt-16 pt-8 border-t border-border/40">
                                    <p className="text-[10px] md:text-[11px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto text-center">
                                        Hinweis: Dieser Test dient der ersten Orientierung und Selbsteinschätzung. Er stellt keine medizinische oder psychotherapeutische Diagnose dar und ersetzt kein persönliches Beratungsgespräch oder eine therapeutische Behandlung.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
}
