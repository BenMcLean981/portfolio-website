import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ben-mclean-software.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Emit /resume.html rather than /resume/index.html. Cloudflare serves
  // it at /resume, matching the URLs the site has always used.
  build: { format: 'file' },
  trailingSlash: 'never',
});
