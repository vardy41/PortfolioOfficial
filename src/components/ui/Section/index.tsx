import type { SectionProps } from "../../../types/types";

export const Section = ({
	children,
	className,
	containerClass,
	id,
}: SectionProps) => {
	return (
		<section id={id} className={`py-20 ${className}`}>
			<div className={`container mx-auto px-4 ${containerClass}`}>
				{children}
			</div>
		</section>
	);
};
