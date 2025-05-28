import { Background } from "../components/ui/Background";
import { NavBar } from "../components/ui/NavBar";
import type { LayoutProps } from "../types/types";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Background />
			<NavBar />
			<main className="min-h-screen relative px-4 sm:px-6 lg:px-8">
				{children}
			</main>
		</>
	);
};
