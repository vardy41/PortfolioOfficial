import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode } from "react";

export type GradientBlobProps = {
	className: string;
	color: string;
};

export type LayoutProps = {
	children: ReactNode;
};

export type MyValuesCardProps = {
	icon: IconProp;
	title: string;
	text: string;
	textColor: string;
	bgColor: string;
};

export type SkillsCardProps = {
	icon: IconProp;
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
	iconDemo: IconProp;
	iconGit: IconProp;
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
	icon: IconProp;
	label: string;
	href: string;
	social: string;
	nickName: string;
};
export type aboutIconsDataProps = {
	icon: IconProp;
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
	iconDemo: IconProp;
	iconGit: IconProp;
};

export type skillIconsDataProps = {
	icon: IconProp;
	title: string;
	techStack: string[];
	textColor: string;
	bgColor: string;
};

export type specializationListProps = {
	icon: IconProp;
	text: string;
};

export type ContactCardProps = {
	icon: IconProp;
	socialName: string;
	nick: string;
	href: string;
};
