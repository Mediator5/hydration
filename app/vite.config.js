import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html")
      },
      output: {
        format: "iife",       // UMD/IIFE bundle for WordPress
        entryFileNames: `index.js`,
        chunkFileNames: `chunks/[name].js`,
        assetFileNames: `index.[ext]`,
        name: "MyReactApp",   // global variable for your app
      },
    },
  },
});
