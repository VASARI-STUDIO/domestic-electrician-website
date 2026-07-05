import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

/**
 * Shared Lenis smooth-scroll instance, provided by `App`. It is `null` when
 * smooth scrolling is disabled (i.e. the user prefers reduced motion), so
 * consumers should handle that case.
 */
export const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}
