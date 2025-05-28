export const Card = ({
	title,
	description,
	company,
}: {
	title: string;
	description: string;
	company: string;
}) => (
	<div className="card p-4 rounded-xl bg-slate-800 shadow-md">
		<h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
		<p className="text-slate-400 text-sm sm:text-base">{description}</p>
		<p className="text-slate-500 text-xs sm:text-sm">{company}</p>
	</div>
);
