import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3D/3D-dev/',
  build: {
    outDir: 'dist-dev',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
})
