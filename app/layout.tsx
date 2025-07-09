import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";

import { clsx } from "clsx";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: {
		template: "%s | Rafli Malik",
		default: "Rafli Malik",
	},
	description:
		"Rafli Malik, a student from Bina Nusantara University, majoring in Computer Science. Front-End Developer, UI/UX Designer, and a Tech Enthusiast.",
	openGraph: {
		title: "Rafli Malik",
		description:
			"Front End Developer, UI/UX Designer, and Tech Enthusiast. Majoring in Computer Science at Bina Nusantara University",
		url: "https://www.raflimalik.com/",
		siteName: "Rafli Malik",
		type: "website",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{
			media: "(prefers-color-scheme: light)",
			color: "oklch(54.94% 0.2913074585707993 298.24104057049317)",
		},
		{
			media: "(prefers-color-scheme: dark)",
			color: "oklch(54.94% 0.2913074585707993 298.24104057049317)",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={clsx(GeistSans.className, GeistMono.variable, "antialiased")}
			suppressHydrationWarning
		>
			<body className="h-fit min-h-dvh bg-white text-black dark:bg-neutral-950 dark:text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
