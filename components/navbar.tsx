import Link from "next/link";
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
		<header className="fixed top-0 left-0 z-20 flex w-full items-center justify-between bg-radial from-transparent from-[1px] via-white to-[1px] bg-[size:4px_4px] px-4 py-2 text-black backdrop-blur-[3px] backdrop-saturate-150 sm:px-10 md:px-14 lg:px-20 xl:px-24 dark:bg-neutral-950/80 dark:via-neutral-950 dark:text-white dark:backdrop-saturate-100">
			<nav className="flex h-fit w-full flex-row items-center justify-center gap-8 sm:justify-end">
				<ul className="flex flex-row items-center justify-start gap-2 font-medium sm:gap-6 md:gap-8 lg:gap-10 lg:text-xl xl:gap-16">
					{navLink.map((link) => {
						return (
							<li key={link.href} className="group">
								<Link
									href={link.href}
									className="group relative px-3 py-1 delay-300 duration-150 ease-out hover:text-white focus-visible:text-white"
								>
									{link.title}
									<div className="bg-theme-purple dark:bg-theme-purple absolute top-0 left-0 z-[-1] h-full w-full origin-right scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:duration-0"></div>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
