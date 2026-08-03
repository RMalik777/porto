import { SquareArrowRight } from "lucide-react";

import { experienceList, otherExperienceList } from "@/lib/data";

export function ExperienceSection() {
	return (
		<section id="about" className="mb-8 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
			<h2 className="text-4xl font-semibold tracking-tight">Experience</h2>
			<section>
				<h3 className="text-2xl font-medium tracking-tight">Work Experience</h3>
				<hr className="mb-1 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
				<ul className="flex flex-col gap-4">
					{experienceList.map((item) => (
						<li key={item.company} className="flex flex-col items-start gap-0 duration-200">
							<h4 className="text-lg font-semibold">{item.company}</h4>
							<p className="text-muted-foreground">{item.position}</p>
							<p className="text-muted-foreground">
								{item.from} &ndash; {item.to}
							</p>
						</li>
					))}
				</ul>
			</section>
			<section>
				<h3 className="text-2xl font-medium tracking-tight">Other Experience</h3>
				<hr className="mb-1 shrink-0 border border-neutral-200 delay-200 duration-500 ease-out dark:border-neutral-800" />
				<ul className="flex flex-col gap-4">
					{otherExperienceList.map((item) => (
						<li key={item.company} className="flex flex-col items-start gap-0 duration-200">
							<a href={item.externalLink ?? ""} className="group">
								<h4 className="flex items-center gap-0 overflow-hidden text-lg font-semibold underline underline-offset-1 duration-200 group-hover:text-theme-purple group-focus-visible:text-theme-purple dark:group-hover:text-violet-500 dark:group-focus-visible:text-violet-500">
									{item.company}
									<span className="-ml-px overflow-hidden">
										<SquareArrowRight className="ml-2 h-full w-auto -translate-x-full text-theme-purple opacity-0 blur-xs duration-300 ease-custom group-hover:translate-x-0 group-hover:opacity-100 group-hover:blur-none group-focus:translate-x-0 group-focus:opacity-100 dark:text-violet-500" />
									</span>
								</h4>
								<p className="text-muted-foreground">{item.position}</p>
								<p className="text-muted-foreground">
									{item.from} &ndash; {item.to}
								</p>
							</a>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}
