import project1Bg from "../assets/svg/backgrounds/projectBg.svg";
import { iconsObj } from "../assets/svg/icons/icons";
export const socialLinks = [
	{
		icon: iconsObj.iconGit,
		href: "https://github.com/vardy41",
		label: "GitHub",
	},
	{
		icon: iconsObj.iconLinkedin,
		href: "https://www.linkedin.com/in/miko%C5%82ajdoktor/",
		label: "LinkedIn",
	},
	{
		icon: iconsObj.iconEnvelope,
		href: "mailto:d.mikolajj@gmail.com",
		label: "Email",
	},
];

export const aboutIcons = [
	{
		icon: iconsObj.iconCode,
		title: "Czysty kod",
		text: "Tworzę czytelny, modularny i łatwy w utrzymaniu kod.",
		color: "text-blue-400",
		bgColor: "bg-blue-900/30",
	},
	{
		icon: iconsObj.iconMobile,
		title: "Responsywność",
		text: "Wszystkie moje projekty działają perfekcyjnie na każdym urządzeniu.",
		color: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: iconsObj.iconPerformance,
		title: "Wydajność",
		text: "Dbam o optymalizację i szybkość działania aplikacji.",
		color: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
	{
		icon: iconsObj.iconUsers,
		title: "User Experience",
		text: "Tworzę interfejsy z myślą o wygodzie użytkownika.",
		color: "text-pink-400",
		bgColor: "bg-pink-900/30",
	},
];

export const skillsIcons = [
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

export const specializationList = [
	{
		icon: iconsObj.iconCheck,
		text: "Tworzenie responsywnych interfejsów użytkownika",
	},
	{
		icon: iconsObj.iconCheck,
		text: "Optymalizacja wydajności aplikacji webowych",
	},
	{
		icon: iconsObj.iconCheck,
		text: "Implementacja animacji i interaktywnych elementów",
	},
	{
		icon: iconsObj.iconCheck,
		text: "Integracja z API i usługami zewnętrznymi",
	},
	{
		icon: iconsObj.iconCheck,
		text: "Tworzenie aplikacji typu Single Page Application",
	},
];

export const projectData = [
	{
		projectBackground: project1Bg,
		title: "Admin Dashboard",
		text: "Panel administracyjny z zaawansowaną analityką i zarządzaniem użytkownikami.",
		tech: ["React", "Redux", "Node.js", "MongoDB"],
		iconDemo: iconsObj.iconDemo,
		iconGit: iconsObj.iconGit,
	},
];
