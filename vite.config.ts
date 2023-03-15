import { defineConfig } from 'vite'

const isGHpages = false
const mode = process.env.NODE_ENV === "production" ?
  "production" :
  "development"
const base = mode === "production" && isGHpages ?
  "array-editor/" :
  "/"

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dir",
    assetsDir: "./",
    lib: {
      entry: 'src/ts/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
