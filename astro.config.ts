import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://alifnuryana.my.id/',
  server: {
    port: 1977,
  },
  integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
  }), vue()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },
})
