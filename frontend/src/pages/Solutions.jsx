import { ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { solutions } from "../data/siteData";

function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="SOLUTIONS"
          title="Smart digital solutions for modern businesses"
          text="We design and develop practical systems that improve operations, customer experience and business growth."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
            >
              <div className="inline-flex rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                Business Solution
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-500">
                {item.text}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-indigo-100 bg-purple-50 px-4 py-2 text-sm font-medium text-indigo-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-indigo-600 transition group-hover:gap-3"
              >
                Discuss Project
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;