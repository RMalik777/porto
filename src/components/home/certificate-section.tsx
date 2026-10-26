import { event } from "onedollarstats";

import { certificateList } from "@/lib/data";
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";
import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CertificateSection() {
	return (
		<section
			id="certificates"
			className="mb-4 scroll-mt-14 space-y-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
		>
			<Reveal>
				<h2 className="text-4xl font-semibold tracking-tight">Certificates</h2>
			</Reveal>
			<ul className="flex flex-col gap-8">
				{certificateList.map((group) => (
					<li key={group.category}>
						<Reveal>
							<h3 className="text-2xl font-semibold tracking-tight">{group.category}</h3>
							<Separator className="line mb-2" />
						</Reveal>
						<RevealList className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{group.children.map((certificate, index) => (
								<RevealItem key={certificate.href} index={index}>
									<a
										href={certificate.href}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() =>
											event("Certificate Open", {
												title: certificate.title,
											})
										}
									>
										<Card className="h-full transition duration-200 ease-out hover:ring-primary">
											<CardHeader>
												<CardTitle>{certificate.title}</CardTitle>
												<CardDescription>{certificate.year}</CardDescription>
											</CardHeader>
										</Card>
									</a>
								</RevealItem>
							))}
						</RevealList>
					</li>
				))}
			</ul>
		</section>
	);
}
