import { projectData } from "../../../utils";
import { ProjectCard } from "../../ui/ProjectCard";

export const Projects = () => {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						Moje <span className="gradient-text">projekty</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
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
			</div>
		</section>
	);
};
