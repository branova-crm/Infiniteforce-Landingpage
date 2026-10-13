// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Live-Domain eintragen – dann werden canonical- und Open-Graph-URLs automatisch erzeugt:
  // site: 'https://infiniteforce.ltd',
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    // Lokal: `npm run api` parallel starten, dann proxyt Astro /api → :3001
    proxy: {
      '/api': 'http://127.0.0.1:3001',
    },
  },
});
