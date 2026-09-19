import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import founderImg from "../assets/founder.jpeg";
function TeamProfile() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 text-sm text-slate-500 lg:px-8">
          <Link to="/" className="font-medium text-purple-600">
            Home
          </Link>

          <span>/</span>

          <HashLink
  smooth
  to="/team"
  className="font-medium text-purple-600"
>
team
</HashLink>

          <span>/</span>

          <span>Vikrant Bhawani</span>
        </div>
      </section>

      {/* HERO */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                Founder at Digital in App
              </p>

              <h1 className="mt-3 text-4xl font-bold text-slate-950 md:text-5xl">
                Founder · Product leader · Delivery-first
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                Vikrant Bhawani
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Leads product delivery and engineering, with a focus on React
                Native, cross-platform apps and UX that feels modern and fast.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Focus",
                    value: "Cross-platform apps",
                  },
                  {
                    title: "Strength",
                    value: "Systems & UI/UX",
                  },
                  {
                    title: "Approach",
                    value: "Clear scope & delivery",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-base font-semibold text-slate-950">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                >
                  Start a project
                </Link>

                <a
                  href="https://wa.me/917419064919"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Chat on WhatsApp
                </a>

                <HashLink
  smooth
  to="/#team"
  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
>
  Back to team
</HashLink>
              </div>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4">
                  <div className="overflow-hidden rounded-2xl">
              <img
                src={founderImg}
                alt="Vikrant Bhawani, Founder at Digital in App"
                className="h-[520px] w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
    <div>
      <h3 className="text-lg font-semibold text-slate-950">
        Vikrant Bhawani
      </h3>

      <p className="text-sm text-slate-600">
        Founder · Product leader · Delivery-first
      </p>
    </div>

    <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700">
      Digital in App
    </span>
  </div>
</div>
          </div>

          {/* DETAILS */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            {/* INFO */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-950">
                Product delivery
              </h2>

              <div className="mt-6 space-y-5">
                {[
                  {
                    label: "Role",
                    value: "Founder",
                  },
                  {
                    label: "Focus",
                    value: "Apps / UI/UX / Delivery",
                  },
                  {
                    label: "Based in",
                    value: "India",
                  },
                  {
                    label: "LinkedIn",
                    value: "@idkvikrant",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-1 text-base font-semibold text-slate-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-5">
              {[
                {
                  title: "About",
                  text: "Hands-on founder, delivery-first. Vikrant works closely with clients and the engineering team to keep projects fast, reliable, and easy to maintain.",
                  points: [
                    "Cross-platform apps",
                    "Product flows & onboarding",
                    "API integrations",
                    "Performance tuning",
                  ],
                },

                {
                  title: "UI/UX decisions",
                  text: "Design choices that reduce confusion and support real-world operations.",
                  points: [
                    "Clear information architecture",
                    "Conversion-friendly pages",
                    "Component consistency",
                  ],
                },

                {
                  title: "Structured delivery",
                  text: "Clarity on scope, milestones, and what success looks like.",
                  points: [
                    "Feature breakdown",
                    "Release planning",
                    "QA & go-live support",
                  ],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-2xl font-bold text-slate-950">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {section.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.points.map((point, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-[30px] border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-3xl font-bold text-slate-950">
              Want to discuss your product?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Share what you're building - we'll suggest the fastest reliable
              path to ship.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Start a conversation
              </Link>

              <a
                href="https://wa.me/917419064919"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamProfile;