import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Ride", href: "#how-it-works" },
  { label: "Drive", href: "#drive" },
];

// Replace with real contact email
const CONTACT_EMAIL = "saferideshelp@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/saferides";
const TIKTOK_URL = "https://www.tiktok.com/@saferides";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-[#1740A6]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-[#1740A6] font-bold text-lg tracking-tight">
            Saferides
          </span>
          <p className="text-[#1740A6]/55 text-sm leading-relaxed max-w-[240px]">
            Student-only rideshare. Built for campus safety.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-[#1740A6]/55 hover:text-[#1740A6] transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-wrap gap-12 sm:gap-16">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/apply"
              className="text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors"
            >
              Apply
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors"
            >
              Terms
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors"
            >
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1740A6]/60 hover:text-[#1740A6] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1740A6]/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5">
          <p className="text-xs text-[#1740A6]/45">
            &copy; 2026 Coetzee Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
