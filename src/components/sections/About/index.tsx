import { Card } from "../../ui/Card";
import { aboutIcons } from "../../../utils";
import { MyValuesCard } from "../../ui/MyValuesCard";

export const About = () => {
	return (
		<section id="about" className="py-20 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						O <span className="gradient-text">mnie</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
				</header>

				<div className="flex flex-col gap-12 items-start">
					{/* Opis */}
					<div className="card bg-slate-800 p-6 rounded-xl space-y-4 w-full">
						<p className="text-base md:text-lg text-slate-300">
							Jestem studentem studiów magisterskich na kierunku Informatyka
							Stosowana w Biznesie na Wyższej Szkole Zarządzania i Bankowości w
							Krakowie, z silną pasją do programowania, którą aktywnie rozwijam.
						</p>
						<p className="text-base md:text-lg text-slate-300">
							Moim celem zawodowym jest praca w branży IT, gdzie mogę
							wykorzystać umiejętności analityczne zdobyte podczas studiów.
							Posiadam silne umiejętności pracy zespołowej, przyczyniam się do
							pozytywnej atmosfery i lubię wspierać innych w ich rozwoju.
						</p>
						<p className="text-base md:text-lg text-slate-300">
							Łatwo nawiązuję relacje, co pomaga mi efektywnie pracować w
							zespole i utrzymywać dobre stosunki z rówieśnikami i
							współpracownikami.
						</p>
					</div>

					{/* Karty edukacji i doświadczenia */}
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
							<h3 className="text-2xl font-semibold mb-6 gradient-text">
								Moje wartości
							</h3>
							<div className="space-y-6">
								{aboutIcons.map((iconObj, index) => (
									<MyValuesCard
										key={index}
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
			</div>
		</section>
	);
};
