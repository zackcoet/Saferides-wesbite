// Placeholder venue cards — replace DEAL_CARDS entries with real venue names, deal copy, and the early-access href before launch

const DEAL_CARDS = [
  {
    venue: "The Place",          // placeholder venue name
    deal: "Happy hour 9–11 pm · $2 off your ride", // placeholder deal copy
  },
  {
    venue: "On The House",       // placeholder venue name
    deal: "Live music tonight · Exclusive ride offer", // placeholder deal copy
  },
  {
    venue: "The Spot Bar",       // placeholder venue name
    deal: "College night · Free first drink deal", // placeholder deal copy
  },
  {
    venue: "Campus Social",      // placeholder venue name
    deal: "Late night menu · $3 off after midnight", // placeholder deal copy
  },
];

// Replace this href with the real early-access sign-up link
const EARLY_ACCESS_URL = "#";

export default function TrendingSpots() {
  return (
    <section id="trending" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D1B4B] mb-4">
          See where the night is going.
        </h2>
        <p className="mt-3 text-lg text-[#0D1B4B]/60 max-w-2xl mb-14 leading-relaxed">
          SafeRides surfaces trending spots and real-time deals near you — so you know where to go before you even open the app. Happy hours, cash-back offers, and live campus activity, all tied to your next ride.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEAL_CARDS.map((card) => (
            <div
              key={card.venue}
              className="rounded-2xl bg-white border border-[#E4EAF8] p-6 flex flex-col gap-3 shadow-[0_4px_24px_-4px_rgba(23,64,166,0.10)]"
            >
              <span className="inline-block rounded-full bg-[#EEF2FB] text-[#1740A6] text-[11px] font-semibold px-3 py-1 w-fit tracking-wide uppercase">
                Trending near you
              </span>
              <h3 className="text-lg font-bold text-[#0D1B4B]">{card.venue}</h3>
              <p className="text-sm text-[#0D1B4B]/60 leading-relaxed">{card.deal}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#EEF2FB] px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#1740A6] font-medium text-base leading-relaxed">
            Already live at the University of South Carolina.{" "}
            <span className="text-[#1740A6]/65 font-normal">Expanding to more campuses soon.</span>
          </p>
          <a
            href={EARLY_ACCESS_URL}
            className="flex-shrink-0 rounded-full bg-[#1740A6] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0F2F8C] transition-colors text-center"
          >
            Get early access
          </a>
        </div>
      </div>
    </section>
  );
}
