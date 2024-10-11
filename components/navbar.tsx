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
		title: "About",
		href: "/#about",
	},
	{
		title: "Skills",
		href: "/#skills",
	},
	{
		title: "Projects",
		href: "/#projects",
	},
];
export function Navbar() {
	return (
		<nav className="fixed top-0 left-0 z-10 flex h-fit w-full flex-row items-center gap-8 bg-white/80 py-2 px-6 px-8 backdrop-blur-md backdrop-saturate-150 sm:px-10 md:px-14 lg:px-20 xl:px-24">
			<ul className="flex flex-row items-center justify-start gap-16 font-medium lg:text-xl">
				{navLink.map((link) => {
					return (
						<li key={link.href} className="group">
							<Link
								href={link.href}
								className="duration-200 ease-out group-hover:underline hover:text-pink-500"
							>
								{link.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
