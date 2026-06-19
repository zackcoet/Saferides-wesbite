const APP_STORE_URL = "https://apps.apple.com/app/id6751057062";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Hero photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-collegiate.png')" }}
        aria-hidden="true"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#1740A6]/55" aria-hidden="true" />

      {/* Film grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pb-20 sm:pb-28 pt-32">
        <p className="mb-6 text-white/50 text-xs font-medium tracking-widest uppercase">
          Now at the University of South Carolina
        </p>

        <h1 className="text-[clamp(3.25rem,9.5vw,8rem)] font-bold leading-[0.92] tracking-tight text-white">
          The safer ride home.
        </h1>

        <p className="mt-7 max-w-lg text-lg sm:text-xl text-white/85 font-normal leading-relaxed">
          SafeRides is a student-only rideshare platform. Every driver is a
          verified student at your university. Available at USC Columbia.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1740A6] hover:bg-white/90 transition-colors"
          >
            Get the app
          </a>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            How it works
          </button>
        </div>
      </div>
    </section>
  );
}
