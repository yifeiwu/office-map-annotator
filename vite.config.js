import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/office-map-annotator/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
