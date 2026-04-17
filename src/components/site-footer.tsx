import Link from "next/link";
import { TreeEmblem } from "./tree-emblem";

const PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book a consultation" },
];

const SECONDARY = [{ href: "/terms", label: "Terms & privacy" }];

const INTAKE_FORM_URL = "https://forms.gle/bj5sWBzWsdEcrVjg9";
const WHATSAPP_URL = "https://wa.me/message/EIF2EASB2GEXI1";

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
              Counsellor &amp; Psychotherapist
              <br />
              MA Clinical Psychology
              <br />
              CBT &middot; IFS (trauma) &middot; NLP &middot; QPR-trained
              <br />
              8+ years professional &middot; 4+ years therapeutic practice
              <br />
              Bangalore &middot; online globally
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="cap-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {PRIMARY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-ink transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {SECONDARY.map((link) => (
                <li key={link.href} className="pt-1">
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="cap-label mb-4">Reach out</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href={INTAKE_FORM_URL}
                  target="_blank"
                  rel="noopener"
                  className="text-ink transition-colors hover:text-navy"
                >
                  Intake form
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="text-ink transition-colors hover:text-navy"
                >
                  WhatsApp &middot; +91 91086 94332
                </a>
              </li>
              <li>
                <a
                  href="mailto:therapy.icp@gmail.com"
                  className="text-ink transition-colors hover:text-navy"
                >
                  therapy.icp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/therapy.with.pallavi/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink transition-colors hover:text-navy"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pallavi-bhaskar-b76a9b32/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink transition-colors hover:text-navy"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-divider flex flex-col items-center gap-4">
          <TreeEmblem size={28} alt="" />
          <p className="text-[13px] text-muted tracking-wide text-center max-w-[560px] leading-[1.6]">
            You don&rsquo;t have to have everything figured out before you
            begin.
          </p>
          <p className="text-[12px] text-muted tracking-wide mt-2">
            &copy; {new Date().getFullYear()} Pallavi Bhaskar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
