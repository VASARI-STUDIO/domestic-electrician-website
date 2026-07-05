/**
 * Shared Framer Motion presets.
 *
 * Centralising the distance, duration and easing keeps every scroll reveal,
 * entrance and hover across the site feeling like one consistent, premium
 * system, and keeps the components free of repeated magic numbers.
 */
import type { Transition } from 'framer-motion';

/**
 * easeOutExpo — accelerates away quickly then settles softly. This "fast out,
 * gentle landing" curve is what gives the reveals their high-end feel.
 */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Reveal once when ~80px into the viewport. */
export const viewportOnce = { once: true, margin: '-80px' } as const;

/**
 * Scroll-triggered fade + rise + subtle settle. Spread onto any `<motion.*>`
 * element: `<motion.h2 {...revealUp()} />` or stagger with `{...revealUp(i * 0.08)}`.
 */
export function revealUp(delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: distance, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: viewportOnce,
    transition: { duration: 0.7, delay, ease: EASE } as Transition,
  };
}

/** On-mount fade + rise + settle, for above-the-fold and routed page content. */
export function enterUp(delay = 0, distance = 24) {
  return {
    initial: { opacity: 0, y: distance, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, delay, ease: EASE } as Transition,
  };
}

/**
 * Soft hover lift for cards. Uses `whileHover` (not a CSS class) because Framer
 * controls the element's transform inline, which would override Tailwind's
 * `hover:-translate-y-*`.
 */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: EASE } },
} as const;

/** Hover lift + tap-down feedback for interactive `motion` buttons/links. */
export const pressable = {
  whileHover: { y: -3, transition: { duration: 0.25, ease: EASE } },
  whileTap: { scale: 0.97 },
} as const;
