import { Background } from "../components/ui/Background";
import { NavBar } from "../components/ui/NavBar";
import { About } from "../components/sections/About";
import { Home } from "../components/sections/Home";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";

export const Layout = () => {
	return (
		<>
			<Background />
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
