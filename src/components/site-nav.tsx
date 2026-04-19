"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { TreeEmblem } from "./tree-emblem";

type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/pathways", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const SEARCHABLE = [
  ...NAV_LINKS,
  { href: "/journal", label: "Journal" },
  { href: "/book", label: "Book a consultation" },
  { href: "/crisis-support", label: "Crisis support" },
  { href: "/terms", label: "Terms & privacy" },
];

export function SiteNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matches = q.trim()
    ? SEARCHABLE.filter((l) =>
        l.label.toLowerCase().includes(q.trim().toLowerCase()),
      )
    : SEARCHABLE.slice(0, 6);

  const goTo = (href: string) => {
    setSearchOpen(false);
    setQ("");
    router.push(href);
  };

  return (
    <>
      <header className="border-b border-divider bg-cream sticky top-0 z-40 backdrop-blur-sm bg-cream/85">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10">
          <div className="flex items-center justify-between h-[72px]">
            <Link
              href="/"
              aria-label="Therapy with Pallavi \u2014 home"
              className="flex items-center gap-3 group shrink-0"
            >
              <TreeEmblem size={32} alt="" />
              <span
                aria-hidden="true"
                className="font-[var(--font-display)] text-[18px] tracking-wide text-navy group-hover:opacity-80 transition-opacity hidden sm:inline"
              >
                Therapy with Pallavi
              </span>
              <span
                aria-hidden="true"
                className="font-[var(--font-display)] text-[18px] tracking-wide text-navy sm:hidden"
              >
                Pallavi
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-[13px] xl:text-[14px] tracking-wide transition-colors",
                    isActive(link.href) ? "" : "text-ink",
                  )}
                  style={
                    isActive(link.href)
                      ? { color: "var(--color-sage-deep)" }
                      : undefined
                  }
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="block h-px mt-1 -mb-px"
                      style={{ background: "var(--color-sage-deep)" }}
                    />
                  )}
                </Link>
              ))}

              {/* Search button */}
              <button
                type="button"
                aria-label="Search the site"
                onClick={() => setSearchOpen(true)}
                className="ml-2 w-9 h-9 inline-flex items-center justify-center rounded-full transition-colors"
                style={{
                  background: "transparent",
                  color: "var(--color-navy)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M20 20l-4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </nav>

            {/* Mobile actions: search + menu */}
            <div className="lg:hidden flex items-center gap-1">
              <button
                type="button"
                aria-label="Search the site"
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 inline-flex items-center justify-center"
                style={{ color: "var(--color-navy)" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M20 20l-4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex flex-col gap-[5px] p-2"
                onClick={() => setOpen((o) => !o)}
              >
                <span
                  className={clsx(
                    "block h-px w-6 bg-navy transition-transform",
                    open && "translate-y-[6px] rotate-45",
                  )}
                />
                <span
                  className={clsx(
                    "block h-px w-6 bg-navy transition-opacity",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={clsx(
                    "block h-px w-6 bg-navy transition-transform",
                    open && "-translate-y-[6px] -rotate-45",
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {open && (
          <nav className="lg:hidden border-t border-divider bg-cream">
            <ul className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "block font-[var(--font-display)] leading-tight text-[26px]",
                      isActive(link.href) ? "" : "text-navy",
                    )}
                    style={
                      isActive(link.href)
                        ? { color: "var(--color-sage-deep)" }
                        : undefined
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Search the site"
          onClick={() => setSearchOpen(false)}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "rgba(26,46,58,0.35)", backdropFilter: "blur(6px)" }}
          />
          <div
            className="relative w-full max-w-[560px] bg-cream border border-divider shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-6 py-5 border-b border-divider">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                style={{ color: "var(--color-sage-deep)" }}
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M20 20l-4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages\u2026"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && matches[0]) goTo(matches[0].href);
                }}
                className="flex-1 bg-transparent outline-none text-[17px] placeholder:text-muted"
                style={{ color: "var(--color-ink)" }}
              />
              <kbd
                className="hidden md:inline text-[11px] tracking-wide px-2 py-1 border border-divider rounded-sm"
                style={{ color: "var(--color-muted)" }}
              >
                esc
              </kbd>
            </div>
            <ul className="py-2 max-h-[50vh] overflow-y-auto">
              {matches.length === 0 ? (
                <li className="px-6 py-6 text-[14px] text-muted italic">
                  Nothing here by that name. Try a different word.
                </li>
              ) : (
                matches.map((m) => (
                  <li key={m.href}>
                    <button
                      type="button"
                      onClick={() => goTo(m.href)}
                      className="w-full text-left px-6 py-3 text-[15px] hover:bg-[var(--color-sage-pale)] transition-colors flex items-center justify-between"
                    >
                      <span style={{ color: "var(--color-ink)" }}>
                        {m.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-[12px]"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {m.href}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
