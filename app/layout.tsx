import type { Metadata, Viewport } from "next";
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
		{ media: "(prefers-color-scheme: light)", color: "#8E0DFF" },
		{ media: "(prefers-color-scheme: dark)", color: "#8E0DFF" },
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
			className={clsx(GeistSans.className, GeistMono.variable, "scroll-smooth antialiased")}
		>
			<body className="min-w-dvw h-fit min-h-dvh bg-white text-black dark:bg-neutral-950 dark:text-white">
				<Navbar />
				{children}
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
