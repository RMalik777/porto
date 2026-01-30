import { Image } from "@unpic/react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";

import { SquareArrowRight } from "lucide-react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import {
	educationList,
	experienceList,
	otherExperienceList,
	projectsList,
	skillsList,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin, TextPlugin, ScrollTrigger, Observer);

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const refIntro = useRef(null);
	const refIntroText = useRef(null);
	const refSkills = useRef(null);

	const refProject = useRef(null);
	const refProjectChild = useRef(null);
	useGSAP(
		() => {
			const tlIntro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.5 });
			let split = SplitText.create(".texter", {
				type: "chars, lines",
				mask: "lines",
			});

			tlIntro
				.from(split.chars, {
					duration: 0.3,
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
					duration: 0.5,
					ease: "none",
					text: {
						value: "Lorem Ipsum",
					},
				})
				.to(".texter", {
					duration: 0.5,
					delay: 0.5,
					ease: "none",
					text: {
						value: "Rafli Malik",
					},
				})
				.to(".box", {
					duration: 0.5,
					delay: 0.1,
					width: "100%",
					backgroundColor: "#8E0DFF",
				})
				.call(
					() => {
						split = new SplitText(".texter", { type: "chars, lines", mask: "lines" });
						const miniTl = gsap.timeline();
						miniTl.to(split.chars, {
							color: "#FFFFFF",
							stagger: 0.05,
						});
						miniTl.to(".texter", { color: "#FFFFFF" }, ">");
						Observer.create({
							target: split.lines,
							type: "touch,pointer",
							onHover: () => {
								gsap.to(split.chars, {
									color: "#8E0DFF",
									stagger: 0.05,
								});
								gsap.to(split.chars, {
									color: "#FFFFFF",
									delay: 0.1,
									stagger: 0.05,
								});
							},
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
			const tl = gsap.timeline({
				defaults: { ease: "expo.out" },
				scrollTrigger: {
					trigger: refSkills.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reset play reset",
				},
			});
			tl.to(
				".scramble",
				{
					duration: 0.5,
					color: "#8E0DFF",
					scrambleText: {
						text: "{original}",
						chars: "upperLowerCase",
						tweenLength: true,
						revealDelay: 0.2,
					},
					onComplete: () => {
						gsap.to(".scramble", {
							duration: 0.25,
							color: "inherit",
						});
					},
				},
				"<",
			);
		},
		{ scope: refSkills },
	);
	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: "expo.out" },
				scrollTrigger: {
					trigger: refProjectChild.current,
					start: "top 80%",
					end: "bottom center",
				},
			});
			tl.from(".project-odd", {
				duration: 0.25,
				y: 50,
				filter: "blur(20px)",
				autoAlpha: 0,
				stagger: 0.1,
			});
			tl.from(
				".project-even",
				{
					delay: 0.25,
					duration: 0.25,
					y: 50,
					filter: "blur(20px)",
					autoAlpha: 0,
					stagger: 0.1,
				},
				"<",
			);
		},

		{ scope: refProject },
	);
	return (
		<main className="mt-10 mb-20 flex w-full flex-col items-stretch justify-start gap-8 sm:mb-24 md:mt-11 md:mb-32 lg:mb-36 xl:mb-48">
			<section
				ref={refIntro}
				id="intro"
				className="relative mb-12 flex h-fit min-h-dvh w-full flex-col items-start justify-center gap-4 bg-radial from-violet-100 from-[2px] to-0% bg-size-[50px_50px] sm:bg-size-[60px_60px] dark:from-violet-950"
			>
				<div className="relative z-10 flex h-fit w-fit flex-col px-6 py-px text-6xl leading-none font-normal tracking-tighter [font-kerning:none] sm:px-10 md:px-14 md:text-7xl lg:px-20 lg:text-8xl xl:px-24 xl:text-9xl">
					<h1 ref={refIntroText} className="texter z-10">
						Rafli Malik
					</h1>
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
						{skillsList.map((skill) => (
							<li key={skill.category}>
								<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
								<Separator className="line mb-2" />
								<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{skill.children.map((child) => (
										<li key={child.name}>
											<Link to={child.link} className="" target="_blank" rel="noopener noreferrer">
												<Card className="group relative px-6 py-6">
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
			<section
				ref={refProject}
				id="projects"
				className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Projects</h2>
				<ul
					ref={refProjectChild}
					className="project-list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
				>
					{projectsList.map((project, index) => (
						<li
							key={project.name}
							className={`project-${index % 2 ? "even" : "odd"} items-stretch`}
						>
							<Link
								to={"/project/$slug"}
								params={{ slug: project.name.replaceAll(/\s+/g, "-").toLowerCase() }}
							>
								<Card className="group flex h-full w-full flex-col justify-between duration-200">
									<CardHeader>
										<CardTitle className="project-text">{project.name}</CardTitle>
										<CardDescription>{project.desc}</CardDescription>
									</CardHeader>
									<CardFooter>
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
			<section
				id="about"
				className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Experience</h2>
				<section>
					<h3 className="text-2xl font-medium tracking-tight">Work Experience</h3>
					<hr className="mb-1 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
					<ul className="flex flex-col gap-4">
						{experienceList.map((experience) => (
							<li key={experience.company} className="flex flex-col items-start gap-0 duration-200">
								<h4 className="text-lg font-semibold">{experience.company}</h4>
								<p className="text-muted-foreground">{experience.position}</p>
								<p className="text-muted-foreground">
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
						{otherExperienceList.map((experience) => (
							<li key={experience.company} className="flex flex-col items-start gap-0 duration-200">
								<a href={experience.externalLink ?? ""} className="group">
									<h4 className="flex items-center gap-0 overflow-hidden text-lg font-semibold underline underline-offset-1 duration-200 group-hover:text-theme-purple group-focus-visible:text-theme-purple dark:group-hover:text-violet-500 dark:group-focus-visible:text-violet-500">
										{experience.company}
										<span className="-ml-px overflow-hidden">
											<SquareArrowRight className="ml-2 h-full w-auto -translate-x-full text-theme-purple opacity-0 duration-300 ease-custom group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 dark:text-violet-500" />
										</span>
									</h4>
									<p className="text-muted-foreground">{experience.position}</p>
									<p className="text-muted-foreground">
										{experience.from} &ndash; {experience.to}
									</p>
								</a>
							</li>
						))}
					</ul>
				</section>
			</section>
			<section className="mb-8 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
				<h2 className="text-4xl font-semibold tracking-tighter">Education</h2>
				<ul className="ml-2 flex flex-col gap-4 border-l border-theme-purple">
					{educationList.map((education) => (
						<li
							key={education.school}
							className="relative flex flex-col items-start gap-0 pl-4 duration-200"
						>
							<div className="absolute -left-[6.5px] mt-2 h-3 w-3 rotate-45 bg-theme-purple"></div>
							<h3 className="text-lg font-semibold">{education.school}</h3>
							<p className="text-muted-foreground">{education.major}</p>
							<p className="text-muted-foreground">
								{education.from} &ndash; {education.to}
							</p>
							{education.grade ? (
								<p className="text-muted-foreground">GPA {education.grade}</p>
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
									<a
										href="https://media.raflimalik.com/cv/cv_en_raflimalik.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										Open
									</a>
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
									<a
										href="https://media.raflimalik.com/cv/cv_id_raflimalik.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										Buka
									</a>
								</Button>
							</CardFooter>
						</Card>
					</li>
				</ul>
			</section>
		</main>
	);
}
