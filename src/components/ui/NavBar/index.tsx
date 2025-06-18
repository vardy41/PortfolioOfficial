import { useState } from "react";
import { navLinks } from "../../../utils/navLinks";

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

				{/* Hamburger menu */}
				<button
					className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
					onClick={handleMenuToggle}
					aria-label="Toggle menu">
					<span className="w-6 h-0.5 bg-white" />
					<span className="w-6 h-0.5 bg-white" />
					<span className="w-6 h-0.5 bg-white" />
				</button>

				<div
					className={`${
						mobileMenuOpen ? "block" : "hidden"
					} md:flex md:space-x-8 md:items-center 
            absolute md:static top-full left-0 w-full md:w-auto bg-gray-950 md:bg-transparent px-4 py-4 md:p-0 border-t border-slate-800 md:border-0`}>
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={(e) => handleLinkClick(e, link.href)}
							className="group relative block md:inline py-2 md:py-0 text-white transition-colors hover:text-accent-blue">
							{link.label}
							<span className="absolute left-0 -bottom-1 h-1 bg-accent-blue w-0 group-hover:w-full transition-all duration-300" />
						</a>
					))}
				</div>
			</nav>
		</header>
	);
};
