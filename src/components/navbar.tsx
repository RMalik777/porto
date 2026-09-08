import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { motion } from "motion/react";

import { PanelRight, X } from "lucide-react";
import { easeSignature } from "@/lib/motion";
import { useActiveSection } from "@/hooks/use-active-section";
import { useIsMobile } from "@/hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme-toggle";

interface NavLink {
	title: string;
	href: string;
	section: string;
}
const navLink: Array<NavLink> = [
	{
		title: "Home",
		href: "/#",
		section: "intro",
	},
	{
		title: "Skills",
		href: "/#skills",
		section: "skills",
	},
	{
		title: "Projects",
		href: "/#projects",
		section: "projects",
	},
	{
		title: "About",
		href: "/#about",
		section: "about",
	},
	{
		title: "CV",
		href: "/#cv",
		section: "cv",
	},
];
const navSections = navLink.map((link) => link.section);

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useIsMobile();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const activeSection = useActiveSection(navSections, pathname === "/");
	useEffect(() => {
		// Close the popover when switching to desktop view
		if (!isMobile) {
			setIsOpen(false);
		}
	}, [isMobile]);

	return (
		<header
			className={cn(
				isMobile ? "justify-end" : "justify-between",
				"fixed top-0 left-0 z-20 flex min-h-12 w-full items-center bg-radial from-white/10 from-[1px] via-white to-[3px] bg-size-[3px_3px] px-4 py-2 text-black backdrop-blur-xs transition sm:px-10 md:px-14 lg:px-20 xl:px-24 dark:from-neutral-950/50 dark:via-neutral-950 dark:text-white",
			)}
		>
			{isMobile ? (
				<>
					<ModeToggle />
					<Popover open={isOpen} onOpenChange={setIsOpen}>
						<PopoverTrigger
							render={
								<Button
									variant="outline"
									size="icon"
									onClick={() => setIsOpen(!isOpen)}
									className={cn("m-1 hover:*:scale-110")}
								>
									<span className="sr-only">Toggle Menu</span>
									<X
										className={cn(
											isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0",
											"absolute transition duration-200 ease-custom",
										)}
									/>
									<PanelRight
										className={cn(
											isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
											"absolute transition duration-200 ease-custom",
										)}
									/>
								</Button>
							}
						></PopoverTrigger>
						<PopoverContent className="flex w-fit flex-col items-end" align="end" side="bottom">
							<nav>
								<ul className="flex flex-col items-end">
									{navLink.map((link) => {
										return (
											<li key={link.href} className="">
												<Link
													to={link.href}
													onClick={() => setIsOpen(false)}
													className={cn(
														activeSection === link.section && "text-primary",
														"flex items-center p-2 text-center text-lg font-medium transition duration-150 ease-out hover:scale-105 hover:text-primary",
													)}
												>
													{link.title}
												</Link>
											</li>
										);
									})}
								</ul>
							</nav>
						</PopoverContent>
					</Popover>
				</>
			) : (
				<nav
					className={
						"flex w-full flex-row items-center justify-center gap-2 overflow-hidden transition-all duration-300 sm:justify-end sm:gap-4 md:gap-8"
					}
				>
					<ul className="flex flex-row items-center justify-start gap-2 font-medium transition duration-200 sm:gap-6 md:gap-8 lg:gap-10 lg:text-xl xl:gap-16">
						{navLink.map((link) => {
							return (
								<li key={link.href} className="group">
									<Link
										to={link.href}
										className="group relative flex items-center px-3 py-1 text-center transition delay-300 duration-150 ease-out hover:text-white focus-visible:text-white"
									>
										{link.title}
										<div className="absolute top-0 left-0 z-[-1] h-full w-full origin-right scale-x-0 bg-primary transition-transform duration-300 ease-custom group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:duration-0"></div>
										{activeSection === link.section ? (
											<motion.div
												layoutId="nav-active"
												transition={{ duration: 0.3, ease: easeSignature }}
												className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transition-colors"
											/>
										) : null}
									</Link>
								</li>
							);
						})}
					</ul>
					<ModeToggle />
				</nav>
			)}
		</header>
	);
}
