import Link from "next/link";
import { TreeEmblem } from "./tree-emblem";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms & Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Credentials */}
          <div>
            <p className="cap-label mb-4">Credentials</p>
            <p className="font-[var(--font-display)] text-[22px] text-navy leading-tight mb-3">
              Pallavi Bhaskar
            </p>
            <p className="text-[15px] text-muted leading-relaxed">
              MA Clinical Psychology · PGDM
              <br />
              CBT · IFS · NLP · QPR-trained
              <br />
              Eight years of practice
              <br />
              Bangalore · Online globally
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="cap-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="cap-label mb-4">Contact</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href="mailto:therapy.icp@gmail.com"
                  className="text-ink hover:text-teal transition-colors"
                >
                  therapy.icp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/EIF2EASB2GEXI1"
                  target="_blank"
                  rel="noopener"
                  className="text-ink hover:text-teal transition-colors"
                >
                  +91 91086 94332
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/therapy.with.pallavi/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink hover:text-teal transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pallavi-bhaskar-b76a9b32/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink hover:text-teal transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-divider flex flex-col items-center gap-4">
          <TreeEmblem size={28} alt="" />
          <p className="text-[13px] text-muted tracking-wide">
            © {new Date().getFullYear()} Pallavi Bhaskar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
