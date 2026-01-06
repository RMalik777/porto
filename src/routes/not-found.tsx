import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/grid";

export const metadata: Metadata = {
	title: {
		absolute: "404 Not Found | Rafli Malik",
	},
	description: "Page not found.",
};

export default function notFound() {
	return (
		<main className="mt-2 flex h-dvh min-h-dvh w-full flex-col items-center justify-center gap-8 tracking-tight sm:mt-4">
			<Grid>
				<section className="flex w-full flex-col items-center justify-center gap-4 text-center leading-none">
					<h1 className="bg-linear-to-r/oklch from-violet-500 to-fuchsia-500 bg-clip-text text-center text-5xl font-semibold tracking-tighter text-transparent duration-200 ease-out sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
						404
					</h1>
					<p className="text-center text-lg font-medium sm:text-xl lg:text-2xl">
						It&apos;s looks like you are lost
					</p>
					<Button asChild variant="outline" size="sm">
						<Link href="/">Go Back Home</Link>
					</Button>
				</section>
			</Grid>
		</main>
	);
}
