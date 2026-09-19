import React, { memo, useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { CheckCircle, Rocket, Sparkles } from "lucide-react";
const DigitalProcess = ({ digitalItems, benefits, journeySteps }) => {
  const sectionRef = useRef(null);

  const isInView = useInView(
    sectionRef,
    {
      once: false,
      margin: "-100px"
    }
  );

  const shouldReduceMotion =
    useReducedMotion();
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white py-16 md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-600 shadow-lg shadow-purple-100/80 backdrop-blur">
            <Sparkles size={15} />
            Digital Process
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Smart Digitized Growth{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            A premium step-by-step digital transformation process designed for
            better experience, faster operations and scalable business growth.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.25fr_1fr]">
          {/* LEFT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[34px] border border-purple-100 bg-white/85 p-5 shadow-2xl shadow-purple-100/80 backdrop-blur md:p-6"
          >
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-500">
                Core Process
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Digital Foundation
              </h3>
            </div>

            <div className="relative space-y-5">
              <div className="absolute left-7 top-4 h-[calc(100%-28px)] w-px bg-gradient-to-b from-purple-300 via-pink-300 to-transparent" />

              {digitalItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="group relative flex gap-4 rounded-[24px] border border-purple-100 bg-white p-4 shadow-lg shadow-purple-100/60 transition duration-300 hover:border-purple-300 hover:shadow-purple-200/80"
                  >
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-purple-500/25`}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-500">
                          Step 0{index + 1}
                        </span>
                      </div>

                      <h4 className="text-base font-black text-slate-950">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Strategy, setup and execution for smooth digital growth.
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CENTER ORBIT SYSTEM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex h-[460px] w-full max-w-[500px] items-center justify-center sm:h-[560px]"
          >
            {/* Outer glow */}
            <div className="absolute h-[390px] w-[390px] rounded-full bg-purple-300/25 blur-3xl sm:h-[470px] sm:w-[470px]" />

            {/* Orbit Ring 1 */}
            <motion.div

              animate={
                !isInView ||
                  shouldReduceMotion

                  ? {}

                  : {
                    rotate: 360
                  }
              }

              transition={{
                repeat: Infinity,
                duration: 34,
                ease: "linear"
              }}

              className="
absolute
h-[330px]
w-[330px]
rounded-full
border
border-dashed
border-purple-300/80
sm:h-[430px]
sm:w-[430px]

transform-gpu
will-change-transform
"
            />

            {/* Orbit Ring 2 */}
            <motion.div
              animate={
                !isInView ||
                  shouldReduceMotion

                  ? {}

                  : {
                    rotate: -360
                  }
              }
              transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
              className="absolute transform-gpu
will-change-transform h-[250px] w-[250px] rounded-full border border-purple-200/90 sm:h-[330px] sm:w-[330px]"
            />

            {/* Floating Orbit Cards */}
            {[
              {
                title: "Customer",
                text: "Experience",
                pos: "top-4 left-1/2 -translate-x-1/2",
              },
              {
                title: "Business",
                text: "Model",
                pos: "right-0 top-1/2 -translate-y-1/2",
              },
              {
                title: "Operation",
                text: "Process",
                pos: "bottom-4 left-1/2 -translate-x-1/2",
              },
              {
                title: "Growth",
                text: "System",
                pos: "left-0 top-1/2 -translate-y-1/2",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                animate={

                  !isInView ||
                    shouldReduceMotion

                    ? {}

                    : {

                      y: [
                        0,
                        index % 2 === 0
                          ? -8
                          : 8,

                        0
                      ]

                    }

                }
                whileHover={{ scale: 1.08 }}
                className={`absolute ${card.pos} transform-gpu
will-change-transform z-20 w-[112px] rounded-[22px] border border-purple-100 bg-white/95 p-3 text-center shadow-xl shadow-purple-100/80 backdrop-blur sm:w-[130px]`}
              >
                <p className="text-sm font-black text-slate-950">{card.title}</p>
                <p className="text-xs font-bold text-purple-500">{card.text}</p>
              </motion.div>
            ))}

            {/* Small animated dots */}
            <motion.div
              animate={

                !isInView ||
                  shouldReduceMotion

                  ? {}

                  : {
                    rotate: 360
                  }

              }

              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear"
              }}
              className="absolute h-[330px] w-[330px] sm:h-[430px] sm:w-[430px]"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-lg shadow-purple-500/60" />
              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/60" />
            </motion.div>

            {/* Center Glass Circle */}
            <motion.div
              animate={

                !isInView ||
                  shouldReduceMotion

                  ? {}

                  : {

                    scale: [
                      1,
                      1.035,
                      1
                    ]

                  }

              }
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative transform-gpu
will-change-transform z-10 flex h-[210px] w-[210px] items-center justify-center rounded-full border border-white/70 bg-white/85 p-4 shadow-2xl shadow-purple-300/50 backdrop-blur-xl sm:h-[270px] sm:w-[270px]"
            >
              <div className="absolute inset-4 rounded-full border border-purple-100" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-50 to-pink-50" />

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/35">
                  <Sparkles size={26} />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-500">
                  Smart
                </p>

                <h3 className="mt-1 text-3xl font-black text-slate-950 sm:text-4xl">
                  Digitized
                </h3>

                <p className="mx-auto mt-2 max-w-[170px] text-xs font-semibold leading-5 text-slate-500">
                  Business growth automation system
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT BENEFITS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[34px] border border-purple-100 bg-white/85 p-5 shadow-2xl shadow-purple-100/80 backdrop-blur md:p-6"
          >
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-500">
                Benefits
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Smart Output
              </h3>
            </div>

            <div className="space-y-4">
              {benefits.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ x: -6 }}
                  className="group relative overflow-hidden rounded-[24px] border border-purple-100 bg-white p-4 shadow-lg shadow-purple-100/60 transition duration-300 hover:border-pink-300 hover:shadow-pink-100"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple-200/40 blur-2xl transition group-hover:bg-pink-200/60" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-sm font-black text-white shadow-lg shadow-purple-500/30">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h4 className="text-sm font-black leading-5 text-slate-950 sm:text-base">
                        {item}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Improved workflow, better performance and stronger digital
                        business results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DEVELOPMENT JOURNEY - PREMIUM CURVED TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[42px] border border-purple-100 bg-gradient-to-br from-white via-purple-50/70 to-white p-5 shadow-2xl shadow-purple-100/80 md:mt-20 md:p-10"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.055)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-purple-600 shadow-xl shadow-purple-100 backdrop-blur">
                <Sparkles size={15} />
                Development Journey
              </div>

              <h3 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                From Introduction To{" "}
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  Launch
                </span>
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                A clean roadmap that converts your idea into a designed, developed,
                tested and production-ready digital product.
              </p>
            </motion.div>

            {/* Main Premium Layout */}
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT SUMMARY PANEL */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[34px] border border-purple-100 bg-white/90 p-6 shadow-2xl shadow-purple-100/80 backdrop-blur-xl md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-200/50 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-pink-200/40 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/30">
                    <Rocket size={30} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-600">
                    Complete Flow
                  </p>

                  <h4 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                    Strategy, Design, Development & Launch
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    We follow a structured process where every step has clear output,
                    milestone planning and quality checking before moving ahead.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      ["06", "Process Steps"],
                      ["03", "Quality Checks"],
                      ["100%", "Launch Ready"],
                      ["24/7", "Growth Support"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[24px] border border-purple-100 bg-purple-50/70 p-4"
                      >
                        <h5 className="text-2xl font-black text-slate-950">
                          {value}
                        </h5>
                        <p className="mt-1 text-xs font-bold text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT CURVED TIMELINE */}
              <div className="relative">
                {/* Desktop Curved Line */}
                <div className="pointer-events-none absolute left-8 top-8 hidden h-[calc(100%-64px)] w-[3px] rounded-full bg-gradient-to-b from-purple-500 via-fuchsia-400 to-pink-500 lg:block" />

                <div className="space-y-5">
                  {journeySteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        whileHover={{ x: 8 }}
                        className="group relative lg:pl-20"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-6 z-20 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/30 lg:flex">
                          <Icon size={25} />
                        </div>

                        {/* Card */}
                        <div className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white/90 p-5 shadow-xl shadow-purple-100/70 backdrop-blur-xl transition duration-300 group-hover:border-purple-300 group-hover:bg-white group-hover:shadow-purple-200/80">
                          <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-purple-200/40 blur-2xl transition group-hover:bg-pink-200/60" />

                          <div className="relative flex items-start gap-4">
                            {/* Mobile Icon */}
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 lg:hidden">
                              <Icon size={24} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                  <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-purple-700">
                                    Step 0{index + 1}
                                  </span>

                                  <h4 className="mt-3 text-xl font-black text-slate-950">
                                    {step.title}
                                  </h4>
                                </div>

                                <span className="text-5xl font-black text-purple-100 transition group-hover:text-purple-200">
                                  0{index + 1}
                                </span>
                              </div>

                              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                {step.points.map((point) => (
                                  <div
                                    key={point}
                                    className="rounded-2xl border border-purple-100 bg-purple-50/70 p-3 transition group-hover:bg-white"
                                  >
                                    <div className="flex items-start gap-2">
                                      <CheckCircle
                                        size={15}
                                        className="mt-0.5 shrink-0 text-purple-600"
                                      />

                                      <p className="text-xs font-medium leading-5 text-slate-600">
                                        {point}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
};
export default memo(
 DigitalProcess
);