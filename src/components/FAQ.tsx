import { useState } from "react";

const FAQS = [
  {
    q: "What is SafeRides?",
    a: "SafeRides is a student rideshare platform built for college campuses. Every driver is a verified student, every fare is upfront, and every ride uses a pickup code so you always get in the right car.",
  },
  {
    q: "How are drivers verified?",
    a: "Drivers go through a review process before they can accept rides. You will always be able to see your driver's name and car before they arrive.",
  },
  {
    q: "What is a pickup code?",
    a: "Every ride generates a unique code. When your driver arrives, you share the code with them. If it does not match, you do not get in. It is one of the simplest ways to make sure you are in the right car.",
  },
  {
    q: "What campuses is SafeRides available on?",
    a: "SafeRides launched at the University of South Carolina in Columbia, SC. We are expanding to more campuses soon.",
  },
  {
    q: "Is SafeRides on Android?",
    a: "Currently iOS only. Android is on the roadmap.",
  },
  {
    q: "How do I become a driver?",
    a: 'Tap "Become a driver" in the app or visit the Drive section on this site to apply.',
  },
  {
    q: "What does SafeRides cost?",
    a: "Fares are shown upfront before you book — no surprise charges.",
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
    <section id="faq" className="bg-[#F3F5FC] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D1B4B] mb-14 sm:mb-16">
          Questions.
        </h2>

        <div className="flex flex-col divide-y divide-[#E4EAF8]">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-6 group cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-base sm:text-lg font-semibold text-[#1740A6] group-hover:text-[#0F2F8C] transition-colors">
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-[#1740A6]">
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              {open === i && (
                <div className="pb-6">
                  <p className="text-[#0D1B4B]/65 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
