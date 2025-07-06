import React from "react";
import type { CardProps } from "../../../types/types";
export const Card = React.memo(({ title, description, company }: CardProps) => (
	<div className="card p-4 rounded-xl bg-slate-800 shadow-md h-[7rem]">
		<h3 className="text-xl font-semibold mb-2 text-blue-500">{title}</h3>
		<p className="text-slate-300 text-sm sm:text-base">{description}</p>
		<p className="text-slate-400 text-xs sm:text-sm">{company}</p>
	</div>
));
