import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/React/currency-Convertor/',
  plugins: [react(), tailwindcss()],
})