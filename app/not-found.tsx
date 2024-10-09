import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
	title: {
		absolute: "404 Not Found | Rafli Malik",
	},
	description: "Page not found.",
};

export default function notFound() {
	return (
		<main className="flex h-dvh min-h-dvh flex-col items-center justify-center gap-8 tracking-tight">
			<div className="placeholder h-10 w-full bg-red-100"></div>
			<section className="flex flex-col items-center justify-center gap-4 text-center leading-none">
				<h1 className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
					404
				</h1>
				<p>It&apos;s looks like you are lost</p>
				<Button asChild variant="outline" size="sm">
					<Link href="/">Home</Link>
				</Button>
			</section>
		</main>
	);
}
