import { projectData } from "../../../utils/projectData";
import { HeaderLine } from "../../ui/HeaderLine";
import { ProjectCard } from "../../ui/ProjectCard";
import { Section } from "../../ui/Section";

export const Projects = () => {
	return (
		<Section id="projects">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
					Moje <span className="gradient-text">projekty</span>
				</h2>
				<HeaderLine />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projectData.map((projectObj, index) => (
					<ProjectCard
						key={index}
						projectBackground={
							projectObj.projectBackground ?? "/assets/svg/default-bg.svg"
						}
						title={projectObj.title}
						text={projectObj.text}
						tech={projectObj.tech}
						iconDemo={projectObj.iconDemo}
						iconGit={projectObj.iconGit}
					/>
				))}
			</div>
		</Section>
	);
};
