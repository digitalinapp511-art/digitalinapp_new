import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function ContactPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#faf7ff_0%,#ffffff_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#1e1b4b_55%,#6d28d9_100%)] p-8 text-white shadow-[0_20px_60px_rgba(79,70,229,0.18)] md:p-10">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              CONTACT US
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Let’s discuss your project
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
              Share your idea and we’ll help you with the right solution,
              timeline and plan.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                <Mail size={22} />
                <p className="font-semibold">info@digitalinapp.com</p>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                <Phone size={22} />
                <p className="font-semibold">+91 7419064919</p>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                <MapPin size={22} />
                <p className="font-semibold">India • THDC Colony, Dehrakhas, Patel Nagar, Dehradun, Uttarakhand 248001</p>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-3xl font-bold text-slate-950">
              Send us a message
            </h3>

            <div className="mt-8 grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none"
              />
              <textarea
                rows="6"
                placeholder="Tell us about your project"
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:scale-105"
            >
              Send Enquiry
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;