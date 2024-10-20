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
		<main className="mt-2 flex h-dvh min-h-dvh flex-col items-center justify-center gap-8 tracking-tight sm:mt-4">
			<section className="flex flex-col items-center justify-center gap-4 text-center leading-none">
				<h1 className="from-theme-purple bg-linear-to-r to-fuchsia-500 bg-clip-text text-center text-5xl font-bold tracking-tighter text-transparent duration-200 ease-out sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
					404
				</h1>
				<p className="text-center text-lg font-medium sm:text-xl md:text-2xl">
					It&apos;s looks like you are lost
				</p>
				<Button asChild variant="outline" size="sm">
					<Link href="/">Go Back Home</Link>
				</Button>
			</section>
		</main>
	);
}
