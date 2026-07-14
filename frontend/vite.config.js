import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Espacio-Nomada/", // <-- TIENE QUE SER IDÉNTICO AL NOMBRE DEL REPO
});
