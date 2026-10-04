import {memo} from 'react';
import { Sparkles,ArrowRight } from "lucide-react";
import video2 from "../../assets/Video2.mp4";
import video1 from "../../assets/Video1.mp4";
const Testimonials = memo(() => {
    return(<section className="relative overflow-hidden bg-white py-20 md:py-24">
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
  <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* HEADING */}
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
        <Sparkles size={16} className="text-purple-600" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
          Testimonials
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
        What our clients say{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
          about us.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
        Real feedback from businesses we have partnered with for websites,
        marketing, SEO, apps and digital solutions.
      </p>
    </div>

    {/* TESTIMONIAL CARDS */}
    <div className="grid gap-7 md:grid-cols-3">
      {[
        {
          text: "Digital In App ne meri company ke liye ek bahut hi professional website design ki. Team ne har chhoti baat ka dhyan rakha aur time par delivery di. Main unki service se 100% satisfied hoon.",
          name: "Rahul Sharma",
          role: "Founder, RS Traders",
          initials: "RS",
          gradient: "from-purple-500 to-indigo-600",
          rating: "★★★★★",
        },
        {
          text: "We really liked the services of Digital In App. They have done excellent work on my website, GMB page, Google Ads, Meta Ads, and SEO. Their team is professional, and we are very satisfied with the results.",
          name: "Jagdish Nath Goswami",
          role: "Founder & CEO, Jrhotel Guest Place",
          initials: "JG",
          gradient: "from-pink-500 to-rose-600",
          rating: "★★★★★",
        },
        {
          text: "Digital In App team delivered a clean, modern and reliable digital solution. Their communication, design sense and support were very helpful for our business growth.",
          name: "Nathan Junior",
          role: "CEO, Hi-Tech Parks",
          initials: "NJ",
          gradient: "from-emerald-500 to-teal-600",
          rating: "★★★★★",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-50 p-1 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-purple-200 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* CARD GLOW */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-10`}
          />

          {/* SHINE EFFECT */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

          <div className="relative h-full rounded-[30px] bg-white p-7">
            {/* QUOTE + RATING */}
            <div className="mb-7 flex items-start justify-between gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-4xl font-black text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                “
              </div>

              <div className="text-right">
                <p className="text-sm tracking-widest text-yellow-500">
                  {item.rating}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  Client Review
                </p>
              </div>
            </div>

            {/* TEXT */}
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              {item.text}
            </p>

            {/* USER */}
            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-sm font-black text-white shadow-lg`}
              >
                {item.initials}
              </div>

              <div>
                <h3 className="text-base font-black text-slate-950">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>

            {/* BOTTOM LINE */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
            />
          </div>
        </div>
      ))}
    </div>
    <h2 className="align-center mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
        Client{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
          Testimonial
        </span>
        Videos
      </h2>
      <div className="mt-12 grid gap-7 md:grid-cols-3">
  {[
    {
      video: video1,
      name: "Digvijay Singh",
      role: "Founder,Tatto Galaxy",
      initials: "DS",
      gradient: "from-purple-500 to-indigo-600",
      rating: "★★★★★",
    },
    {
      video: video2,
      name: "Enock",
      role: "Founder, NIGOOT",
      initials: "E",
      gradient: "from-pink-500 to-rose-600",
      rating: "★★★★★",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-50 p-1 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-purple-200 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-10`}
      />

      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

      <div className="relative rounded-[30px] bg-white overflow-hidden">
        {/* Video */}
        <div className="overflow-hidden">
          <video
            controls
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>

        {/* Details */}
        <div className="p-7">
          <div className="mb-6 flex items-center justify-between">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-sm font-black text-white shadow-lg`}
            >
              {item.initials}
            </div>

            <div className="text-right">
              <p className="text-sm tracking-widest text-yellow-500">
                {item.rating}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-400">
                Video Review
              </p>
            </div>
          </div>

          <h3 className="text-lg font-black text-slate-950">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.role}
          </p>

          <div
            className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
          />
        </div>
      </div>
    </div>
  ))}
</div>
    {/* TRUST STRIP */}
    <div className="mt-12 rounded-[34px] border border-purple-100 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-6 text-center shadow-2xl shadow-purple-500/20 md:p-8">
      <h3 className="text-2xl font-black text-white md:text-3xl">
        Trusted by growing businesses
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
        We focus on clean design, reliable development, transparent
        communication and long-term support.
      </p>

      <a
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-purple-100"
      >
        Start Your Project
        <ArrowRight size={17} />
      </a>
    </div>
  </div>
</section>)
});

export default Testimonials;