"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
	const ref = useRef<HTMLElement>(null);
	const [width, setWidth] = useState(0);
	const [rows, setRows] = useState(0);
	const [cols, setCols] = useState(0);
	const [grid, setGrid] = useState<boolean[][]>();
	const [random2, setRandom2] = useState(0);
	const [random, setRandom] = useState(0);

	function calcGrid() {
		setWidth(ref.current?.clientWidth ?? 0);

		const base = Math.ceil((ref.current?.clientWidth ?? 0) / 75);
		const cell = (ref.current?.clientWidth ?? 0) / base;

		setRows(Math.ceil((ref.current?.clientHeight ?? 0) / cell));
		setCols(Math.ceil((ref.current?.clientWidth ?? 0) / cell));
	}

	useLayoutEffect(() => {
		calcGrid();
		window.addEventListener("resize", () => calcGrid());
		return () => window.removeEventListener("resize", () => calcGrid());
	}, []);

	function createGrid(rows: number, cols: number) {
		const gridPrep = [];
		for (let i = 0; i < rows; i++) {
			gridPrep.push(new Array(cols).fill(false));
		}
		setGrid(gridPrep);
	}

	useEffect(() => {
		function randomFill() {
			return Math.round(Math.random() * (cols * rows));
		}
		createGrid(rows, cols);
		const interval = setInterval(() => {
			setRandom(randomFill());
			setRandom2(randomFill());
		}, 2000);
		return () => clearInterval(interval);
	}, [rows, cols]);

	return (
		<main className="mt-10 mb-20 flex w-full flex-col items-stretch justify-start gap-8 text-black sm:mb-24 md:mt-11 md:mb-32 lg:mb-36 xl:mb-48 dark:text-white">
			<section
				ref={ref}
				id="intro"
				className="relative mb-12 flex h-fit min-h-dvh w-full flex-col items-start justify-center gap-4"
				style={{ "--cell": `${width / cols}px`, "--rows": rows - 1 } as React.CSSProperties}
			>
				<div className="absolute inset-0 z-0 grid h-full w-full auto-rows-[var(--cell)] justify-center -space-y-px">
					{grid?.map((child, parentIndex) => (
						<div
							key={parentIndex}
							className="grid h-full w-full flex-1 auto-cols-[var(--cell)] grid-flow-col -space-x-px"
						>
							{child?.map((value, childIndex) => {
								const index = parentIndex * cols + childIndex + 1;
								return (
									<div
										key={index}
										className={
											(value ||
											random === index ||
											random2 === index ||
											random % random2 === index ||
											random2 % random === index ||
											random + random2 === index ||
											random / random2 === index ||
											random2 / random === index ||
											random - random2 === index ||
											random2 - random === index ||
											random * random2 == -index
												? "bg-violet-100 dark:bg-violet-950"
												: "") +
											" border-collapse border border-violet-100 duration-500 ease-out dark:border-violet-950"
										}
										onClick={() => {
											setGrid((prevGrid) => {
												const newGrid = prevGrid?.map((row, rowIndex) =>
													rowIndex === parentIndex
														? row.map((cell, cellIndex) =>
																cellIndex === childIndex ? !cell : cell,
															)
														: row,
												);
												return newGrid;
											});
											setTimeout(() => {
												setGrid((prevGrid) => {
													const newGrid = prevGrid?.map((row, rowIndex) =>
														rowIndex === parentIndex ? row.map(() => false) : row,
													);
													return newGrid;
												});
											}, 5000);
										}}
										onMouseEnter={() => {
											setGrid((prevGrid) => {
												const newGrid = prevGrid?.map((row, rowIndex) =>
													rowIndex === parentIndex
														? row.map((cell, cellIndex) =>
																cellIndex === childIndex ? !cell : cell,
															)
														: row,
												);
												return newGrid;
											});
											setTimeout(() => {
												setGrid((prevGrid) => {
													const newGrid = prevGrid?.map((row, rowIndex) =>
														rowIndex === parentIndex
															? row.map((cell, cellIndex) =>
																	cellIndex === childIndex ? !cell : cell,
																)
															: row,
													);
													return newGrid;
												});
											}, 550);
										}}
									></div>
								);
							})}
						</div>
					))}
				</div>
				<h1 className="z-10 px-6 py-px text-6xl leading-none font-normal tracking-tighter sm:px-10 md:px-14 md:text-7xl lg:px-20 lg:text-8xl xl:px-24 xl:text-9xl">
					Rafli{" "}
					<span className="relative px-1">
						<motion.span
							initial={{ color: "#8E0DFF" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.2, ease: "circOut", delay: 0.2 }}
						>
							M
						</motion.span>
						<motion.span
							initial={{ color: "#8E0DFF" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.2, ease: "circOut", delay: 0.4 }}
						>
							a
						</motion.span>
						<motion.span
							initial={{ color: "#8E0DFF" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 0.6 }}
						>
							l
						</motion.span>
						<motion.span
							initial={{ color: "#8E0DFF" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 0.8 }}
						>
							i
						</motion.span>
						<motion.span
							initial={{ color: "#8E0DFF" }}
							animate={{ color: "#ffffff" }}
							transition={{ duration: 0.3, ease: "circOut", delay: 1 }}
						>
							k
						</motion.span>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: "100%" }}
							transition={{ duration: 1.25, ease: "circOut", delay: 0.2 }}
							className="bg-theme-purple absolute top-0 left-0 z-[-1] h-full"
						></motion.span>
					</span>
				</h1>
			</section>

			<section
				id="skills"
				className="mb-8 scroll-m-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Skills</h2>
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
				className="mb-8 scroll-m-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
			>
				<h2 className="text-4xl font-semibold tracking-tighter">Projects</h2>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{projectsList?.map((project, index) => (
						<li key={project.name} className="items-stretch">
							<Link href={project.live ?? project.source} target="_blank" rel="noopener noreferrer">
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
													className="w-fit border border-neutral-100 px-2 py-1 text-xs font-medium duration-200 ease-out group-hover:border-violet-100 group-hover:bg-violet-200 dark:border-neutral-900 dark:group-hover:border-violet-900 dark:group-hover:bg-violet-900"
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
				className="mb-8 scroll-m-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
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
								<Link href={experience.externalLink ?? ""} className="group duration-200">
									<h4 className="group-hover:text-theme-purple group-focus-visible:text-theme-purple flex items-center gap-0 overflow-hidden text-lg font-semibold duration-200 dark:group-hover:text-violet-500 dark:group-focus-visible:text-violet-500">
										{experience.company}
										<span className="-ml-px overflow-hidden">
											<SquareArrowRight className="text-theme-purple ml-2 h-full w-auto -translate-x-full opacity-0 duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 dark:text-violet-500" />
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
				<ul className="border-theme-purple ml-2 flex flex-col gap-4 border-l">
					{educationList?.map((education) => (
						<li
							key={education.school}
							className="relative flex flex-col items-start gap-0 pl-4 duration-200"
						>
							<div className="bg-theme-purple absolute -left-1.5 mt-2 h-3 w-3"></div>
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
				className="mb-4 scroll-m-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
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
								<Button variant="outline" size="sm" asChild>
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
								<Button variant="outline" size="sm" asChild>
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
