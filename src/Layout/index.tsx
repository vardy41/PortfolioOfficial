import { NavBar } from "../components/ui/NavBar";
import { About } from "../components/sections/About";
import { Home } from "../components/sections/Home";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import bg from "../assets/svg/backgrounds/mainBg.webp";

export const Layout = () => {
	return (
		<>
			<div
				className="fixed inset-0 -z-10 bg-slate-900 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${bg})` }}
			/>
			<NavBar />
			<main className="min-h-screen relative px-4 sm:px-6 lg:px-8">
				<Home />
				<About />
				<Skills />
				<Projects />
			</main>
			{/* FOOTER */}
		</>
	);
};
