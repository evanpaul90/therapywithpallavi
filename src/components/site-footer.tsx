import Link from "next/link";
import { TreeEmblem } from "./tree-emblem";

const PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pathways", label: "Pathways" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQs" },
  { href: "/book", label: "Book a consultation" },
];

const SECONDARY = [
  { href: "/crisis-support", label: "Crisis support" },
  { href: "/terms", label: "Terms & privacy" },
];

const CAL_URL = "https://cal.com/therapywithpallavi";
const WHATSAPP_URL = "https://wa.me/message/EIF2EASB2GEXI1";
const EMAIL = "therapy.icp@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/therapy.with.pallavi/";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-navy) 0%, #0f1f28 60%, #0b1720 100%)",
        color: "#e8e2d4",
      }}
    >
      {/* Film-grain SVG overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
      >
        <filter id="ft-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ft-grain)" />
      </svg>

      {/* Soft sage glow, top-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-120px",
          left: "-120px",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(closest-side, rgba(127,184,165,0.18), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-10 pt-24 md:pt-28 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-16">
          {/* Column 1 — Mark + mission + CTA pill */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <TreeEmblem size={34} alt="" />
              <p
                className="font-[var(--font-display)] italic text-[26px]"
                style={{ color: "#f4efe4" }}
              >
                Therapy with Pallavi
              </p>
            </div>
            <p
              className="mt-8 text-[16px] leading-[1.75] max-w-[380px]"
              style={{ color: "#c8c2b4" }}
            >
              Compassionate, evidence-based therapy to help you navigate
              challenges, build self-awareness, and create meaningful change.
            </p>

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener"
              className="group mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all"
              style={{
                background: "rgba(127,184,165,0.12)",
                border: "1px solid rgba(127,184,165,0.35)",
                color: "#e8e2d4",
              }}
            >
              <span>Start a free 15-minute conversation</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>

          {/* Column 2 — Quick links */}
          <div className="md:col-span-3">
            <p
              className="text-[11px] tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8b8674" }}
            >
              Quick links
            </p>
            <ul className="space-y-3">
              {PRIMARY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-[15px] inline-flex"
                    style={{ color: "#e8e2d4" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 pt-6 space-y-2" style={{ borderTop: "1px solid rgba(232,226,212,0.1)" }}>
              {SECONDARY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-[13px] inline-flex"
                    style={{ color: "#8b8674" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Living contact card */}
          <div className="md:col-span-4">
            <p
              className="text-[11px] tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8b8674" }}
            >
              Reach out
            </p>

            <ul className="space-y-5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="Message Pallavi on WhatsApp"
                  className="footer-contact group flex items-start gap-4"
                >
                  <span className="footer-icon-ring">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.53 3.81 1.53 5.44L2 22l4.79-1.56a9.88 9.88 0 0 0 5.25 1.51h.01c5.45 0 9.89-4.45 9.89-9.91 0-2.65-1.03-5.14-2.91-7.02A9.82 9.82 0 0 0 12.04 2zm5.7 14.2c-.24.68-1.42 1.3-1.95 1.37-.5.08-1.11.11-1.79-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.75-4.13-4.89-4.32-.14-.19-1.18-1.58-1.18-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.77-.36h.55c.18 0 .41-.07.64.49.24.58.81 1.99.88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.75 1.24 1.61 2c1.11.99 2.04 1.3 2.33 1.45.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.65-.14.27.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.68-.16 1.36z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[0.14em] uppercase" style={{ color: "#8b8674" }}>
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-[15px]" style={{ color: "#e8e2d4" }}>
                      +91 91086 94332
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email Pallavi"
                  className="footer-contact group flex items-start gap-4"
                >
                  <span className="footer-icon-ring">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[0.14em] uppercase" style={{ color: "#8b8674" }}>
                      Email
                    </span>
                    <span className="mt-1 block text-[15px]" style={{ color: "#e8e2d4" }}>
                      {EMAIL}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="Follow on Instagram"
                  className="footer-contact group flex items-start gap-4"
                >
                  <span className="footer-icon-ring">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-[0.14em] uppercase" style={{ color: "#8b8674" }}>
                      Instagram
                    </span>
                    <span className="mt-1 block text-[15px]" style={{ color: "#e8e2d4" }}>
                      @therapy.with.pallavi
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline + small row */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(232,226,212,0.12)" }}
        >
          <p
            className="text-[12px] tracking-wide max-w-[520px]"
            style={{ color: "#8b8674" }}
          >
            &copy; {new Date().getFullYear()} Therapy with Pallavi &middot;
            Bangalore, India &middot; Confidential &amp; evidence-based
            practice.
          </p>
          <p
            className="text-[12px] italic font-[var(--font-display)]"
            style={{ color: "#8b8674" }}
          >
            You don&rsquo;t have to have everything figured out before you
            begin.
          </p>
        </div>
      </div>
    </footer>
  );
}
