import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@design-system": path.join(
        __dirname,
        "src",
        "styles",
        "foundation",
        "_all.scss"
      ),
    },
  },
});
