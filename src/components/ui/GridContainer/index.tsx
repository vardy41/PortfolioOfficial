import type { ReactNode } from "react";

type GridContainerProps = {
	children: ReactNode;
	className?: string;
};

export const GridContainer = ({
	children,
	className = "",
}: GridContainerProps) => {
	return <div className={`grid gap-6 ${className}`}>{children}</div>;
};
