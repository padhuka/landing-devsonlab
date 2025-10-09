// @ts-check
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: 'https://devsonlab.web.id', // Ganti dengan domain aslimu (WAJIB)
  vite: {
    plugins: [tailwindcss()],
  },
})
