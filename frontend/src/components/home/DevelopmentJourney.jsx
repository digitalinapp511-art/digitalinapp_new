import { CheckCircle, CalendarCheck, Laptop, Network, Palette, Rocket, ServerCog, Search, Users, Bug } from "lucide-react";
import { Sparkles } from "lucide-react";
import React, { memo, useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion
} from "framer-motion";

const DevelopmentJourney = ({ stats, points }) => {
  const sectionRef =
useRef(null);

const isInView =
useInView(
 sectionRef,
 {
   once:false,
   margin:"-100px"
 }
);

const shouldReduceMotion =
useReducedMotion();
    return(
        <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/80 to-white py-16 text-slate-950 md:py-24">
  {/* Background Effects */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_34%)]" />
  <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />
  <div className="pointer-events-none absolute -left-32 bottom-24 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-600 shadow-xl shadow-purple-100/80 backdrop-blur">
        <Sparkles size={15} />
        Development Process
      </div>

      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        From Scheduling To{" "}
        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          Successful Launch
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
        We follow a refined development roadmap from project planning, UI/UX,
        system architecture, development sprints, QA and final deployment.
      </p>
    </motion.div>

    {/* Main Layout */}
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      {/* LEFT TIMELINE */}
      <div className="relative">
        <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-purple-300 via-pink-300 to-transparent md:block" />

        <div className="space-y-5">
          {[
            {
              icon: CalendarCheck,
              title: "Scheduling",
              points: [
                "Beta Release",
                "Milestone Plans",
                "Discuss Project Schedule",
              ],
            },
            {
              icon: Users,
              title: "Introduction",
              points: [
                "Team Introduction",
                "Introduction To Project",
                "Project Execution Plan",
              ],
            },
            {
              icon: Palette,
              title: "UI/UX Design",
              points: [
                "Discuss UI/UX Interface",
                "System Design",
                "Design Approval",
              ],
            },
            {
              icon: Network,
              title: "System Architecture",
              points: [
                "System Design",
                "Database Planning",
                "Technical Flow",
              ],
            },
            {
              icon: ServerCog,
              title: "Development & Sprints",
              points: [
                "Sprint Plan",
                "Frontend Development",
                "Backend Development",
              ],
            },
            {
              icon: Rocket,
              title: "Launch",
              points: [
                "QA & Deployment",
                "Beta Release",
                "Deployment Planning",
              ],
            },
          ].map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ x: 8 }}
                className="transform-gpu
