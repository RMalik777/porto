//  @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	useTabs: true,
	printWidth: 100,
	tabWidth: 2,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/globals.css",
	tailwindFunctions: ["cva", "cn", "clsx", "tw", "tv"],
};

export default config;
