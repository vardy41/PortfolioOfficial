import type { ReactNode } from "react";

interface CardWrapperProps {
	children: ReactNode;
	className?: string;
}

export const CardWrapper = ({ children, className = "" }: CardWrapperProps) => {
	return <div className={`card p-6 rounded-xl ${className}`}>{children}</div>;
};
