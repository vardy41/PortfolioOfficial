import { useInViewObserver } from "../../../hooks/useInViewObserver";
import { useState, useEffect } from "react";
import type { FadeInSectionProps } from "../../../types/types";

export function FadeInSection({
	children,
	className = "",
	delay = 0,
}: FadeInSectionProps) {
	const { ref, isVisible } = useInViewObserver({ threshold: 0.1 });
	const [hasAppeared, setHasAppeared] = useState(false);

	useEffect(() => {
		if (isVisible && !hasAppeared) {
			setHasAppeared(true);
		}
	}, [isVisible, hasAppeared]);

	return (
		<div
			ref={ref}
			className={`w-full transition-all duration-700 ease-out transform will-change-opacity will-change-transform ${
				hasAppeared ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
			} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}>
			{children}
		</div>
	);
}
