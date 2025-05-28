import type { ParagraphProps } from "../../../types/types";

export const Paragraph = ({ textColor, margin, text }: ParagraphProps) => {
	return <p className={`${textColor} ${margin}`}>{text}</p>;
};
