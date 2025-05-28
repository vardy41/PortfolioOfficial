import type { GradientBlobProps } from "../../../types/types";

export const GradientBlob = ({ className, color }: GradientBlobProps) => (
	<div className={`${className} ${color} rounded-full filter blur-3xl`} />
);
