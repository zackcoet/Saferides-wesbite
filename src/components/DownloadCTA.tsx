const APP_STORE_URL = "https://apps.apple.com/app/id6750380495";

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function DownloadCTA() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-[#1740A6]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.75rem,7vw,6.5rem)] font-bold text-[#1740A6] leading-[0.95] tracking-tight mb-5">
          Your safer ride starts here.
        </h2>

        <p className="text-lg sm:text-xl text-[#1740A6]/70 leading-relaxed mb-10">
          Student-only. Verified drivers. Pickup code every ride.
        </p>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#1740A6] px-8 py-4 text-white font-semibold text-base hover:bg-[#1740A6]/90 transition-colors"
        >
          <AppleIcon />
          Download on the App Store
        </a>

        <img
          src="/phone-mockup.png"
          alt="SafeRides app"
          className="mt-16 w-full max-w-xs rounded-[2.5rem] object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
