import { Background } from "../components/ui/Background";
import type { LayoutProps } from "../types/types";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen relative">
			<Background />
			{children}
		</div>
	);
};

export default Layout;
