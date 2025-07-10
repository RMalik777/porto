"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
	educationList,
	experienceList,
	otherExperienceList,
	projectsList,
	skillsList,
} from "@/lib/data";

import { Scroll, SquareArrowRight } from "lucide-react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin, TextPlugin, ScrollTrigger);

export default function Home() {
	const refIntro = useRef(null);
	const refSkills = useRef(null);
	useGSAP(
		() => {
			const tlIntro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.5 });
			let split = SplitText.create(".texter", {
				type: "chars, lines",
				mask: "lines",
			});

			tlIntro
				.from(split.chars, {
					duration: 0.5,
					y: 100,
					rotation: "random(-90, 90)",
					color: "#8E0DFF",
					autoAlpha: 0,
					stagger: 0.05,
				})
				.call(() => {
					split.revert();
				})

				.to(".texter", {
					duration: 0.75,
					ease: "none",
					text: {
						value: "Lorem Ipsum",
					},
				})
				.to(".texter", {
					duration: 0.75,
					delay: 0.5,
					ease: "none",
					text: {
						value: "Rafli Malik",
					},
				})
				.to(".box", {
					duration: 0.75,
					delay: 0.1,
					width: "100%",
					backgroundColor: "#8E0DFF",
				})
				.call(
					() => {
						split = new SplitText(".texter", { type: "chars, lines", mask: "lines" });
						gsap.to(split.chars, {
							color: "#FFFFFF",
							stagger: 0.05,
						});
					},
					undefined,
					"<",
				);
		},
		{ scope: refIntro },
	);
	useGSAP(
		() => {
			gsap.to(".scramble", {
				scrollTrigger: {
					trigger: refSkills.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reset play reset",
				},
				duration: 0.5,
				ease: "expo.out",
				scrambleText: {
					text: "{original}",
					chars: "upperLowerCase",
					tweenLength: true,
					revealDelay: 0.2,
				},
			});
		},
		{ scope: refSkills },
	);
	return (
		<main className="mt-10 mb-20 flex w-full flex-col items-stretch justify-start gap-8 sm:mb-24 md:mt-11 md:mb-32 lg:mb-36 xl:mb-48">
			<section
				ref={refIntro}
				id="intro"
				className="relative mb-12 flex h-fit min-h-dvh w-full flex-col items-start justify-center gap-4 bg-radial from-violet-100 from-[2px] to-0% bg-[size:50px_50px] sm:bg-[size:60px_60px] dark:from-violet-950"
			>
				<div className="relative z-10 flex h-fit w-fit flex-col px-6 py-px text-6xl leading-none font-normal tracking-tighter [font-kerning:none] sm:px-10 md:px-14 md:text-7xl lg:px-20 lg:text-8xl xl:px-24 xl:text-9xl">
					<h1 className="texter z-10">Rafli Malik</h1>
					<div className="box absolute z-0 -mx-6 h-full w-0 sm:-mx-10 md:-mx-14 lg:-mx-20 xl:-mx-24"></div>
				</div>
			</section>

			<section
				ref={refSkills}
				id="skills"
				className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="scramble text-4xl font-semibold tracking-tighter">Skills</h2>
				<div className="flex flex-col items-stretch gap-5">
					<ul className="flex flex-col gap-8">
						{skillsList?.map((skill) => (
							<li key={skill.category}>
								<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
								<div className="mb-4 h-px shrink-0 bg-neutral-200 ease-out dark:bg-neutral-800" />
								<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{skill?.children.map((child) => (
										<li key={child.name}>
											<Link
												href={child.link}
												className=""
												target="_blank"
												rel="noopener noreferrer"
											>
												<Card className="group relative px-6 py-6">
													<CardHeader className="group relative gap-0 px-0">
														<CardTitle className="flex items-center gap-2 font-medium">
															<div className="h-5 w-auto max-w-5 ease-out *:h-full *:w-full *:object-contain *:object-center *:duration-150 *:ease-out">
																{child.logo && child.logoAlt ? (
																	<>
																		<Image
																			src={child.logo ?? ""}
																			width={20}
																			height={20}
																			alt=""
																			className="block group-hover:scale-125 dark:hidden"
																		/>
																		<Image
																			src={child.logoAlt ?? ""}
																			width={20}
																			height={20}
																			alt=""
																			className="hidden group-hover:scale-125 dark:block"
																		/>
																	</>
																) : child.logo ? (
																	<Image
																		src={child.logo ?? ""}
																		width={20}
																		height={20}
																		alt=""
																		className="group-hover:scale-125"
																	/>
																) : null}
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

			<section
				id="projects"
				className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Projects</h2>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{projectsList?.map((project, index) => (
						<li key={project.name} className="items-stretch">
							<Link href={`/project/${project.name.replace(/\s+/g, "-").toLowerCase()}`}>
								<Card
									className="group flex h-full w-full flex-col justify-between duration-200 starting:translate-y-5 starting:opacity-0"
									style={{ transitionDelay: `${index * 3}0ms` }}
								>
									<CardHeader>
										<CardTitle>{project.name}</CardTitle>
										<CardDescription>{project.desc}</CardDescription>
									</CardHeader>
									<CardFooter>
										<ul className="flex flex-wrap gap-2">
											{project?.tech.map((tech, childIndex) => (
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

			<section
				id="about"
				className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
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
								<Link href={experience.externalLink ?? ""} className="group">
									<h4 className="flex items-center gap-0 overflow-hidden text-lg font-semibold underline underline-offset-1 duration-200 group-hover:text-theme-purple group-focus-visible:text-theme-purple dark:group-hover:text-violet-500 dark:group-focus-visible:text-violet-500">
										{experience.company}
										<span className="-ml-px overflow-hidden">
											<SquareArrowRight className="ml-2 h-full w-auto -translate-x-full text-theme-purple opacity-0 duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 dark:text-violet-500" />
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

			<section className="mb-8 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
				<h2 className="text-4xl font-semibold tracking-tighter">Education</h2>
				<ul className="ml-2 flex flex-col gap-4 border-l border-theme-purple">
					{educationList?.map((education) => (
						<li
							key={education.school}
							className="relative flex flex-col items-start gap-0 pl-4 duration-200"
						>
							<div className="absolute -left-1.5 mt-2 h-3 w-3 bg-theme-purple"></div>
							<h3 className="text-lg font-semibold">{education.school}</h3>
							<p className="text-neutral-500 dark:text-neutral-400">{education.major}</p>
							<p className="text-neutral-500 dark:text-neutral-400">
								{education.from} &ndash; {education.to}
							</p>
							{education.grade ? (
								<p className="text-neutral-500 dark:text-neutral-400">GPA {education.grade}</p>
							) : null}
						</li>
					))}
				</ul>
			</section>

			<section
				id="cv"
				className="mb-4 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Curriculum Vitae (CV)</h2>
				<ul className="flex w-full flex-row flex-wrap items-start justify-stretch gap-4 font-medium tracking-tight">
					<li className="group min-w-fit grow basis-0">
						<Card className="hover:shadow-none">
							<CardHeader>
								<CardTitle>English</CardTitle>
								<CardDescription>Bahasa Inggris</CardDescription>
							</CardHeader>
							<CardFooter className="flex flex-row flex-wrap gap-2">
								<Button variant="outline" size="sm" asChild>
									<Link href="https://hz7grr1zawuqmuzy.public.blob.vercel-storage.com/CV/CV%20(EN)%20-GtjivhyTW1ZZufLMMYCM04Yy8Qxvna.pdf">
										Open
									</Link>
								</Button>
								<Button variant="secondary" size="sm" asChild>
									<Link
										href="https://hz7grr1zawuqmuzy.public.blob.vercel-storage.com/CV/CV%20(EN)%20-GtjivhyTW1ZZufLMMYCM04Yy8Qxvna.pdf"
										download
									>
										Download
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</li>
					<li className="group min-w-fit grow basis-0">
						<Card className="hover:shadow-none">
							<CardHeader>
								<CardTitle>Indonesian</CardTitle>
								<CardDescription>Bahasa Indonesia</CardDescription>
							</CardHeader>
							<CardFooter className="flex flex-row flex-wrap gap-2">
								<Button variant="outline" size="sm" asChild>
									<Link href="https://hz7grr1zawuqmuzy.public.blob.vercel-storage.com/CV/CV%20(ID)-h8wD9VCI5V7SfbF2ETbJfszQLTR9rq.pdf">
										Buka
									</Link>
								</Button>
								<Button variant="secondary" size="sm" asChild>
									<Link
										href="https://hz7grr1zawuqmuzy.public.blob.vercel-storage.com/CV/CV%20(ID)-h8wD9VCI5V7SfbF2ETbJfszQLTR9rq.pdf"
										download
									>
										Unduh
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</li>
				</ul>
			</section>
		</main>
	);
}
