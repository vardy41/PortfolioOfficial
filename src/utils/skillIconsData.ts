import { iconsObj } from "../assets/svg/icons/icons";
import type { skillIconsDataProps } from "../types/types";
export const skillsIcons: skillIconsDataProps[] = [
	{
		icon: iconsObj.iconCode,
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
		icon: iconsObj.iconServer,
		title: "Backend",
		techStack: ["Node.js", "REST API"],

		textColor: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: iconsObj.iconTools,
		title: "Narzędzia",
		techStack: ["Git", "Webpack", "Vite", "Jest", "VS Code"],
		textColor: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
];
