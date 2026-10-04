import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 10, suffix: "+", label: "Happy Clients" },
  { number: 24, suffix: "/7", label: "Support Options" },
];

const workSteps = [
  {
    title: "Strategy First",
    text: "We understand your business, users, goals, and required features before starting development.",
  },
  {
    title: "Modern Development",
    text: "We build fast, responsive, SEO-friendly websites, apps, ERP/CRM systems, and digital platforms.",
  },
  {
    title: "Launch & Support",
    text: "After delivery, we help with improvements, maintenance, performance, SEO, and business growth.",
  },
];

const principles = [
  "Clear communication",
  "Timely delivery",
  "Scalable solutions",
  "SEO-friendly development",
  "Customer satisfaction",
  "Long-term support",
];

function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(end * eased));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function About() {
  return (
    <section className="overflow-hidden bg-[#faf7ff]">
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#070417] text-white">
        {/* ANIMATED BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.45),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_35%),linear-gradient(135deg,#070417,#13082e,#1b0b3f)]" />

          <motion.div
            animate={{
              x: [0, 26, 0],
              y: [0, -28, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-28 top-16 h-64 w-64 rounded-full bg-purple-500/35 blur-3xl md:h-80 md:w-80"
          />

          <motion.div
            animate={{
              x: [0, -24, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-28 bottom-10 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl md:h-80 md:w-80"
          />

          <motion.div
            animate={{
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-20 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl"
          />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25 md:bg-[size:72px_72px]" />

          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.14), transparent)",
              backgroundSize: "220% 220%",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:grid lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 py-6 md:py-6">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-purple-100 backdrop-blur sm:text-xs">
              About Digital In App
            </p>

            <h1 className="mx-auto max-w-3xl text-[34px] font-black leading-[1.08] sm:text-5xl md:text-6xl lg:mx-0">
              We build{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200 bg-clip-text text-transparent">
                premium digital products
              </span>{" "}
              that grow business.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg lg:mx-0">
              Digital In App delivers websites, mobile apps, ERP/CRM systems,
              UI/UX, SEO, and digital marketing solutions for startups, SMEs,
              and enterprises.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-black text-slate-950 shadow-2xl shadow-purple-500/20 transition hover:-translate-y-1 hover:bg-purple-100"
              >
                Start a Project
              </a>

              <a
                href="/services"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[430px] w-[430px] rounded-[48px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="rounded-[36px] border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Digital Growth</p>
                    <h3 className="text-2xl font-black">Business Dashboard</h3>
                  </div>

                  <span className="rounded-2xl bg-green-400/15 px-3 py-2 text-sm font-bold text-green-200">
                    Live
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { width: "88%", color: "from-purple-400 to-pink-400" },
                    { width: "72%", color: "from-indigo-400 to-purple-400" },
                    { width: "94%", color: "from-pink-400 to-orange-300" },
                  ].map((bar, index) => (
                    <div
                      key={index}
                      className="h-3 rounded-full bg-white/10"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: bar.width }}
                        transition={{
                          duration: 1.4,
                          delay: 0.4 + index * 0.2,
                        }}
                        className={`h-3 rounded-full bg-gradient-to-r ${bar.color}`}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -left-10 bottom-20 rounded-3xl border border-white/10 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-xl"
              >
                <p className="text-3xl">⚡</p>
                <p className="mt-1 text-sm font-bold">Fast Delivery</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-8 top-24 rounded-3xl border border-white/10 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-xl"
              >
                <p className="text-3xl">🛡️</p>
                <p className="mt-1 text-sm font-bold">24/7 Support</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-[-24px] left-24 rounded-3xl border border-white/10 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-xl"
              >
                <p className="text-3xl">📈</p>
                <p className="mt-1 text-sm font-bold">Growth Focused</p>
              </motion.div>
            </div>
          </motion.div>
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
                      <CountUp end={item.number} suffix={item.suffix} />
                    </h3>
      
                    <p className="relative mt-3 text-sm font-black uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

      {/* WHO WE ARE */}
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-indigo-600 sm:text-sm">
            Who We Are
          </p>

          <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            A digital partner that designs, develops, launches, and improves.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
        >
          <p>
            We create high-performance, SEO-friendly websites and innovative
            applications that improve online presence, automate operations, and
            support long-term business growth.
          </p>

          <p>
            Our team works with modern technologies, clean UI/UX, scalable
            systems, and result-driven digital strategies to turn ideas into
            reliable digital products.
          </p>
        </motion.div>
      </div>

      {/* MISSION VISION */}
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-14 sm:px-6 md:pb-20 lg:grid-cols-2 lg:px-8">
        {[
          {
            icon: "🎯",
            title: "Our Mission",
            text: "To deliver excellence in app development, web development, SEO, digital marketing, ERP, and AI by combining creativity, advanced technology, and strategic insight.",
          },
          {
            icon: "🚀",
            title: "Our Vision",
            text: "To empower businesses and entrepreneurs with innovative, scalable digital solutions that drive growth and shape a smarter future.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-2xl hover:shadow-purple-100 sm:rounded-[34px] sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-100 blur-3xl" />

            <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 text-3xl">
              {item.icon}
            </div>

            <h2 className="relative text-2xl font-black text-slate-950">
              {item.title}
            </h2>

            <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* HOW WE WORK */}
      <div className="relative overflow-hidden bg-white py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_right,rgba(236,72,153,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-indigo-600 sm:text-sm">
              How We Work
            </p>

            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Clear process. Clean development. Better results.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-2xl hover:shadow-purple-100 sm:rounded-[32px] sm:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />

                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white">
                  {index + 1}
                </span>

                <h3 className="text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PRINCIPLES */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-[#080414] p-6 text-white shadow-2xl shadow-purple-200 sm:rounded-[40px] sm:p-8 md:p-12">
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/35 blur-3xl"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.35),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.28),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-purple-300 sm:text-sm">
                Our Principles
              </p>

              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                What you can expect when you work with us.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold backdrop-blur transition hover:bg-white/15"
                >
                  ✓ {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 text-center text-white shadow-2xl shadow-purple-200 sm:rounded-[40px] sm:p-10"
        >
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <div className="relative">
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Ready to build your next digital product?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base sm:leading-8">
              Share your website, app, ERP, CRM, SEO, or digital marketing
              requirement and we will help you plan the next step.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-purple-100"
              >
                Get Proposal
              </a>

              <a
                href="/services"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;