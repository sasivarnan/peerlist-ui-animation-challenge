import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  base: '/peerlist-ui-animation-challenge',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
});
