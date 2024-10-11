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
								className="duration-200 ease-out hover:text-pink-600 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h3 className="font-medium">{license.name}</h3>
							</Link>
							<p className="">
								&copy; <span className="font-semibold">{license.author}</span>
							</p>
							<Link
								href={license.licenseLink!}
								className="duration-200 ease-out hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{license.license}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
