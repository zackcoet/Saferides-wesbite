import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const REASONS = [
  {
    title: "Pick your hours",
    body: "Drive between classes, on weekends, on game days — whenever works for you. You are never locked into a shift. Open the app when you want to drive, go offline when you are done.",
  },
  {
    title: "Stay on campus",
    body: "SafeRides is geofenced to your campus zone. You are not driving across town at 2am — you are picking up students you actually go to school with, within a zone you know.",
  },
  {
    title: "Bonuses and incentives",
    body: "High-demand periods, game days, and campus events come with driver bonuses. The more active you are, the more opportunities you unlock. Incentives are built into the platform.",
  },
  {
    title: "A community, not a gig",
    body: "You are not a contractor for a faceless app. You are driving people from your school, to places you know, on a platform built for your campus. It actually feels different.",
  },
];

const REQUIRED = [
  "Valid driver's license",
  "Active auto insurance",
  "A reliable vehicle in good condition",
  "Smartphone (iOS or Android)",
  "Must be 18 or older",
];

const NICE_TO_HAVE = [
  "Student at a SafeRides campus (preferred but not required)",
  "Clean driving record",
  "Comfortable with a campus environment",
];

const STEPS = [
  {
    title: "Submit your info",
    body: "Download the driver app and submit your license, insurance, and vehicle details. The whole process happens in the app — no in-person appointments.",
  },
  {
    title: "Get verified",
    body: "We review your documents and verify your license and insurance. Most drivers are approved within 24 hours.",
  },
  {
    title: "Start driving",
    body: "Go online whenever you are ready. Accept rides on campus, complete trips, and earn. It is that straightforward.",
  },
];

function RequirementList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h3
        className="font-display font-bold text-[#1740A6]"
        style={{ fontSize: "1.125rem" }}
      >
        {heading}
      </h3>
      <div className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <p
            key={item}
            className="font-body text-[#1740A6]/75"
            style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
          >
            {"- "}
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function DriversPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#1740A6] pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1
              className="font-display font-black text-white"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.02 }}
            >
              Drive when you want. Earn on your terms.
            </h1>
            <p
              className="mt-6 font-body text-white/70"
              style={{ fontSize: "1.125rem", maxWidth: "520px", lineHeight: 1.6 }}
            >
              SafeRides drivers set their own schedule, work within a campus
              geofence, and earn flexible income between classes or on weekends.
              No application process. If you have a car and insurance, you can
              start.
            </p>
            <Link
              to="/apply"
              className="mt-9 inline-block rounded-[10px] bg-white px-7 py-3.5 font-display font-bold text-[#1740A6]"
            >
              Sign up to drive
            </Link>
          </div>
        </section>

        {/* Why drivers choose SafeRides */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              Built differently for drivers.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {REASONS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#1740A614] bg-white"
                  style={{ padding: "28px" }}
                >
                  <h3
                    className="font-display font-bold text-[#1740A6]"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2.5 font-body text-[#1740A6]/65"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-[#1740A608] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              Requirements.
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <RequirementList heading="Required" items={REQUIRED} />
              <RequirementList heading="Nice to have" items={NICE_TO_HAVE} />
            </div>
          </div>
        </section>

        {/* How it works for drivers */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              Three steps to your first ride.
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex flex-col gap-3">
                  <span
                    className="font-display font-black leading-none text-[#1740A6]/15 tabular-nums"
                    style={{ fontSize: "3rem" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display font-bold text-[#1740A6]"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-body text-[#1740A6]/65"
                    style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA band */}
        <section className="bg-[#1740A6] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
            <h2
              className="font-display font-black text-white"
              style={{ fontSize: "2.5rem", lineHeight: 1.05 }}
            >
              Ready to drive?
            </h2>
            <p
              className="mt-4 font-body text-white/70 mx-auto"
              style={{ fontSize: "1.0625rem", maxWidth: "440px", lineHeight: 1.6 }}
            >
              Join SafeRides drivers on campus. Set your own schedule and start
              earning.
            </p>
            <Link
              to="/apply"
              className="mt-8 inline-block rounded-[10px] bg-white px-7 py-3.5 font-display font-bold text-[#1740A6]"
            >
              Apply to drive
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
