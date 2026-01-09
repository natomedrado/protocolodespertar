
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Substitui process.env por um objeto vazio. 
    // Isso faz com que 'process.env.API_KEY' vire '{}.API_KEY' (undefined) no navegador,
    // evitando o erro "Uncaught ReferenceError: process is not defined".
    'process.env': {}
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
