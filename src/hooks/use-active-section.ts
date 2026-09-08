import { useEffect, useState } from "react";

/**
 * Scroll spy. Reports the id of whichever section is crossing the middle of the
 * viewport. When nothing is (scrolling past a section that is not tracked, or
 * the gaps between them) the last match is kept, so the indicator never flickers
 * off mid-scroll.
 *
 * @param ids Section element ids, in document order.
 * @param enabled Pass `false` off the page that owns the sections.
 */
export function useActiveSection(ids: Array<string>, enabled = true) {
	const [active, setActive] = useState<string | null>(null);
	const key = ids.join(",");

	useEffect(() => {
		if (!enabled) {
			setActive(null);
			return;
		}

		const elements = key
			.split(",")
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => element !== null);
		if (elements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				// Document order, so overlapping matches resolve to the topmost.
				const match = entries.find((entry) => entry.isIntersecting);
				if (match) setActive(match.target.id);
			},
			// A thin band across the vertical middle of the viewport.
			{ rootMargin: "-45% 0px -45% 0px" },
		);
		for (const element of elements) observer.observe(element);

		return () => observer.disconnect();
	}, [enabled, key]);

	return active;
}
