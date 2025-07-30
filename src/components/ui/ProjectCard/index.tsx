import type { ProjectCardProps } from "../../../types/types";
import { Paragraph } from "../Paragraph";

export const ProjectCard = ({
	projectBackground,
	title,
	text,
	tech,
	iconDemo: IconDemo,
	iconGit: IconGit,
	hrefGit,
	hrefDemo,
}: ProjectCardProps) => {
	return (
		<div className="card rounded-xl overflow-hidden bg-slate-800 flex flex-col h-full">
			<div className="project-image h-48 bg-slate-800">
				<img
					src={projectBackground}
					alt={`${title} project background`}
					className="w-full h-full object-cover"
					loading="lazy"
				/>
			</div>

			<div className="p-6 flex flex-col flex-1">
				<h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

				<div className="flex-1">
					<Paragraph textColor="text-slate-400" margin="mb-4" content={text} />

					<div className="flex flex-wrap gap-2 mb-4">
						{tech.map((techItem, index) => (
							<span
								key={index}
								className="skill-pill px-2 py-1 rounded-full text-xs text-slate-200">
								{techItem}
							</span>
						))}
					</div>
				</div>

				{/* Linki trzymane na spodzie */}
				<div className="flex justify-between pt-4 border-t border-slate-700 mt-auto">
					<a
						target="_blank"
						href={hrefDemo}
						className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
						<IconDemo className="mr-2" />
						Demo
					</a>
					<a
						target="_blank"
						href={hrefGit}
						className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
						<IconGit className="mr-1" />
						Git
					</a>
				</div>
			</div>
		</div>
	);
};
