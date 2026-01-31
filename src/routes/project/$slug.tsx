import { Image } from "@unpic/react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { event } from "onedollarstats";

import { projectsList } from "@/lib/data/project";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/project/$slug")({
	component: RouteComponent,
	loader: ({ params }) => {
		const { slug } = params;
		const post = projectsList.find(
			(item) => item.name.replaceAll(/\s+/g, "-").toLowerCase() === slug,
		);
		if (!post) throw notFound();
		return { post: post };
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: `${loaderData?.post.name} | Rafli Malik`,
			},
			{
				name: "description",
				content: loaderData?.post.desc,
			},
			{ property: "og:title", content: `${loaderData?.post.name} | Rafli Malik` },
			{
				property: "og:description",
				content: loaderData?.post.desc,
			},
			{ property: "og:image", content: loaderData?.post.image[0] },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: `${loaderData?.post.name} | Rafli Malik` },
			{
				name: "twitter:description",
				content: loaderData?.post.desc,
			},
			{ name: "twitter:image", content: loaderData?.post.image[0] },
			{
				name: "canonical",
				content: `https://raflimalik.com/project/${loaderData?.post.name.replaceAll(/\s+/g, "-").toLowerCase()}`,
			},
		],
	}),
});

function RouteComponent() {
	const { post } = Route.useLoaderData();

	return (
		<main className="flex min-h-dvh scroll-pt-20 items-center justify-center px-6 pt-20 text-black sm:mb-24 md:mb-32 md:scroll-pt-20 md:px-10 md:pt-36 lg:mb-36 xl:mb-48 dark:text-white">
			<section className="flex w-full max-w-prose flex-col items-center justify-start gap-1 tracking-tight">
				<h1 className="mt-4 text-center text-3xl font-semibold tracking-tighter sm:text-4xl">
					{post.name}
				</h1>
				<p className="text-center text-lg">{post.desc}</p>
				<ul className="mt-1 flex flex-row flex-wrap items-center justify-center gap-2">
					{post.tech.map((tech) => (
						<li
							className="bg-violet-100 px-2 py-1 text-xs font-medium tracking-normal text-violet-700 dark:bg-violet-900 dark:text-violet-100"
							key={tech}
						>
							{tech}
						</li>
					))}
				</ul>
				<hr className="mb-px h-0.5 w-full border-violet-500 duration-500 dark:border-violet-700 starting:w-0" />
				<div className="my-2 flex w-full flex-row items-center justify-evenly gap-2">
					{post.live ? (
						<Button
							variant="outline"
							className="grow"
							nativeButton={false}
							onClick={() => {
								event("Project Page Click");
								event("Project Page Click", { project_title: post.name, action: "live" });
							}}
							render={
								<Link to={post.live} target="_blank">
									Live
								</Link>
							}
						/>
					) : (
						<Button variant="outline" className="grow" disabled>
							Preview
						</Button>
					)}
					<Button
						variant="outline"
						className="grow"
						nativeButton={false}
						onClick={() =>
							event("Project Page Click", { project_title: post.name, action: "source" })
						}
						render={
							<Link to={post.source} target="_blank" rel="noopener noreferrer">
								Source
							</Link>
						}
					/>
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
										layout="constrained"
										alt={post.name}
										width={1280}
										height={720}
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
			</section>
		</main>
	);
}
