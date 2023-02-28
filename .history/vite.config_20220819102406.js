import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path-browserify"
const path =
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    path: "path-brouserify",
    '@': path.resolve(__dirname, './src')
  },
  plugins: [vue()]
})
