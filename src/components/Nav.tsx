import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Drive", href: "#drive" },
];

const APP_STORE_URL = "https://apps.apple.com/app/id6751057062";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_#e5e7eb]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex h-16 items-center justify-between">
        <a
          href="/"
          className="text-[#1740A6] font-bold text-xl tracking-tight select-none"
        >
          Saferides
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className="text-sm font-medium text-[#0D1B4B] hover:text-[#1740A6] transition-colors bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-[#1740A6] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0F2F8C] transition-colors"
          >
            Get the app
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[#0D1B4B]"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className="text-left text-base font-medium text-[#0D1B4B] hover:text-[#1740A6] bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#1740A6] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get the app
          </a>
        </div>
      )}
    </header>
  );
}
