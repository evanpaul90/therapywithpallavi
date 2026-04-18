"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { TreeEmblem } from "./tree-emblem";

type NavLink = { href: string; label: string; primary?: boolean };

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pathways", label: "Pathways" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book", primary: true },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-divider bg-cream sticky top-0 z-40 backdrop-blur-sm bg-cream/85">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            aria-label="Therapy with Pallavi — home"
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
            {NAV_LINKS.map((link) =>
              link.primary ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] tracking-wide rounded-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--color-sage-deep)" }}
                >
                  {link.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
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
              ),
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden flex flex-col gap-[5px] p-2"
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

      {/* Mobile overlay */}
      {open && (
        <nav className="lg:hidden border-t border-divider bg-cream">
          <ul className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block font-[var(--font-display)] leading-tight",
                    link.primary ? "text-[24px]" : "text-[26px]",
                    isActive(link.href) || link.primary ? "" : "text-navy",
                  )}
                  style={
                    isActive(link.href) || link.primary
                      ? { color: "var(--color-sage-deep)" }
                      : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {link.primary && (
                    <span className="ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
