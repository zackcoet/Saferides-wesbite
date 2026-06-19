import { Link } from "react-router-dom";

export default function ForDrivers() {
  return (
    <section id="drive" className="bg-[#1740A6] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col md:flex-row md:items-end gap-10 md:gap-24">
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Drive with SafeRides.
          </h2>
          <p className="text-white/75 text-lg max-w-md leading-relaxed">
            You keep 100% of every fare. No platform cuts, no surprises. Set
            your own schedule and earn on your terms.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Link
            to="/apply"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-[#1740A6] hover:bg-white/92 transition-colors"
          >
            Become a driver
          </Link>
        </div>
      </div>
    </section>
  );
}
