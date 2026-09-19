import {
  Code2,
  Smartphone,
  LayoutDashboard,
  Cloud,
  ShoppingBag,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    desc: "Modern business websites and web apps built with performance and clean UI.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and hybrid apps with scalable backend integration.",
  },
  {
    icon: LayoutDashboard,
    title: "ERP & Admin Solutions",
    desc: "Custom dashboards, reports, billing, attendance and workflow automation.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment, server setup, CI/CD, backups and performance optimisation.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Online stores with products, cart, payments and order management.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Premium interfaces, wireframes and modern product design systems.",
  },
];

function ServicesPage() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Services
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Services designed for your business growth
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            We provide end-to-end digital services from planning to design,
            development, deployment and support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-indigo-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-500">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;