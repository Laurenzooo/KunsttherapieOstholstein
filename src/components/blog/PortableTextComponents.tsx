import { urlFor } from '../../lib/sanity';

const slugify = (text: string) => {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
};

export const ptComponents = {
    block: {
        h2: ({ node, children }: any) => {
            const text = node.children.map((child: any) => child.text).join('');
            return <h2 id={slugify(text)}>{children}</h2>;
        },
        h3: ({ node, children }: any) => {
            const text = node.children.map((child: any) => child.text).join('');
            return <h3 id={slugify(text)}>{children}</h3>;
        }
    },
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <img
                    src={urlFor(value).width(1200).url()}
                    alt={value.alt || 'Blog image'}
                    className="rounded-xl shadow-md my-8 w-full h-auto"
                    loading="lazy"
                />
            );
        }
    }
};
