import { useState } from "react";

const INPUT_CLASS =
  "w-full rounded-[10px] border border-[#1740A6]/20 bg-white px-4 py-3 font-body text-[#1740A6] placeholder:text-[#1740A6]/50 outline-none focus:border-[#1740A6] transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export default function RequestSchool() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", school: "", email: "" });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement>,
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
      await addDoc(collection(db, "schoolRequests"), {
        name: form.name,
        school: form.school,
        email: form.email,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("School request submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="request-school" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          className="font-display font-black text-[#1740A6]"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.05 }}
        >
          Not at your school yet?
        </h2>
        <p
          className="mt-5 font-body text-[#1740A6]/65"
          style={{ fontSize: "1.125rem", maxWidth: "520px", lineHeight: 1.6 }}
        >
          SafeRides is expanding to Clemson, UGA, and University of Tennessee
          this fall. If your school is not on the list, request it. We read every
          submission.
        </p>

        <div
          className="mt-12 mx-auto bg-white rounded-2xl border border-[#1740A6]/20"
          style={{ padding: "36px", maxWidth: "480px" }}
        >
          {status === "success" ? (
            <p
              className="font-display font-bold text-[#1740A6] text-center"
              style={{ fontSize: "1.25rem" }}
            >
              Request received. We will be in touch.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                className={INPUT_CLASS}
                placeholder="Full name"
                required
                value={form.name}
                onChange={update("name")}
                disabled={status === "submitting"}
              />
              <input
                className={INPUT_CLASS}
                placeholder="School / University"
                required
                value={form.school}
                onChange={update("school")}
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
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-[10px] bg-[#1740A6] px-5 py-3.5 font-body font-semibold text-white disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Request SafeRides at my school"}
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
