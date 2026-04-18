import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => ({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three';
            if (id.includes('framer-motion') || id.includes('gsap')) return 'vendor-animation';
            if (id.includes('react-dom') || id.includes('react/')) return 'vendor-react';
          }
        },
      },
    },
    target: 'es2020',
    cssCodeSplit: true,
    cssMinify: true,
    minify: mode === 'production',
    modulePreload: {
      polyfill: false,
    },
  },
}))
