/**
 * Illustrations — hand-drawn, theme-aware SVGs.
 *
 * Six line-drawings, all in the same stroke language:
 *  - 1.4px sage-deep stroke
 *  - round caps and joins
 *  - asymmetric curves (real life is never symmetric)
 *  - no fills (except subtle sage-pale washes where noted)
 *
 * These carry the "editorial-intimate" voice — a letter's margin doodles,
 * not stock iconography. Each is a quiet metaphor for a therapy moment.
 */

type IllustrationProps = {
  size?: number;
  className?: string;
  stroke?: string;
};

const DEFAULT_STROKE = "var(--color-sage-deep)";

function baseProps(size: number, className: string | undefined) {
  return {
    width: size,
    height: size,
    fill: "none",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ?? "",
    "aria-hidden": true,
  };
}

/* =========================================================================
   1. WoodenChair — "sit with me"
   ========================================================================= */
export function WoodenChair({
  size = 140,
  className,
  stroke = DEFAULT_STROKE,
}: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 240" {...baseProps(size, className)} stroke={stroke}>
      {/* back uprights */}
      <path d="M 62 34 Q 60 82 64 134" />
      <path d="M 138 30 Q 142 80 136 134" />
      {/* back slats */}
      <path d="M 64 46 Q 100 42 136 48" />
      <path d="M 64 66 Q 100 62 136 68" />
      <path d="M 64 90 Q 100 86 136 92" />
      {/* seat cushion */}
      <path d="M 38 134 Q 100 128 162 136" />
      <path d="M 38 134 Q 40 140 42 146" opacity="0.6" />
      <path d="M 162 136 Q 160 142 158 148" opacity="0.6" />
      <path d="M 40 146 Q 100 142 160 148" />
      {/* legs */}
      <path d="M 56 138 L 48 220" />
      <path d="M 144 138 L 152 220" />
      <path d="M 76 140 L 70 222" opacity="0.7" />
      <path d="M 124 140 L 130 222" opacity="0.7" />
      {/* ground shadow */}
      <path
        d="M 48 228 Q 100 232 152 228"
        strokeDasharray="2 4"
        opacity="0.4"
      />
    </svg>
  );
}

/* =========================================================================
   2. WindowWithLight — "light returns in the afternoon"
   ========================================================================= */
export function WindowWithLight({
  size = 160,
  className,
  stroke = DEFAULT_STROKE,
}: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 280" {...baseProps(size, className)} stroke={stroke}>
      {/* window frame */}
      <rect x="46" y="30" width="128" height="190" rx="2" />
      {/* crossbars */}
      <path d="M 110 30 L 110 220" />
      <path d="M 46 125 L 174 125" />
      {/* panes — subtle inner highlights */}
      <path d="M 54 38 Q 70 48 88 58" opacity="0.35" />
      <path d="M 122 38 Q 138 48 156 58" opacity="0.35" />
      {/* sill */}
      <path d="M 36 220 L 184 220" />
      <path d="M 40 226 L 180 226" opacity="0.6" />
      {/* light rays falling below the window */}
      <path d="M 62 226 L 44 274" opacity="0.35" />
      <path d="M 110 226 L 110 274" opacity="0.35" />
      <path d="M 158 226 L 176 274" opacity="0.35" />
      <path d="M 86 226 L 78 274" opacity="0.25" />
      <path d="M 134 226 L 142 274" opacity="0.25" />
    </svg>
  );
}

/* =========================================================================
   3. PottedPlant — three growth stages (use stage prop 1..3)
      Metaphor for the three steps: consult → first session → ongoing.
   ========================================================================= */
export function PottedPlant({
  size = 120,
  className,
  stroke = DEFAULT_STROKE,
  stage = 3,
}: IllustrationProps & { stage?: 1 | 2 | 3 }) {
  return (
    <svg viewBox="0 0 160 200" {...baseProps(size, className)} stroke={stroke}>
      {/* pot */}
      <path d="M 54 156 L 62 194 L 98 194 L 106 156 Z" />
      <path d="M 52 156 L 108 156" />
      {/* soil line */}
      <path d="M 58 160 Q 80 162 102 160" opacity="0.5" />

      {/* Stage 1 — small sprout, always present */}
      <g>
        <path d="M 80 156 Q 80 144 82 132" />
        <path d="M 82 138 Q 92 134 96 124" />
        <path d="M 80 140 Q 70 136 66 126" />
      </g>

      {/* Stage 2 — taller stem + side leaves */}
      {stage >= 2 && (
        <g>
          <path d="M 82 132 Q 82 118 80 104" />
          <path d="M 80 114 Q 94 108 102 96" />
          <path d="M 80 120 Q 66 114 58 102" />
        </g>
      )}

      {/* Stage 3 — full plant, offshoots + crown leaves */}
      {stage >= 3 && (
        <g>
          <path d="M 80 104 Q 82 88 78 72" />
          <path d="M 78 82 Q 94 76 104 64" />
          <path d="M 78 88 Q 62 82 52 70" />
          <path d="M 78 72 Q 76 60 70 50" />
          <path d="M 78 72 Q 86 64 92 52" />
          {/* tiny bud at top */}
          <circle cx="78" cy="50" r="3" />
        </g>
      )}
    </svg>
  );
}

