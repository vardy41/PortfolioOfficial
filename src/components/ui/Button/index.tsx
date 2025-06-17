import type { ReactNode } from "react";

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary";
	href?: string;
	className?: string;
}

export const Button = ({
	children,
	variant = "primary",
	href,
	className = "",
	...props
}: ButtonProps) => {
	const baseClasses =
		"px-6 py-3 rounded-lg font-medium transition-all focus:outline-none";

	const variants = {
		primary:
			"bg-accent-blue text-white hover:shadow-lg hover:shadow-purple-500/20",
		secondary: "border bg-gray-800 text-white hover:border-purple-500",
	};

	const classes = `${baseClasses} ${variants[variant]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};
