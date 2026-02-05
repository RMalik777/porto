import { configure } from "onedollarstats";
import { useEffect } from "react";

import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import appCss from "@/globals.css?url";
import favicon from "@/favicon.ico?url";
import ogImage from "@/lib/assets/photosquarezoom.jpg?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "theme-color",
				content: "oklch(54.94% 0.2913074585707993 298.24104057049317)",
			},
			{ title: "Rafli Malik" },
			{
				name: "description",
				content:
					"Rafli Malik, a Front-End Developer, sometimes Back-End Developer, and a Tech Enthusiast. See what I've built and the technologies I use.",
			},
			// Open Graph
			{ property: "og:title", content: "Rafli Malik Portfolio" },
			{
				property: "og:description",
				content:
					"Rafli Malik, a Front-End Developer, sometimes Back-End Developer, and a Tech Enthusiast. See what I've built and the technologies I use.",
			},
			{ property: "og:image", content: ogImage },
			{ property: "og:type", content: "website" },
			// Twitter Card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Rafli Malik Portfolio" },
			{
				name: "twitter:description",
				content:
					"Rafli Malik, a Front-End Developer, sometimes Back-End Developer, and a Tech Enthusiast. See what I've built and the technologies I use.",
			},
			{ name: "twitter:image", content: ogImage },
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: favicon,
			},
		],
	}),
	component: RootLayout,
});
function RootLayout() {
	useEffect(() => {
		configure({
			trackLocalhostAs: "raflimalik.com",
		});
	}, []);

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="h-fit min-h-svh bg-white text-black dark:bg-neutral-950 dark:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<Outlet />
					<Scripts />
					<Footer />
					<TanStackRouterDevtools />
				</ThemeProvider>
			</body>
		</html>
	);
}
