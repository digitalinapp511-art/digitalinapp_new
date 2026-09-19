import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { pricing } from "../data/siteData";

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#050010] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-fuchsia-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle
          badge="PRICING"
          title="Simple pricing for growing businesses"
          text="Choose a package and we’ll customize it based on your project scope and features."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pricing.map((item, index) => (
            <div
              key={item.name}
              className="group relative rounded-[32px] p-[1px]"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-30 blur-md transition group-hover:opacity-80"></div>

              <div className="relative rounded-[32px] bg-[#0b0120]/90 p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Highlight */}
                {index === 1 && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-1 text-xs font-black">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-black">{item.name}</h3>

                {/* Price */}
                <p className="mt-4 bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-5xl font-black text-transparent">
                  {item.price}
                </p>

                <p className="mt-4 text-sm text-slate-300">
                  {item.desc}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Features */}
                <ul className="space-y-3">
                  {[
                    "Premium UI Design",
                    "Fast Performance",
                    "Clean Scalable Code",
                    "SEO Friendly Setup",
                    "Deployment Support",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold transition ${
                    index === 1
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-600 shadow-lg shadow-purple-500/30 hover:scale-105"
                      : "border border-white/15 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Get Proposal
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;