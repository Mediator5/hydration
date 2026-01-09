import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // Default build is for Vercel
  // WordPress build outputs to root/wp-build
  const outDir = mode === "wp" ? resolve(__dirname, "../wp-build") : "build";

  return {
    plugins: [react()],
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(__dirname, "index.html"),
        output: {
          format: "iife",       // UMD/IIFE bundle for WordPress
          entryFileNames: `index.js`,
          chunkFileNames: `chunks/[name].js`,
          assetFileNames: `index.[ext]`,
          name: "MyReactApp",   // global variable for your app
        },
      },
    },
  };
});
