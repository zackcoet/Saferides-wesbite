import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Campus Representative",
    body: "Represent SafeRides on your campus. Recruit riders and drivers, grow the community, and earn from a monthly performance pool.",
  },
  {
    title: "Marketing Manager",
    body: "Own our social media across campuses. Create short-form content and grow the SafeRides presence as we expand.",
  },
  {
    title: "Intern",
    body: "Work directly with the founding team. Get hands-on startup experience building something students actually use.",
  },
];

export default function JoinTheTeam() {
  return (
    <section id="careers" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          className="font-display font-black text-[#1740A6]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
        >
          Join the SafeRides team.
        </h2>
        <p
          className="mt-5 font-body text-[#1740A6]/65"
          style={{ fontSize: "1.125rem", maxWidth: "560px", lineHeight: 1.6 }}
        >
          We are building SafeRides from the ground up and hiring students to
          help. Get in early as a campus representative, marketing manager, or
          intern.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-[#1740A614] bg-white"
              style={{ padding: "28px" }}
            >
              <h3
                className="font-display font-bold text-[#1740A6]"
                style={{ fontSize: "1.125rem" }}
              >
                {role.title}
              </h3>
              <p
                className="mt-2.5 font-body text-[#1740A6]/65"
                style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
              >
                {role.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/apply"
            className="inline-block rounded-[10px] bg-[#1740A6] px-7 py-3.5 font-body font-semibold text-white"
          >
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
}
