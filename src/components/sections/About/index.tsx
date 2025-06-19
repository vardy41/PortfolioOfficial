import { FadeInSection } from "../../ui/FadeInSection";
import { Card } from "../../ui/Card";
import { aboutIcons } from "../../../utils/aboutSectionData";
import { MyValuesCard } from "../../ui/MyValuesCard";
import { paragraphsContent } from "../../../utils/aboutSectionData";
import { Section } from "../../ui/Section";
import { SectionsHeader } from "../../ui/SectionsHeader";
import { Paragraph } from "../../ui/Paragraph";
import { CardHeading } from "../../ui/CardHeading";

export const About = () => {
	return (
		<Section
			id="about"
			className="relative scroll-mt-16"
			containerClass="sm:px-6 lg:px-8">
			<FadeInSection delay={0}>
				<SectionsHeader normalText="O" blueText="mnie" />
			</FadeInSection>
			<div className="flex flex-col gap-12 items-start">
				{/* Opis */}
				<FadeInSection delay={100}>
					<div className="card p-6 rounded-xl space-y-4 w-full">
						{paragraphsContent.map((text, index) => (
							<FadeInSection key={index} delay={150 + index * 100}>
								<Paragraph
									textColor="text-slate-400"
									textSize="text-base"
									content={text}
								/>
							</FadeInSection>
						))}
					</div>
				</FadeInSection>

				{/* Edukacja i doświadczenie */}
				<FadeInSection delay={400}>
					<div className="grid sm:grid-cols-2 gap-6 w-full">
						<FadeInSection delay={450}>
							<Card
								title="Edukacja"
								description="Magister Informatyka Stosowana w Biznesie"
								company="WSZiB Kraków"
							/>
						</FadeInSection>
						<FadeInSection delay={550}>
							<Card
								title="Doświadczenie"
								description="6-ścio miesięczny staż z użyciem stacku React + TS + Sass/Scss"
								company="Local Host Academy (LHA)"
							/>
						</FadeInSection>
					</div>
				</FadeInSection>

				{/* Moje wartości */}
				<FadeInSection delay={650}>
					<div className="w-full">
						<div className="card p-6 rounded-xl">
							<FadeInSection delay={700}>
								<CardHeading color="text-blue-500" marginBottom="mb-6">
									Moje wartości
								</CardHeading>
							</FadeInSection>
							<div className="space-y-6">
								{aboutIcons.map((iconObj, index) => (
									<FadeInSection key={iconObj.title} delay={800 + index * 100}>
										<MyValuesCard
											icon={iconObj.icon}
											title={iconObj.title}
											text={iconObj.text}
											textColor={iconObj.color}
											bgColor={iconObj.bgColor}
										/>
									</FadeInSection>
								))}
							</div>
						</div>
					</div>
				</FadeInSection>
			</div>
		</Section>
	);
};

export default About;
