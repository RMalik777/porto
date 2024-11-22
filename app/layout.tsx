import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
		"Hi! I'm Rafli Malik, a student from Bina Nusantara University, majoring in Computer Science. I'm a Front-End Developer, UI/UX Designer, and a Tech Enthusiast.",
	openGraph: {
		title: "Rafli Malik",
		description:
			"I'm a Front End Developer, UI/UX Designer, and Tech Enthusiast. Currently majoring in Computer Science at Bina Nusantara University",
		url: "https://www.raflimalik.com/",
		siteName: "Rafli Malik",
		images: [
			{
				url: "/photosquarezoom.jpg",
				width: 800,
				height: 800,
				alt: "Portrait of Rafli Malik",
			},
		],
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
		<>
			<Script
				defer
				data-domain="raflimalik.com"
				src="https://plausible.io/js/script.file-downloads.hash.outbound-links.js"
			></Script>
			<html lang="en" className={clsx(GeistSans.className, GeistMono.variable, "antialiased")}>
				<body className="min-w-screen h-fit min-h-dvh bg-white text-black dark:bg-neutral-950 dark:text-white">
					<Navbar />
					{children}
					<Footer />
					<SpeedInsights />
					<Analytics />
				</body>
			</html>
		</>
	);
}
