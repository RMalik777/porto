import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { ODSAnalytics } from "../components/analytics/one-dollar-stats";
import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


import appCss from "@/globals.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: "TanStack Start Starter" },
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	component: RootLayout,
});
function RootLayout() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="h-fit min-h-dvh bg-white text-black dark:bg-neutral-950 dark:text-white">
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
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
				<ODSAnalytics />
			</body>
		</html>
	);
}
