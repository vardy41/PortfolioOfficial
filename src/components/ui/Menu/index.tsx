import React from "react";
import { navLinks } from "../../../utils/navLinks";

export type MenuProps = {
	mobileMenuOpen: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const Menu = React.memo(({ mobileMenuOpen, onLinkClick }: MenuProps) => {
	return (
		<div
			className={`${
				mobileMenuOpen ? "block" : "hidden"
			} md:flex md:space-x-8 md:items-center 
      absolute md:static top-full left-0 w-full md:w-auto bg-gray-950 md:bg-transparent px-4 py-4 md:p-0 border-t border-slate-800 md:border-0`}>
			{navLinks.map((link) => (
				<a
					key={link.label}
					href={link.href}
					onClick={(e) => onLinkClick(e, link.href)}
					className="group relative block md:inline py-2 md:py-0 text-white transition-colors hover:text-accent-blue">
					{link.label}
					<span className="absolute left-0 -bottom-1 h-1 bg-accent-blue w-0 group-hover:w-full transition-all duration-300" />
				</a>
			))}
		</div>
	);
});
Menu.displayName = "Menu";
