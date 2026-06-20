import { useState } from "react";

const VALUE_PROPS = [
  {
    title: "Reach verified students",
    body: "Every user on SafeRides is a verified student at a local university. No bots, no tourists — just your target customer.",
  },
  {
    title: "Capture the decision moment",
    body: "Your deal appears on the trending page when students are deciding where to go tonight. Not a banner ad — a live recommendation.",
  },
  {
    title: "Track what's working",
    body: "See how many students are headed your way. Know which specials are driving traffic.",
  },
];

const VENUE_TYPES = ["Bar", "Restaurant", "Event Venue", "Festival", "Other"];

const INPUT_CLASS =
  "w-full rounded-[10px] border border-[#1740A6]/20 bg-white px-4 py-3 font-body text-[#1740A6] placeholder:text-[#1740A6]/50 outline-none focus:border-[#1740A6] transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export default function ForBusinesses() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    location: "",
    venueType: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

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
        location: form.location,
        venueType: form.venueType,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Business lead submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="for-businesses" className="bg-[#1740A608] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p
          className="font-body font-semibold uppercase text-[#1740A6]/50"
          style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
        >
          For venues and partners
        </p>
        <h2
          className="mt-4 font-display font-black text-[#1740A6]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, maxWidth: "680px" }}
        >
          Put your business in front of students at the moment they decide where
          to go.
        </h2>
        <p
          className="mt-5 font-body text-[#1740A6]/65"
          style={{ fontSize: "1.125rem", maxWidth: "560px", lineHeight: 1.6 }}
        >
          SafeRides partners appear as trending destinations inside the app.
          Students see your specials, your events, and your location — before
          they even open a maps app.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {VALUE_PROPS.map((vp) => (
            <div key={vp.title}>
              <h3
                className="font-display font-bold text-[#1740A6]"
                style={{ fontSize: "1rem" }}
              >
                {vp.title}
              </h3>
              <p
                className="mt-2 font-body text-[#1740A6]/65"
                style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
              >
                {vp.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 mx-auto bg-white rounded-2xl"
          style={{ padding: "40px", maxWidth: "560px" }}
        >
          {status === "success" ? (
            <p
              className="font-display font-bold text-[#1740A6] text-center"
              style={{ fontSize: "1.375rem" }}
            >
              We will be in touch. Welcome to SafeRides.
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
                placeholder="Location (city)"
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

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-[10px] bg-[#1740A6] px-5 py-3.5 font-body font-semibold text-white disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit interest"}
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
  );
}
