import comingSoonbg from "../assets/svg/backgrounds/projectBg.svg";
import portfolioImg from "../assets/svg/backgrounds/portfolioBackground.svg";
import moodBasedApp from "../assets/svg/backgrounds/moodBasedApp.svg";
import type { ProjectDataProps } from "../types/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export const projectData: ProjectDataProps[] = [
	{
		projectBackground: portfolioImg,
		title: "Portfolio",
		text: "Portfolio stworzone z myślą o wydajności, optymalizacji oraz skalowalności, modularny kod a także przyjemne UX.",
		tech: ["React", "Typescript", "TailwindCSS"],
		iconDemo: FaExternalLinkAlt,
		iconGit: FaGithub,
		hrefGit: "https://github.com/vardy41/PortfolioOfficial",
		hrefDemo: "https://drdevportfolio.netlify.app/",
	},
	{
		projectBackground: moodBasedApp,
		title: "MoodBasedApp",
		text: "Aplikacja w której wybieramy playliste na podstawie naszego humoru, dostęp tylko do preview piosenek. Projekt służy pokazaniu umiejętności REST API.",
		tech: ["React", "Typescript", "SCSS", "React Query", "Express", "REST API"],
		iconDemo: FaExternalLinkAlt,
		iconGit: FaGithub,
		hrefGit: "https://github.com/vardy41/MoodBasedApp",
		hrefDemo: "https://moodbasedapp.netlify.app/",
	},
	{
		projectBackground: comingSoonbg,
		title: "Coming soon...",
		text: "Coming soon...",
		tech: ["Tech", "Tech", "Tech", "Tech"],
		iconDemo: FaExternalLinkAlt,
		iconGit: FaGithub,
		hrefGit: "#",
		hrefDemo: "#",
	},
];
