
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Substitui 'process.env' pelo objeto stringificado '{}'.
    // Isso evita o erro "Uncaught ReferenceError: process is not defined"
    // de forma segura e robusta durante o build.
    'process.env': '{}'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000
  }
});
