import { HamburgerButton } from "../HamburgerButton";
import { Menu } from "../Menu";
import { useState } from "react";

export const NavBar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	function handleMenuToggle() {
		setMobileMenuOpen((prev) => !prev);
	}

	function handleLinkClick(
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) {
		e.preventDefault();
		setMobileMenuOpen(false);

		const id = href.replace("#", "");
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-gray-950">
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center bg-gray-950">
				<a
					href="#home"
					onClick={(e) => handleLinkClick(e, "#home")}
					className="text-2xl font-bold accent-color">
					Dr<span className="text-white">Dev</span>
				</a>

				<HamburgerButton onClick={handleMenuToggle} />
				<Menu mobileMenuOpen={mobileMenuOpen} onLinkClick={handleLinkClick} />
			</nav>
		</header>
	);
};
