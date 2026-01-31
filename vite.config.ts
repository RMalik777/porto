// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		devtools(),
		tailwindcss(),
		// Enables Vite to resolve imports using path aliases.
		tsconfigPaths(),
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: true,
				autoStaticPathsDiscovery: true,
			},
			sitemap: {
				enabled: true,
				host: "https://raflimalik.com",
			},
		}),
		viteReact(),
	],
});
