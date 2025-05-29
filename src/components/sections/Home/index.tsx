import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../../utils/socialLinksData";
import { Section } from "../../ui/Section";
export const Home = () => {
	return (
		<Section
			id="home"
			className="md:min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
			containerClass="z-10">
			<div className="flex flex-col md:flex-row items-center justify-between gap-12">
				{/* Teksty */}
				<div className="md:w-1/2 space-y-6 m-2">
					<header>
						<p className="text-purple-400 font-medium mb-5">Cześć, jestem</p>
						<h1 className="text-4xl md:text-6xl font-bold mb-5">
							<span className="gradient-text ">Mikołaj Doktor</span>
						</h1>
						<h2 className="text-3xl md:text-4xl font-semibold text-slate-300">
							Frontend Developer
						</h2>
					</header>
					<p className="text-slate-400 text-lg max-w-lg font-semibold">
						Tworzę nowoczesne, responsywne i wydajne aplikacje webowe, które
						łączą estetykę z funkcjonalnością.
					</p>

					{/* Przycisk CTA */}
					<div className="flex flex-wrap gap-4">
						<a
							href="#contact"
							className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all text-white">
							Skontaktuj się
						</a>
						<a
							href="#projects"
							className="px-6 py-3 border border-slate-700 rounded-lg font-medium hover:border-purple-500 transition-all text-white">
							Zobacz projekty
						</a>
					</div>

					{/* Ikony społecznościowe */}
					<div className="flex gap-4 pt-4">
						{socialLinks.map(({ icon, href, label }) => {
							const isEmail = href.startsWith("mailto:");
							return (
								<a
									key={label}
									href={href}
									target={isEmail ? undefined : "_blank"}
									rel={isEmail ? undefined : "noopener noreferrer"}
									aria-label={label}
									className="text-slate-400 hover:text-white transition-colors text-2xl">
									<FontAwesomeIcon icon={icon} />
								</a>
							);
						})}
					</div>
				</div>

				{/* Avatar z tłem */}
				<div className="md:w-1/2 flex justify-center">
					<div className="relative w-64 h-64 md:w-80 md:h-80">
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 animate-pulse"></div>
						<div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
							{/* Możesz dodać zdjęcie lub animację */}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
