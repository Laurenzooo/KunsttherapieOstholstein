import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://kunsttherapie-ostholstein.de',
    integrations: [react(), tailwind(), sitemap()],
    output: 'static',
    // Inline all stylesheets to eliminate render-blocking resources in PageSpeed Insights
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    // Ensure CSS is properly code-split per page
                    manualChunks: (id) => {
                        // Keep page-specific CSS separate
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
        },
    },
});

