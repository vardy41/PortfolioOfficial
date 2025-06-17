import { SkillsCard } from "../../ui/SkillsCard";
import { skillsIcons } from "../../../utils/skillIconsData";
import { specializationList } from "../../../utils/specializationListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paragraph } from "../../ui/Paragraph";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { CardHeading } from "../../ui/CardHeading";

export const Skills = () => {
	return (
		<Section id="skills" className="bg-slate-900/50">
			<SectionsHeader normalText="Moje" blueText="umiejętności" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{skillsIcons.map((iconObj) => (
					<SkillsCard
						key={iconObj.title}
						icon={iconObj.icon}
						title={iconObj.title}
						tech={iconObj.techStack}
						textColor={iconObj.textColor}
						bgColor={iconObj.bgColor}
					/>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
				<div className="card p-6 rounded-xl">
					<CardHeading color="text-white" marginBottom="mb-4">
						Specjalizacje
					</CardHeading>
					<ul className="space-y-4">
						{specializationList.map((item, index) => (
							<li key={index} className="flex items-center gap-4">
								<div className="text-blue-400 text-lg">
									<FontAwesomeIcon icon={item.icon} />
								</div>
								<span className="text-slate-300 text-base">{item.text}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="card p-6 rounded-xl">
					<CardHeading color="text-white" marginBottom="mb-4">
						Ciągły rozwój
					</CardHeading>
					<Paragraph
						textColor="text-slate-300"
						margin="mb-4"
						content="Nieustannie poszerzam swoją wiedzę i umiejętności, śledząc
              najnowsze trendy i technologie w świecie frontend developmentu."
					/>
					<Paragraph
						textColor="text-slate-300"
						margin="mb-4"
						content="Regularnie uczestniczę w konferencjach, webinarach i kursach
              online, aby być na bieżąco z najlepszymi praktykami i innowacjami
              w branży."
					/>
					<Paragraph
						textColor="text-slate-300"
						content="Aktywnie udzielam się w społeczności programistycznej, dzieląc się
              wiedzą i doświadczeniem poprzez artykuły i open source."
					/>
				</div>
			</div>
		</Section>
	);
};
