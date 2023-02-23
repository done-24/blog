import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import unoCss from '@unocss/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(),
    vue(),
    unoCss({
      presets: []
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    }
  }
});
