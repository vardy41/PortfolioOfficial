import type { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	color?: string; // e.g. "text-white" or "text-blue-500"
	marginBottom?: string; // e.g. "mb-4", "mb-6"
	className?: string;
}

export const CardHeading = ({
	children,
	color = "text-white",
	marginBottom = "mb-4",
	className = "",
}: SectionTitleProps) => {
	return (
		<h3
			className={`text-2xl font-semibold ${marginBottom} ${color} ${className}`}>
			{children}
		</h3>
	);
};
