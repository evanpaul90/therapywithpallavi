"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { TreeEmblem } from "./tree-emblem";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
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
          <Link href="/" className="flex items-center gap-3 group">
            <TreeEmblem size={32} alt="" />
            <span className="font-[var(--font-display)] text-[18px] tracking-wide text-navy group-hover:text-teal transition-colors">
              Pallavi Bhaskar
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-[14px] tracking-wide transition-colors",
                  isActive(link.href)
                    ? "text-teal"
                    : "text-ink hover:text-teal",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="block h-px bg-sage mt-1 -mb-px" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-[5px] p-2"
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
        <nav className="md:hidden border-t border-divider bg-cream">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block font-[var(--font-display)] text-[28px] leading-tight",
                    isActive(link.href) ? "text-teal" : "text-navy",
                  )}
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
  );
}
