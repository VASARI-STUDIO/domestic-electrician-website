/**
 * Resolve a path to a file in `public/` against Vite's configured base URL.
 *
 * On the domain root (local dev) the base is `/`, but on a GitHub Pages
 * project site it is `/domestic-electrician-website/`. Hard-coding
 * `src="/team.webp"` would 404 there, so every runtime asset reference is
 * routed through this helper.
 *
 * @example asset('/team.webp') // -> '/domestic-electrician-website/team.webp'
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
