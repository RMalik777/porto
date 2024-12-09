import Link from "next/link";
import type { Metadata } from "next";

import { logoLicense } from "@/lib/data/licenseList";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: "License",
	description: "Information about logo and trademark used in this site.",
};

export default function License() {
	return (
		<main className="mt-32 mb-32 flex h-fit min-h-dvh flex-col items-start gap-16 px-6 sm:mt-40 sm:gap-20 sm:px-10 md:mt-48 md:gap-24 md:px-14 lg:mt-56 lg:gap-28 lg:px-20 xl:px-24">
			<h1 className="w-full text-4xl font-bold tracking-tight lg:text-5xl">
				License and Trademark Information
			</h1>
			<section className="flex w-full flex-col items-start gap-4 tracking-tight">
				<div className="w-full">
					<h2 className="text-2xl font-semibold lg:text-3xl">Third Party Trademarks</h2>
					<p>All trademarks referred to on this site are owned by their respective owners.</p>
					<Separator orientation="horizontal" />
				</div>
				<ul className="flex flex-col gap-4">
					{logoLicense.map((license) => (
						<li key={license.name} className="flex flex-col gap-0">
							<Link
								href={license.source}
								className="relative w-fit leading-snug font-medium duration-200 ease-out after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-theme-purple after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.83,0,0.17,1)] hover:text-theme-purple hover:after:origin-left hover:after:scale-x-100 focus-visible:text-theme-purple focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:duration-0 motion-reduce:after:duration-0 dark:hover:text-violet-500 dark:focus-visible:text-violet-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								{license.name}
							</Link>

							<p className="">
								&copy; <span className="font-semibold">{license.author}</span>
							</p>
							<Link
								href={license.licenseLink!}
								className="relative w-fit leading-snug duration-200 ease-out after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-violet-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.83,0,0.17,1)] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 after:motion-reduce:duration-0"
								target="_blank"
								rel="noopener noreferrer"
							>
								{license.license}
							</Link>
						</li>
					))}
				</ul>
			</section>
			<p className="text-lg tracking-tight">
				Information and Removal Request:
				<Link
					href="mailto:info@raflimalik.com"
					className="group relative px-1 py-px font-medium delay-200 duration-150 ease-out hover:text-white hover:underline focus-visible:text-white"
				>
					info@raflimalik.com{""}
					<span className="absolute bottom-0 left-0 z-[-1] h-0 w-full bg-theme-purple transition-all duration-200 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:h-full group-focus-visible:h-full dark:bg-violet-700"></span>
				</Link>
			</p>
		</main>
	);
}
