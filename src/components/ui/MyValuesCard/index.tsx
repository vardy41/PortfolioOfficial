import type { MyValuesCardProps } from "../../../types/types";
import React from "react";

export const MyValuesCard = React.memo(
	({ icon: Icon, title, text, textColor, bgColor }: MyValuesCardProps) => {
		return (
			<div className="flex gap-4">
				<div
					className={`${bgColor} flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center`}>
					<Icon className={`${textColor} text-xl`} />
				</div>
				<div>
					<h3 className="text-lg sm:text-xl font-medium text-white mb-2">
						{title}
					</h3>
					<p className="text-slate-400 text-sm sm:text-base">{text}</p>
				</div>
			</div>
		);
	}
);
