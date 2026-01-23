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
    type: {
        image: ({ node }: any) => {
            if (!node?.asset?._ref) return null;
            return (
                <img
                    src={urlFor(node).width(1200).url()}
                    alt={node.alt || 'Blog image'}
                    className="rounded-xl shadow-md my-8 w-full h-auto"
                    loading="lazy"
                />
            );
        }
    }
};
