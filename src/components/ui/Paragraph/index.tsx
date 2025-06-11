import type { ParagraphProps } from "../../../types/types";
import React from "react";
export const Paragraph = React.memo(
	({ textColor, margin, textSize, content }: ParagraphProps) => {
		return <p className={`${textColor} ${margin} ${textSize}`}>{content}</p>;
	}
);
