const FEATURES = [
  {
    title: "Verified student drivers",
    body: "Drivers are reviewed before they ever pick you up.",
  },
  {
    title: "Pickup code, every ride",
    body: "A unique code confirms you're getting in the correct car.",
  },
  {
    title: "Upfront fares",
    body: "See the price before you book. No surprise charges.",
  },
  {
    title: "Built for campus",
    body: "Made for getting around the University of South Carolina and back home safely.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D1B4B] mb-16 sm:mb-20">
          Built different.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#E4EAF8] bg-[#F6F8FE] p-8 sm:p-10"
            >
              <div className="mb-5 h-1.5 w-8 rounded-full bg-[#1740A6]" />
              <h3 className="text-xl font-bold text-[#0D1B4B] mb-2.5">
                {f.title}
              </h3>
              <p className="text-[#0D1B4B]/60 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
