import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Ngoding Tailwind",
        short_name: "Ngoding",
        description: "Deskripsi aplikasimu",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#42b883",
        icons: [
          {
            src: "/headphones-3.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/headphones-2.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/image/ngoding.png",
            sizes: "1898x918",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/image/ss-2.png", // file yang 451x799
            sizes: "451x799",
            type: "image/png",
            form_factor: "narrow", // atau bisa dihapus "form_factor" biar auto
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
});
