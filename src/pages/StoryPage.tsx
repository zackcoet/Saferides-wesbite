// IMPORTANT: This page references a real 2019 safety incident. Review with legal/PR before making this page publicly indexed. Consider adding a noindex meta tag until that review is complete.

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function StoryPage() {
  useEffect(() => {
    document.title = "How SafeRides started — SafeRides";

    // noindex until legal/PR review is complete — remove once approved
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");

    return () => {
      const el = document.querySelector('meta[name="robots"]');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="mx-auto max-w-2xl px-5 sm:px-8 pt-28 pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1740A6] leading-tight mb-5">
          How SafeRides started.
        </h1>

        <p className="text-lg text-[#1740A6] font-medium mb-12 leading-relaxed">
          A safety incident. A question nobody had a good answer to. A platform built to fix it.
        </p>

        <div className="space-y-7 text-[#1740A6]/70 text-base sm:text-lg leading-relaxed">
          <p>
            In 2019, an attack near a major university campus put a spotlight on a question
            students had been quietly asking for years: are rideshares actually safe? After the
            incident, students at the University of South Carolina started talking — about who was
            behind the wheel, whether the platform had their back, and what it would take to feel
            genuinely secure getting a ride home at night.
          </p>
          <p>
            SafeRides was built as a direct response to that conversation. The idea was simple: a
            rideshare platform where every driver is a verified member of your own campus
            community. Not a stranger. Someone you can look up. Someone who is answered for by a
            real verification process.
          </p>
          <p>
            What started as one campus, one question, and a genuine need is now expanding across
            the country. Every feature SafeRides builds — the pickup code, the driver
            verification, the upfront fares — exists because of that original question. We
            have not forgotten it.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1740A6]/10">
          <Link
            to="/"
            className="text-sm font-semibold text-[#1740A6] hover:text-[#1740A6]/70 transition-colors"
          >
            Back to SafeRides
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
