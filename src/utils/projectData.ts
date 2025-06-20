import portfolioImg from "../assets/svg/backgrounds/portfolioBackground.svg";
import project1Bg from "../assets/svg/backgrounds/projectBg.svg";
import { iconsObj } from "../assets/svg/icons/icons";
import type { projectDataProps } from "../types/types";

export const projectData: projectDataProps[] = [
	{
		projectBackground: portfolioImg,
		title: "Portfolio",
		text: "Portfolio stworzone z myślą o wydajności, optymalizacji oraz skalowalności, modularny kod a także przyjemne UX.",
		tech: ["React", "Typescript", "TailwindCSS"],
		iconDemo: iconsObj.iconDemo,
		iconGit: iconsObj.iconGit,
		hrefGit: "https://github.com/vardy41/PortfolioOfficial",
		hrefDemo: "https://drdevportfolio.netlify.app/",
	},
	{
		projectBackground: project1Bg,
		title: "Coming soon...",
		text: "Project in progress...",
		tech: ["Tech", "Tech", "Tech", "Tech"],
		iconDemo: iconsObj.iconDemo,
		iconGit: iconsObj.iconGit,
		hrefGit: "#",
		hrefDemo: "#",
	},
];
