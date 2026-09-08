import { educationList } from "@/lib/data";
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";

export function EducationSection() {
	return (
		<section className="mb-8 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
			<Reveal>
				<h2 className="text-4xl font-semibold tracking-tight">Education</h2>
			</Reveal>
			<RevealList className="ml-2 flex flex-col gap-4 border-l border-theme-purple">
				{educationList.map((item, index) => (
					<RevealItem
						key={item.school}
						index={index}
						className="relative flex flex-col items-start gap-0 pl-4"
					>
						<div className="absolute left-[-6.5px] mt-2 h-3 w-3 rotate-45 bg-theme-purple"></div>
						<h3 className="text-lg font-semibold">{item.school}</h3>
						<p className="text-muted-foreground">{item.major}</p>
						<p className="text-muted-foreground">
							{item.from} &ndash; {item.to}
						</p>
						{item.grade ? <p className="text-muted-foreground">GPA {item.grade}</p> : null}
					</RevealItem>
				))}
			</RevealList>
		</section>
	);
}
