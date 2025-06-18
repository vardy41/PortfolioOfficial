import { CardWrapper } from "../CardWrapper";
import type { ContactCardProps } from "../../../types/types";
import { Paragraph } from "../Paragraph";

export const ContactCard = ({
	icon: Icon,
	nick,
	socialName,
	href,
	label,
}: ContactCardProps) => {
	return (
		<a href={href} key={label} target="_blank">
			<li className="rounded-xl">
				<CardWrapper className="flex flex-col items-center mb-2 ">
					<Icon className="text-5xl text-white mb-1" />

					<h3 className="text-white text-2xl font-bold">{socialName}</h3>
					<Paragraph textColor="text-slate-500" content={nick} />
				</CardWrapper>
			</li>
		</a>
	);
};
