export const Card = ({
	title,
	description,
	company,
}: {
	title: string;
	description: string;
	company: string;
}) => (
	<div className="card p-4 rounded-xl">
		<h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
		<p className="text-slate-400">{description}</p>
		<p className="text-slate-500">{company}</p>
	</div>
);
