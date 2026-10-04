import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  Zap,
  ShieldCheck,
  Layers3,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/siteData";
import { Link } from "react-router-dom";

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 10, suffix: "+", label: "Happy Clients" },
  { number: 24, suffix: "/7", label: "Support Options" },
];

const heroBadges = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: ShieldCheck, text: "Secure Build" },
  { icon: Layers3, text: "Scalable Systems" },
];

function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Services() {
  return (
    <section id="services" className="overflow-hidden bg-[#fbf8ff]">
      {/* HERO */}
      <div className="relative min-h-screen overflow-hidden bg-[#050014] py-24 text-white md:py-32 pt-12 lg:pt-12">
        {/* ANIMATED PREMIUM BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark base */}
          <div className="absolute inset-0 bg-[#050014]" />

          {/* Base radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.38),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(236,72,153,0.3),transparent_34%),radial-gradient(circle_at_50%_92%,rgba(99,102,241,0.3),transparent_38%)]" />

          {/* Animated aurora gradient */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute 
              inset-[-50%] 
              opacity-70 
              blur-3xl
              [background-size:300%_300%]
              bg-[linear-gradient(120deg,rgba(168,85,247,0.55),rgba(236,72,153,0.38),rgba(99,102,241,0.42),rgba(168,85,247,0.55))]
            "
          />

          {/* Floating glow orb 1 */}
          <motion.div
            animate={{
              x: [0, 90, -20, 0],
              y: [0, -70, 35, 0],
              scale: [1, 1.25, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-purple-500/40 blur-[100px]"
          />

          {/* Floating glow orb 2 */}
          <motion.div
            animate={{
              x: [0, -90, 30, 0],
              y: [0, 80, -40, 0],
              scale: [1, 1.22, 1.05, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-28 h-[480px] w-[480px] rounded-full bg-pink-500/35 blur-[110px]"
          />

          {/* Floating glow orb 3 */}
          <motion.div
            animate={{
              x: [0, 60, -45, 0],
              y: [0, 55, -80, 0],
              scale: [1, 1.18, 1.05, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-170px] left-1/3 h-[460px] w-[460px] rounded-full bg-indigo-500/35 blur-[115px]"
          />

          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/10"
          />

          {/* Small floating particles */}
          {[...Array(18)].map((_, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -28, 0],
                opacity: [0.25, 0.9, 0.25],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3 + index * 0.25,
                repeat: Infinity,
                delay: index * 0.18,
                ease: "easeInOut",
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.75)]"
              style={{
                left: `${8 + ((index * 13) % 84)}%`,
                top: `${12 + ((index * 19) % 72)}%`,
              }}
            />
          ))}

          {/* Premium grid */}
          <div
            className="
              pointer-events-none 
              absolute 
              inset-0 
              opacity-[0.08]
              [background-image:linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />

          {/* Top glow line */}
          <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/80 to-transparent" />

          {/* Spotlight dark overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,0,20,0.2)_38%,rgba(5,0,20,0.95)_100%)]" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#fbf8ff] to-transparent" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-purple-100 shadow-xl backdrop-blur-xl">
                <Sparkles size={16} />
                Digital In App Services
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight md:text-6xl xl:text-7xl">
                Premium digital solutions for{" "}
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  growing businesses.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                We design and develop high-performing websites, mobile apps,
                ERP systems, dashboards, e-commerce platforms and digital growth
                solutions with modern UI and scalable technology.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-slate-950 shadow-2xl shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-100"
                >
                  Start Your Project
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#service-list"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {heroBadges.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + index * 0.15 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.1]"
                    >
                      <Icon className="mb-3 text-purple-300" size={22} />
                      <p className="text-sm font-bold text-white">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-black text-white shadow-2xl backdrop-blur-xl md:block"
              >
                ⚡ UI + Development
              </motion.div>

              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 5.2, repeat: Infinity }}
                className="absolute -right-4 bottom-10 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-black text-white shadow-2xl backdrop-blur-xl md:block"
              >
                🚀 Growth Ready
              </motion.div>

              <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-r from-purple-500/35 via-pink-500/25 to-indigo-500/35 blur-2xl" />

              <div className="relative overflow-hidden rounded-[38px] border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="relative rounded-[30px] border border-white/10 bg-slate-950/45 p-6">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl shadow-purple-500/30">
                      <Rocket size={30} />
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black text-purple-100">
                      Premium Build
                    </div>
                  </div>

                  <h3 className="text-3xl font-black">
                    What you get with us
                  </h3>

                  <div className="mt-7 space-y-4">
                    {[
                      "Conversion-focused premium UI design",
                      "Responsive layout for mobile, tablet and desktop",
                      "SEO-friendly and fast-loading structure",
                      "Scalable backend, admin panels and APIs",
                      "Reliable support after project delivery",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + index * 0.12 }}
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">
                          <CheckCircle2 size={17} />
                        </span>

                        <p className="text-sm font-medium leading-6 text-slate-200">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-20 mx-auto -mt-16 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 rounded-[36px] border border-purple-100 bg-white/90 p-5 shadow-2xl shadow-purple-200/60 backdrop-blur-xl md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-gradient-to-br from-white via-purple-50 to-pink-50 p-7 text-center transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-300/40"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-300/30 blur-2xl transition group-hover:bg-pink-300/40" />

              <h3 className="relative text-5xl font-black tracking-tight text-slate-950 transition group-hover:text-purple-600">
                <Counter end={item.number} suffix={item.suffix} />
              </h3>

              <p className="relative mt-3 text-sm font-black uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SERVICES LIST */}
      <div id="service-list" className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            badge="SERVICE LINES"
            title="Everything from first launch to complex platforms"
            text="Choose the services that match your current stage. Most businesses combine website, app, ERP, SEO and cloud support into one clear roadmap."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 p-[1px] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-400/25"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                  <div className="relative h-full rounded-[33px] bg-white p-7">
                    <div className="absolute right-6 top-6 text-6xl font-black text-slate-100 transition group-hover:text-purple-100">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    <h3 className="relative mt-7 text-2xl font-black leading-snug text-slate-950">
                      {service.title}
                    </h3>

                    <p className="relative mt-4 text-[15px] leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="relative mt-6 space-y-4">
                      {service.points?.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-purple-600"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-600"
                    >
                      Get Started
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ENGAGEMENT MODELS */}
      <div className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

        <motion.div
          animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm">
                <Sparkles size={16} className="text-purple-600" />
                <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-600">
                  Engagement Models
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Flexible ways to work with{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                  our team.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Whether you need a fixed website, a full software product, or
                long-term support, we define clear scope, timeline and delivery
                milestones.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:-translate-y-1"
                >
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/pricing"
                  className="rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-purple-50 hover:text-purple-700"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Fixed-scope projects",
                  text: "Best for websites, landing pages, MVPs and clear feature-based work.",
                  icon: <CheckCircle2 size={28} />,
                  gradient: "from-purple-600 to-indigo-600",
                  points: ["Clear cost", "Fixed timeline", "Defined scope"],
                },
                {
                  title: "Dedicated support",
                  text: "Best for dashboards, apps, product growth and regular improvements.",
                  icon: <Rocket size={28} />,
                  gradient: "from-pink-600 to-rose-600",
                  points: ["Weekly updates", "Priority support", "Fast changes"],
                },
                {
                  title: "Modernization",
                  text: "Best for upgrading old websites, slow apps and outdated systems.",
                  icon: <Sparkles size={28} />,
                  gradient: "from-indigo-600 to-purple-600",
                  points: ["Bug fixing", "Performance", "UI upgrade"],
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-1 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-400/25"
                >
                  <div className="relative h-full rounded-[28px] bg-white p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>

                      <span className="text-5xl font-black text-slate-100 transition group-hover:text-purple-100">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black leading-snug text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white`}
                          >
                            <CheckCircle2 size={14} />
                          </span>

                          <p className="text-sm font-bold text-slate-700">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[44px] bg-[#080318] p-8 text-center text-white shadow-2xl shadow-purple-300/60 md:p-12">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-purple-600/35 blur-3xl"
          />

          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-600/35 blur-3xl"
          />

          <div className="relative">
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-100 backdrop-blur-xl">
              Let’s Build
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Ready to map your next digital product?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-purple-100">
              Tell us what you want to build — website, app, ERP, CRM,
              e-commerce, SEO or a complete digital solution.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-purple-100"
              >
                Get Proposal
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                About Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;