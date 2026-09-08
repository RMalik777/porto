import type { Transition, Variants } from "motion/react";

/**
 * Shared motion tokens.
 *
 * The site already has a motion vocabulary in CSS (`--ease-custom`, the scaleX
 * underline wipes). These keep the JS animations on the same curves and timings
 * so both halves read as one system.
 */

type Bezier = [number, number, number, number];

/** Sharp in-out. Mirrors `--ease-custom` in globals.css. Signature moves only. */
export const easeSignature: Bezier = [0.83, 0, 0.17, 1];

/** Ease-out-expo-ish. Fast start, long settle. Reveals and hovers. */
export const easeReveal: Bezier = [0.16, 1, 0.3, 1];

export const duration = {
	hover: 0.15,
	reveal: 0.4,
	signature: 0.7,
} as const;

/** Per-item delay for staggered lists, capped so long lists never crawl. */
export const STAGGER = 0.05;
export const STAGGER_CAP = 5;

export function staggerDelay(index: number) {
	return Math.min(index, STAGGER_CAP) * STAGGER;
}

export const revealTransition: Transition = {
	duration: duration.reveal,
	ease: easeReveal,
};

/**
 * Fade + rise. Applied to a child of a container that owns the
 * `initial`/`whileInView` state, so the whole group triggers together.
 * Pass the list index as `custom` to stagger.
 */
export const revealVariants: Variants = {
	hidden: { opacity: 0, y: 10 },
	visible: (index: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { ...revealTransition, delay: staggerDelay(index) },
	}),
};

/** Container variant. Holds no styles, only propagates state to children. */
export const revealContainerVariants: Variants = {
	hidden: {},
	visible: {},
};

/** Trigger once, when a fifth of the element has entered the viewport. */
export const revealViewport = { once: true, amount: 0.2 } as const;
