/**
 * Decorative concentric arcs behind the hero emblem.
 * Pure SVG — animates a slow opacity/scale pulse via CSS .hero-arc.
 * Aria-hidden because purely decorative.
 */
export function HeroArcs() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{ overflow: "visible" }}
    >
      {[1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx="300"
          cy="300"
          r={120 + i * 40}
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="0.5"
          className="hero-arc"
          style={{ animationDelay: `${i * 600}ms` }}
        />
      ))}
    </svg>
  );
}
