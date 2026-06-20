import { useState } from "react";

const FAQS = [
  {
    q: "What is SafeRides?",
    a: "SafeRides is a student-only rideshare platform built for college campuses. Every driver is a verified student at your university. Every fare is shown upfront. Every ride uses a pickup code so you always get in the right car.",
  },
  {
    q: "How are drivers verified?",
    a: "Every driver goes through a review and approval process before they can accept a single ride. You will always see your driver's name, photo, and car before they arrive.",
  },
  {
    q: "What is the pickup code?",
    a: "When you book a ride a unique code is generated. When your driver arrives you share the code with them. If it matches, you get in. If it does not match, you do not get in. It is the simplest way to make sure you are always in the right car.",
  },
  {
    q: "How much does SafeRides cost?",
    a: "Fares are shown upfront before you book. There are no platform fees, no surge pricing, and no hidden charges. What you see is what you pay.",
  },
  {
    q: "What campuses is SafeRides on?",
    a: "SafeRides is live at the University of South Carolina in Columbia, SC. We are launching at Clemson, UGA, and University of Tennessee in Fall 2026.",
  },
  {
    q: "How do I become a driver?",
    a: "Tap Drive in the app or hit Become a Driver on this page to apply. You set your own hours and keep 100% of every fare.",
  },
];

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#1740A6]/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1740A6] mb-14 sm:mb-16">
          Questions.
        </h2>

        <div className="flex flex-col divide-y divide-[#1740A6]/10">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-6 group cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-base sm:text-lg font-semibold text-[#1740A6] group-hover:text-[#1740A6]/70 transition-colors">
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-[#1740A6]">
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              {open === i && (
                <div className="pb-6">
                  <p className="text-[#1740A6]/70 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
