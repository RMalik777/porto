import type { Ref } from "react";
import { Link } from "@tanstack/react-router";
import { event } from "onedollarstats";

import { projectsList } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection({
	sectionRef,
	listRef,
}: Readonly<{
	sectionRef: Ref<HTMLElement>;
	listRef: Ref<HTMLUListElement>;
}>) {
	return (
		<section
			ref={sectionRef}
			id="projects"
			className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
		>
			<h2 className="text-4xl font-semibold tracking-tight">Projects</h2>
			<ul ref={listRef} className="project-list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{projectsList.map((project, index) => (
					<li key={project.name} className={`project-${index % 2 ? "even" : "odd"} items-stretch`}>
						<Link
							to={"/project/$slug"}
							params={{ slug: project.name.replaceAll(/\s+/g, "-").toLowerCase() }}
							onClick={() =>
								event("Project Click", {
									project_title: project.name,
								})
							}
						>
							<Card className="group flex h-full w-full flex-col justify-between duration-200">
								<CardHeader>
									<CardTitle className="project-text">{project.name}</CardTitle>
									<CardDescription>{project.desc}</CardDescription>
								</CardHeader>
								<CardFooter className="border-transparent">
									<ul className="flex flex-wrap gap-2">
										{project.tech.map((tech, childIndex) => (
											<li
												className="w-fit border border-neutral-100 px-2 py-1 text-xs font-medium duration-200 ease-out group-hover:border-violet-100 group-hover:bg-violet-100 group-hover:text-violet-700 dark:border-neutral-900 dark:group-hover:border-violet-900 dark:group-hover:bg-violet-900 dark:group-hover:text-purple-100"
												style={{ transitionDelay: `${childIndex * 3}0ms` }}
												key={tech}
											>
												{tech}
											</li>
										))}
									</ul>
								</CardFooter>
							</Card>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
