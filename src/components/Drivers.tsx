const DRIVER_APP_STORE_URL = "https://apps.apple.com/app/id6751057062";

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
          No application. No interview. If you have a car and insurance, you can
          drive. Set your own hours, work when you want, and earn on your
          schedule.
        </p>

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
