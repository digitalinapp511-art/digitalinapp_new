import { ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { processSteps } from "../data/siteData";

function Process() {
  return (
    <section
      id="process"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="PROCESS"
          title="A clear process from idea to launch"
          text="We follow a structured workflow so your project stays on track, easy to understand and ready for growth."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-extrabold text-slate-200 transition group-hover:text-indigo-100">
                  {item.step}
                </span>

                <div className="rounded-full bg-purple-50 p-3 text-indigo-600">
                  <ArrowRight size={18} />
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;