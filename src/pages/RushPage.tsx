import { useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const APP_STORE_URL = "https://apps.apple.com/app/id6750380495";

/* ---------------------------------------------------------------------- */
/* Icons — simple line-art SVGs, no emojis, royal-blue only.               */
/* ---------------------------------------------------------------------- */

function IconBadge() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  );
}

function IconToggle() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <circle cx="16" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12.6 4.9a3.3 3.3 0 0 1 4.7 4.7L15.7 11" />
      <path d="M13 17.5 11.4 19.1a3.3 3.3 0 0 1-4.7-4.7L8.3 13" />
    </svg>
  );
}

function IconMatch() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="12" r="3" />
      <path d="M10 12h4" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 16v-2.5L6 9h12l2 4.5V16" />
      <path d="M4 16h16" />
      <circle cx="8" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconZero() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 8.5 15.5 15.5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5 5 6v5.5c0 4.1 2.9 7.4 7 8.5 4.1-1.1 7-4.4 7-8.5V6l-7-2.5Z" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
      <path d="M7 5H4v1a4 4 0 0 0 4 4" />
      <path d="M17 5h3v1a4 4 0 0 1-4 4" />
      <path d="M12 13v3" />
      <path d="M9 20h6" />
      <path d="M10 16.5h4l.6 3.5H9.4l.6-3.5Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Animated flow — icon sequence, not app screenshots.                    */
/* ---------------------------------------------------------------------- */

const FLOW_STEPS = [
  { icon: IconBadge, label: "Brother sets his affiliation", sub: "In signup or his profile" },
  { icon: IconToggle, label: "Goes online for PNM Pickup", sub: "During his chapter's rush window" },
  { icon: IconLink, label: "PNM taps the chapter link", sub: "Signs up in seconds if new" },
  { icon: IconMatch, label: "Free ride is matched", sub: "$0.00 — no card needed" },
  { icon: IconCar, label: "Brother picks up the PNM", sub: "A real brother, same chapter" },
];

function RushFlowAnimation() {
  return (
    <div className="rounded-2xl border border-[#1740A614] bg-white p-6 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4">
        {FLOW_STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 flex-1 min-w-0">
              <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 md:text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.12, ease: "easeOut" }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1740A60F] text-[#1740A6]"
                >
                  <Icon />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.08, ease: "easeOut" }}
                >
                  <p
                    className="font-display font-bold text-[#1740A6]"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.3 }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="mt-1 font-body text-[#1740A6]/55"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {step.sub}
                  </p>
                </motion.div>
              </div>

              {i < FLOW_STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.35, delay: i * 0.12 + 0.16, ease: "easeOut" }}
                  className="hidden md:block h-px bg-[#1740A61F] flex-1 mt-7"
                  style={{ transformOrigin: "left" }}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

