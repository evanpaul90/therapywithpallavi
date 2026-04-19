"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * JourneyFlow — Aunty Pallavi's 4-step "How it works" journey.
 * Hand-built SVG illustrations. Framer Motion scroll-linked choreography.
 * Respects prefers-reduced-motion (Dada's note made it animated; reduced-motion
 * users get a calm fade instead of drawing).
 */

const STROKE = "var(--color-sage-deep)";
const INK = "var(--color-navy)";
const FILL_SOFT = "var(--color-sage-pale)";

const svgDefaults = {
  width: 120,
  height: 120,
  viewBox: "0 0 120 120",
  fill: "none",
  stroke: STROKE,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const drawTransition = (delay = 0) => ({
  pathLength: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  opacity: { duration: 0.25, delay },
});

/* ---------- Illustration 1: Phone with incoming message ---------- */
function IconWhatsApp({ animate }: { animate: boolean }) {
  const initial = animate ? { pathLength: 0, opacity: 0 } : undefined;
  const target = animate ? { pathLength: 1, opacity: 1 } : undefined;
  return (
    <svg {...svgDefaults} aria-hidden="true">
      {/* soft halo */}
      <motion.circle
        cx="60" cy="60" r="52"
        fill={FILL_SOFT} stroke="none"
        initial={animate ? { scale: 0.6, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 0.6 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* phone body */}
      <motion.rect
        x="38" y="28" width="44" height="72" rx="8"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.1)}
      />
      {/* speaker notch */}
      <motion.line
        x1="54" y1="38" x2="66" y2="38"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.3)}
      />
      {/* message bubble popping out */}
      <motion.path
        d="M48 60 Q48 52 56 52 L76 52 Q84 52 84 60 L84 68 Q84 76 76 76 L62 76 L56 82 L56 76 Q48 76 48 68 Z"
        fill={FILL_SOFT}
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.5)}
      />
      {/* three dots */}
      <motion.circle cx="58" cy="64" r="1.6" fill={STROKE} stroke="none"
        initial={animate ? { opacity: 0 } : undefined}
        whileInView={animate ? { opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
      <motion.circle cx="66" cy="64" r="1.6" fill={STROKE} stroke="none"
        initial={animate ? { opacity: 0 } : undefined}
        whileInView={animate ? { opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 1.35, duration: 0.3 }}
      />
      <motion.circle cx="74" cy="64" r="1.6" fill={STROKE} stroke="none"
        initial={animate ? { opacity: 0 } : undefined}
        whileInView={animate ? { opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />
    </svg>
  );
}

/* ---------- Illustration 2: Two conversation arcs ---------- */
function IconConversation({ animate }: { animate: boolean }) {
  const initial = animate ? { pathLength: 0, opacity: 0 } : undefined;
  const target = animate ? { pathLength: 1, opacity: 1 } : undefined;
  return (
    <svg {...svgDefaults} aria-hidden="true">
      <motion.circle
        cx="60" cy="60" r="52"
        fill={FILL_SOFT} stroke="none"
        initial={animate ? { scale: 0.6, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 0.6 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* left bubble */}
      <motion.path
        d="M32 42 Q28 42 28 48 L28 62 Q28 68 34 68 L40 68 L44 74 L44 68 L50 68 Q56 68 56 62 L56 48 Q56 42 50 42 Z"
        fill="#fff"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.2)}
      />
      {/* right bubble */}
      <motion.path
        d="M70 56 Q64 56 64 62 L64 76 Q64 82 70 82 L76 82 L80 88 L80 82 L86 82 Q92 82 92 76 L92 62 Q92 56 86 56 Z"
        fill={FILL_SOFT}
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.6)}
      />
      {/* lines in left bubble */}
      <motion.line x1="34" y1="52" x2="50" y2="52"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.0)}
      />
      <motion.line x1="34" y1="58" x2="46" y2="58"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.15)}
      />
      {/* lines in right bubble */}
      <motion.line x1="70" y1="66" x2="86" y2="66"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.3)}
      />
      <motion.line x1="70" y1="72" x2="82" y2="72"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.45)}
      />
    </svg>
  );
}

/* ---------- Illustration 3: Intake form clipboard ---------- */
function IconIntake({ animate }: { animate: boolean }) {
  const initial = animate ? { pathLength: 0, opacity: 0 } : undefined;
  const target = animate ? { pathLength: 1, opacity: 1 } : undefined;
  return (
    <svg {...svgDefaults} aria-hidden="true">
      <motion.circle
        cx="60" cy="60" r="52"
        fill={FILL_SOFT} stroke="none"
        initial={animate ? { scale: 0.6, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 0.6 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* clipboard body */}
      <motion.rect x="36" y="32" width="48" height="60" rx="4" fill="#fff"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.15)}
      />
      {/* clip top */}
      <motion.rect x="50" y="26" width="20" height="10" rx="2"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.35)}
      />
      {/* form lines (3) with check marks */}
      <motion.line x1="44" y1="48" x2="56" y2="48"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.6)}
      />
      <motion.path d="M62 44 L66 49 L74 40"
        stroke={INK} strokeWidth="1.8"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.8)}
      />
      <motion.line x1="44" y1="62" x2="56" y2="62"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.0)}
      />
      <motion.path d="M62 58 L66 63 L74 54"
        stroke={INK} strokeWidth="1.8"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.15)}
      />
      <motion.line x1="44" y1="76" x2="56" y2="76"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.3)}
      />
      <motion.rect x="62" y="72" width="14" height="8" rx="1"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.45)}
      />
    </svg>
  );
}

