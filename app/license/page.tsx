import Link from "next/link";
import { logoLicense } from "@/lib/data/licenseList";
import { Separator } from "@/components/ui/separator";

export default function License() {
	return (
		<main className="mt-32 mb-32 flex h-fit min-h-dvh flex-col items-start gap-16 sm:mt-40 sm:gap-20 md:mt-48 md:gap-24 lg:mt-56 lg:gap-28">
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
								className="relative w-fit font-medium leading-snug duration-200 ease-out after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-fuchsia-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.83,0,0.17,1)] hover:text-fuchsia-600 hover:after:origin-left hover:after:scale-x-100 focus-visible:text-fuchsia-600 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:duration-0 motion-reduce:after:duration-0"
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
								className="relative w-fit leading-snug duration-200 ease-out after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-fuchsia-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.83,0,0.17,1)] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 after:motion-reduce:duration-0"
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
					className="group relative py-px px-1 font-medium delay-200 duration-150 ease-out hover:text-white hover:underline"
				>
					info@raflimalik.com{""}
					<span className="absolute bottom-0 left-0 z-[-1] h-0 w-full bg-fuchsia-500 transition-all duration-200 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:h-full"></span>
				</Link>
			</p>
		</main>
	);
}
