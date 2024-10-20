interface Experience {
	company: string;
	position: string;
	from: string;
	to: string;
	externalLink?: string;
}

export const experienceList: Experience[] = [
	{
		company: "CIMB Niaga",
		position: "Application Developer Intern",
		from: "February 2024",
		to: "February 2025",
	},
];

export const otherExperienceList: Experience[] = [
	{
		company: "2023 Jakarta E-Prix",
		position: "Volunteer",
		from: "May 2023",
		to: "June 2023",
		externalLink: "https://blog.raflimalik.com/post/2023-jakarta-e-prix/",
	},
	{
		company: "2022 Jakarta E-Prix",
		position: "Volunteer",
		from: "May 2022",
		to: "June 2022",
		externalLink: "https://blog.raflimalik.com/post/2022-jakarta-e-prix/",
	},
	{
		company: "BINUS University",
		position: "Freshmen Partner",
		from: "September 2022",
		to: "June 2023",
		externalLink: "https://blog.raflimalik.com/post/freshmen-partner/",
	},
];
