// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://burger-co.vercel.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
