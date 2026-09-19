import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/siteData";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FAQ"
          title="Frequently asked questions"
          text="Here are some quick answers that help visitors understand your service, process and support."
        />

        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                >
                  <span className="text-lg font-bold text-slate-900 md:text-xl">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-indigo-600 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8">
                    <p className="text-base leading-8 text-slate-500">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;