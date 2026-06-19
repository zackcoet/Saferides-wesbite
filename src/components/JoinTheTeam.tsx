import { Link } from "react-router-dom";

const ROLES = [
  {
    title: "Campus Representative",
    body: "Represent SafeRides at your university, grow the rider and driver community, and be the face of the platform on campus.",
  },
  {
    title: "Intern",
    body: "Work directly with the founding team, gain real startup experience, and help build something students actually use.",
  },
];

export default function JoinTheTeam() {
  return (
    <section id="join-the-team" className="bg-white py-24 sm:py-32 border-t border-[#1740A6]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1740A6] mb-4">
          Join the team early.
        </h2>
        <p className="mt-3 text-lg text-[#1740A6]/70 max-w-2xl mb-14 leading-relaxed">
          SafeRides is just getting started. Help us build the future of campus
          transportation from the ground up as a campus representative or intern.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-[#1740A6]/15 bg-white p-8 sm:p-10"
            >
              <div className="mb-5 h-1.5 w-8 rounded-full bg-[#1740A6]" />
              <h3 className="text-xl font-bold text-[#1740A6] mb-2.5">
                {role.title}
              </h3>
              <p className="text-[#1740A6]/70 leading-relaxed">{role.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/apply"
            className="inline-block rounded-full bg-[#1740A6] px-8 py-4 text-base font-bold text-white hover:bg-[#1740A6]/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
