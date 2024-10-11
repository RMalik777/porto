import Link from "next/link";
import Image from "next/image";

import { type SimpleIcon, siInstagram, siGmail, siLinkedin, siGithub } from "simple-icons";

import portrait from "@/public/photosquarezoom.jpg";

interface LinkItem {
	name: string;
	href: string;
	logo?: SimpleIcon;
}
const backLink: LinkItem[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "License",
		href: "/license",
	},
];

const otherWorks: LinkItem[] = [
	{
		name: "Blog",
		href: "https://blog.raflimalik.com",
	},
	{
		name: "Link Book",
		href: "https://link.raflimalik.com",
	},
	{
		name: "Font Calculator",
		href: "https://font.raflimalik.com",
	},
];

const socialList: LinkItem[] = [
	{
		name: "Github",
		href: "https://github.com/RMalik777",
		logo: siGithub,
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/raflimalik__",
		logo: siInstagram,
	},
	{
		name: "Email",
		href: "mailto:Rafli.Malik@gmail.com",
		logo: siGmail,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/raflimalik",
		logo: siLinkedin,
	},
];
const linkParent = [
	{ title: "Explore", child: backLink },
	{ title: "Social", child: socialList },
	{ title: "Other Works", child: otherWorks },
];

export function Footer() {
	return (
		<footer className="mt-10 flex w-full flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
			<div className="flex w-full flex-col items-start justify-between gap-4 tracking-tight sm:flex-row sm:gap-0">
				{linkParent.map((linkList) => {
					return (
						<div key={linkList.title}>
							<h2 className="text-xl font-medium">{linkList.title}</h2>
							<ul>
								{linkList.child.map((link) => {
									return (
										<li key={link.href}>
											<Link
												href={link.href}
												className="flex items-center gap-1 duration-200 ease-out hover:text-pink-500 hover:underline"
											>
												{link.logo ? (
													<span
														dangerouslySetInnerHTML={{ __html: link.logo.svg }}
														className="h-4 w-4"
													></span>
												) : null}
												{link.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
				<div className="flex flex-row items-center gap-2 sm:self-center">
					<p className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-lg font-medium text-transparent">
						Rafli Malik
					</p>
					<div className="group relative h-12 w-12 rounded-full">
						<Image
							src={portrait}
							className="absolute inset-0 h-full w-full rounded-full"
							alt="Portrait of Rafli Malik, the owner of this website"
						/>
						<div
							className="absolute inset-0 -z-10 h-full w-full rounded-full bg-cover bg-no-repeat blur-[1px] brightness-125 saturate-150 duration-200 ease-out group-hover:blur-sm"
							// use inline style so the background image can be dynamic and follow the <Image/> src
							style={{ background: `url(${portrait.src})` }}
						></div>
					</div>
				</div>
			</div>
			<p className="self-center font-light tracking-tight">&copy; 2024 Rafli Malik </p>
		</footer>
	);
}
