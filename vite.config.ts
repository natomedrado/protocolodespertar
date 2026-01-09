
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Isto é CRUCIAL. O navegador não tem "process.env".
  // Substituímos por um objeto vazio para o código não travar.
  define: {
    'process.env': {}
  },
  base: './', // Garante que os caminhos dos arquivos funcionem na Hostinger
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@google/genai']
        }
      }
    }
  },
  server: {
    port: 3000
  }
});
