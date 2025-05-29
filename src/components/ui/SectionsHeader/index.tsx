import { HeaderLine } from "../HeaderLine";
import type { SectionHeaderProps } from "../../../types/types";
export const SectionsHeader = ({
	normalText,
	gradientText,
}: SectionHeaderProps) => {
	return (
		<div className="text-center mb-16">
			<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				{normalText} <span className="gradient-text">{gradientText}</span>
			</h2>
			<HeaderLine />
		</div>
	);
};
