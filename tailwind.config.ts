import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
			letterSpacing: {
				tightest: "-0.075em",
			},
		},
	},
	plugins: [
		tailwindcssAnimate, // workaround for @starting-style, should be remove when tailwind v4 (stable) is released. (tailwind v4-alpha already provided this functionality)
		// source: https://github.com/tailwindlabs/tailwindcss/discussions/12039#discussioncomment-10063510
		({ addVariant }: PluginAPI) => {
			addVariant("starting", "@starting-style");
		},
	],
};
export default config;
