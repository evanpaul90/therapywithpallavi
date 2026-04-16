import { clsx } from "clsx";

/**
 * Hand-built SVG tree-of-life.
 * Draws stroke-by-stroke on first load (~2.4s total),
 * then breathes ambient via the .emblem-alive class on the wrapper.
 *
 * Visually echoes Pallavi's PNG emblem:
 *   - Circular teal-to-navy gradient badge
 *   - Concentric mandala rings
 *   - Central figure silhouette
 *   - Branching canopy + flowing roots
 */
export function AnimatedTree({
  size = 280,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 360"
      width={size}
      height={size}
      role="img"
      aria-label="Tree-of-life emblem — Pallavi Bhaskar"
      className={clsx("select-none", className)}
      style={{ width: size, height: size }}
    >
      <defs>
        <linearGradient id="badge-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7fb8a5" />
          <stop offset="55%" stopColor="#4ea1a8" />
          <stop offset="100%" stopColor="#1a2e3a" />
        </linearGradient>
      </defs>

      {/* Badge (gradient circle, fades in) */}
      <circle cx="180" cy="180" r="170" fill="url(#badge-grad)" className="tree-badge" />

      {/* Inner concentric mandala rings */}
      <g
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.6"
        strokeLinecap="round"
      >
        <circle cx="180" cy="180" r="155" className="tree-ring" style={{ animationDelay: "0.4s" }} />
        <circle cx="180" cy="180" r="138" className="tree-ring" style={{ animationDelay: "0.5s" }} />
        <circle cx="180" cy="180" r="118" className="tree-ring" style={{ animationDelay: "0.6s" }} />
      </g>

      {/* All the white linework (figure + tree + leaves + roots) */}
      <g
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Central figure — simplified silhouette */}
        {/* Head */}
        <circle
          cx="180"
          cy="148"
          r="9"
          className="tree-stroke"
          style={{ animationDelay: "0.9s" }}
        />
        {/* Body / torso */}
        <path
          d="M 180 158 C 174 178, 174 200, 180 230"
          className="tree-stroke"
          style={{ animationDelay: "1.0s" }}
        />
        {/* Arms (very subtle) */}
        <path
          d="M 168 178 C 158 178, 152 184, 152 192"
          className="tree-stroke"
          style={{ animationDelay: "1.1s" }}
        />
        <path
          d="M 192 178 C 202 178, 208 184, 208 192"
          className="tree-stroke"
          style={{ animationDelay: "1.1s" }}
        />

        {/* Inner heart/glow dot */}
        <circle
          cx="180"
          cy="200"
          r="3.2"
          fill="#7fb8a5"
          stroke="none"
          className="tree-fill"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Trunk to roots */}
        <path
          d="M 180 230 L 180 268"
          className="tree-stroke"
          style={{ animationDelay: "1.2s" }}
        />

        {/* Roots — curving downward */}
        <path
          d="M 180 268 C 180 280, 162 290, 144 296"
          className="tree-stroke"
          style={{ animationDelay: "1.3s" }}
        />
        <path
          d="M 180 268 C 180 282, 198 290, 216 296"
          className="tree-stroke"
          style={{ animationDelay: "1.3s" }}
        />
        <path
          d="M 180 268 C 178 286, 166 304, 152 312"
          className="tree-stroke"
          style={{ animationDelay: "1.4s" }}
        />
        <path
          d="M 180 268 C 182 286, 194 304, 208 312"
          className="tree-stroke"
          style={{ animationDelay: "1.4s" }}
        />
        <path
          d="M 180 268 L 180 318"
          className="tree-stroke"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Canopy — branches spreading from above the figure */}
        {/* Left branch */}
        <path
          d="M 180 158 C 168 144, 152 132, 134 124"
          className="tree-stroke"
          style={{ animationDelay: "1.0s" }}
        />
        <path
          d="M 152 134 C 146 124, 138 116, 124 108"
          className="tree-stroke"
          style={{ animationDelay: "1.15s" }}
        />
        <path
          d="M 162 124 C 156 110, 152 100, 144 88"
          className="tree-stroke"
          style={{ animationDelay: "1.25s" }}
        />

        {/* Right branch */}
        <path
          d="M 180 158 C 192 144, 208 132, 226 124"
          className="tree-stroke"
          style={{ animationDelay: "1.0s" }}
        />
        <path
          d="M 208 134 C 214 124, 222 116, 236 108"
          className="tree-stroke"
          style={{ animationDelay: "1.15s" }}
        />
        <path
          d="M 198 124 C 204 110, 208 100, 216 88"
          className="tree-stroke"
          style={{ animationDelay: "1.25s" }}
        />

        {/* Center crown branches */}
        <path
          d="M 180 158 C 178 130, 176 100, 174 80"
          className="tree-stroke"
          style={{ animationDelay: "1.05s" }}
        />
        <path
          d="M 180 158 C 182 130, 184 100, 186 80"
          className="tree-stroke"
          style={{ animationDelay: "1.05s" }}
        />

        {/* Leaves — small ovals scattered in the canopy */}
        {[
          [124, 108],
          [134, 124],
          [144, 88],
          [110, 96],
          [144, 70],
          [174, 80],
          [186, 80],
          [216, 88],
          [236, 108],
          [226, 124],
          [250, 96],
          [216, 70],
          [156, 100],
          [204, 100],
          [180, 92],
          [120, 132],
          [240, 132],
          [160, 70],
          [200, 70],
        ].map(([cx, cy], i) => (
          <ellipse
            key={`leaf-${i}`}
            cx={cx}
            cy={cy}
            rx="3.5"
            ry="2"
            transform={`rotate(${(cx - 180) * 0.6} ${cx} ${cy})`}
            fill="rgba(127,184,165,0.95)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.8"
            className="tree-leaf"
            style={{ animationDelay: `${1.5 + i * 0.04}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
