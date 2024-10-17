interface LicenseItem {
	name: string;
	author: string;
	source: string;
	license:
		| "Public Domain"
		| "CC0"
		| "MIT"
		| "CC BY 3.0"
		| "CC BY 4.0"
		| "CC BY-NC-SA 4.0"
		| "Proprietary"
		| "Unknown";
	licenseLink?: string;
}
export const logoLicense: LicenseItem[] = [
	// FRONT END
	{
		name: "HTML5",
		author: "W3C",
		source: "https://www.w3.org/html/logo/",
		license: "CC BY 3.0",
		licenseLink: "https://creativecommons.org/licenses/by/3.0/",
	},
	{
		name: "CSS",
		author: "Rudloff",
		source: "https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg",
		license: "CC BY 3.0",
		licenseLink: "https://creativecommons.org/licenses/by/3.0/",
	},
	{
		name: "JavaScript",
		author: "Christopher Williams",
		source: "https://github.com/voodootikigod/logo.js",
		license: "MIT",
		licenseLink: "https://github.com/voodootikigod/logo.js/blob/master/LICENSE",
	},
	// CSS FRAMEWORKS
	{
		name: "Tailwind CSS",
		author: "Tailwind Labs Inc.",
		source: "https://tailwindcss.com/brand",
		license: "Proprietary",
		licenseLink: "https://tailwindcss.com/brand#trademark-usage-agreement",
	},
	{
		name: "Bootstrap",
		author: "Bootstrap team",
		source: "https://getbootstrap.com/docs/5.0/about/brand/#logo",
		license: "CC BY 3.0",
		licenseLink: "https://creativecommons.org/licenses/by/3.0/",
	},
	// FRAMEWORKS
	{
		name: "React",
		author: "Meta Platforms, Inc",
		source: "https://github.com/reactjs/react.dev/tree/main/public/images/brand",
		license: "CC BY 4.0",
		licenseLink: "https://github.com/reactjs/react.dev/blob/main/LICENSE-DOCS.md",
	},
	{
		name: "Next.js",
		author: "Vercel",
		source: "https://vercel.com/geist/brands",
		license: "Proprietary",
		licenseLink: "https://vercel.com/geist/brands#usage",
	},
	{
		name: "Remix",
		author: "Shopify Inc.",
		source: "https://remix.run/brand",
		license: "Proprietary",
		licenseLink: "https://remix.run/brand",
	},
	{
		name: "Svelte",
		author: "Rich Harris",
		source: "https://github.com/sveltejs/branding",
		license: "Proprietary",
		licenseLink: "https://github.com/sveltejs/branding/blob/master/README.md",
	},
	{
		name: "Astro",
		author: "Fred K. Schott",
		source: "https://astro.build/press/#assets",
		license: "MIT",
		licenseLink: "https://github.com/withastro/astro/blob/main/LICENSE",
	},
	{
		name: "Vue",
		author: "Evan You",
		source: "https://github.com/vuejs/art",
		license: "CC BY-NC-SA 4.0",
		licenseLink: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
	},
	{
		name: "Nuxt",
		author: "Nuxt",
		source: "https://nuxtjs.org/brand",
		license: "MIT",
		licenseLink: "https://github.com/nuxt/nuxt/blob/main/LICENSE",
	},
	// Animation
	{
		name: "Framer Motion",
		author: "Framer B.V.",
		source: "https://www.framer.com/brand",
		license: "Proprietary",
		licenseLink: "https://www.framer.com/legal/terms-of-service/",
	},
	{
		name: "GSAP",
		author: "GreenSock, Inc.",
		source: "https://gsap.com/brand",
		license: "Proprietary",
		licenseLink: "https://gsap.com/community/standard-license/",
	},

	// BACK END
	{
		name: "Laravel",
		author: "Laravel Holdings Inc.",
		source: "https://github.com/laravel/art",
		license: "Proprietary",
		licenseLink: "https://laravel.com/trademark",
	},
	{
		name: "TAURI",
		author: "The Tauri Programme within the Commons Conservancy",
		source: "https://tauri.app/about/trademark/",
		license: "Proprietary",
		licenseLink: "https://tauri.app/about/trademark/",
	},
	{
		name: ".NET",
		author: "Microsoft",
		source: "https://github.com/dotnet/brand",
		license: "CC0",
		licenseLink: "https://github.com/dotnet/brand/blob/main/LICENSE",
	},
	// DATABASE
	{
		name: "SQLite",
		author: "D. Richard Hipp",
		source: "https://www.sqlite.org/artwork.html",
		license: "Public Domain",
		licenseLink: "https://www.sqlite.org/copyright.html",
	},
	{
		name: "Sanity",
		author: " Sanity US Inc.",
		source: "https://www.sanity.io/static/download/Sanity-logo.zip",
		license: "Proprietary",
		licenseLink: "https://www.sanity.io/legal/tos",
	},
];
