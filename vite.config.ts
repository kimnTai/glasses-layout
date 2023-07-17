import react from "@vitejs/plugin-react";
import { join } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  base: "./",
  server: {
    host: "0.0.0.0",
    open: process.env.VITEST === "true" ? false : "/",
  },
});
