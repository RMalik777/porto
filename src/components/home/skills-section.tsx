import type { Ref } from "react";
import { Image } from "@unpic/react";
import { Link } from "@tanstack/react-router";

import { skillsList } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection({ sectionRef }: Readonly<{ sectionRef: Ref<HTMLElement> }>) {
	return (
		<section
			ref={sectionRef}
			id="skills"
			className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
		>
			<h2 className="scramble text-4xl font-semibold tracking-tight">Skills</h2>
			<div className="flex flex-col items-stretch gap-5">
				<ul className="flex flex-col gap-8">
					{skillsList.map((skill) => (
						<li key={skill.category}>
							<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
							<Separator className="line mb-2" />
							<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{skill.children.map((child) => (
									<li key={child.name}>
										<Link to={child.link} className="" target="_blank" rel="noopener noreferrer">
											<Card className="group relative px-4 py-4">
												<CardHeader className="group relative gap-0 px-0">
													<CardTitle className="flex items-center gap-2 font-medium">
														<div className="h-5 w-auto max-w-5 ease-out *:h-full *:w-full *:object-contain *:object-center *:duration-150 *:ease-out">
															{child.logo &&
																(child.logoAlt ? (
																	<>
																		<Image
																			src={child.logo}
																			width={20}
																			height={20}
																			alt=""
																			className="block group-hover:scale-125 dark:hidden"
																		/>
																		<Image
																			src={child.logoAlt}
																			width={20}
																			height={20}
																			alt=""
																			className="hidden group-hover:scale-125 dark:block"
																		/>
																	</>
																) : (
																	<Image
																		src={child.logo}
																		width={20}
																		height={20}
																		alt=""
																		className="group-hover:scale-125"
																	/>
																))}
														</div>
														{child.name}
													</CardTitle>
												</CardHeader>
											</Card>
										</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
