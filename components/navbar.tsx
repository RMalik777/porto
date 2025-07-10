import Link from "next/link";

import { ModeToggle } from "@/components/theme-toggle";
interface NavLink {
	title: string;
	href: string;
}
const navLink: NavLink[] = [
	{
		title: "Home",
		href: "/#intro",
	},
	{
		title: "Skills",
		href: "/#skills",
	},
	{
		title: "Projects",
		href: "/#projects",
	},
	{
		title: "About",
		href: "/#about",
	},
];
export function Navbar() {
	return (
		<header className="fixed top-0 left-0 z-20 flex w-full items-center justify-between bg-radial from-white/10 from-[1px] via-white to-[3px] bg-[size:3px_3px] px-4 py-2 text-black backdrop-blur-[4px] sm:px-10 md:px-14 lg:px-20 xl:px-24 dark:bg-neutral-950/50 dark:via-neutral-950 dark:text-white">
			<nav className="flex h-fit w-full flex-row items-center justify-center gap-2 sm:justify-end sm:gap-4 md:gap-8">
				<ul className="flex flex-row items-center justify-start gap-2 font-medium sm:gap-6 md:gap-8 lg:gap-10 lg:text-xl xl:gap-16">
					{navLink.map((link) => {
						return (
							<li key={link.href} className="group">
								<Link
									href={link.href}
									className="group relative flex items-center px-3 py-1 text-center delay-300 duration-150 ease-out hover:text-white focus-visible:text-white"
								>
									{link.title}
									<div className="absolute top-0 left-0 z-[-1] h-full w-full origin-right scale-x-0 bg-theme-purple transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:duration-0 dark:bg-theme-purple"></div>
								</Link>
							</li>
						);
					})}
				</ul>
				<ModeToggle />
			</nav>
		</header>
	);
}
