import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app/",
      http: "/src/http/",
      modules: "/src/modules/",
      services: "/src/services/",
      styles: "/src/styles/",
    },
  },
});