will-change-transform group relative rounded-[28px] border border-purple-100 bg-white/90 p-4 shadow-xl shadow-purple-100/70 backdrop-blur-xl transition duration-300 hover:border-purple-300 hover:bg-white md:ml-12"
              >
                {/* Timeline Number */}
                <div className="absolute -left-[58px] top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-purple-200 bg-white text-xs font-black text-purple-600 shadow-xl shadow-purple-100 md:flex">
                  0{index + 1}
                </div>

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-200/40 blur-2xl transition group-hover:bg-pink-200/60" />

                <div className="relative flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30">
                    <Icon size={25} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-950">
                        {step.title}
                      </h3>

                      <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 md:hidden">
                        Step 0{index + 1}
                      </span>
                    </div>

                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-purple-100 bg-purple-50/70 px-3 py-2"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle
                              size={14}
                              className="mt-0.5 shrink-0 text-purple-600"
                            />

                            <p className="text-xs leading-5 text-slate-600">
                              {point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT PREMIUM CIRCULAR SYSTEM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto flex h-[520px] w-full max-w-[520px] items-center justify-center"
      >
        {/* Glow */}
        <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-300/30 blur-3xl" />

        {/* Rings */}
        <motion.div
          animate={
!isInView ||
shouldReduceMotion

? {}

: {
 rotate:360
}
}
          transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
          className="absolute transform-gpu
will-change-transform h-[430px] w-[430px] rounded-full border border-dashed border-purple-300/80"
        />

        <motion.div
          animate={
!isInView ||
shouldReduceMotion

? {}

: {
 rotate:360
}
}
          transition={{ repeat: Infinity, duration: 46, ease: "linear" }}
          className="absolute transform-gpu
will-change-transform h-[330px] w-[330px] rounded-full border border-purple-200"
        />

        <motion.div
      animate={
!isInView ||
shouldReduceMotion

? {}

: {
 rotate:360
}
}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute transform-gpu
will-change-transform h-[245px] w-[245px] rounded-full border border-pink-200"
        />

        {/* Orbit Dots */}
        <motion.div
          animate={
!isInView ||
shouldReduceMotion

? {}

: {
 rotate:360
}
}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute transform-gpu
will-change-transform h-[430px] w-[430px]"
        >
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-lg shadow-purple-500/60" />
          <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/60" />
        </motion.div>

        {/* Floating Labels */}
        {[
          {
            title: "Planning",
            icon: CalendarCheck,
            className: "left-1/2 top-4 -translate-x-1/2",
          },
          {
            title: "Design",
            icon: Palette,
            className: "right-0 top-1/2 -translate-y-1/2",
          },
          {
            title: "Code",
            icon: ServerCog,
            className: "bottom-4 left-1/2 -translate-x-1/2",
          },
          {
            title: "Deploy",
            icon: Rocket,
            className: "left-0 top-1/2 -translate-y-1/2",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              animate={

!isInView ||
shouldReduceMotion

? {}

: {

y:[
0,
index%2===0
?-8
:8,
0

]

}

}
              className={`absolute transform-gpu
will-change-transform ${item.className} z-20 flex min-w-[118px] items-center gap-2 rounded-2xl border border-purple-100 bg-white/90 px-3 py-3 shadow-2xl shadow-purple-100/80 backdrop-blur-xl`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Icon size={17} />
              </div>

              <p className="text-sm font-black text-slate-950">
                {item.title}
              </p>
            </motion.div>
          );
        })}

        {/* Center Circle */}
        <motion.div
          animate={

!isInView ||
shouldReduceMotion

? {}

: {

scale:[
1,
1.035,
1
]

}

}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className=" transform-gpu
will-change-transform relative z-10 flex h-[235px] w-[235px] flex-col items-center justify-center rounded-full border border-purple-100 bg-white/90 p-6 text-center shadow-2xl shadow-purple-200/70 backdrop-blur-2xl"
        >
          <div className="absolute inset-4 rounded-full border border-purple-100" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-100/80 to-pink-100/80 blur-sm" />

          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/40">
              <Rocket size={30} />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-500">
              Final Goal
            </p>

            <h3 className="mt-2 text-4xl font-black text-slate-950">
              Launch
            </h3>

            <p className="mx-auto mt-3 max-w-[170px] text-xs font-semibold leading-5 text-slate-500">
              Complete roadmap from idea to production-ready deployment.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom Premium Cards */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-14 grid gap-5 md:grid-cols-3"
    >
      {[
        {
          icon: Search,
          title: "Research First",
          text: "We understand business goals, users and technical requirements before execution.",
        },
        {
          icon: Laptop,
          title: "Sprint Based Delivery",
          text: "Every feature is planned, developed and reviewed step by step.",
        },
        {
          icon: Bug,
          title: "QA & Deployment",
          text: "Every flow is tested before final deployment and production launch.",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group transform-gpu
will-change-transform relative overflow-hidden rounded-[28px] border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-100/70 backdrop-blur-xl transition hover:border-purple-300 hover:bg-white"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-200/40 blur-2xl transition group-hover:bg-pink-200/60" />

            <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30">
              <Icon size={25} />
            </div>

            <h4 className="relative text-lg font-black text-slate-950">
              {item.title}
            </h4>

            <p className="relative mt-2 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>
    )
}
export default memo(DevelopmentJourney);