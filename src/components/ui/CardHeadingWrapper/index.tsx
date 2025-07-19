import type { CardHeadingProps } from "../../../types/types";

export const CardHeadingWrapper = ({ children }: CardHeadingProps) => {
	return (
		<div className="card p-6 rounded-xl lg:h-[23rem] xl:h-[20rem]">
			{children}
		</div>
	);
};
