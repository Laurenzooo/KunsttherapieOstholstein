import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://kunsttherapie-ostholstein.de',
    integrations: [react(), tailwind()],
    output: 'static',
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    },
});

