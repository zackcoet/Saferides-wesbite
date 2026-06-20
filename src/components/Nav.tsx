import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Safety", href: "#safety" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Businesses", href: "#for-businesses" },
  { label: "Drivers", href: "#drivers" },
];

const APP_STORE_URL = "https://apps.apple.com/app/id6750380495";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
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
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-colors duration-300 ${
        scrolled ? "border-b border-[#1740A614]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex h-16 items-center justify-between">
        <a
          href="/"
          className="font-display font-black tracking-tight text-[#1740A6] select-none"
          style={{ fontSize: "1.25rem" }}
        >
          SafeRides
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className="font-body font-medium text-[#1740A6]/65 hover:text-[#1740A6] transition-colors bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded-[8px] bg-[#1740A6] px-5 py-2 font-body font-semibold text-white"
        >
          Get the app
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-[#1740A6]"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex h-16 items-center justify-between px-5">
            <span
              className="font-display font-black tracking-tight text-[#1740A6]"
              style={{ fontSize: "1.25rem" }}
            >
              SafeRides
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-[#1740A6]"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="font-display font-bold text-2xl text-[#1740A6] bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full rounded-[8px] bg-[#1740A6] px-5 py-4 text-center font-body font-semibold text-white"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
