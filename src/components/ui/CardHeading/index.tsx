import type { CardHeadingProps } from "../../../types/types";

export const CardHeading = ({
	children,
	color = "text-white",
	marginBottom = "mb-4",
	className = "",
}: CardHeadingProps) => {
	return (
		<h3
			className={`text-2xl font-semibold ${marginBottom} ${color} ${className}`}>
			{children}
		</h3>
	);
};
