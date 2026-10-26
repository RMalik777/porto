interface Certificate {
	category: string;
	children: Array<{ title: string; year: string; href: string }>;
}

const baseUrl = "https://media.raflimalik.com/certificate";

export const certificateList: Array<Certificate> = [
	{
		category: "Internship & Course",
		children: [
			{
				title: "Maganghub - Paragon",
				year: "2026",
				href: `${baseUrl}/2026_Maganghub_Paragon.pdf`,
			},
			{
				title: "BNCC",
				year: "2022",
				href: `${baseUrl}/2022_BNCC_Course.pdf`,
			},
		],
	},
	{
		category: "Volunteer",
		children: [
			{
				title: "BINUS Freshmen Partner",
				year: "2023",
				href: `${baseUrl}/2023_Volunteer_Binus_Freshmen_Partner.pdf`,
			},
			{
				title: "2023 Jakarta E-Prix ",
				year: "2023",
				href: `${baseUrl}/2023_Volunteer_Jakarta_E-Prix_2023.pdf`,
			},
			{
				title: "2022 Jakarta E-Prix",
				year: "2022",
				href: `${baseUrl}/2022_Volunteer_Jakarta_E-Prix_2022.pdf`,
			},
		],
	},
];
