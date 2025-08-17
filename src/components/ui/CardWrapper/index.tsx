import type { ReactNode } from "react";

type CardWrapperProps = {
	children: ReactNode;
	className?: string;
};

export const CardWrapper = ({ children, className = "" }: CardWrapperProps) => {
	return <div className={`card p-6 rounded-xl ${className}`}>{children}</div>;
};
