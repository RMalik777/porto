import type { Metadata } from "next";

import { clsx } from "clsx";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";


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
				url: "/photosquarezoom.jpg", // Must be an absolute URL
				width: 800,
				height: 800,
				alt: "Portrait of Rafli Malik",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={clsx(GeistSans.className, GeistMono.variable, "antialiased")}>
			<body className="min-w-dvw min-h-dvh scroll-smooth px-8">
				{children}
			</body>
		</html>
	);
}
