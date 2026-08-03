import type { Ref } from "react";

export function IntroSection({
	sectionRef,
	textRef,
}: Readonly<{
	sectionRef: Ref<HTMLElement>;
	textRef: Ref<HTMLHeadingElement>;
}>) {
	return (
		<section
			ref={sectionRef}
			id="intro"
			className="relative mb-12 flex h-fit min-h-svh w-full flex-col items-start justify-center gap-4 bg-radial from-violet-100 from-[2px] to-0% bg-size-[50px_50px] sm:bg-size-[60px_60px] dark:from-violet-900/40"
		>
			<div className="relative z-10 flex h-fit w-fit flex-col px-6 py-px text-6xl leading-none font-normal tracking-tighter [font-kerning:none] sm:px-10 md:px-14 md:text-7xl lg:px-20 lg:text-8xl xl:px-24 xl:text-9xl">
				<h1 ref={textRef} className="texter z-10">
					Rafli Malik
				</h1>
				<div className="box absolute z-0 -mx-6 h-full w-0 sm:-mx-10 md:-mx-14 lg:-mx-20 xl:-mx-24"></div>
			</div>
		</section>
	);
}
