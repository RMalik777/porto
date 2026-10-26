import { event } from "onedollarstats";

import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cvList = [
	{
		language: "English",
		label: "Bahasa Inggris",
		action: "Open",
		href: "https://media.raflimalik.com/cv/cv_en_raflimalik.pdf",
	},
	{
		language: "Indonesian",
		label: "Bahasa Indonesia",
		action: "Buka",
		href: "https://media.raflimalik.com/cv/cv_id_raflimalik.pdf",
	},
];

export function CvSection() {
	return (
		<section
			id="cv"
			className="mb-4 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
		>
			<Reveal>
				<h2 className="text-4xl font-semibold tracking-tight">Curriculum Vitae (CV)</h2>
			</Reveal>
			<RevealList className="flex w-full flex-row flex-wrap items-start justify-stretch gap-4 font-medium tracking-tight">
				{cvList.map((cv, index) => (
					<RevealItem key={cv.language} index={index} className="group min-w-fit grow basis-0">
						<Card className="h-full">
							<CardHeader>
								<CardTitle>{cv.language}</CardTitle>
								<CardDescription>{cv.label}</CardDescription>
							</CardHeader>
							<CardFooter className="flex flex-row flex-wrap gap-2">
								<a
									className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
									href={cv.href}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() =>
										event("CV Open", {
											language: cv.language,
										})
									}
								>
									{cv.action}
								</a>
							</CardFooter>
						</Card>
					</RevealItem>
				))}
			</RevealList>
		</section>
	);
}
