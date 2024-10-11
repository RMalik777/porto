interface Project {
	name: string;
	desc?: string;
	image: string;
	live?: string;
	source?: string;
	tech: string[];
}

export const projectsList: Project[] = [
	{
		name: "Blog Website",
		desc: "A blog website to write and share my thoughts and experiences.",
		image: "/Project/thumbnail/blog.webp",
		live: "https://blog.raflimalik.com",
		source: "https://github.com/RMalik777/blog",
		tech: ["Astro", "Sanity", "Tailwind CSS"],
	},
	{
		name: "Link Book",
		desc: "Self created linktree alternative to host my social media links.",
		image: "/Project/thumbnail/linkbook.webp",
		live: "https://link.raflimalik.com",
		source: "https://github.com/RMalik777/LinkBook",
		tech: ["SvelteKit", "Tailwind CSS"],
	},
	{
		name: "Tech Event Website",
		desc: "Website for a imaginary tech event called “Pudding Fest” by PT Musang.",
		image: "/Project/thumbnail/puddingfest.webp",
		live: "https://puddingfest.raflimalik.com",
		source: "https://github.com/RMalik777/BNCC-Final-Project.git",
		tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Firebase Firestore"],
	},
	{
		name: "Mini Portfolio",
		desc: "Website to show personal information.",
		image: "/Project/thumbnail/miniporto.webp",
		live: "https://miniporto.raflimalik.com",
		source: "https://github.com/RMalik777/BNCC-Mid-Project.git",
		tech: ["HTML", "CSS", "JavaScript"],
	},
	{
		name: "KpopZtation",
		desc: "Website for a music album shopping.",
		image: "/Project/thumbnail/kpopztation.webp",
		live: "",
		source: "https://github.com/RMalik777/PSD_Lab.git",
		tech: ["ASP.NET", "SQL Server"],
	},
	{
		name: "Astronom",
		desc: "A space themed website. Containing information and images from Hubble Space Telescope.",
		image: "/Project/thumbnail/astronom.webp",
		live: "https://astronom.raflimalik.com",
		source: "https://github.com/RMalik777/Astronom.git",
		tech: ["HTML", "CSS"],
	},
	{
		name: "NOKA",
		desc: "Website for a game launch event. Contain information about the launch date, future plan and esports.",
		image: "/Project/thumbnail/NOKA.webp",
		live: "https://noka.raflimalik.com",
		source: "https://github.com/RMalik777/HCI_Project.git",
		tech: ["HTML", "CSS"],
	},
	{
		name: "Tourism App",
		desc: "Mobile app to promote tourism in Komodo Island. Contains features like emergency notification, place recommendation, and guidelines.",
		image: "/Project/thumbnail/Tourism.webp",
		live: "https://www.figma.com/proto/yvdpsRxRriroCLBme1aMEq/HCI---Final-Exam-2?page-id=2%3A2&type=design&node-id=4-24&viewport=589%2C294%2C0.09&t=A3L94ZgtCx0jDe3n-1&scaling=scale-down&starting-point-node-id=4%3A24&mode=design",
		source:
			"https://www.figma.com/file/yvdpsRxRriroCLBme1aMEq/HCI---Final-Exam-2?type=design&node-id=2%3A2&mode=design&t=udRyIo2NUwXqWOdV-1",
		tech: ["Figma"],
	},
	{
		name: "Wedding Planner",
		desc: "Mobile application for wedding venue finder. The app can help users search, book, and pay for the place of their wedding.",
		image: "/Project/thumbnail/Wedding Planner.webp",
		live: "https://www.figma.com/proto/tZ1g8qfiOXy4oYlyzwFPLr/HCI---Mid-Exam?page-id=0%3A1&type=design&node-id=2-40&viewport=294%2C568%2C0.47&t=2hrk8OTbLjy3ofxQ-1&scaling=scale-down&starting-point-node-id=2%3A40&mode=design",
		source:
			"https://www.figma.com/file/tZ1g8qfiOXy4oYlyzwFPLr/HCI---Mid-Exam?type=design&node-id=0%3A1&mode=design&t=hhIiCalCCuqud4Y0-1",
		tech: ["Figma"],
	},
	{
		name: "E-Commerce",
		desc: "E-Commerce mobile application. The app contains features like integrated payment, recommendation and comprehensive detail.",
		image: "/Project/thumbnail/ECommerce.webp",
		live: "https://www.figma.com/proto/bij8OTQPuLDjDyLsDVeNHv/HCI---Project?page-id=0%3A1&type=design&node-id=7-2&viewport=405%2C460%2C0.1&t=CcW2mXRwhCLusWs4-1&scaling=scale-down&starting-point-node-id=7%3A2&mode=design",
		source:
			"https://www.figma.com/file/bij8OTQPuLDjDyLsDVeNHv/HCI---Project?type=design&node-id=0%3A1&mode=design&t=mosRZ5ZIb083OhTC-1",
		tech: ["Figma"],
	},
];
