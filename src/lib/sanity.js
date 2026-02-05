import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
    projectId: "9j3n8o78",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2024-01-01", // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
    if (!source) {
        return {
            width: () => ({
                height: () => ({
                    url: () => ""
                })
            }),
            url: () => ""
        };
    }
    return builder.image(source);
}

export function getResponsiveSanityImage(source, options = {}) {
    if (!source) return { src: '', srcSet: '' };

    const widths = options.widths || [320, 640, 768, 1024, 1280, 1536, 1920];
    const aspectRatio = options.aspectRatio; // optional e.g. 1.6 for 16:10

    const srcSet = widths
        .map(width => {
            let b = builder.image(source).width(width).auto('format');
            if (aspectRatio) {
                b = b.height(Math.round(width / aspectRatio));
            }
            return `${b.url()} ${width}w`;
        })
        .join(', ');

    return {
        src: builder.image(source).width(widths[widths.length - 1]).auto('format').url(),
        srcSet,
        sizes: options.sizes || '(max-width: 768px) 100vw, 1200px',
    };
}