
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Export the config object properly
export default defineConfig({
  plugins: [react()],
});
