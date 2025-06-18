import React, { Suspense } from "react";
import { Footer } from "../components/ui/Footer";
import { NavBar } from "../components/ui/NavBar";
import { Home } from "../components/sections/Home";

const About = React.lazy(() => import("../components/sections/About"));
const Skills = React.lazy(() => import("../components/sections/Skills"));
const Projects = React.lazy(() => import("../components/sections/Projects"));
const Contact = React.lazy(() => import("../components/sections/Contact"));

export const Layout = () => {
	return (
		<>
			<NavBar />
			<main className="min-h-screen relative px-4 sm:px-6 lg:px-8">
				<Home />
				<Suspense fallback={<div>Ładowanie...</div>}>
					<About />
					<Skills />
					<Projects />
					<Contact />
				</Suspense>
			</main>
			<Footer />
			{/* FOOTER */}
		</>
	);
};
