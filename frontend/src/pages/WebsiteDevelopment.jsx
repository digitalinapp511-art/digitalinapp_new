import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Zap,
  Clock,
  MapPin,
  Code2,
  Layers,
  ShieldCheck,
  Search,
  BarChart3,
  Server,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function WebsiteDevelopment() {
  const stats = [
    {
      icon: <Zap size={22} />,
      title: "Speed + SEO",
      text: "Core Web Vitals friendly builds",
    },
    {
      icon: <Clock size={22} />,
      title: "3-8 weeks",
      text: "Typical launch window",
    },
    {
      icon: <MapPin size={22} />,
      title: "Dehradun | Uttrakhand | India",
      text: "Local + pan-India delivery",
    },
  ];

  const builds = [
    "Company and institution sites",
    "Conversion landing pages",
    "Client and staff portals",
    "E-commerce & catalog sites",
    "CMS websites & content systems",
    "Integrations & automation",
  ];

  const tech = [
    {
      icon: <Code2 />,
      title: "Frontend",
      items: ["React", "Next.js", "HTML/CSS", "Tailwind", "Bootstrap"],
    },
    {
      icon: <Layers />,
      title: "Backend",
      items: ["Laravel", "PHP", "Node", "REST APIs"],
    },
    {
      icon: <Server />,
      title: "Data",
      items: ["MySQL", "PostgreSQL", "Redis", "Exports"],
    },
    {
      icon: <ShieldCheck />,
      title: "Security",
      items: ["HTTPS", "Rate limiting", "Auth/roles", "Hardening"],
    },
    {
      icon: <Zap />,
      title: "Performance",
      items: ["Image optimization", "Caching", "CDN", "Core Web Vitals"],
    },
    {
      icon: <BarChart3 />,
      title: "Hosting & deployments",
      items: ["VPS", "AWS/DO", "CI/CD", "Monitoring"],
    },
  ];

  const process = [
    "Discovery and sitemap",
    "Copy and design",
    "Build and QA",
    "Launch and training",
    "Support and improvements",
  ];

  const faqs = [
    "How long does a typical website take?",
    "Can you refresh an existing website?",
    "Will my team be able to update content?",
    "Do you improve site speed and SEO?",
    "Do you build portals and dashboards?",
    "Do you handle hosting, SSL and deployments?",
    "Can you build for Dehradun local search?",
    "Do you provide maintenance after launch?",
  ];

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-100px] bottom-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
              Web Development Services
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Web development that is fast and search-friendly
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Digial in App designs and develops responsive, SEO-ready
              websites and web applications for Indian businesses. From a clean
              company site in Dehradun to portals connected to ERP or
              internal workflows, we help you launch with clarity, speed and a
              stable foundation.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Business websites, landing pages, portals and dashboards",
                "React, Laravel, PHP and modern stacks with clean admin flows",
                "SEO basics, schema, Core Web Vitals, local search and tracking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-300" size={20} />
                  <span className="font-semibold text-slate-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-1"
              >
                Get a web development quote
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/917419064919"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-black text-white shadow-xl transition hover:-translate-y-1"
              >
                <FaWhatsapp size={21} />
                WhatsApp: +91-7419064919
              </a>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[28px] bg-white p-6 text-slate-950">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Globe2 size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-black">
                    Digital in app web development team
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Web-first delivery pods for startups, institutes, hospitals
                    and SMEs across India.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="mb-2 text-purple-700">{item.icon}</div>
                    <h4 className="font-black">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">Live Snapshot | Web</p>
                <h4 className="mt-1 text-xl font-black">
                  Today's website health
                </h4>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-black">90+</p>
                    <p className="text-xs text-slate-300">Speed score</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">↑</p>
                    <p className="text-xs text-slate-300">Leads captured</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">Ready</p>
                    <p className="text-xs text-slate-300">SEO basics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="What we build"
            title="Web experiences that earn trust."
            text="Content-first websites and web apps with clear navigation, strong calls to action, and fast load times across devices."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builds.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-950">{item}</h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Fast, responsive and conversion-focused setup with clean
                  structure, enquiry actions and SEO-ready pages.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Tech stack"
            title="Modern stacks, stable foundations."
            text="We pick the stack based on your needs: speed, editing, integrations, and long-term maintenance."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tech.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Process"
            title="From sitemap to launch."
            text="A simple, predictable flow to keep content, design, and development aligned from day one."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-3xl font-black text-purple-600">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-black text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="FAQs"
            title="Answers before you start."
            text="Quick, practical responses to common website and web-app build questions."
            dark
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-bold">{faq}</h3>
              </div>
            ))}
          </div>

          <div
            id="contact"
            className="mt-12 rounded-[32px] bg-white p-8 text-slate-950 md:p-10"
          >
            <h2 className="text-3xl font-black">
              Ready to launch or refresh your website?
            </h2>
            <p className="mt-3 text-slate-600">
              Share your goals and pages - we'll respond with a simple
              structure, timeline and budget range.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white"
              >
                Start a web project conversation
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/917419064919"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-black text-white"
              >
                <FaWhatsapp size={21} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ badge, title, text, dark = false }) {
  return (
    <div className="max-w-3xl">
      <span
        className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${
          dark
            ? "bg-white/10 text-white"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`mt-5 text-3xl font-black tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-8 ${
          dark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default WebsiteDevelopment;