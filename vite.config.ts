import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@payment": "/src/modules/Payment",
      "@bill": "/src/modules/PaymentBill",
      "@": "/src",
    },
  },
});
