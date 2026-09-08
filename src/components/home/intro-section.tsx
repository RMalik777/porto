import { motion } from "motion/react";

import { duration, easeReveal, easeSignature } from "@/lib/motion";

export function IntroSection() {
	return (
		<section
			id="intro"
			className="relative mb-12 flex h-fit min-h-svh w-full flex-col items-start justify-center gap-4 bg-radial from-violet-100 from-[2px] to-0% bg-size-[50px_50px] sm:bg-size-[60px_60px] dark:from-violet-900/40"
		>
			<div className="relative z-10 flex h-fit w-fit flex-col px-6 py-px text-6xl leading-none font-normal tracking-tighter [font-kerning:none] sm:px-10 md:px-14 md:text-7xl lg:px-20 lg:text-8xl xl:px-24 xl:text-9xl">
				{/* Masks the rising name. The negative margin plus matching padding keeps
				    ascenders from clipping without changing the block's height. */}
				<div className="z-10 mt-[-0.12em] overflow-hidden pt-[0.12em]">
					<motion.h1
						className="text-white"
						initial={{ y: "110%" }}
						animate={{ y: 0 }}
						transition={{ duration: 0.5, ease: easeReveal, delay: 0.34 }}
					>
						Rafli Malik
					</motion.h1>
				</div>
				<motion.div
					className="absolute z-0 -mx-6 h-full w-full origin-left bg-theme-purple sm:-mx-10 md:-mx-14 lg:-mx-20 xl:-mx-24"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: duration.signature, ease: easeSignature }}
				/>
			</div>
		</section>
	);
}
