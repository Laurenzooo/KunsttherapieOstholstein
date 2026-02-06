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
            // Inline tiny assets (< 1KB) directly into HTML - eliminates client.js network request
            assetsInlineLimit: 1024,
            rollupOptions: {
                output: {
                    // Split vendor chunks for parallel downloads instead of one 399KB blocking request
                    manualChunks: (id) => {
                        // React core - essential for all pages, download early
                        if (id.includes('node_modules/react') ||
                            id.includes('node_modules/react-dom') ||
                            id.includes('node_modules/scheduler')) {
                            return 'react-core';
                        }
                        // Radix UI components - used across many pages
                        if (id.includes('node_modules/@radix-ui')) {
                            return 'radix-ui';
                        }
                        // Lucide icons - commonly used
                        if (id.includes('node_modules/lucide-react')) {
                            return 'icons';
                        }
                        // All other vendor code
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
        },
    },
});

