import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: 'https://ydkmlt84.github.io',
  base: 'new_site',
})
