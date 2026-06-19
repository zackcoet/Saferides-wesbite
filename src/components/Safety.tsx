const PILLARS = [
  {
    title: "Verified student drivers",
    body: "Every driver on SafeRides is a verified student at your university. No strangers. No randos. Students you share a campus with.",
  },
  {
    title: "Pickup code, every ride",
    body: "Every ride generates a unique code. When your driver arrives you confirm the code before you get in. If it does not match, you do not get in.",
  },
  {
    title: "Zero platform fees",
    body: "Drivers keep 100% of every fare. No surge pricing, no hidden fees. What you see is what you pay.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1740A6] mb-16 sm:mb-20 max-w-3xl leading-tight">
          Safety is not a feature. It is the product.
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[#1740A6]/15 bg-white p-8 sm:p-10"
            >
              <div className="mb-5 h-1.5 w-8 rounded-full bg-[#1740A6]" />
              <h3 className="text-xl font-bold text-[#1740A6] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-[#1740A6]/70 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
