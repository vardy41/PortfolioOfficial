import type { LazyWithPreload } from "../types/types";
import React, { Suspense, useEffect } from "react";
import { Footer } from "../components/ui/Footer";
import { NavBar } from "../components/ui/NavBar";
import { Home } from "../components/sections/Home";
import { Loader } from "../components/ui/Loader";

function lazyWithPreload<T extends React.ComponentType<any>>(
	factory: () => Promise<{ default: T }>
): LazyWithPreload<T> {
	const Component = React.lazy(factory) as LazyWithPreload<T>;
	Component.preload = factory;
	return Component;
}

const About = lazyWithPreload(() => import("../components/sections/About"));
const Skills = lazyWithPreload(() => import("../components/sections/Skills"));
const Projects = lazyWithPreload(
	() => import("../components/sections/Projects")
);
const Contact = lazyWithPreload(() => import("../components/sections/Contact"));

export const Layout = () => {
	useEffect(() => {
		About.preload();
		Skills.preload();
		Projects.preload();
		Contact.preload();
	}, []);

	return (
		<>
			<NavBar />
			<main className="min-h-screen relative px-4 sm:px-6 lg:px-8">
				<Home />
				<Suspense fallback={<Loader />}>
					<About />
					<Skills />
					<Projects />
					<Contact />
				</Suspense>
			</main>
			<Footer />
		</>
	);
};
