import { defineConfig } from "vite";
import react from "@vitejs/react";

export default defineConfig({
  plugins: [react()],
  // DO NOT put a "base" line here for Vercel
});
