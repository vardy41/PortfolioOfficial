import { CardWrapper } from "../CardWrapper";
import type { ContactCardProps } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paragraph } from "../Paragraph";

export const ContactCard = ({
	icon,
	nick,
	socialName,
	href,
}: ContactCardProps) => {
	return (
		<li className="rounded-xl">
			<CardWrapper className="flex flex-col items-center mb-2 ">
				<FontAwesomeIcon
					className="text-5xl text-white mb-1"
					icon={icon}
					href={href}
				/>
				<h3 className="text-white text-2xl font-bold">{socialName}</h3>
				<Paragraph textColor="text-slate-500" content={nick} />
			</CardWrapper>
		</li>
	);
};
