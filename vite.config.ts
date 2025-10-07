import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/commeUnBouillon/', // ← Important !
  build: {
    outDir: "build", // ok si tu veux utiliser 'build' avec gh-pages
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
