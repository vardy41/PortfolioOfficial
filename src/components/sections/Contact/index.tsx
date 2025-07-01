import { socialLinks } from "../../../utils/socialLinksData";
import { ContactCard } from "../../ui/ContactCard";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { FadeInSection } from "../../ui/FadeInSection";

export const Contact = () => {
	return (
		<Section id="contact" className="bg-slate-900/50 scroll-mt-16">
			<FadeInSection delay={0}>
				<SectionsHeader normalText="Kontakt" blueText="" />
			</FadeInSection>

			<ul>
				{socialLinks.map((contactObj, index) => (
					<ContactCard
						key={contactObj.label}
						href={contactObj.href}
						icon={contactObj.icon}
						socialName={contactObj.social}
						nick={contactObj.nickName}
						label={contactObj.label}
						Wrapper={FadeInSection} // przekazujesz FadeInSection jako Wrapper
						wrapperDelay={100 + index * 150} // i delay animacji
					/>
				))}
			</ul>
		</Section>
	);
};

export default Contact;
