import { ArrowRight, CheckCircle, Code2, LayoutDashboard, Smartphone } from "lucide-react";
import { memo } from "react";
const Pricing=memo(()=>{
    return(<section className="relative overflow-hidden bg-slate-50 py-12 md:py-14">
  <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* HEADING */}
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-600">
        Pricing
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
        Simple, affordable{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          starting plans.
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        Transparent prices in INR and USD. Choose a starting plan, then we
        tailor it to your scope.
      </p>
    </div>

    {/* ONE PAGE PRICING CARDS */}
    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Starter Website",
          price: "₹12,000",
          usd: "$149",
          desc: "Best for small businesses and 1-page sites.",
          link: "View website pricing",
          icon: <Code2 size={24} />,
          gradient: "from-purple-500 to-indigo-600",
          features: ["Responsive design", "Basic SEO", "Contact form"],
        },
        {
          title: "Mobile MVP",
          price: "₹30,000",
          usd: "$359",
          desc: "Android, iOS, or cross-platform MVP builds.",
          link: "View app pricing",
          icon: <Smartphone size={24} />,
          gradient: "from-pink-500 to-rose-600",
          features: ["App UI", "Core features", "API setup"],
          popular: true,
        },
        {
          title: "ERP Starter",
          price: "₹1,60,000",
          usd: "$1,900",
          desc: "Billing, inventory, and basic reports.",
          link: "View ERP pricing",
          icon: <LayoutDashboard size={24} />,
          gradient: "from-emerald-500 to-teal-600",
          features: ["Admin panel", "Reports", "Role access"],
        },
      ].map((plan, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-[28px] p-1 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${
            plan.popular
              ? "bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600"
              : "border border-slate-200 bg-white"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

          <div className="relative h-full rounded-[24px] bg-white p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.gradient} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                {plan.icon}
              </div>

              {plan.popular && (
                <span className="rounded-full bg-purple-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white">
                  Popular
                </span>
              )}
            </div>

            <h3 className="text-xl font-black text-slate-950">
              {plan.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {plan.desc}
            </p>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Starting at
              </p>

              <div className="mt-1 flex items-end gap-2">
                <h4 className="text-3xl font-black text-slate-950">
                  {plan.price}
                </h4>

                <span className="pb-1 text-sm font-bold text-purple-600">
                  / {plan.usd}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient} text-white`}
                  >
                    <CheckCircle size={14} />
                  </span>

                  <p className="text-sm font-semibold text-slate-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/pricing"
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 bg-gradient-to-r ${plan.gradient}`}
            >
              {plan.link}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM CTA COMPACT */}
    <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-[26px] border border-purple-100 bg-white p-5 shadow-lg shadow-purple-500/10 md:flex-row">
      <div>
        <h3 className="text-xl font-black text-slate-950">
          Need a custom plan?
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Share your requirements and get the best quote.
        </p>
      </div>

      <a
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1"
      >
        Get Custom Quote
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
</section>
)})
export default Pricing