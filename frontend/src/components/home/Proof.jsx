import {memo} from 'react';
import { Sparkles,LayoutDashboard,Code2,ShieldCheck,Rocket,ArrowRight } from "lucide-react";

const Proof = memo(() => {
    return (<section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
  {/* BACKGROUND GLOW */}
  <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* HEADING */}
    <div className="mb-14 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm">
          <Sparkles size={16} className="text-purple-600" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
            Proof
          </p>
        </div>

        <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          What we build most often for{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            businesses.
          </span>
        </h2>
      </div>

      <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base lg:ml-auto">
        These are common deliverables we ship and support—so you can quickly
        see how DigitalInApp fits your business needs.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          number: "01",
          title: "Institute & School Systems",
          text: "Website + admin ERP + student/parent workflows in one place. Fees, attendance, certificates, notices and reports.",
          tags: ["ERP modules", "Mobile app", "Role permissions", "Reports"],
          icon: <LayoutDashboard size={28} />,
          gradient: "from-purple-500 to-indigo-600",
        },
        {
          number: "02",
          title: "Retail & Inventory Platforms",
          text: "Stock, billing, purchase entries, GST-ready invoices, staff access, and dashboards that replace Excel.",
          tags: ["Inventory", "Billing", "Dashboards", "Exports"],
          icon: <Code2 size={28} />,
          gradient: "from-emerald-500 to-teal-600",
        },
        {
          number: "03",
          title: "Clinic & Hospital Workflows",
          text: "Appointments, patient records, internal dashboards, reminders, and secure access control.",
          tags: ["Scheduling", "Records", "Security", "Notifications"],
          icon: <ShieldCheck size={28} />,
          gradient: "from-pink-500 to-rose-600",
        },
        {
          number: "04",
          title: "Startup MVPs & SaaS Builds",
          text: "Clean UI, strong backend, dashboards, payments and analytics—built to scale when your product grows.",
          tags: ["MVP", "APIs", "Payments", "Scaling"],
          icon: <Rocket size={28} />,
          gradient: "from-orange-500 to-yellow-500",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-1 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* CARD GLOW */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-10`}
          />

          {/* SHINE ANIMATION */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

          <div className="relative h-full rounded-[30px] bg-white p-7 md:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <span className="text-5xl font-black text-slate-100 transition duration-500 group-hover:text-purple-100">
                {item.number}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-950">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {item.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-bold text-purple-700 transition duration-300 group-hover:border-purple-200 group-hover:bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <p className="text-sm font-semibold text-slate-500">
                Ready to build
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-purple-600"
              >
                Discuss project
                <ArrowRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM STRIP */}
    <div className="mt-12 grid gap-5 rounded-[34px] border border-purple-100 bg-white p-6 shadow-xl shadow-purple-500/10 md:grid-cols-3 md:p-8">
      {[
        ["50+", "Projects delivered"],
        ["24/7", "Support options"],
        ["3+", "Years experience"],
      ].map((stat, index) => (
        <div
          key={index}
          className="rounded-3xl bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-purple-50"
        >
          <h3 className="text-4xl font-black text-purple-600">{stat[0]}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            {stat[1]}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    )
}
);
export default Proof;