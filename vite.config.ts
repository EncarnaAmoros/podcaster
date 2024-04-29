/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['./**/*.test.ts', './**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    css: false,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
