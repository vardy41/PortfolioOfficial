import { Card } from "../../ui/Card";
import { aboutIcons } from "../../../utils/aboutSectionData";
import { MyValuesCard } from "../../ui/MyValuesCard";
import { paragraphsContent } from "../../../utils/aboutSectionData";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { Paragraph } from "../../ui/Paragraph";
export const About = () => {
	return (
		<Section id="about" className="relative" containerClass="sm:px-6 lg:px-8">
			<SectionsHeader normalText="O" gradientText="mnie" />
			<div className="flex flex-col gap-12 items-start">
				{/* Opis */}
				<div className=" bg-gray-950 border p-6 rounded-xl space-y-4 w-full">
					{paragraphsContent.map((text) => (
						<Paragraph
							textColor="text-slate-400"
							textSize="text-base"
							content={text}
						/>
					))}
				</div>

				<div className="grid sm:grid-cols-2 gap-6 w-full">
					<Card
						title="Edukacja"
						description="Magister Informatyka Stosowana w Biznesie"
						company="WSZiB Kraków"
					/>
					<Card
						title="Doświadczenie"
						description="6-ścio miesięczny staż z użyciem stacku React + TS + Sass/Scss"
						company="Local Host Academy (LHA)"
					/>
				</div>

				{/* Moje wartości */}
				<div className="w-full">
					<div className="card p-6 rounded-xl">
						<h3 className="text-2xl font-semibold mb-6 text-blue-500">
							Moje wartości
						</h3>
						<div className="space-y-6">
							{aboutIcons.map((iconObj) => (
								<MyValuesCard
									key={iconObj.title}
									icon={iconObj.icon}
									title={iconObj.title}
									text={iconObj.text}
									textColor={iconObj.color}
									bgColor={iconObj.bgColor}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
