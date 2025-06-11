import { useState } from "react";
import { navLinks } from "../../../utils/navLinks";
export const NavBar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	function handleMenuToggle() {
		setMobileMenuOpen((prev) => !prev);
	}

	function handleLinkClick() {
		setMobileMenuOpen(false); // zamyka menu po kliknięciu linku
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-800 bg-gray-950">
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center bg-gray-950">
				<a href="#home" className="text-2xl font-bold accent-color">
					Dr<span className="text-white">Dev</span>
				</a>

				{/* Przycisk hamburgera */}
				<button
					className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
					onClick={handleMenuToggle}
					aria-label="Toggle menu">
					<span className="w-6 h-0.5 bg-white" />
					<span className="w-6 h-0.5 bg-white" />
					<span className="w-6 h-0.5 bg-white" />
				</button>

				<div
					className={`
						${mobileMenuOpen ? "block" : "hidden"} 
						md:flex md:space-x-8 md:items-center 
						absolute md:static top-full left-0 w-full md:w-auto bg-gray-950 md:bg-transparent px-4 py-4 md:p-0 border-t border-slate-800 md:border-0
					`}>
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={handleLinkClick}
							className="block md:inline text-white hover:text-purple-400 transition-colors py-2 md:py-0">
							{link.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
};
