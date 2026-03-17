import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    svgr(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@country-flag-icons': path.resolve(__dirname, 'node_modules/country-flag-icons/react/3x2'),
      '@react-icons': path.resolve(__dirname, 'node_modules/react-icons'),
      '@erikflowers-weather-icons': path.resolve(__dirname, 'src/assets/icons/erikflowers-weather-icons'),
      '@meteocons': path.resolve(__dirname, 'src/assets/icons/meteocons'),
    },
  },
});
