import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";
export type GradientBlobProps = {
	className: string;
	color: string;
};

export type LayoutProps = {
	children: ReactNode;
};

export type MyValuesCardProps = {
	icon: IconType;
	title: string;
	text: string;
	textColor: string;
	bgColor: string;
};

export type SkillsCardProps = {
	icon: IconType;
	title: string;
	tech: string[];
	textColor: string;
	bgColor: string;
};

export type ParagraphProps = {
	textColor: string;
	margin?: string;
	textSize?: string;
	content: string;
};

export type CardProps = {
	title: string;
	description: string;
	company: string;
};

export type ProjectCardProps = {
	projectBackground: string;
	title: string;
	text: string;
	tech: string[];
	iconDemo: IconType;
	iconGit: IconType;
};

export type SectionProps = {
	children: ReactNode;
	className?: string;
	containerClass?: string;
	id: string;
};

export type SectionsHeaderProps = {
	normalText: string;
	blueText: string;
};

export type navAndSocialLinksProps = {
	icon: IconType;
	label: string;
	href: string;
	social: string;
	nickName: string;
};
export type aboutIconsDataProps = {
	icon: IconType;
	title: string;
	text: string;
	color: string;
	bgColor: string;
};

export type projectDataProps = {
	projectBackground: string;
	title: string;
	text: string;
	tech: string[];
	iconDemo: IconType;
	iconGit: IconType;
};

export type skillIconsDataProps = {
	icon: IconType;
	title: string;
	techStack: string[];
	textColor: string;
	bgColor: string;
};

export type specializationListProps = {
	icon: IconType;
	text: string;
};

export type ContactCardProps = {
	icon: IconType;
	socialName: string;
	nick: string;
	href: string;
	label: string;
};

export type CardHeadingProps = {
	children: ReactNode;
	color?: string; // e.g. "text-white" or "text-blue-500"
	marginBottom?: string; // e.g. "mb-4", "mb-6"
	className?: string;
};

export type CardWrapperProps = {
	children: ReactNode;
	className?: string;
};

export type FadeInSectionProps = {
	children: ReactNode;
	className?: string;
	delay: number;
};

export type MenuProps = {
	mobileMenuOpen: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export type HamburgerButtonProps = {
	onClick: () => void;
};
