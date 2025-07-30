import type { SocialLinkProps } from "../types/types";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const socialLinks: SocialLinkProps[] = [
	{
		icon: FaGithub,
		href: "https://github.com/vardy41",
		label: "GitHub",
		social: "GitHub",
		nickName: "vardy41",
	},
	{
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/miko%C5%82ajdoktor/",
		label: "LinkedIn",
		social: "LinkedIn",
		nickName: "Mikołaj Doktor",
	},
	{
		icon: FaEnvelope,
		href: "mailto:d.mikolajj@gmail.com",
		label: "Email",
		social: "Email",
		nickName: "d.mikolajj@gmail.com",
	},
];
