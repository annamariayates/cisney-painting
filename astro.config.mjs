import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Example: Adding a Vite plugin (e.g., vite-plugin-inspect)
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  output: 'static'
  site: 'https://annamariayates.github.io/cisney-painting-archive',
  base: '/cisney-painting-archive/', 
  integrations: [tailwind()],
  vite: {
    plugins: [Inspect()]
  }
});