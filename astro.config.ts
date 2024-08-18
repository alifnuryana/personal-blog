import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'
import turnstile from 'astro-turnstile'

// https://astro.build/config
export default defineConfig({
  site: 'https://alifnuryana.my.id/',
  server: {
    port: 1977,
  },
  integrations: [mdx(), sitemap(), UnoCSS({
    injectReset: true,
  }), vue(), turnstile({
    siteKey: '0x4AAAAAAAhhSyGB5ENmU4PZ',
  })],
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
