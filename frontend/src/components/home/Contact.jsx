import { ArrowRight } from "lucide-react";
import { memo } from "react";
const Contact=memo(()=>{
    return (
        <section className="relative overflow-hidden bg-white py-12 md:py-14">
  <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-purple-200/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-pink-200/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* HEADING */}
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-600">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
        Tell us about your{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          project.
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        Share a few details and we will get back within one business day.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* FORM */}
      <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-1 shadow-lg shadow-purple-500/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

        <div className="relative rounded-[26px] bg-slate-50 p-5 md:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-black text-slate-950">
                Start a conversation
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Prefer phone or email? Reach out directly.
              </p>
            </div>

            <a
              href="mailto:digitalinapp511@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-purple-50"
            >
              Find us on Google
            </a>
          </div>

          {/* CONTACT MINI INFO */}
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Email",
                value: "digitalinapp511@gmail.com",
                href: "mailto:digitalinapp511@gmail.com",
              },
              {
                label: "Call",
                value: "+91-7419064919",
                href: "tel:+917419064919",
              },
              {
                label: "Call",
                value: "+91-7456804919",
                href: "tel:+917456804919",
              },
            ].map((item) => (
              <a
                key={item.value}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50"
              >
                <p className="text-[11px] font-black uppercase tracking-widest text-purple-600">
                  {item.label}
                </p>
                <p className="mt-1 break-words text-xs font-bold text-slate-800">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <form className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-bold text-slate-800">
                  Full name
                </label>
                <input
                  placeholder="Your name"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-bold text-slate-800">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-bold text-slate-800">
                  Company
                </label>
                <input
                  placeholder="Company name"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-bold text-slate-800">
                  Budget
                </label>
                <select className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100">
                  <option>Select a range</option>
                  <option>₹10k - ₹50k</option>
                  <option>₹50k - ₹1L</option>
                  <option>₹1L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-slate-800">
                Service
              </label>
              <select className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100">
                <option>Select one</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>ERP Development</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-slate-800">
                Project details
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about your goals, timeline and requirements."
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="max-w-sm text-xs leading-5 text-slate-500">
                We will review your enquiry and reply within one business day.
              </p>

              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1">
                Send enquiry
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT COMPACT CARD */}
      <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-950 p-1 shadow-xl shadow-purple-500/10">
        <div className="relative h-full min-h-[520px] overflow-hidden rounded-[26px]">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
            alt="Remote collaboration"
            className="h-full w-full object-cover opacity-70 transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

          <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-white/15 p-4 text-white backdrop-blur-xl">
            <h3 className="text-base font-black">
              Serving clients across India & beyond
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              Remote-first, based in India
            </p>
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/15 bg-white/15 p-5 text-white backdrop-blur-xl">
            <p className="text-sm font-semibold text-purple-100">
              DigitalInApp
            </p>

            <h3 className="mt-2 text-3xl font-black leading-tight">
              Let's build your next product.
            </h3>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["24/7", "Support"],
                ["50+", "Projects"],
                ["1 Day", "Reply"],
              ].map((stat) => (
                <div
                  key={stat[1]}
                  className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center"
                >
                  <h4 className="text-xl font-black">{stat[0]}</h4>
                  <p className="mt-1 text-[11px] font-semibold text-slate-200">
                    {stat[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+917419064919"
                className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1"
              >
                Call now
              </a>

              <a
                href="mailto:info@digitalinapp.in"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/20"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
})
export default Contact