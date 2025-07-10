import type { skillIconsDataProps } from "../types/types";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
export const skillsIcons: skillIconsDataProps[] = [
	{
		icon: FaCode,
		title: "Frontend",
		techStack: [
			"HTML5",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Tailwind CSS",
			"SASS",
			"MUI",
		],

		textColor: "text-blue-400",
		bgColor: "bg-blue-900/30",
	},
	{
		icon: FaServer,
		title: "Backend",
		techStack: ["Node.js", "REST API"],
		textColor: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: FaTools,
		title: "Narzędzia",
		techStack: ["Git", "Webpack", "Vite", "Jest", "VS Code,", "GIT"],
		textColor: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
];
