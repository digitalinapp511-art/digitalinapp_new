import { ArrowRight, FileText, Headphones, LockKeyhole, ShieldCheck } from "lucide-react";
import { memo } from "react";
const TrustCenter=memo(()=>{
    return(<section className="relative overflow-hidden bg-slate-50 py-12 md:py-14">
  <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-purple-200/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-pink-200/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {/* LEFT CARD */}
      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg shadow-purple-500/10">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
          <ShieldCheck size={16} className="text-purple-600" />
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">
            Trust Center
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
          Security, privacy, support and{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            terms.
          </span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Practical information before you start a project with DigitalInApp.
        </p>

        <div className="mt-5 grid gap-2">
          {[
            "📍 Dehradun, Uttarakhand (IN)",
            "🏢 MSME registered",
           
            "⏰ Support: 9:00 AM - 9:00 PM IST",
            "🔒 Essential cookies only",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-purple-50"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[24px] bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-5 text-white">
          <h3 className="text-lg font-black">
            Need compliance details?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Contact us and we will share project-specific security answers.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/trust-center"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:-translate-y-1"
            >
              Visit trust center
              <ArrowRight size={15} />
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/20"
            >
              Talk to team
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Security",
            text: "Access control, data handling and safe operations.",
            button: "View security",
            link: "/security",
            icon: <ShieldCheck size={24} />,
            gradient: "from-purple-500 to-indigo-600",
          },
          {
            title: "Privacy",
            text: "How we collect and use data on website and projects.",
            button: "Read privacy",
            link: "/privacy",
            icon: <LockKeyhole size={24} />,
            gradient: "from-pink-500 to-rose-600",
          },
          {
            title: "Terms",
            text: "Website terms and general working guidelines.",
            button: "Review terms",
            link: "/terms",
            icon: <FileText size={24} />,
            gradient: "from-emerald-500 to-teal-600",
          },
          {
            title: "Support",
            text: "How to reach us and response expectations.",
            button: "Support info",
            link: "/support",
            icon: <Headphones size={24} />,
            gradient: "from-orange-500 to-yellow-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-1 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

            <div className="relative h-full rounded-[24px] bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition group-hover:rotate-6 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <span className="text-4xl font-black text-slate-100">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

              <a
                href={item.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-purple-600 transition hover:gap-3 hover:text-pink-600"
              >
                {item.button}
                <ArrowRight size={15} />
              </a>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>) })
export default TrustCenter