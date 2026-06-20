import { motion } from "framer-motion";

const SPOTS = [
  { venue: "Loose Wheel", tag: "Happy hour until 9pm — $3 drafts" },
  { venue: "The Hub on Main", tag: "Live music tonight — student specials" },
  { venue: "Five Points Alley", tag: "Trending now — 24 riders headed here" },
];

export default function Trending() {
  return (
    <section id="trending" className="bg-[#1740A6] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p
              className="font-body font-semibold uppercase text-white/50"
              style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
            >
              Inside the app
            </p>
            <h2
              className="mt-4 font-display font-black text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.05 }}
            >
              SafeRides shows you what's worth going to.
            </h2>
            <p
              className="mt-5 font-body text-white/70"
              style={{ fontSize: "1rem", maxWidth: "520px", lineHeight: 1.6 }}
            >
              Before you decide where to go tonight, check what's trending on
              campus. Live deals, events, and the spots everyone is heading to —
              right inside the app.
            </p>
          </div>

          {/* Mock phone UI card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[380px] mx-auto md:ml-auto md:mr-0 bg-white"
            style={{ borderRadius: "24px", boxShadow: "0 32px 80px #1740A640" }}
          >
            <div style={{ padding: "24px" }}>
              <p
                className="font-display font-black text-[#1740A6]"
                style={{ fontSize: "1.25rem" }}
              >
                Trending tonight
              </p>
              <div className="mt-4">
                {SPOTS.map((spot, i) => (
                  <div key={spot.venue}>
                    {i > 0 && (
                      <div
                        style={{ borderTop: "1px solid #1740A608" }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex items-start gap-3 py-4">
                      <span
                        className="mt-1.5 flex-shrink-0 rounded-full"
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#1740A6",
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <p
                          className="font-display font-bold text-[#1740A6]"
                          style={{ fontSize: "1rem" }}
                        >
                          {spot.venue}
                        </p>
                        <p
                          className="mt-0.5 font-body font-medium text-[#1740A6]/60"
                          style={{ fontSize: "0.8125rem" }}
                        >
                          {spot.tag}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <p
          className="mt-12 font-body text-white/70 text-center mx-auto"
          style={{ fontSize: "1rem", maxWidth: "480px", lineHeight: 1.6 }}
        >
          Partner venues appear here. Students see your specials before they
          decide where to go — at exactly the right moment.
        </p>
      </div>
    </section>
  );
}
