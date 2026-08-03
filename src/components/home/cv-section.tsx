import { event } from "onedollarstats";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cvList = [
	{ language: "English", label: "Bahasa Inggris", action: "Open", href: "https://media.raflimalik.com/cv/cv_en_raflimalik.pdf" },
	{ language: "Indonesian", label: "Bahasa Indonesia", action: "Buka", href: "https://media.raflimalik.com/cv/cv_id_raflimalik.pdf" },
];

export function CvSection() {
	return (
		<section id="cv" className="mb-4 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
			<h2 className="text-4xl font-semibold tracking-tight">Curriculum Vitae (CV)</h2>
			<ul className="flex w-full flex-row flex-wrap items-start justify-stretch gap-4 font-medium tracking-tight">
				{cvList.map((cv) => (
					<li key={cv.language} className="group min-w-fit grow basis-0">
						<Card className="hover:shadow-none">
							<CardHeader>
								<CardTitle>{cv.language}</CardTitle>
								<CardDescription>{cv.label}</CardDescription>
							</CardHeader>
							<CardFooter className="flex flex-row flex-wrap gap-2">
								<Button
									variant="outline"
									size="sm"
									nativeButton={false}
									onClick={() =>
										event("CV Open", {
											language: cv.language,
										})
									}
									render={
										<a href={cv.href} target="_blank" rel="noopener noreferrer">
											{cv.action}
										</a>
									}
								/>
							</CardFooter>
						</Card>
					</li>
				))}
			</ul>
		</section>
	);
}
