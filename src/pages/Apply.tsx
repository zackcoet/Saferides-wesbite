import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

type Role = {
  title: string;
  badge: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  compensation?: string;
};

const ROLES: Role[] = [
  {
    title: "Campus Representative",
    badge: "Part Time | Commission Based | Flexible Hours",
    description:
      "As a Campus Representative you are the boots on the ground for SafeRides at your university. Your job is simple — get as many students signed up as riders and drivers as possible. The more people you bring to the platform the more you earn. Every month a set pool of money is distributed among all campus reps based on performance. The harder you work the bigger your cut. Top performers earn the opportunity to move into a paid Intern role.",
    responsibilities: [
      "Recruit students to sign up as riders and drivers on the SafeRides platform",
      "Spread awareness of SafeRides on campus through word of mouth and grassroots outreach",
      "Compete monthly for your share of the performance pool",
    ],
    requirements: [
      "Currently enrolled at a SafeRides partner university",
      ".edu email address",
      "Self motivated with strong people skills",
      "No set schedule required",
    ],
    compensation:
      "Monthly performance pool — your earnings grow with your results",
  },
  {
    title: "Intern",
    badge: "Part Time | $10-15/hr | In Person | Car Required",
    description:
      "Join the SafeRides team as a paid Intern and work directly with the founding team to grow the platform on the ground. This is a hands on role where you will be building SafeRides presence across campus and in the local community on your own schedule.",
    responsibilities: [
      "Distribute and post promotional materials across campus",
      "Drive for SafeRides on a flexible schedule of your choosing",
      "Build relationships with local venues and businesses on behalf of SafeRides",
      "Support campus growth operations directly with the founding team",
    ],
    requirements: [
      "Currently enrolled at or recently graduated from a university",
      "Valid drivers license and personal vehicle",
      "Strong communication and interpersonal skills",
      "Available at least two days per week",
    ],
    compensation: "$10-15/hr for all hours worked",
  },
  {
    title: "Marketing Manager",
    badge: "Part Time | $15-25/hr | Remote or In Person",
    description:
      "SafeRides is looking for a creative and driven Marketing Manager to own our social media presence across multiple university campuses. You will be responsible for creating content that resonates with college students and managing campus-specific Instagram accounts as we expand nationally.",
    responsibilities: [
      "Create short form video content for TikTok, Instagram Reels, and YouTube Shorts",
      "Manage and grow individual Instagram accounts for each SafeRides campus",
      "Develop content strategies tailored to each university's culture and audience",
      "Stay ahead of trends and bring fresh creative ideas to the team",
    ],
    requirements: [
      "Proven ability to create engaging short form video content",
      "Experience managing social media accounts",
      "Strong understanding of college student culture",
      "Ability to work independently and deliver content consistently",
    ],
    compensation: "$15-25/hr based on experience | Remote or In Person",
  },
  {
    title: "Motion Designer",
    badge: "Part Time | Remote | Portfolio Based",
    description:
      "SafeRides is looking for a student motion designer to create short-form video content, animations, and marketing visuals for social media. You will design and animate content that shows what SafeRides looks like on campus — reels, ads, motion graphics, and anything that stops a scroll. Ideal candidate knows After Effects, Premiere, or CapCut, has a portfolio or examples to share, and understands what performs on TikTok and Instagram. No formal experience required — show us your work.",
  },
];

export default function Apply() {
  useEffect(() => {
    document.title = "Apply - Join the SafeRides Team";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#1740A6] pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-white">
              Join the SafeRides Team
            </h1>
            <p className="mt-6 max-w-lg text-lg sm:text-xl text-white/85 leading-relaxed">
              Help us build the future of campus transportation. We are looking
              for students who want to grow SafeRides from the ground up.
            </p>
          </div>
        </section>

        {/* Role cards — stacked in a single column so the full descriptions stay readable */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="flex flex-col gap-8">
              {ROLES.map((role) => (
                <article
                  key={role.title}
                  className="rounded-2xl border border-[#1740A6]/15 bg-white p-8 sm:p-10"
                >
                  <span className="inline-block rounded-full bg-[#1740A6]/8 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#1740A6]">
                    {role.badge}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-[#1740A6]">
                    {role.title}
                  </h2>

                  <p className="mt-4 text-[#1740A6]/70 leading-relaxed">
                    {role.description}
                  </p>

                  {role.responsibilities && (
                    <>
                      <h3 className="mt-7 text-sm font-bold uppercase tracking-wide text-[#1740A6]">
                        Responsibilities
                      </h3>
                      <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 marker:text-[#1740A6]">
                        {role.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="text-[#1740A6]/70 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {role.requirements && (
                    <>
                      <h3 className="mt-7 text-sm font-bold uppercase tracking-wide text-[#1740A6]">
                        Requirements
                      </h3>
                      <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 marker:text-[#1740A6]">
                        {role.requirements.map((item) => (
                          <li
                            key={item}
                            className="text-[#1740A6]/70 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {role.compensation && (
                    <div className="mt-7 rounded-xl bg-[#1740A6]/5 px-5 py-4">
                      <span className="text-sm font-bold uppercase tracking-wide text-[#1740A6]">
                        Compensation
                      </span>
                      <p className="mt-1 font-medium text-[#1740A6] leading-relaxed">
                        {role.compensation}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1740A6] mb-8">
              Apply now.
            </h2>
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
