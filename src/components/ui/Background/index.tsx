import { SvgGrid } from "../SvgGrid";
import { GradientBlob } from "../GradientBlob";
export const Background = () => {
	const blobs = [
		{
			className: "absolute top-1/4 left-1/4 w-64 h-64",
			color: "bg-purple-600/20",
		},
		{
			className: "absolute bottom-1/3 right-1/4 w-80 h-80",
			color: "bg-blue-600/20",
		},
		{
			className: "absolute top-2/3 right-1/3 w-72 h-72",
			color: "bg-indigo-600/20",
		},
	];

	return (
		<div className="fixed inset-0 -z-10 bg-slate-900">
			{/* Wzór siatki SVG */}
			<div className="absolute inset-0">
				<SvgGrid />
			</div>

			{/* Blobsy gradientowe */}
			{blobs.map((blob, idx) => (
				<GradientBlob key={idx} {...blob} />
			))}
		</div>
	);
};
