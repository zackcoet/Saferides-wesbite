const DRIVER_APP_STORE_URL = "https://apps.apple.com/app/id6751057062";

const STATS = [
  { value: "100%", label: "of every fare goes to you" },
  { value: "0", label: "platform fees, ever" },
  { value: "You", label: "set your own hours" },
];

export default function Drivers() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="drivers" className="bg-[#1740A6] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          className="font-display font-black text-white"
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Drive your campus. Keep everything you earn.
        </h2>
        <p
          className="mt-5 font-body text-white/70"
          style={{ fontSize: "1.125rem", maxWidth: "500px", lineHeight: 1.6 }}
        >
          Set your own schedule. Drive between classes or on weekends. SafeRides
          takes zero platform fees — every dollar a rider pays goes directly to
          you.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-display font-black text-white leading-none"
                style={{ fontSize: "3.5rem" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 font-body font-medium text-white/65"
                style={{ fontSize: "1rem" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={DRIVER_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-white px-7 py-3.5 font-display font-bold text-[#1740A6]"
          >
            Become a driver
          </a>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="rounded-[10px] border border-white bg-transparent px-7 py-3.5 font-display font-bold text-white cursor-pointer"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
