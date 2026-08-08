import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://airi-momoi.example.com',
  integrations: [sitemap(), icon({ iconDir: 'src/icons' })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Card art and wallpapers are large; allow generous dimensions through the pipeline.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
