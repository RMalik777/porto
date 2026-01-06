interface Experience {
	company: string;
	position: string;
	from: string;
	to: string;
	externalLink?: string;
	JobDescription?: string[];
}

export const experienceList: Experience[] = [
	{
		company: "ParagonCorp",
		position: "Frontend Developer Intern",
		JobDescription: [
			"Developed and maintain internal web application for leasing spaces",
			"Developed web applications using React.js, Supabase, Axios and Tanstack Query",
			"Debug and solve problems",
		],
		from: "November 2025",
		to: "Current",
	},
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
