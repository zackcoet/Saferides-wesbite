const STEPS = [
  {
    num: "01",
    title: "Request a ride",
    body: "Open the app, set your pickup and drop-off on or around campus.",
  },
  {
    num: "02",
    title: "Match with a verified driver",
    body: "Get paired with a student driver, see their car and ETA.",
  },
  {
    num: "03",
    title: "Confirm with your pickup code",
    body: "Share your code so you only get in the right car. Ride home.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F3F5FC] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D1B4B] mb-16 sm:mb-20">
          How it works
        </h2>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              <span className="block text-6xl font-bold leading-none text-[#1740A6]/18 tabular-nums">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-[#0D1B4B]">{step.title}</h3>
              <p className="text-[#0D1B4B]/60 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
