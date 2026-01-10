import { useState, useMemo, useEffect } from 'react';
import { urlFor } from '../../lib/sanity';

interface Post {
    title: string;
    subheading?: string;
    slug: string;
    mainImage: any;
    publishedAt: string;
    excerpt?: string;
    categories?: string[];
}

interface Category {
    title: string;
}

interface BlogGridProps {
    posts: Post[];
    categories: Category[];
}

export const BlogGrid = ({ posts, categories }: BlogGridProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('category');
        if (categoryParam && categories.some(c => c.title === categoryParam)) {
            setSelectedCategory(categoryParam);
        }
    }, [categories]);

    const handleCategoryClick = (category: string | null) => {
        setSelectedCategory(category);
        const url = new URL(window.location.href);
        if (category) {
            url.searchParams.set('category', category);
        } else {
            url.searchParams.delete('category');
        }
        window.history.pushState({}, '', url);
    };

    const filteredPosts = useMemo(() => {
        if (!selectedCategory) return posts;
        return posts.filter((post) =>
            post.categories && post.categories.includes(selectedCategory)
        );
    }, [posts, selectedCategory]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="space-y-12">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === null
                        ? 'bg-[#B19D90] text-white border-[#B19D90] shadow-md'
                        : 'bg-transparent text-muted-foreground border-border hover:border-[#B19D90] hover:text-[#B19D90]'
                        }`}
                >
                    Alle
                </button>
                {categories.map((category) => (
                    <button
                        key={category.title}
                        onClick={() => handleCategoryClick(category.title)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category.title
                            ? 'bg-[#B19D90] text-white border-[#B19D90] shadow-md'
                            : 'bg-transparent text-muted-foreground border-border hover:border-[#B19D90] hover:text-[#B19D90]'
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[400px]">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] overflow-hidden relative">
                                {post.mainImage ? (
                                    <img
                                        src={urlFor(post.mainImage).width(800).height(500).url()}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-muted flex items-center justify-center">
                                        <span className="text-muted-foreground italic">Kein Bild</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <time
                                        dateTime={post.publishedAt}
                                        className="text-sm font-medium text-muted-foreground"
                                    >
                                        {formatDate(post.publishedAt)}
                                    </time>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                                        {post.categories && post.categories.length > 0 ? post.categories.join(', ') : 'Artikel'}
                                    </span>
                                </div>

                                {post.subheading && (
                                    <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">
                                        {post.subheading}
                                    </p>
                                )}
                                <h2 className="text-2xl font-light tracking-tight mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {post.title}
                                </h2>

                                {post.excerpt && (
                                    <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                )}

                                <div className="mt-auto flex items-center text-foreground font-medium group/link">
                                    <span className="border-b border-foreground/10 group-hover/link:border-primary transition-colors duration-300">
                                        Weiterlesen
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-muted/30 rounded-3xl border border-dashed border-border">
                        <p className="text-lg text-muted-foreground italic">Keine Beiträge in dieser Kategorie gefunden.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
