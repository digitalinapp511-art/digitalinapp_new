import { ArrowRight, CheckCircle, Code2, LayoutDashboard, Laptop, Rocket, ServerCog, Smartphone, Sparkles } from "lucide-react";
import {motion} from "framer-motion";
const Services = () => {
    return(<section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/60 to-white py-20 md:py-28">
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl" />
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.055)_1px,transparent_1px)] bg-[size:58px_58px] opacity-70" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* TOP PREMIUM LAYOUT */}
    <div className="grid items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr]">
      {/* LEFT INTRO PANEL */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[38px] border border-purple-100 bg-white/90 p-7 shadow-2xl shadow-purple-100/80 backdrop-blur-xl md:p-10"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
            <Sparkles size={16} className="text-purple-600" />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-600">
              Our Services
            </p>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Premium Digital{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            We build modern websites, mobile apps, ERP systems, dashboards,
            automation tools and scalable digital products for growing brands.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Web Apps", "Fast & scalable"],
              ["ERP Panels", "Business control"],
              ["Mobile Apps", "Smooth experience"],
              ["Automation", "Save time"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[24px] border border-purple-100 bg-purple-50/70 p-4"
              >
                <h3 className="text-sm font-black text-slate-950">
                  {title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-black text-white shadow-xl shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/50"
            >
              Explore Services
              <ArrowRight size={17} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-black text-slate-950 transition duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT FEATURED CARD */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[38px] border border-white/10 bg-slate-950 p-7 shadow-2xl shadow-purple-500/20 md:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />

        <div className="relative">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-200">
                Featured Service
              </p>

              <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">
                Full Stack Web App
              </h3>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/40">
              <Code2 size={30} />
            </div>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            From landing pages to complete business portals, we create fast,
            responsive and conversion-focused web applications with modern UI.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Business Website",
              "Admin Dashboard",
              "Frontend + Backend",
              "API Integration",
              "Responsive UI",
              "Deployment Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">
                    <CheckCircle size={15} />
                  </span>

                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                ["3x", "Faster UI"],
                ["100%", "Responsive"],
                ["SEO", "Ready"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h4 className="text-2xl font-black text-white">{value}</h4>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* SERVICE BENTO GRID */}
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          icon: Code2,
          title: "Web Development",
          text: "Modern websites, landing pages, admin panels and scalable web applications.",
          points: ["Business Website", "Landing Page", "Web App"],
          gradient: "from-purple-600 to-indigo-600",
          size: "xl:col-span-1",
        },
        {
          icon: Smartphone,
          title: "Mobile Apps",
          text: "Android and iOS friendly mobile app solutions with smooth UI and strong performance.",
          points: ["Android App", "iOS App", "Cross Platform"],
          gradient: "from-pink-500 to-rose-600",
          size: "xl:col-span-1",
        },
        {
          icon: LayoutDashboard,
          title: "ERP Solutions",
          text: "Custom ERP, admin dashboards, automation systems and business management panels.",
          points: ["Admin Panel", "Automation", "Reports"],
          gradient: "from-emerald-500 to-teal-600",
          size: "xl:col-span-1",
        },
        {
          icon: Laptop,
          title: "UI/UX Design",
          text: "Clean, modern and user-friendly interfaces designed for better engagement.",
          points: ["Wireframe", "Prototype", "Modern UI"],
          gradient: "from-violet-600 to-fuchsia-600",
          size: "xl:col-span-1",
        },
        {
          icon: ServerCog,
          title: "Cloud & DevOps",
          text: "Deployment, cloud setup, server management and performance optimization.",
          points: ["Hosting", "CI/CD", "Optimization"],
          gradient: "from-blue-600 to-cyan-500",
          size: "xl:col-span-1",
        },
        {
          icon: Rocket,
          title: "Digital Growth",
          text: "SEO, digital marketing, automation and conversion-focused strategy.",
          points: ["SEO", "Marketing", "Automation"],
          gradient: "from-orange-500 to-pink-500",
          size: "xl:col-span-1",
        },
      ].map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            className={`group relative overflow-hidden rounded-[32px] border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-100/70 backdrop-blur-xl transition duration-300 hover:border-purple-300 hover:bg-white ${service.size}`}
          >
            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-purple-200/40 blur-2xl transition group-hover:bg-pink-200/60" />
            <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-pink-100/60 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-xl shadow-purple-500/25 transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon size={28} />
                </div>

                <span className="text-5xl font-black text-purple-100 transition group-hover:text-purple-200">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.text}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                  >
                    {point}
                  </span>
                ))}
              </div>

              <a
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-black text-purple-600 transition hover:text-pink-600"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* BOTTOM CTA */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-10 overflow-hidden rounded-[36px] border border-purple-100 bg-white/90 p-6 shadow-2xl shadow-purple-100/80 backdrop-blur-xl md:p-8"
    >
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-600">
            Custom Project
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
            Have a custom project idea?
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share your idea with us and we will suggest the best technology,
            timeline and development plan.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-purple-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/50"
        >
          Get Free Consultation
          <ArrowRight size={17} />
        </a>
      </div>
    </motion.div>
  </div>
</section>)
}
export default Services;