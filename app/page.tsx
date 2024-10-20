"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import {
	educationList,
	experienceList,
	otherExperienceList,
	projectsList,
	skillsList,
} from "@/lib/data";

import { motion } from "framer-motion";

import { SquareArrowRight } from "lucide-react";

export default function Home() {
	return (
		<main className="mb-48 flex w-full flex-col items-stretch justify-start gap-8 text-black dark:text-white">
			<section id="intro" className="flex h-dvh w-full flex-col items-start justify-center gap-4">
				<h1 className="py-px text-4xl font-normal leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					Rafli{" "}
					<span className="relative px-1">
						<motion.span
							initial={{ color: "#d946ef" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.2, ease: "circOut", delay: 0.2 }}
						>
							M
						</motion.span>
						<motion.span
							initial={{ color: "#d946ef" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.2, ease: "circOut", delay: 0.4 }}
						>
							a
						</motion.span>
						<motion.span
							initial={{ color: "#d946ef" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 0.6 }}
						>
							l
						</motion.span>
						<motion.span
							initial={{ color: "#d946ef" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 0.8 }}
						>
							i
						</motion.span>
						<motion.span
							initial={{ color: "#d946ef" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 1 }}
						>
							k
						</motion.span>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: "100%" }}
							transition={{ duration: 1.25, ease: "circOut", delay: 0.2 }}
							className="absolute top-0 left-0 z-[-1] h-full bg-fuchsia-500"
						></motion.span>
					</span>
				</h1>
			</section>

			<section id="skills" className="mb-4 scroll-m-14 space-y-4">
				<h2 className="text-4xl font-semibold tracking-tighter">Skills</h2>
				<div className="flex flex-col items-stretch gap-5">
					<ul className="flex flex-col gap-8">
						{skillsList?.map((skill) => (
							<li key={skill.category}>
								<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
								<hr className="mb-4 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
								<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{skill?.children.map((child) => (
										<Link
											href={child.link}
											key={child.name}
											className=""
											target="_blank"
											rel="noopener noreferrer"
										>
											<Card className="group relative w-full">
												<CardHeader className="group relative p-4">
													<CardTitle className="flex items-center gap-2 text-xl font-medium">
														{child.logo && child.logoAlt ? (
															<>
																<Image
																	src={child.logo ?? ""}
																	width={20}
																	height={20}
																	alt=""
																	className="block h-auto duration-200 ease-out group-hover:scale-125 dark:hidden"
																/>
																<Image
																	src={child.logoAlt ?? ""}
																	width={20}
																	height={20}
																	alt=""
																	className="hidden h-auto duration-200 ease-out group-hover:scale-125 dark:block"
																/>
															</>
														) : child.logo ? (
															<Image
																src={child.logo ?? ""}
																width={20}
																height={20}
																alt=""
																className="h-auto duration-200 ease-out group-hover:scale-125"
															/>
														) : null}
														{child.name}
													</CardTitle>
												</CardHeader>
											</Card>
										</Link>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section id="projects" className="mb-4 scroll-m-14 space-y-4">
				<h2 className="tracking-tighte text-4xl font-semibold">Projects</h2>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{projectsList?.map((project, index) => (
						<li key={project.name} className="items-stretch">
							<Card
								className="group flex h-full w-full flex-col justify-between duration-200 starting:translate-y-5 starting:opacity-0"
								style={{ transitionDelay: `${index * 3}0ms` }}
							>
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
									<CardDescription className="">{project.desc}</CardDescription>
								</CardHeader>
								<CardFooter>
									<ul className="flex flex-wrap gap-2">
										{project?.tech.map((tech, childIndex) => (
											<li
												className="w-fit border border-neutral-100 dark:border-neutral-900 py-1 px-2 text-xs font-medium duration-200 ease-out dark:group-hover:border-fuchsia-700 dark:group-hover:bg-fuchsia-700  group-hover:border-fuchsia-100 group-hover:bg-fuchsia-100"
												style={{ transitionDelay: `${childIndex * 3}0ms` }}
												key={tech}
											>
												{tech}
											</li>
										))}
									</ul>
								</CardFooter>
							</Card>
						</li>
					))}
				</ul>
			</section>

			<section id="experience" className="mb-4 scroll-m-14 space-y-4">
				<h2 className="text-4xl font-semibold tracking-tighter">Experience</h2>
				<section>
					<h3 className="text-2xl font-medium tracking-tight">Work Experience</h3>
					<hr className="mb-1 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
					<ul className="flex flex-col gap-4">
						{experienceList?.map((experience) => (
							<li key={experience.company} className="flex flex-col items-start gap-0 duration-200">
								<h4 className="text-lg font-semibold">{experience.company}</h4>
								<p className="text-neutral-500">{experience.position}</p>
								<p className="text-neutral-500">
									{experience.from} &ndash; {experience.to}
								</p>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h3 className="text-2xl font-medium tracking-tight">Other Experience</h3>
					<hr className="mb-1 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
					<ul className="flex flex-col gap-4">
						{otherExperienceList?.map((experience) => (
							<li key={experience.company} className="flex flex-col items-start gap-0 duration-200">
								<Link href={experience.externalLink ?? ""} className="group duration-200">
									<h4 className="flex items-center gap-0 overflow-hidden text-lg font-semibold duration-200 group-hover:text-fuchsia-500 group-focus:text-fuchsia-500">
										{experience.company}
										<span className="-ml-px overflow-hidden">
											<SquareArrowRight className="ml-2 h-full w-auto -translate-x-full text-fuchsia-500 opacity-0 duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100" />
										</span>
									</h4>
									<p className="text-neutral-500">{experience.position}</p>
									<p className="text-neutral-500">
										{experience.from} &ndash; {experience.to}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</section>

			<section id="about" className="mb-4 space-y-4">
				<h2 className="text-4xl font-semibold tracking-tighter">Education</h2>
				<ul className="ml-2 flex flex-col gap-4 border-l border-fuchsia-500">
					{educationList?.map((education) => (
						<li
							key={education.school}
							className="relative flex flex-col items-start gap-0 pl-4 duration-200"
						>
							<div className="absolute -left-1.5 mt-2 h-3 w-3 bg-fuchsia-500"></div>
							<h4 className="text-lg font-semibold">{education.school}</h4>
							<p className="text-neutral-500">{education.major}</p>
							<p className="text-neutral-500">
								{education.from} &ndash; {education.to}
							</p>
							{education.grade ? <p className="text-neutral-500">GPA {education.grade}</p> : null}
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