/* ---------- Illustration 4: Calendar + small flag ---------- */
function IconCalendar({ animate }: { animate: boolean }) {
  const initial = animate ? { pathLength: 0, opacity: 0 } : undefined;
  const target = animate ? { pathLength: 1, opacity: 1 } : undefined;
  return (
    <svg {...svgDefaults} aria-hidden="true">
      <motion.circle
        cx="60" cy="60" r="52"
        fill={FILL_SOFT} stroke="none"
        initial={animate ? { scale: 0.6, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 0.6 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* calendar body */}
      <motion.rect x="32" y="40" width="56" height="52" rx="4" fill="#fff"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.15)}
      />
      {/* top bar */}
      <motion.line x1="32" y1="54" x2="88" y2="54"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.35)}
      />
      {/* binding rings */}
      <motion.line x1="44" y1="34" x2="44" y2="46"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.45)}
      />
      <motion.line x1="76" y1="34" x2="76" y2="46"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(0.55)}
      />
      {/* date dots */}
      {[44, 54, 64, 74].map((x, i) => (
        <motion.circle key={`r1-${x}`} cx={x} cy="64" r="1.6" fill={STROKE} stroke="none"
          initial={animate ? { opacity: 0 } : undefined}
          whileInView={animate ? { opacity: 0.4 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
        />
      ))}
      {[44, 54, 64, 74].map((x, i) => (
        <motion.circle key={`r2-${x}`} cx={x} cy="74" r="1.6" fill={STROKE} stroke="none"
          initial={animate ? { opacity: 0 } : undefined}
          whileInView={animate ? { opacity: 0.4 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.9 + i * 0.05, duration: 0.3 }}
        />
      ))}
      {/* highlighted booked date */}
      <motion.circle cx="64" cy="74" r="6" fill={STROKE} stroke="none"
        initial={animate ? { scale: 0, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 1.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      />
      {/* flag */}
      <motion.path
        d="M70 30 L70 48 M70 30 L84 33 L78 38 L84 43 L70 40"
        initial={initial} whileInView={target}
        viewport={{ once: true, margin: "-80px" }}
        transition={drawTransition(1.3)}
      />
    </svg>
  );
}

/* ---------- Connector line (curved) ---------- */
function Connector({ animate, delay, flip = false }: { animate: boolean; delay: number; flip?: boolean }) {
  const path = flip
    ? "M 0 20 Q 40 60 80 40 T 160 20"
    : "M 0 40 Q 40 0 80 20 T 160 40";
  return (
    <svg
      width="160" height="60" viewBox="0 0 160 60" fill="none"
      className="hidden md:block absolute top-[50px] pointer-events-none"
      style={{ left: "100%", transform: "translateX(-20px)" }}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke={STROKE} strokeWidth="1.4" strokeLinecap="round"
        strokeDasharray="3 5"
        initial={animate ? { pathLength: 0, opacity: 0 } : { opacity: 0.4 }}
        whileInView={animate ? { pathLength: 1, opacity: 0.6 } : { opacity: 0.4 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay }}
      />
      {/* arrow head */}
      <motion.path
        d="M 152 36 L 160 40 L 152 44"
        stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
        initial={animate ? { opacity: 0 } : undefined}
        whileInView={animate ? { opacity: 0.7 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: delay + 1.0 }}
      />
    </svg>
  );
}

/* ---------- Step card ---------- */
type Step = {
  Icon: React.ComponentType<{ animate: boolean }>;
  eyebrow: string;
  title: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    Icon: IconWhatsApp,
    eyebrow: "Step 01",
    title: "WhatsApp or email me",
    detail:
      "Reach out for a free 15-minute consultation. No forms, no commitment \u2014 just a conversation.",
  },
  {
    Icon: IconConversation,
    eyebrow: "Step 02",
    title: "Get your queries addressed",
    detail:
      "We talk through what you\u2019re looking for, how therapy works, and whether this feels like the right fit.",
  },
  {
    Icon: IconIntake,
    eyebrow: "Step 03",
    title: "Fill the intake form",
    detail:
      "A simple, confidential form so I can understand your context before we meet.",
  },
  {
    Icon: IconCalendar,
    eyebrow: "Step 04",
    title: "Book your session",
    detail:
      "Choose a time that works for you. We begin, at a pace that feels right.",
  },
];

export function JourneyFlow() {
  const reduce = useReducedMotion();
  const animate = !reduce;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
        {STEPS.map(({ Icon, eyebrow, title, detail }, i) => (
          <motion.div
            key={title}
            className="relative text-center md:text-left"
            initial={animate ? { opacity: 0, y: 24 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
          >
            <div className="flex md:justify-start justify-center">
              <Icon animate={animate} />
            </div>
            <p
              className="mt-6 editorial-eyebrow"
              style={{ color: "var(--color-sage-deep)" }}
            >
              {eyebrow}
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-[22px] md:text-[24px] leading-snug text-navy">
              {title}
            </h3>
            <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-muted max-w-[260px] md:max-w-none mx-auto md:mx-0">
              {detail}
            </p>
            {i < STEPS.length - 1 && (
              <Connector animate={animate} delay={i * 0.15 + 0.6} flip={i % 2 === 1} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
