import { defineConfig } from 'vite'

const mode = process.env.NODE_ENV === "production" ?
  "production" :
  "development"


// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "/",
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
