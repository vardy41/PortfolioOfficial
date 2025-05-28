import { SkillsCard } from "../../ui/SkillsCard";
import { skillsIcons } from "../../../utils";

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
			</div>
		</section>
	);
};