function StepCard({
  icon: Icon,
  title,
  body,
}: {
  icon: () => JSX.Element;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[#1740A614] bg-white p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1740A60F] text-[#1740A6]">
        <Icon />
      </div>
      <h3
        className="mt-5 font-display font-bold text-[#1740A6]"
        style={{ fontSize: "1.125rem" }}
      >
        {title}
      </h3>
      <p
        className="mt-2.5 font-body text-[#1740A6]/65"
        style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
      >
        {body}
      </p>
    </div>
  );
}

export default function RushPage() {
  useEffect(() => {
    document.title = "PNM Rides & Rush Mode - SafeRides";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#1740A6] pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p
              className="font-body font-semibold uppercase text-white/50"
              style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
            >
              For fraternities and PNMs
            </p>
            <h1
              className="mt-5 font-display font-black text-white"
              style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)", lineHeight: 1.03 }}
            >
              Free, safe rides for PNMs — driven by their own brothers.
            </h1>
            <p
              className="mt-6 font-body text-white/70"
              style={{ fontSize: "1.125rem", maxWidth: "560px", lineHeight: 1.6 }}
            >
              During rush week, SafeRides lets any brother give a PNM a free
              ride — no cost to the PNM, no cost to the chapter. Here is
              exactly how it works, for both sides.
            </p>
          </div>
        </section>

        {/* For the chapter */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <span
              className="font-body font-semibold uppercase text-[#1740A6]/40"
              style={{ fontSize: "0.75rem", letterSpacing: "0.14em" }}
            >
              Before rush
            </span>
            <h2
              className="mt-3 font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              For the chapter: setup takes a minute.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <StepCard
                icon={IconBadge}
                title="Set your affiliation"
                body="A brother sets his fraternity affiliation himself — during signup, or anytime later in his profile. There is no approval wait. It takes effect immediately."
              />
              <StepCard
                icon={IconShield}
                title="Connect a payout account"
                body="To drive, a brother needs a connected payout account, same as any SafeRides driver. That also means he is ready to earn on normal rides afterward, not just during rush."
              />
            </div>
          </div>
        </section>

        {/* Going online during rush */}
        <section className="bg-[#1740A608] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <span
              className="font-body font-semibold uppercase text-[#1740A6]/40"
              style={{ fontSize: "0.75rem", letterSpacing: "0.14em" }}
            >
              During rush
            </span>
            <h2
              className="mt-3 font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              Going online during rush.
            </h2>
            <p
              className="mt-5 font-body text-[#1740A6]/65"
              style={{ fontSize: "1.0625rem", maxWidth: "640px", lineHeight: 1.65 }}
            >
              When a brother goes online during his chapter's active rush
              period, he gets a real choice: drive normally, or go online
              specifically for{" "}
              <span className="font-semibold text-[#1740A6]">
                "[His Fraternity] PNM Pickup."
              </span>{" "}
              If his chapter's rush window is not currently active, this
              option simply does not appear — no confusion, no error.
            </p>
          </div>
        </section>

        {/* Animated flow */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6] text-center"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              The whole flow, at a glance.
            </h2>
            <div className="mt-12">
              <RushFlowAnimation />
            </div>
          </div>
        </section>

        {/* The PNM experience */}
        <section className="bg-[#1740A608] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <span
              className="font-body font-semibold uppercase text-[#1740A6]/40"
              style={{ fontSize: "0.75rem", letterSpacing: "0.14em" }}
            >
              For the PNM
            </span>
            <h2
              className="mt-3 font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              What the PNM sees.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <StepCard
                icon={IconLink}
                title="One tap to start"
                body="The PNM taps the unique link their chapter shares with them. If they do not have the app yet, it takes them straight to a quick signup — no separate download hunt."
              />
              <StepCard
                icon={IconZero}
                title="Genuinely free"
                body="Once in, requesting a ride shows $0.00. There is no payment screen and no card required. This ride does not cost the PNM anything."
              />
              <StepCard
                icon={IconMatch}
                title="Picked up by a real brother"
                body="A real brother from that specific chapter picks them up. While in this mode, brothers only receive their own chapter's rush requests — nothing else."
              />
              <StepCard
                icon={IconShield}
                title="If no brothers are online"
                body="The PNM sees a clear message right away, not a long fake wait, and can request a normal paid ride instead if they need one."
              />
            </div>
          </div>
        </section>

        {/* Exclusivity */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-2xl border border-[#1740A614] p-8 sm:p-12">
              <h2
                className="font-display font-black text-[#1740A6]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.1 }}
              >
                Exclusive to each chapter.
              </h2>
              <p
                className="mt-4 font-body text-[#1740A6]/65"
                style={{ fontSize: "1rem", maxWidth: "700px", lineHeight: 1.65 }}
              >
                While a brother is in PNM mode, he only sees rides from his
                own chapter's PNMs — never other chapters, never normal
                rides. This keeps rush rides genuinely exclusive to each
                chapter, every time.
              </p>
            </div>
          </div>
        </section>

        {/* The incentive */}
        <section className="bg-[#1740A6] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <IconTrophy />
              </div>
              <h2
                className="mt-6 font-display font-black text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
              >
                $1,000 tab for the top chapter.
              </h2>
              <p
                className="mt-5 font-body text-white/70 mx-auto"
                style={{ fontSize: "1.0625rem", maxWidth: "600px", lineHeight: 1.65 }}
              >
                The fraternity with the most completed rides during the rush
                period wins a $1,000 bar or food tab. It is a real, live
                competition — every completed PNM ride during rush counts
                toward your chapter's total.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block rounded-[10px] bg-white px-7 py-3.5 font-display font-bold text-[#1740A6]"
              >
                Get the app
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
