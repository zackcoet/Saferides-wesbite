import { motion } from "framer-motion";
import PickupCode from "@/components/ui/PickupCode";

const CARDS = [
  {
    title: "Verified student drivers only",
    body: "Every driver passes identity verification and must hold an active .edu email at your university. No strangers. No exceptions.",
  },
  {
    title: "School email required to sign up",
    body: "You cannot create a SafeRides account without a verified university email. Every person on the platform is a real student.",
  },
  {
    title: "Pickup code, every single ride",
    body: "Before you get in, your driver reads your unique 4-digit code aloud. If the code does not match, you do not get in.",
    code: "4821",
  },
  {
    title: "Trusted contact feature",
    body: "Share your live trip with someone you trust. They see your route, your driver, and your ETA in real time. Someone always knows where you are.",
  },
  {
    title: "Gender-based ride options",
    body: "Riders can filter for drivers who match their gender preference. We built this in because we listened.",
  },
  {
    title: "Geofenced to campus",
    body: "Rides are confined to your campus zone. SafeRides does not take you across town — it gets you home safely within your world.",
  },
  {
    title: "You can actually look them up",
    body: "Your driver is a fellow student at your school. Same campus, same classes, same community. Not a stranger — a peer.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          className="font-display font-black text-[#1740A6]"
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.05 }}
        >
          We thought of everything. So you don't have to.
        </h2>
        <p
          className="mt-5 font-body text-[#1740A6]/65"
          style={{ fontSize: "1.125rem", maxWidth: "560px" }}
        >
          SafeRides was designed around one question: what would make a student
          actually feel safe getting in? Here is the answer.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1, ease: "easeOut" }}
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
              {card.code && (
                <div className="mt-4">
                  <PickupCode code={card.code} variant="blue" size="sm" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
