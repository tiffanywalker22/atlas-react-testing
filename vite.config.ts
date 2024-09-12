import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { test } from "vitest";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts'
  },
});
