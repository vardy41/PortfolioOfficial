import React from "react";
import type { HamburgerButtonProps } from "../../../types/types";

export const HamburgerButton = React.memo(({ onClick }: HamburgerButtonProps) => (
	<button
		className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
		onClick={onClick}
		aria-label="Toggle menu">
		<span className="w-6 h-0.5 bg-white" />
		<span className="w-6 h-0.5 bg-white" />
		<span className="w-6 h-0.5 bg-white" />
	</button>
));
HamburgerButton.displayName = "HamburgerButton";
