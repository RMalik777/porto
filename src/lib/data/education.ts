interface Education {
	school: string;
	from: string;
	to: string;
	major?: string;
	grade?: string;
}

export const educationList: Education[] = [
	{
		school: "BINUS University",
		from: "2021",
		to: "2025",
		major: "Computer Science",
		grade: "3.55",
	},
	{
		school: "SMAN 3 Kota Tangerang",
		from: "2018",
		to: "2021",
		major: "Science",
	},
];
