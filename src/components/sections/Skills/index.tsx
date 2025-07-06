import { skillsParagraphContent } from "../../../utils/paragraphsContent";
import { SkillsCard } from "../../ui/SkillsCard";
import { skillsIcons } from "../../../utils/skillIconsData";
import { specializationList } from "../../../utils/specializationListData";
import { Paragraph } from "../../ui/Paragraph";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { CardHeading } from "../../ui/CardHeading";
import { FadeInSection } from "../../ui/FadeInSection";
const specializationElements = specializationList.map(
	({ icon: Icon, text }, index) => (
		<li key={index} className="flex items-center gap-4">
			<div className="text-blue-400 text-lg">
				<Icon />
			</div>
			<span className="text-slate-300 text-base">{text}</span>
		</li>
	)
);

const skillsParagraphElements = skillsParagraphContent.map((text, index) => (
	<Paragraph
		key={index}
		textColor="text-slate-300"
		margin="mb-4"
		content={text}
	/>
));

export const Skills = () => {
	return (
		<Section id="skills" className="bg-slate-900/50 scroll-mt-16">
			<FadeInSection delay={0}>
				<SectionsHeader normalText="Moje" blueText="umiejętności" />
			</FadeInSection>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{skillsIcons.map((iconObj, index) => (
					<FadeInSection key={index} delay={index * 100}>
						<SkillsCard
							icon={iconObj.icon}
							title={iconObj.title}
							tech={iconObj.techStack}
							textColor={iconObj.textColor}
							bgColor={iconObj.bgColor}
						/>
					</FadeInSection>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
				<FadeInSection delay={300}>
					<div className="card p-6 rounded-xl md:h-[18rem]">
						<CardHeading color="text-blue-500" marginBottom="mb-4">
							Specjalizacje
						</CardHeading>
						<ul className="space-y-4">{specializationElements}</ul>
					</div>
				</FadeInSection>

				<FadeInSection delay={500}>
					<div className="card p-6 rounded-xl md:h-[18rem]">
						<CardHeading color="text-blue-500" marginBottom="mb-4">
							Ciągły rozwój
						</CardHeading>
						{skillsParagraphElements}
					</div>
				</FadeInSection>
			</div>
		</Section>
	);
};
export default Skills;
