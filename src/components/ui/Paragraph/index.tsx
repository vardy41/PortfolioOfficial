import type { paragraphProps } from "../../../types/types";

export const Paragraph = ({ textColor, margin, text }: paragraphProps) => {
	return <p className={`${textColor} ${margin}`}>{text}</p>;
};
