import react from "@vitejs/plugin-react";

import path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@design-system": path.join(
        __dirname,
        "src",
        "styles",
        "foundation",
        "_all.scss"
      )
    }
  },
  test: {
    environment: "jsdom",
    watch: false,
    globals: true,
    setupFiles: ["./src/setup-tests.ts"]
  }
});
