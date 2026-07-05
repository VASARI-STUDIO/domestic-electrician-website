import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLenis } from '../lib/lenisContext';

/**
 * A thin progress bar pinned to the top of the viewport that fills as the page
 * scrolls. It reads progress from Lenis (which drives the smooth scroll), and a
 * spring smooths the value so the bar glides rather than tracking scroll 1:1.
 * When Lenis is disabled (reduced motion) it falls back to native scroll.
 */
export function ScrollProgress() {
  const lenis = useLenis();
  const value = useMotionValue(0);
  const scaleX = useSpring(value, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    if (lenis) {
      const onScroll = () => value.set(lenis.progress || 0);
      lenis.on('scroll', onScroll);
      return () => lenis.off('scroll', onScroll);
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      value.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [lenis, value]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      aria-hidden="true"
    />
  );
}
