import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";

// Typ bazowy dla kart z ikoną
export type IconCardBase = {
	icon: IconType;
	title?: string;
	text?: string;
	color?: string;
	bgColor?: string;
};

// Typ bazowy dla kart z technologiami
export type TechCardBase = IconCardBase & {
	tech?: string[];
	techStack?: string[];
	textColor?: string;
};

// Layout
export type LayoutProps = {
	children: ReactNode;
};

// Karty wartości

// Karty umiejętności
export type SkillsCardProps = TechCardBase & {
	title: string;
	tech: string[];
	textColor: string;
	bgColor: string;
};

// Karta o mnie
export type AboutIconsDataProps = IconCardBase & {
	title: string;
	text: string;
	color: string;
	bgColor: string;
};

// Karta technologii
export type SkillIconsDataProps = TechCardBase & {
	title: string;
	techStack: string[];
	textColor: string;
	bgColor: string;
};

// Lista specjalizacji
export type SpecializationListProps = {
	icon: IconType;
	text: string;
};

// Paragraf

// Karta doświadczenia/edukacji

// Karta projektu
export type ProjectCardProps = {
	projectBackground: string;
	title: string;
	text: string;
	tech: string[];
	iconDemo: IconType;
	iconGit: IconType;
	hrefGit: string;
	hrefDemo: string;
};

// Dane projektu (można użyć ProjectCardProps, jeśli identyczne)
export type ProjectDataProps = ProjectCardProps;

// Sekcja

// Nagłówek sekcji

// Link nawigacyjny lub social
export type NavLinkProps = {
	label: string;
	href: string;
};

export type SocialLinkProps = {
	icon: IconType;
	label: string;
	href: string;
	social: string;
	nickName: string;
};

// Karta kontaktowa
export type ContactCardProps = {
	icon: IconType;
	socialName: string;
	nick: string;
	href: string;
	label: string;
};

// Wrappery i headingi
export type CardHeadingProps = {
	children: ReactNode;
	color?: string;
	marginBottom?: string;
	className?: string;
};

export type CardHeadingWrapperProps = {
	children: ReactNode;
};

// Lazy loading z preloadem
export type LazyWithPreload<T extends React.ComponentType<unknown>> =
	React.LazyExoticComponent<T> & {
		preload: () => Promise<{ default: T }>;
	};

// Karta kontaktowa z wrapperem

export interface UseInViewObserverOptions extends IntersectionObserverInit {
	once?: boolean;
}
