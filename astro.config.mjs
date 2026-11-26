import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ben-mclean-software.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // Keep the existing NEXT_PUBLIC_ variable names working until the
    // Cloudflare cutover renames them.
    envPrefix: ['PUBLIC_', 'NEXT_PUBLIC_'],
  },
});
