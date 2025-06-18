import { useEffect, useRef, useState } from "react";

interface UseInViewObserverOptions extends IntersectionObserverInit {
	once?: boolean; // opcjonalnie: czy animacja tylko raz?
}

export function useInViewObserver<T extends HTMLElement = HTMLDivElement>(
	options?: UseInViewObserverOptions
) {
	const ref = useRef<T | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const { once, ...observerOptions } = options || {};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (once) observer.unobserve(entry.target);
			} else {
				if (!once) setIsVisible(false);
			}
		}, observerOptions);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
		// NIE podajemy `options` – zakładamy że są stałe
	}, []);

	return { ref, isVisible };
}
