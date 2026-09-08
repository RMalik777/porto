import { useEffect, useState } from "react";

/** How far down the viewport the section has to reach to count as active. */
const PROBE_RATIO = 0.4;
/** Slack for the bottom-of-page check, since scroll positions are fractional. */
const BOTTOM_SLACK = 2;

/**
 * Scroll spy. Reports the id of the last section whose top has passed a probe
 * line partway down the viewport.
 *
 * Position based rather than an IntersectionObserver band: the last section on
 * the page is short enough that once the document is scrolled to the bottom it
 * sits entirely above the middle of the viewport, so a band would never report
 * it. Scrolling to the very bottom always reports the last section for the same
 * reason.
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

		const [first] = elements;
		const last = elements.at(-1) ?? first;

		let frame = 0;
		const measure = () => {
			frame = 0;
			const atBottom =
				window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - BOTTOM_SLACK;
			if (atBottom) {
				setActive(last.id);
				return;
			}

			const probe = window.innerHeight * PROBE_RATIO;
			let current = first;
			for (const element of elements) {
				if (element.getBoundingClientRect().top > probe) break;
				current = element;
			}
			setActive(current.id);
		};

		const schedule = () => {
			// Coalesce the burst of events a scroll produces into one measurement.
			if (frame === 0) frame = requestAnimationFrame(measure);
		};

		measure();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);

		return () => {
			if (frame !== 0) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
		};
	}, [enabled, key]);

	return active;
}
