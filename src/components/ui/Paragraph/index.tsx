import type { ParagraphProps } from "../../../types/types";

export const Paragraph = ({ textColor, margin, content }: ParagraphProps) => {
	return <p className={`${textColor} ${margin}`}>{content}</p>;
};
