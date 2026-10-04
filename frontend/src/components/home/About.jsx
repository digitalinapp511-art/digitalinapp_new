import { ArrowRight, CheckCircle, Code2, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { memo } from "react";
const About=memo(()=>{
    return(<section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
      {/* LEFT CONTENT */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm">
          <Sparkles size={16} className="text-purple-600" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
            About DigitalInApp
          </p>
        </div>

        <h2 className="mt-6 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Digital partners for{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            ambitious teams.
          </span>
        </h2>

        <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base">
          We help organisations move faster with reliable software—without
          breaking what already works. Our focus is clean UI, scalable code,
          secure systems and long-term support.
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
          We have helped schools, colleges, hospitals, retailers and SaaS
          founders digitise their operations—often replacing manual spreadsheets
          with clean dashboards and automated workflows.
        </p>

        {/* POINTS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Reliable product delivery",
            "Modern UI/UX design",
            "Secure backend systems",
            "Long-term support",
          ].map((point) => (
            <div
              key={point}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md transition group-hover:scale-110">
                <CheckCircle size={18} />
              </span>

              <p className="text-sm font-bold text-slate-800">{point}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:-translate-y-1"
          >
            Learn More
            <ArrowRight size={17} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-purple-50 hover:text-purple-700"
          >
            Talk To Team
          </a>
        </div>
      </div>

      {/* RIGHT STATS */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-purple-200/60 to-pink-200/60 blur-2xl" />

        <div className="relative rounded-[36px] border border-white bg-white/80 p-5 shadow-2xl shadow-purple-500/10 backdrop-blur-xl md:p-7">
          <div className="mb-6 rounded-[28px] bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-purple-200">
              Why businesses choose us
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Practical software. Clear delivery. Real support.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                number: "50+",
                text: "Custom web, app & ERP implementations delivered.",
                icon: <Rocket size={24} />,
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                number: "10+",
                text: "Businesses & institutions trust us as their tech partner.",
                icon: <ShieldCheck size={24} />,
                gradient: "from-pink-500 to-rose-600",
              },
              {
                number: "3+",
                text: "Years of hands-on experience across modern stacks.",
                icon: <Code2 size={24} />,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                number: "24x7",
                text: "Monitoring & support options for critical systems.",
                icon: <Sparkles size={24} />,
                gradient: "from-orange-500 to-yellow-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
              >
                {/* GLOW */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-10`}
                />

                <div className="relative">
                  <div
                    className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-4xl font-black text-slate-950">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM STRIP */}
          <div className="mt-5 rounded-[26px] border border-purple-100 bg-purple-50 p-5">
            <p className="text-sm font-semibold leading-7 text-slate-700">
              We can own the full build or work alongside your in-house team.
              Either way, you get reliable code, practical advice and steady
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>)})
export default About