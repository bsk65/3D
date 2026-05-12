import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3D/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
})
