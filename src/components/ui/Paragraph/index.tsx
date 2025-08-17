import React from "react";

export type ParagraphProps = {
	textColor: string;
	margin?: string;
	textSize?: string;
	content: string;
};

export const Paragraph = React.memo(
	({ textColor, margin, textSize, content }: ParagraphProps) => {
		return <p className={`${textColor} ${margin} ${textSize}`}>{content}</p>;
	}
);
