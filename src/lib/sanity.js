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