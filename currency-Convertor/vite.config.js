import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/React/currency-Convertor/',
  build: {
    outDir: 'dist/currency-Convertor',
  },
  plugins: [react(), tailwindcss()],
})