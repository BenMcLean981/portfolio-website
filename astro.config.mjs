import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// Figtree comes from the @fontsource-variable/figtree package, split into
// the same two subsets Fontsource ships. Astro preloads it and generates a
// fallback sized to Figtree's metrics, so text doesn't jump when it loads.
const FIGTREE_FILES = '@fontsource-variable/figtree/files';
const LATIN_RANGE =
  'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATIN_EXT_RANGE =
  'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

export default defineConfig({
  site: 'https://ben-mclean-software.com',
  integrations: [react(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [`${FIGTREE_FILES}/figtree-latin-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN_RANGE],
          },
          {
            src: [`${FIGTREE_FILES}/figtree-latin-ext-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN_EXT_RANGE],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Emit /resume.html rather than /resume/index.html. Cloudflare serves
  // it at /resume, matching the URLs the site has always used.
  build: { format: 'file' },
  trailingSlash: 'never',
});
