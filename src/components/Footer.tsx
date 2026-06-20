import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Safety", href: "#safety" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Businesses", href: "#for-businesses" },
  { label: "Drivers", href: "#drivers" },
];

const CONTACT_EMAIL = "saferideshelp@gmail.com";
const APP_STORE_URL = "https://apps.apple.com/app/id6750380495";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1740A6]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: "1.5rem" }}
          >
            SafeRides
          </span>
          <p
            className="font-body text-white/65"
            style={{ fontSize: "0.9rem", maxWidth: "240px", lineHeight: 1.6 }}
          >
            Student-only rideshare. Built for campus.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body text-white/65 hover:text-white transition-colors"
            style={{ fontSize: "0.9rem" }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left font-body font-medium text-white/65 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/apply"
            className="font-body font-medium text-white/65 hover:text-white transition-colors w-fit"
          >
            Apply
          </Link>
        </div>

        {/* App + legal */}
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[8px] bg-white px-6 py-3 font-display font-bold text-[#1740A6]"
          >
            Download the app
          </a>
          <div className="flex flex-col gap-2 sm:items-end">
            <Link
              to="/privacy"
              className="font-body text-white/50 hover:text-white/80 transition-colors"
              style={{ fontSize: "0.8rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-body text-white/50 hover:text-white/80 transition-colors"
              style={{ fontSize: "0.8rem" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5">
          <p
            className="font-body text-white/40 text-center"
            style={{ fontSize: "0.8rem" }}
          >
            2026 SafeRides. Operated by Coetzee Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
