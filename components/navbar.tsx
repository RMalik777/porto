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
		<nav className="fixed top-0 left-0 z-10 flex h-fit w-full flex-row items-center justify-center gap-8 bg-white/80 py-2 px-4 px-6 px-8 backdrop-blur-md backdrop-saturate-150 sm:justify-start sm:px-10 md:px-14 lg:px-20 xl:px-24">
			<ul className="flex flex-row items-center justify-start gap-2 font-medium sm:gap-6 md:gap-8 lg:gap-10 lg:text-xl xl:gap-16">
				{navLink.map((link) => {
					return (
						<li key={link.href} className="group">
							<Link
								href={link.href}
								className="group relative py-1 px-3 delay-300 duration-150 ease-out hover:text-white focus-visible::text-white"
							>
								{link.title}
								<div className="absolute top-0 left-0 z-[-1] h-full w-full origin-right scale-x-0 bg-fuchsia-500 transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:duration-0"></div>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
