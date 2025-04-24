import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), tailwindcss()],
  server: {
    port: 3000,
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
