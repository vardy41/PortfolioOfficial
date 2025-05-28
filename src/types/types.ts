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

export type paragraphProps = {
	textColor: string;
	margin?: string;
	text: string;
};
