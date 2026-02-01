interface Skill {
	category: string;
	children: Array<{ name: string; link: string; logo?: string; logoAlt?: string }>;
}

export const skillsList: Array<Skill> = [
	{
		category: "Web",
		children: [
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				logo: "/Logo/[HTML5]+CC-by-3.0.svg",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				logo: "/Logo/[CSS]+CC-by-3.0.svg",
			},
			{
				name: "JavaScript",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				logo: "/Logo/[JS]+MIT.svg",
			},
			{
				name: "TypeScript",
				link: "https://www.typescriptlang.org/",
				logo: "/Logo/[TYPESCRIPT]+Proprietary.svg",
			},
		],
	},
	{
		category: "CSS Frameworks",
		children: [
			{
				name: "Tailwind CSS",
				link: "https://tailwindcss.com/",
				logo: "/Logo/[TAILWINDCSS]+Proprietary.svg",
			},
			{
				name: "Bootstrap",
				link: "https://getbootstrap.com/",
				logo: "/Logo/[BOOTSTRAP]_light+CC-by-3.0.svg",
				logoAlt: "/Logo/[BOOTSTRAP]_dark+CC-by-3.0.svg",
			},
		],
	},
	{
		category: "Front-End Frameworks",
		children: [
			{
				name: "React",
				link: "https://reactjs.org/",
				logo: "/Logo/[REACT]_light+CC-by-4.0.svg",
				logoAlt: "/Logo/[REACT]_dark+CC-by-4.0.svg",
			},
			{
				name: "Tanstack Router",
				link: "https://tanstack.com/start",
				logo: "/Logo/[TANSTACK]_light+Proprietary.svg",
				logoAlt: "/Logo/[TANSTACK]_dark+Proprietary.svg",
			},
			{
				name: "Next.js",
				link: "https://nextjs.org/",
				logo: "/Logo/[NEXTJS]_light+Proprietary.svg",
				logoAlt: "/Logo/[NEXTJS]_dark+Proprietary.svg",
			},
			{
				name: "React Router (Remix)",
				link: "https://reactrouter.com/",
				logo: "/Logo/[REACTROUTER]_light+Proprietary.svg",
				logoAlt: "/Logo/[REACTROUTER]_dark+Proprietary.svg",
			},
			{
				name: "Svelte",
				link: "https://svelte.dev/",
				logo: "/Logo/[SVELTE]+Proprietary.svg",
			},
			{
				name: "SvelteKit",
				link: "https://kit.svelte.dev/",
				logo: "/Logo/[SVELTE]+Proprietary.svg",
			},
			{
				name: "Vue",
				link: "https://vuejs.org/",
				logo: "/Logo/[VUE]_light+CC-by-nc-sa-4.0.svg",
				logoAlt: "/Logo/[VUE]_dark+CC-by-nc-sa-4.0.svg",
			},
			{
				name: "Nuxt",
				link: "https://nuxtjs.org/",
				logo: "/Logo/[NUXT]+MIT.svg",
			},
			{
				name: "Astro",
				link: "https://astro.build/",
				logo: "/Logo/[ASTRO]_light+MIT.svg",
				logoAlt: "/Logo/[ASTRO]_dark+MIT.svg",
			},
		],
	},
	{
		category: "Animation",
		children: [
			{
				name: "Motion (Framer Motion)",
				link: "https://www.motion.dev/",
				logo: "/Logo/[FRAMER]_light+Proprietary.svg",
				logoAlt: "/Logo/[FRAMER]_dark+Proprietary.svg",
			},
			{
				name: "GSAP",
				link: "https://gsap.com/",
				logo: "/Logo/[GSAP]_light+Proprietary.svg",
				logoAlt: "/Logo/[GSAP]_dark+Proprietary.svg",
			},
		],
	},
	{
		category: "Back-End",
		children: [
			{
				name: "Laravel",
				link: "https://laravel.com/",
				logo: "/Logo/[LARAVEL]+Proprietary.svg",
			},
			{
				name: "Tauri",
				link: "https://tauri.app/",
				logo: "/Logo/[TAURI]_light+Proprietary.svg",
				logoAlt: "/Logo/[TAURI]_dark+Proprietary.svg",
			},
			{
				name: "Hono",
				link: "https://hono.dev/",
				logo: "/Logo/[HONO]+MIT.svg",
			},
			{
				name: "ASP.NET",
				link: "https://dotnet.microsoft.com/apps/aspnet",
				logo: "/Logo/[DOTNET]+CC0.svg",
			},
		],
	},
	{
		category: "Database and ORM",
		children: [
			{
				name: "MySQL",
				link: "https://www.mysql.com/",
			},
			{
				name: "SQLite",
				link: "https://www.sqlite.org/index.html",
				logo: "/Logo/[SQLITE]+Public.svg",
			},
			{
				name: "Drizzle ORM",
				link: "https://orm.drizzle.team/",
				logo: "/Logo/[DRIZZLE]_light+Apache-2.0.svg",
				logoAlt: "/Logo/[DRIZZLE]_dark+Apache-2.0.svg",
			},
		],
	},
	{
		category: "Content Management System",
		children: [
			{
				name: "Sanity",
				link: "https://www.sanity.io/",
				logo: "/Logo/[SANITY]_light+Proprietary.svg",
				logoAlt: "/Logo/[SANITY]_dark+Proprietary.svg",
			},
		],
	},
	{
		category: "Other Programming Language",
		children: [
			{
				name: "Python",
				link: "https://www.python.org/",
				logo: "/Logo/[PYTHON]+Proprietary.svg",
			},
			{
				name: "Java",
				link: "https://www.java.com/en/",
			},
			{
				name: "C#",
				link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
			},
		],
	},
	{
		category: "Tools",
		children: [
			{
				name: "Git",
				link: "https://git-scm.com/",
				logo: "/Logo/[GIT]+CC-by-3.0.svg",
			},
			{
				name: "Figma",
				link: "https://www.figma.com/",
				logo: "/Logo/[FIGMA]+Proprietary.svg",
			},
		],
	},
];
