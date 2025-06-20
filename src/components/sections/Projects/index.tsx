import { projectData } from "../../../utils/projectData";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { ProjectCard } from "../../ui/ProjectCard";
import { Section } from "../../ui/Section";
import { GridContainer } from "../../ui/GridContainer";
import { FadeInSection } from "../../ui/FadeInSection";

export const Projects = () => {
	return (
		<Section id="projects" className="scroll-mt-16">
			<FadeInSection delay={0}>
				<SectionsHeader normalText="Moje" blueText="projekty" />
			</FadeInSection>
			<GridContainer className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projectData.map((projectObj, index) => (
					<FadeInSection key={index} delay={100 + index * 150}>
						<ProjectCard
							projectBackground={
								projectObj.projectBackground ?? "/assets/svg/default-bg.svg"
							}
							title={projectObj.title}
							text={projectObj.text}
							tech={projectObj.tech}
							iconDemo={projectObj.iconDemo}
							iconGit={projectObj.iconGit}
							hrefGit={projectObj.hrefGit}
							hrefDemo={projectObj.hrefDemo}
						/>
					</FadeInSection>
				))}
			</GridContainer>
		</Section>
	);
};
export default Projects;
