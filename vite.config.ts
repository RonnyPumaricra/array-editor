import { defineConfig } from 'vite'

const isGHpages = true
const mode = process.env.NODE_ENV === "production" ?
  "production" :
  "development"
const base = mode === "production" && isGHpages ?
  "/array-editor/" :
  "/"

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
})
