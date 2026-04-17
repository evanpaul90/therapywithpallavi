/**
 * PaperTexture — fixed-position SVG noise overlay.
 *
 * 4% opacity. On every page. The single most under-rated tactile move for
 * translating print feel to digital. Respects pointer-events so it never
 * intercepts clicks.
 */
export function PaperTexture() {
  return <div className="paper-texture" aria-hidden="true" />;
}
