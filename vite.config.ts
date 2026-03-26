// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		devtools(),
		tailwindcss(),
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
		babel({ presets: [reactCompilerPreset()] }),
	],
});
