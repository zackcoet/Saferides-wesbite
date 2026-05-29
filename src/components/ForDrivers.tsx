// Replace DRIVER_SIGNUP_URL with the real driver onboarding link when ready
const DRIVER_SIGNUP_URL = "#";

export default function ForDrivers() {
  return (
    <section id="drive" className="bg-[#1740A6] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col md:flex-row md:items-end gap-10 md:gap-24">
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Drive with Saferides.
          </h2>
          <p className="text-white/75 text-lg max-w-md leading-relaxed">
            Earn by giving rides to your fellow students. Set your own hours
            and drive when it works for you.
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={DRIVER_SIGNUP_URL}
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-[#1740A6] hover:bg-white/92 transition-colors"
          >
            Become a driver
          </a>
        </div>
      </div>
    </section>
  );
}
