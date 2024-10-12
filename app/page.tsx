import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import {
	skillsList,
	projectsList,
	educationList,
	experienceList,
	otherExperienceList,
} from "@/lib/data";

import { SquareArrowRight } from "lucide-react";

export default function Home() {
	return (
		<main className="mb-48 flex w-full flex-col items-stretch justify-start gap-8">
			<section id="intro" className="flex h-dvh w-full flex-col items-start justify-center gap-4">
				<h1 className="text-4xl font-light leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					Rafli Malik
				</h1>

				<p className="text-lg tracking-tight sm:text-xl md:text-2xl">
					&quot;Lorem Ipsum Tagline&quot;
				</p>
			</section>

			<section id="about" className="scroll-m-14">
				<h2 className="text-4xl font-semibold tracking-tighter">Who am i</h2>
				<p className="max-w-prose">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum libero omnis assumenda
					dolor! Perspiciatis illum ducimus, minima reprehenderit tenetur consectetur alias quaerat,
					doloremque voluptates, similique mollitia. Esse in molestias eligendi?
				</p>
			</section>

			<section id="skills" className="scroll-m-14 mb-4 space-y-4">
				<h2 className="text-4xl font-semibold tracking-tighter">Skills</h2>
				<div className="flex flex-col items-stretch gap-5">
					<ul className="flex flex-col gap-8">
						{skillsList?.map((skill) => (
							<li key={skill.category}>
								<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
								<hr className="mb-4 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
								<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{skill?.children.map((child) => (
										<Link href={child.link} key={child.name} className="">
											<Card className="w-full" style={{ color: `#${child.color ?? "000000"}` }}>
												<CardHeader className="p-4">
													<CardTitle className="flex items-center gap-2 text-xl font-normal">
														{child.logo && child.logoAlt ? (
															<>
																<Image
																	src={child.logo ?? ""}
																	width={20}
																	height={20}
																	alt=""
																	className="block h-auto dark:hidden"
																/>
																<Image
																	src={child.logoAlt ?? ""}
																	width={20}
																	height={20}
																	alt=""
																	className="hidden h-auto dark:block"
																/>
															</>
														) : child.logo ? (
															<Image
																src={child.logo ?? ""}
																width={20}
																height={20}
																alt=""
																className="h-auto"
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
								className="group flex h-full w-full flex-col justify-between duration-200 starting:opacity-0"
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
												className="w-fit py-1 px-2 text-xs font-medium duration-200 ease-out group-hover:bg-pink-100"
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
									<h4 className="flex items-center gap-0 overflow-hidden text-lg font-semibold duration-200 group-hover:text-pink-500 group-focus:text-pink-500">
										{experience.company}
										<span className="-ml-px overflow-hidden">
											<SquareArrowRight className="ml-2 h-full w-auto -translate-x-full text-pink-500 opacity-0 duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100" />
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

			<section id="education"className="space-y-4 mb-4">
				<h2 className="text-4xl font-semibold tracking-tighter">Education</h2>
				<ul className="ml-2 flex flex-col gap-4 border-l border-pink-500">
					{educationList?.map((education) => (
						<li
							key={education.school}
							className="relative flex flex-col items-start gap-0 pl-4 duration-200"
						>
							<div className="absolute -left-1.5 mt-2 h-3 w-3 bg-pink-500"></div>
							<h4 className="text-lg font-semibold">{education.school}</h4>
							<p>{education.major}</p>
							<p>
								{education.from} &ndash; {education.to}
							</p>
							{education.grade ? <p>GPA {education.grade}</p> : null}
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