/* =========================================================================
   4. Teacup — "warmth, pause"
   ========================================================================= */
export function Teacup({
  size = 140,
  className,
  stroke = DEFAULT_STROKE,
}: IllustrationProps) {
  return (
    <svg viewBox="0 0 180 200" {...baseProps(size, className)} stroke={stroke}>
      {/* saucer */}
      <path d="M 30 156 Q 90 168 150 156" />
      <path d="M 30 156 Q 90 146 150 156" opacity="0.6" />
      {/* cup */}
      <path d="M 50 110 Q 48 130 60 150 Q 90 158 120 150 Q 132 130 130 110 Z" />
      {/* cup rim */}
      <path d="M 50 110 Q 90 118 130 110" />
      {/* handle */}
      <path d="M 130 118 Q 150 118 150 134 Q 150 148 132 146" />
      {/* steam curls */}
      <path d="M 70 92 Q 76 80 70 70 Q 64 60 70 48" opacity="0.55" />
      <path d="M 90 96 Q 96 82 90 70 Q 84 58 90 44" opacity="0.6" />
      <path d="M 110 92 Q 116 80 110 70 Q 104 60 110 48" opacity="0.55" />
    </svg>
  );
}

/* =========================================================================
   5. TreeGrove — "rootedness"
   ========================================================================= */
export function TreeGrove({
  size = 180,
  className,
  stroke = DEFAULT_STROKE,
}: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 200" {...baseProps(size, className)} stroke={stroke}>
      {/* ground */}
      <path d="M 10 178 Q 120 184 230 178" opacity="0.5" />

      {/* tree 1 — tallest */}
      <path d="M 60 178 L 58 100" />
      <path d="M 58 100 Q 44 86 40 70" />
      <path d="M 58 100 Q 72 86 76 70" />
      <path d="M 58 100 Q 44 76 36 58" />
      <path d="M 58 100 Q 72 76 80 58" />
      <path d="M 58 100 Q 58 76 58 50" />
      {/* crown suggestion */}
      <path d="M 40 70 Q 58 56 76 70" opacity="0.6" />

      {/* tree 2 — medium */}
      <path d="M 122 178 L 122 130" />
      <path d="M 122 130 Q 108 120 102 108" />
      <path d="M 122 130 Q 136 120 142 108" />
      <path d="M 122 130 Q 122 110 122 92" />
      <path d="M 102 108 Q 122 96 142 108" opacity="0.6" />

      {/* tree 3 — smallest (but alive) */}
      <path d="M 180 178 L 180 146" />
      <path d="M 180 146 Q 168 138 164 128" />
      <path d="M 180 146 Q 192 138 196 128" />
      <path d="M 164 128 Q 180 118 196 128" opacity="0.6" />
    </svg>
  );
}

/* =========================================================================
   6. OpenBook — "reading your own life"
   ========================================================================= */
export function OpenBook({
  size = 160,
  className,
  stroke = DEFAULT_STROKE,
}: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 180" {...baseProps(size, className)} stroke={stroke}>
      {/* book base — two curved pages */}
      <path d="M 20 130 Q 60 108 118 120 L 118 156 Q 60 144 20 164 Z" />
      <path d="M 220 130 Q 180 108 122 120 L 122 156 Q 180 144 220 164 Z" />
      {/* spine shadow */}
      <path d="M 118 120 L 122 120" opacity="0.7" />
      {/* lines of text */}
      <path d="M 36 126 Q 72 116 108 124" opacity="0.55" />
      <path d="M 36 136 Q 72 126 108 134" opacity="0.5" />
      <path d="M 36 146 Q 72 136 108 144" opacity="0.45" />
      <path d="M 132 124 Q 172 114 208 124" opacity="0.55" />
      <path d="M 132 134 Q 172 124 208 134" opacity="0.5" />
      <path d="M 132 144 Q 172 134 208 144" opacity="0.45" />
      {/* a small curl on the top-right corner of the right page */}
      <path d="M 200 120 Q 210 116 214 122" opacity="0.6" />
    </svg>
  );
}

/* =========================================================================
   7. SageBlob — drifting background shape used for ambient depth.
      Exported here for consistency — used in motion layers.
   ========================================================================= */
export function SageBlob({
  size = 420,
  className,
  stroke,
}: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill={stroke ?? "var(--color-sage)"}
      aria-hidden="true"
      className={className}
    >
      <path
        d="M 320 120 Q 370 180 340 260 Q 290 340 200 340 Q 110 340 70 260 Q 40 180 90 110 Q 150 40 240 60 Q 290 70 320 120 Z"
        opacity="0.12"
      />
    </svg>
  );
}
