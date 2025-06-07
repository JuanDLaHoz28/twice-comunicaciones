import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/twice-comunicaciones/', // ¡IMPORTANTE!
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  }
});
