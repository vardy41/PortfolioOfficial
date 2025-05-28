import { SkillsCard } from "../../ui/SkillsCard";
import { skillsIcons } from "../../../utils";
import { specializationList } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paragraph } from "../../ui/Paragraph";

export const Skills = () => {
	return (
		<section id="skills" className="py-20 bg-slate-900/50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						Moje
						<span className="gradient-text"> umiejętności</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{skillsIcons.map((iconObj, index) => (
						<SkillsCard
							key={index}
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
						<h3 className="text-2xl font-semibold mb-4 gradient-text">
							Specjalizacje
						</h3>
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
						<h3 className="text-2xl font-semibold mb-4 gradient-text">
							Ciągły rozwój
						</h3>
						<Paragraph
							textColor="text-slate-300"
							margin="mb-4"
							text="Nieustannie poszerzam swoją wiedzę i umiejętności, śledząc
							najnowsze trendy i technologie w świecie frontend developmentu."
						/>
						<Paragraph
							textColor="text-slate-300"
							margin="mb-4"
							text="Regularnie uczestniczę w konferencjach, webinarach i kursach
							online, aby być na bieżąco z najlepszymi praktykami i innowacjami
							w branży."
						/>
						<Paragraph
							textColor="text-slate-300"
							text="Aktywnie udzielam się w społeczności programistycznej, dzieląc się
							wiedzą i doświadczeniem poprzez artykuły i open source."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
