import { socialLinks } from "../../../utils/socialLinksData";
import { ContactCard } from "../../ui/ContactCard";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";

export const Contact = () => {
	return (
		<Section id="contact" className="bg-slate-900/50">
			<SectionsHeader normalText="Kontakt" blueText="" />
			<ul>
				{socialLinks.map((contactObj) => (
					<ContactCard
						href={contactObj.href}
						icon={contactObj.icon}
						socialName={contactObj.social}
						nick={contactObj.nickName}
					/>
				))}
			</ul>
		</Section>
	);
};
