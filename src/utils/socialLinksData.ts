import { iconsObj } from "../assets/svg/icons/icons";
import type { navAndSocialLinksProps } from "../types/types";
export const socialLinks: navAndSocialLinksProps[] = [
	{
		icon: iconsObj.iconGit,
		href: "https://github.com/vardy41",
		label: "GitHub",
		social: "GitHub",
		nickName: "vardy41",
	},
	{
		icon: iconsObj.iconLinkedin,
		href: "https://www.linkedin.com/in/miko%C5%82ajdoktor/",
		label: "LinkedIn",
		social: "LinkedIn",
		nickName: "Mikołaj Doktor",
	},
	{
		icon: iconsObj.iconEnvelope,
		href: "mailto:d.mikolajj@gmail.com",
		label: "Email",
		social: "Gmail",
		nickName: "d.mikolajj@gmail.com",
	},
];
