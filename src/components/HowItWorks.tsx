const STEPS = [
  {
    num: "01",
    title: "Open the app",
    body: "Set your pickup and drop-off. See your fare upfront before you book anything.",
  },
  {
    num: "02",
    title: "Get matched",
    body: "A verified student driver at your university accepts your ride. You see their name, photo, and car.",
  },
  {
    num: "03",
    title: "Confirm and ride",
    body: "When your driver arrives share your pickup code. Confirmed match. Safe ride.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1740A6]/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1740A6] mb-16 sm:mb-20">
          How it works.
        </h2>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              <span className="block text-6xl font-bold leading-none text-[#1740A6]/25 tabular-nums">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-[#1740A6]">{step.title}</h3>
              <p className="text-[#1740A6]/70 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
