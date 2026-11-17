import fs from 'node:fs'
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import slugtree from 'slugtree/astro'

const updatedRaw = fs
  .readFileSync(new URL('./UPDATED', import.meta.url), 'utf-8')
  .trim()
const parsedLastmod = new Date(updatedRaw)
const lastmod = Number.isNaN(parsedLastmod.getTime())
  ? undefined
  : parsedLastmod

export default defineConfig({
  site: 'https://daustinn.com',
  srcDir: '.',
  output: 'static',
  integrations: [
    slugtree(),
    sitemap({
      filter: (page) => page !== 'https://daustinn.com/',
      lastmod,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es'
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
