import { HeaderLine } from "../HeaderLine";
import type { SectionHeaderProps } from "../../../types/types";
export const SectionsHeader = ({ normalText, text }: SectionHeaderProps) => {
	return (
		<div className="text-left mb-16">
			<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
				{normalText} <span className="text-accent-blue">{text}</span>
			</h2>
			<HeaderLine />
		</div>
	);
};
