import { HeaderLine } from "../../ui/HeaderLine";
import { Section } from "../../ui/Section";
export const Contact = () => {
	return (
		<Section id="contact" className="bg-slate-900/50">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
					Skontaktuj <span className="gradient-text">się</span>
				</h2>
				<HeaderLine />
			</div>
		</Section>
	);
};
