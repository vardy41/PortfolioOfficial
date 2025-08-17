import { CardWrapper } from "../CardWrapper";
import { Paragraph } from "../Paragraph";
import type { ContactCardProps } from "../../../types/types";

type ContactCardWithWrapperProps = ContactCardProps & {
	Wrapper?: React.ComponentType<{ children: React.ReactNode; delay?: number }>;
	wrapperDelay?: number;
};

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
				href={href}
				target="_blank"
				rel="noreferrer"
				className="block"
				aria-label={`Otwórz profil ${socialName} w nowej karcie`}>
				<CardWrapper className="flex flex-col items-center mb-2">
					<Icon className="text-5xl text-white mb-1" />
					<h3 className="text-white text-2xl font-bold">{socialName}</h3>
					<Paragraph textColor="text-slate-500" content={nick} />
					<span className="sr-only">{`Otwórz profil ${socialName} w nowej karcie`}</span>
				</CardWrapper>
			</a>
		</li>
	);

	if (Wrapper) {
		return <Wrapper delay={wrapperDelay}>{content}</Wrapper>;
	}

	return content;
};
