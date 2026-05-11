import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3D/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  }
})
