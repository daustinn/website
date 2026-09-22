import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import slugtree from 'slugtree/astro'

export default defineConfig({
  site: 'https://daustinn.com',
  srcDir: '.',
  output: 'static',
  integrations: [
    slugtree(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-PE'
        }
      }
    })
  ],
  adapter: cloudflare({
    prerenderEnvironment: 'node'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
})
