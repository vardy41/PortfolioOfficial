import type { CardWrapperProps } from "../../../types/types";

export const CardWrapper = ({ children, className = "" }: CardWrapperProps) => {
	return <div className={`card p-6 rounded-xl ${className}`}>{children}</div>;
};
