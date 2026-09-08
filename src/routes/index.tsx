import { createFileRoute } from "@tanstack/react-router";

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
	return (
		<main className="mt-10 mb-20 flex w-full flex-col items-stretch justify-start gap-8 sm:mb-24 md:mt-11 md:mb-32 lg:mb-36 xl:mb-48">
			<IntroSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<EducationSection />
			<CvSection />
		</main>
	);
}
