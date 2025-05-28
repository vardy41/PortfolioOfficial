import { Background } from "../components/ui/Background";
import { NavBar } from "../components/ui/NavBar";
import type { LayoutProps } from "../types/types";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Background />
			<NavBar />
			<main className="min-h-screen relative">{children}</main>
			{/* FOOTER */}
		</>
	);
};

export default Layout;
