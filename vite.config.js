import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    sourcemap: true, // Включение карт кода
  },
  server: {
    port: 5173, // Убедитесь, что порт совпадает
  },
  resolve: {
    alias: {
      app: "/src/app/",
      assets: "/src/assets",
      http: "/src/http/",
      modules: "/src/modules/",
      services: "/src/services/",
      styles: "/src/styles/",
      shared: "/src/shared/",
    },
  },
});
