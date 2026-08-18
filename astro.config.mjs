import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  srcDir: '.',
  output: 'server',
  adapter: cloudflare({
    prerenderEnvironment: 'node'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
})
