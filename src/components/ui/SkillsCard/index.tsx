import React from "react";
import type { SkillsCardProps } from "../../../types/types";

export const SkillsCard = React.memo(
	({ icon: Icon, title, tech, textColor, bgColor }: SkillsCardProps) => {
		return (
			<div className="h-70 card p-6 rounded-xl bg-slate-800 shadow-md xl:h-[15rem] lg:h-[17rem]">
				<div
					className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
					<Icon className={`${textColor} text-3xl`} />
				</div>
				<h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
				<div className="flex flex-wrap gap-2">
					{tech.map((techItem, i) => (
						<span
							key={i}
							className="skill-pill bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
							{techItem}
						</span>
					))}
				</div>
			</div>
		);
	}
);
