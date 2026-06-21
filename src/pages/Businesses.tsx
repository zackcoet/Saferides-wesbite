import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const STEPS = [
  {
    title: "You sign up",
    body: "Tell us about your business — your location, your venue type, and what you want to offer students. We review every application and reach out directly.",
  },
  {
    title: "We build your deal",
    body: "We work with you to set up your offer — a drink special, an event promotion, a student discount, whatever makes sense for your venue. You decide what you want to push.",
  },
  {
    title: "Students see you first",
    body: "Your venue appears on the SafeRides trending page inside the app. Students see your deal before they decide where to go tonight. You get foot traffic at the moment of decision.",
  },
];

const BENEFITS = [
  {
    title: "Featured on the trending page",
    body: "Your business appears as a trending destination inside the SafeRides app. Students browsing where to go tonight see your name, your deal, and your location — before they open Google Maps.",
  },
  {
    title: "Verified student customers",
    body: "Every SafeRides user is a verified student at a local university. No bots, no randoms — just your target customer, headed your way.",
  },
  {
    title: "Push specials and events",
    body: "Running a happy hour? Hosting a block party? Promoting a drink special? We push it to students on the app at the right time. You control what you promote.",
  },
  {
    title: "Capture the decision moment",
    body: "Students decide where to go while they are already on SafeRides. Your venue is in front of them at exactly that moment — not hours later in a banner ad they scroll past.",
  },
];

const VENUE_TAGS = [
  "Bars",
  "Restaurants",
  "Music Venues",
  "Event Organizers",
  "Block Parties",
  "Festivals",
  "Sports Bars",
  "Coffee Shops",
  "Food Trucks",
];

const VENUE_TYPES = [
  "Bar",
  "Restaurant",
  "Music Venue",
  "Event Venue",
  "Festival",
  "Food Truck",
  "Other",
];

const INPUT_CLASS =
  "w-full rounded-[10px] border border-[#1740A6]/20 bg-white px-4 py-3 font-body text-[#1740A6] placeholder:text-[#1740A6]/50 outline-none focus:border-[#1740A6] transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export default function Businesses() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    venueType: "",
    offer: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const scrollToForm = () => {
    const el = document.getElementById("partner-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Load Firebase on demand so it stays out of the landing-page bundle.
      const { db } = await import("@/lib/firebase");
      const { addDoc, collection, serverTimestamp } = await import(
        "firebase/firestore"
      );
      await addDoc(collection(db, "businessLeads"), {
        businessName: form.businessName,
        contactName: form.contactName,
        email: form.email,
        phone: form.phone,
        location: form.location,
        venueType: form.venueType,
        offer: form.offer,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Business partnership submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.02 }}
            >
              Put your business in front of every student going out tonight.
            </h1>
            <p
              className="mt-6 font-body text-[#1740A6]/65"
              style={{ fontSize: "1.125rem", maxWidth: "560px", lineHeight: 1.6 }}
            >
              SafeRides is the campus rideshare students use to get to your door.
              Partner with us and appear as a featured destination — with your
              specials, your events, and your deals shown to students at the
              exact moment they decide where to go.
            </p>
            <button
              onClick={scrollToForm}
              className="mt-9 rounded-[10px] bg-[#1740A6] px-7 py-3.5 font-body font-semibold text-white cursor-pointer"
            >
              Apply for a partnership
            </button>
          </div>
        </section>

        {/* How the partnership works */}
        <section className="bg-[#1740A608] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              Here is how it works.
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

        {/* What you get */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              What being a SafeRides partner looks like.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {BENEFITS.map((card) => (
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

        {/* Who this is for */}
        <section className="bg-[#1740A608] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              Built for venues of all sizes.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {VENUE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#1740A6]/20 bg-white font-body font-medium text-[#1740A6]"
                  style={{ padding: "8px 20px", fontSize: "0.9rem" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              className="mt-8 font-body text-[#1740A6]/65"
              style={{ fontSize: "1rem", maxWidth: "560px", lineHeight: 1.6 }}
            >
              If you are near a campus where SafeRides operates and you want
              verified student foot traffic, we want to work with you. We are
              live at USC Columbia and expanding to Clemson, UGA, and University
              of Tennessee this fall.
            </p>
          </div>
        </section>

        {/* Partnership interest form */}
        <section id="partner-form" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              className="font-display font-black text-[#1740A6] text-center"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
            >
              Apply for a partnership.
            </h2>

            <div
              className="mt-12 mx-auto bg-white rounded-2xl border border-[#1740A6]/20"
              style={{ padding: "40px", maxWidth: "580px" }}
            >
              {status === "success" ? (
                <p
                  className="font-display font-bold text-[#1740A6] text-center"
                  style={{ fontSize: "1.25rem" }}
                >
                  Application received. We will reach out within 48 hours.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <input
                    className={INPUT_CLASS}
                    placeholder="Business name"
                    required
                    value={form.businessName}
                    onChange={update("businessName")}
                    disabled={status === "submitting"}
                  />
                  <input
                    className={INPUT_CLASS}
                    placeholder="Contact name"
                    required
                    value={form.contactName}
                    onChange={update("contactName")}
                    disabled={status === "submitting"}
                  />
                  <input
                    className={INPUT_CLASS}
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    disabled={status === "submitting"}
                  />
                  <input
                    className={INPUT_CLASS}
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    disabled={status === "submitting"}
                  />
                  <input
                    className={INPUT_CLASS}
                    placeholder="City / Location"
                    required
                    value={form.location}
                    onChange={update("location")}
                    disabled={status === "submitting"}
                  />
                  <select
                    className={INPUT_CLASS}
                    required
                    value={form.venueType}
                    onChange={update("venueType")}
                    disabled={status === "submitting"}
                  >
                    <option value="" disabled>
                      Venue type
                    </option>
                    {VENUE_TYPES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <textarea
                    className={`${INPUT_CLASS} min-h-[110px] resize-y`}
                    placeholder="Example: $3 drafts on Thursdays, free entry before 10pm, student discount on food..."
                    value={form.offer}
                    onChange={update("offer")}
                    disabled={status === "submitting"}
                  />

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-[10px] bg-[#1740A6] px-5 py-3.5 font-body font-semibold text-white disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Submitting..."
                      : "Submit partnership application"}
                  </button>

                  {status === "error" && (
                    <p
                      className="font-body text-[#1740A6]"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
