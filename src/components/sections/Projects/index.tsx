import { projectData } from "../../../utils/projectData";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { ProjectCard } from "../../ui/ProjectCard";
import { Section } from "../../ui/Section";

export const Projects = () => {
	return (
		<Section id="projects">
			<SectionsHeader normalText="Moje" gradientText="projekty" />
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
