// src/lib/animations.js
import { animate, spring } from 'motion';

export function fadeSway(node) {
	// 1. fade-in & slide-up
	animate(
		node,
		{ opacity: [0, 1], y: [20, 0] },
		{ duration: 0.6, easing: spring({ stiffness: 200, damping: 20 }) }
	);

	// 2. infinite sway
	const swayAnim = animate(
		node,
		{ rotate: [-8, 8] },
		{
			duration: 2.5,
			direction: 'alternate',
			repeat: Infinity,
			easing: 'ease-in-out',
		}
	);

	// opsional: stop sway saat komponen di-destroy
	return {
		destroy() {
			swayAnim.stop();
		},
	};
}
