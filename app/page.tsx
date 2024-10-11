import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { skillsList, projectsList } from "@/lib/data";

export default function Home() {
	return (
		<main className="flex w-full flex-col items-stretch justify-start gap-8">
			<section id="intro" className="flex h-dvh w-full flex-col items-start justify-center gap-4">
				<h1 className="text-4xl font-light leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					Rafli Malik
				</h1>

				<p className="text-lg tracking-tight sm:text-xl md:text-2xl">
					&quot;Lorem Ipsum Tagline&quot;
				</p>
			</section>

			<section id="about">
				<h2 className="text-4xl font-semibold tracking-tighter">Who am i</h2>
				<p className="max-w-prose">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum libero omnis assumenda
					dolor! Perspiciatis illum ducimus, minima reprehenderit tenetur consectetur alias quaerat,
					doloremque voluptates, similique mollitia. Esse in molestias eligendi?
				</p>
			</section>

			<section id="skills">
				<h2 className="text-4xl font-semibold tracking-tighter">Skills</h2>
				<p className="max-w-prose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat reiciendis aliquam
					neque ab eius, autem cumque inventore fuga suscipit error eligendi amet similique
					consequuntur nihil pariatur delectus alias laudantium!
				</p>
				<div className="flex flex-col items-stretch gap-5">
					<ul className="flex flex-col gap-8">
						{skillsList?.map((skill) => (
							<li key={skill.category}>
								<h3 className="text-2xl font-semibold tracking-tight">{skill.category}</h3>
								<Separator orientation="horizontal" className="mb-4" />
								<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{skill?.children.map((child) => (
										<Link href={child.link} key={child.name} className="">
											<Card className="w-full" style={{ color: `#${child.color ?? "000000"}` }}>
												<CardHeader className="p-4">
													<CardTitle className="flex items-center gap-2 text-xl font-normal">
														{child.logo ? (
															<Image
																src={child.logo ?? ""}
																width={20}
																height={20}
																alt="logo"
																className=""
															/>
														) : null}
														{child.name}
													</CardTitle>
												</CardHeader>
											</Card>
										</Link>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section id="projects" className="relative">
				<h2 className="text-4xl font-semibold tracking-tighter">Projects</h2>
				<p className="max-w-prose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deleniti aliquid. Iure
					maxime commodi sunt architecto quaerat, dignissimos cumque repudiandae nesciunt at.
					Dolores itaque iusto harum, neque iste placeat reprehenderit?
				</p>
				
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{projectsList?.map((project, index) => (
						<li key={project.name} className="items-stretch">
							<Card
								className="group flex h-full flex-col justify-between duration-200 starting:opacity-0"
								style={{ transitionDelay: `${index * 3}0ms` }}
							>
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
									<CardDescription className="">{project.desc}</CardDescription>
								</CardHeader>
								<CardFooter>
									<ul className="flex flex-wrap gap-2">
										{project?.tech.map((tech, childIndex) => (
											<li
												className="w-fit py-1 px-2 text-xs font-medium duration-200 ease-out group-hover:bg-pink-100"
												style={{ transitionDelay: `${childIndex * 3}0ms` }}
												key={tech}
											>
												{tech}
											</li>
										))}
									</ul>
								</CardFooter>
							</Card>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
