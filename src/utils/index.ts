import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const socialLinks = [
	{
		icon: faGithub,
		href: "https://github.com/vardy41",
		label: "GitHub",
	},
	{
		icon: faLinkedin,
		href: "https://www.linkedin.com/in/miko%C5%82ajdoktor/",
		label: "LinkedIn",
	},
	{
		icon: faEnvelope,
		href: "mailto:d.mikolajj@gmail.com",
		label: "Email",
	},
];

export const aboutIcons = [
	{
		icon: faCode,
		title: "Czysty kod",
		text: "Tworzę czytelny, modularny i łatwy w utrzymaniu kod.",
		color: "text-blue-400",
		bgColor: "bg-blue-900/30",
	},
	{
		icon: faMobileButton,
		title: "Responsywność",
		text: "Wszystkie moje projekty działają perfekcyjnie na każdym urządzeniu.",
		color: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: faGaugeHigh,
		title: "Wydajność",
		text: "Dbam o optymalizację i szybkość działania aplikacji.",
		color: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
	{
		icon: faUsers,
		title: "User Experience",
		text: "Tworzę interfejsy z myślą o wygodzie użytkownika.",
		color: "text-pink-400",
		bgColor: "bg-pink-900/30",
	},
];

export const skillsIcons = [
	{
		icon: faCode,
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
		icon: faServer,
		title: "Backend",
		techStack: ["Node.js", "REST API"],

		textColor: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: faTools,
		title: "Narzędzia",
		techStack: ["Git", "Webpack", "Vite", "Jest", "VS Code"],
		textColor: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
];

export const specializationList = [
	{
		icon: faCheckCircle,
		text: "Tworzenie responsywnych interfejsów użytkownika",
	},
	{
		icon: faCheckCircle,
		text: "Optymalizacja wydajności aplikacji webowych",
	},
	{
		icon: faCheckCircle,
		text: "Implementacja animacji i interaktywnych elementów",
	},
	{
		icon: faCheckCircle,
		text: "Integracja z API i usługami zewnętrznymi",
	},
	{
		icon: faCheckCircle,
		text: "Tworzenie aplikacji typu Single Page Application",
	},
];
