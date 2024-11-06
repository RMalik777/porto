import { MetadataRoute } from "next";
import { projectsList } from "@/lib/data/project";

const ROOT_URL = "https://raflimalik.com";
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: ROOT_URL,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${ROOT_URL}/about`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.2,
		},
		...projectsList.map((project) => ({
			url: `${ROOT_URL}/${project.name.replace(/\s+/g, "-").toLowerCase()}`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5,
		})),
	];
}
