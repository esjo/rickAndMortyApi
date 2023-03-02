import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://esjo.github.io/rickAndMortyApi/",
  plugins: [react()],
})
