import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6750380495";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center pt-24 pb-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-body font-semibold uppercase text-[#1740A6]/50"
            style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
          >
            Student-only rideshare. Now at USC Columbia.
          </motion.p>

          <h1
            className="mt-6 font-display font-black text-[#1740A6]"
            style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", lineHeight: 1.0 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            >
              The campus ride
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            >
              built for you.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-6 font-body text-[#1740A6]/65 mx-auto md:mx-0"
            style={{ fontSize: "1.125rem", maxWidth: "480px" }}
          >
            Verified student drivers. A pickup code every ride. Zero platform
            fees. SafeRides was built for campus life — not adapted for it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-[#1740A6] px-7 py-3.5 font-body font-semibold text-white"
            >
              Download on the App Store
            </a>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="rounded-[10px] border border-[#1740A6] bg-white px-7 py-3.5 font-body font-semibold text-[#1740A6] cursor-pointer"
            >
              See how it works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
