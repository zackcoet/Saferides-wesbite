import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Drive", href: "#drive" },
];

// Replace with real contact email
const CONTACT_EMAIL = "hello@saferidesapp.com";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-[#E4EAF8]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-[#1740A6] font-bold text-lg tracking-tight">
            Saferides
          </span>
          <p className="text-[#0D1B4B]/45 text-sm leading-relaxed max-w-[240px]">
            Student rideshare at the University of South Carolina.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-[#0D1B4B]/45 hover:text-[#1740A6] transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex gap-12 sm:gap-16">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm text-[#0D1B4B]/60 hover:text-[#1740A6] transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/privacy"
              className="text-sm text-[#0D1B4B]/60 hover:text-[#1740A6] transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-[#0D1B4B]/60 hover:text-[#1740A6] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4EAF8]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5">
          <p className="text-xs text-[#0D1B4B]/35">
            &copy; 2026 Coetzee Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
