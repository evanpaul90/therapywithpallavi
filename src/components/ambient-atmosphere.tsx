/**
 * AmbientAtmosphere — the "living stillness" layer.
 *
 *  - Two 1px sage hairlines at the top and bottom of the viewport,
 *    breathing in opacity over a 12s cycle. Life-sign. Never attention-grabbing.
 *
 *  - Three sage leaves drifting in gutters at 18% opacity, 25s cycles,
 *    never colliding with reading content.
 *
 * All motion is CSS-only and respects prefers-reduced-motion.
 */
export function AmbientAtmosphere() {
  return (
    <>
      <div className="ambient-horizon ambient-horizon--top" aria-hidden="true" />
      <div className="ambient-horizon ambient-horizon--bottom" aria-hidden="true" />

      {/* Gutter leaves — positioned in corners where text doesn't live */}
      <DriftLeaf
        className="left-[3%] top-[18vh]"
        delay="0s"
        size={44}
        rotate={-12}
      />
      <DriftLeaf
        className="right-[4%] top-[52vh]"
        delay="-8s"
        size={36}
        rotate={24}
      />
      <DriftLeaf
        className="left-[6%] top-[120vh]"
        delay="-16s"
        size={50}
        rotate={-28}
      />
    </>
  );
}

function DriftLeaf({
  className,
  delay,
  size,
  rotate,
}: {
  className: string;
  delay: string;
  size: number;
  rotate: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`drift-leaf hidden md:block ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: delay,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        {/* A single sage leaf — hand-drawn feel, asymmetric */}
        <path
          d="M 24 4 C 14 10 8 20 8 32 C 8 40 14 44 24 44 C 34 44 40 40 40 32 C 40 20 34 10 24 4 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 24 6 L 24 42"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <path
          d="M 24 14 L 14 22"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.55"
        />
        <path
          d="M 24 14 L 34 22"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.55"
        />
        <path
          d="M 24 24 L 12 32"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M 24 24 L 36 32"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
