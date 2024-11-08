import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { projectsList } from "@/lib/data/project";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const dynamicParams = false;

export async function generateStaticParams() {
	const posts = projectsList;
	return posts.map((post) => {
		return {
			params: {
				slug: post.name.replace(/\s+/g, "-").toLowerCase(),
			},
		};
	});
}

export const metadata: Metadata = {
	title: "",
	description: "",
};

export default async function Page({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
	const slug = (await params).slug;
	const post = projectsList.find((post) => post.name.replace(/\s+/g, "-").toLowerCase() === slug);

	metadata.title = post?.name;
	metadata.description = post?.desc;

	return (
		<main className="flex scroll-pt-20 items-center justify-center px-6 pt-20 text-black sm:mb-24 md:mb-32 md:scroll-pt-20 md:px-10 md:pt-36 lg:mb-36 xl:mb-48 dark:text-white">
			<section className="flex w-full max-w-prose flex-col items-center justify-start gap-1 tracking-tight">
				{post ? (
					<>
						<h1 className="mt-4 text-center text-3xl font-semibold tracking-tighter sm:text-4xl">
							{post.name}
						</h1>
						<p className="text-center text-lg">{post.desc}</p>
						<ul className="mt-1 flex flex-row flex-wrap items-center justify-center gap-2">
							{post.tech.map((tech) => (
								<li
									className="bg-violet-100 px-2 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-100"
									key={tech}
								>
									{tech}
								</li>
							))}
						</ul>
						<hr className="mb-px h-[2px] w-full border-violet-500 duration-500 dark:border-violet-700 starting:w-0" />
						<div className="my-2 flex w-full flex-row items-center justify-evenly gap-2">
							<Button
								variant="outline"
								className="w-full"
								disabled={!post.live}
								asChild={!!post.live}
							>
								{post.live ? (
									<Link href={post.live} target="_blank">
										Live
									</Link>
								) : (
									"Preview"
								)}
							</Button>
							<Button variant="outline" className="w-full" asChild>
								<Link href={post.source} target="_blank" rel="noopener noreferrer">
									Source
								</Link>
							</Button>
						</div>
						<p className="text-left">{post.longdesc}</p>
						<figure className="px-10 md:px-4 lg:px-0">
							<Carousel
								opts={{
									align: "center",
									loop: true,
									duration: 50,
								}}
							>
								<CarouselContent>
									{post.image.map((image) => (
										<CarouselItem key={image}>
											<Image
												src={image}
												alt={post.name}
												width={1920}
												height={1080}
												loading="eager"
												className="h-auto w-full border border-neutral-700 dark:border-neutral-300"
											/>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
							<figcaption className="text-sm text-neutral-500 dark:text-neutral-400">
								Preview
							</figcaption>
						</figure>
					</>
				) : (
					<>
						<h1>404 - Not Found</h1>
					</>
				)}
			</section>
		</main>
	);
}
