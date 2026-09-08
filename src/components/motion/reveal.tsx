import { motion } from "motion/react";

import {
	revealContainerVariants,
	revealTransition,
	revealVariants,
	revealViewport,
} from "@/lib/motion";

type DivProps = React.ComponentProps<typeof motion.div>;
type UlProps = React.ComponentProps<typeof motion.ul>;
type LiProps = React.ComponentProps<typeof motion.li>;

/**
 * Standalone fade + rise on scroll. Use for headings and one-off blocks.
 * For a list of siblings that should stagger, use `RevealList`/`RevealItem`.
 */
export function Reveal({ delay = 0, ...props }: DivProps & { delay?: number }) {
	return (
		<motion.div
			data-reveal=""
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={revealViewport}
			transition={{ ...revealTransition, delay }}
			{...props}
		/>
	);
}

/**
 * Owns the viewport trigger for a group. Children marked with `RevealItem`
 * animate together, staggered by their index.
 */
export function RevealList(props: UlProps) {
	return (
		<motion.ul
			initial="hidden"
			whileInView="visible"
			viewport={revealViewport}
			variants={revealContainerVariants}
			{...props}
		/>
	);
}

/** Same as `RevealList` but renders a plain container instead of a list. */
export function RevealGroup(props: DivProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={revealViewport}
			variants={revealContainerVariants}
			{...props}
		/>
	);
}

export function RevealItem({ index = 0, ...props }: LiProps & { index?: number }) {
	return <motion.li data-reveal="" variants={revealVariants} custom={index} {...props} />;
}

/** `RevealItem` for children of a `RevealGroup`. */
export function RevealBlock({ index = 0, ...props }: DivProps & { index?: number }) {
	return <motion.div data-reveal="" variants={revealVariants} custom={index} {...props} />;
}
