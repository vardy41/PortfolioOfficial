import React from "react";
import { CardWrapper } from "../CardWrapper";
import type { ContactCardProps } from "../../../types/types";
import { Paragraph } from "../Paragraph";



export const ContactCard = ({
	icon: Icon,
	nick,
	socialName,
	href,
	label,
	Wrapper,
	wrapperDelay,
}: ContactCardWithWrapperProps) => {
	const content = (
		<li className="rounded-xl" key={label}>
			<a
				aria-label={`Ikona ${socialName}`}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="block">
				<CardWrapper className="flex flex-col items-center mb-2">
					<Icon className="text-5xl text-white mb-1" />
					<h3 className="text-white text-2xl font-bold">{socialName}</h3>
					<Paragraph textColor="text-slate-500" content={nick} />
				</CardWrapper>
			</a>
		</li>
	);

	if (Wrapper) {
		return <Wrapper delay={wrapperDelay}>{content}</Wrapper>;
	}

	return content;
};
