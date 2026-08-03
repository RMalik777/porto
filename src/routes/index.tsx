import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { IntroSection } from "@/components/home/intro-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { EducationSection } from "@/components/home/education-section";
import { CvSection } from "@/components/home/cv-section";

export const Route = createFileRoute("/")({
	headers: () => ({
		"Cache-Control": "max-age=60, s-maxage=3600, stale-while-revalidate=7200",
	}),
	component: Home,
});

function Home() {
	gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin, TextPlugin, ScrollTrigger, Observer);
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

				.to(".box", {
					duration: 0.5,
					delay: 0.1,
					width: "100%",
					backgroundColor: "#8E0DFF",
				})
				.call(
					() => {
						split = new SplitText(".texter", { type: "chars, lines" });
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
			<IntroSection sectionRef={refIntro} textRef={refIntroText} />
			<SkillsSection sectionRef={refSkills} />
			<ProjectsSection sectionRef={refProject} listRef={refProjectChild} />
			<ExperienceSection />
			<EducationSection />
			<CvSection />
		</main>
	);
}
