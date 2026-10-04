import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

const features = [
  "Android & iOS app development",
  "React Native / Expo apps",
  "API integration",
  "Admin panel connectivity",
  "Push notifications",
  "App store ready builds",
];

function MobileAppDevelopment() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-5 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase">
            Mobile App Development
          </p>
          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            Build powerful mobile apps for Android and iOS.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We create fast, secure and modern mobile apps with smooth UI,
            business features, API integration and admin dashboard support.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-950"
          >
            Start App Project <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item}
            className="rounded-[28px] border bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <Smartphone className="mb-5 text-indigo-600" size={34} />
            <h3 className="text-xl font-black text-slate-950">{item}</h3>
            <p className="mt-4 text-slate-500">
              Clean, scalable and user-friendly development for real business
              needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileAppDevelopment;