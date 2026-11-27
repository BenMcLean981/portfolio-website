import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Run tests west of Greenwich so date handling that slips a day fails here
// too, not only on machines in those time zones. CI runs in UTC.
process.env.TZ = 'America/Toronto';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
