import portfolioImg from "../assets/svg/backgrounds/portfolioBackground.svg";
import project1Bg from "../assets/svg/backgrounds/projectBg.svg";
import type { projectDataProps } from "../types/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export const projectData: projectDataProps[] = [
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
		projectBackground: project1Bg,
		title: "Coming soon...",
		text: "Project in progress...",
		tech: ["Tech", "Tech", "Tech", "Tech"],
		iconDemo: FaExternalLinkAlt,
		iconGit: FaGithub,
		hrefGit: "#",
		hrefDemo: "#",
	},
];
