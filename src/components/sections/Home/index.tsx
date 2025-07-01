import React from "react";
import { socialLinks } from "../../../utils/socialLinksData";
import { Section } from "../../ui/Section";
import { Button } from "../../ui/Button";
import { FadeInSection } from "../../ui/FadeInSection";
import avatar from "../../../assets/svg/avatar/avatar.webp";
const socialLinksElements = socialLinks.map(({ icon: Icon, href, label }) => (
	<a
		key={label}
		href={href}
		aria-label={label}
		className="text-slate-400 hover:text-white transition-colors text-2xl">
		<Icon />
	</a>
));

export const Home = React.memo(() => {
	return (
		<Section
			id="home"
			className="md:min-h-screen flex items-center justify-center pt-20 relative overflow-hidden scroll-mt-16"
			containerClass="z-10">
			<FadeInSection delay={200}>
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="md:w-1/2 space-y-6 m-2">
						<div>
							<p className="text-white font-medium mb-1">Cześć, jestem</p>
							<h1 className="text-4xl md:text-6xl font-bold mb-1">
								<span className="accent-color ">Mikołaj Doktor</span>
							</h1>
							<h2 className="text-3xl md:text-4xl font-semibold text-slate-300">
								Frontend Developer
							</h2>
						</div>
						<p className="text-slate-400 text-lg max-w-lg font-semibold">
							Tworzę nowoczesne, responsywne i wydajne aplikacje webowe, które
							łączą estetykę z funkcjonalnością.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button variant="primary" href="#contact">
								Skontaktuj się
							</Button>
							<Button variant="secondary" href="#projects">
								Zobacz projekty
							</Button>
						</div>
						<div className="flex gap-4 pt-1">{socialLinksElements}</div>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<div className="relative w-64 h-64 md:w-80 md:h-80">
							<div className="absolute inset-0 rounded-full bg-accent-blue "></div>
							<div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
								<img
									src={avatar}
									alt="Superbohater stworzony z pixeli"
									width="250"
									height="250"
									decoding="async"
								/>
							</div>
						</div>
					</div>
				</div>
			</FadeInSection>
		</Section>
	);
});
