"use client";

import { motion } from "motion/react";

export function Intro() {
	return (
		<section
			id="intro"
			className="mb-12 flex h-fit min-h-dvh w-full flex-col items-start justify-center gap-4 bg-radial from-violet-100 from-[2px] to-0% bg-[size:50px_50px] sm:bg-[size:60px_60px] dark:from-violet-950"
		>
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
            // @ts-expect-error - `className` prop is not recognized because motion doesn't yet support react 19.
						className="bg-theme-purple absolute top-0 left-0 z-[-1] h-full"
					></motion.span>
				</span>
			</h1>
		</section>
	);
}
