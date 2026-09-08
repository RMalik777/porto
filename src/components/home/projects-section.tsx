import { Link } from "@tanstack/react-router";
import { event } from "onedollarstats";

import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsList } from "@/lib/data";

export function ProjectsSection() {
	return (
		<section
			id="projects"
			className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
		>
			<Reveal>
				<h2 className="text-4xl font-semibold tracking-tight">Projects</h2>
			</Reveal>
			<RevealList className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{projectsList.map((project, index) => (
					<RevealItem key={project.name} index={index} className="items-stretch">
						<Link
							to={"/project/$slug"}
							params={{ slug: project.name.replaceAll(/\s+/g, "-").toLowerCase() }}
							onClick={() =>
								event("Project Click", {
									project_title: project.name,
								})
							}
						>
							<Card className="group flex h-full w-full flex-col justify-between transition duration-200 ease-out hover:ring-primary">
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
									<CardDescription>{project.desc}</CardDescription>
								</CardHeader>
								<CardFooter className="border-transparent">
									<ul className="flex flex-wrap gap-2">
										{project.tech.map((tech, childIndex) => (
											<li
												className="w-fit border border-neutral-100 px-2 py-1 text-xs font-medium transition-colors duration-200 ease-out group-hover:border-violet-100 group-hover:bg-violet-100 group-hover:text-primary dark:border-neutral-900 dark:group-hover:border-violet-900 dark:group-hover:bg-violet-900"
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
					</RevealItem>
				))}
			</RevealList>
		</section>
	);
}
