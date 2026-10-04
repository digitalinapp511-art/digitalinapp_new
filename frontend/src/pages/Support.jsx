import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

function Support() {
  const items = [
    {
      title: "Support availability",
      points: [
        "Support hours: 9:00 AM - 9:00 PM IST.",
        "Critical issues handled based on severity.",
        "Weekend support available for selected plans.",
      ],
    },

    {
      title: "Project support",
      points: [
        "Bug fixes and issue monitoring.",
        "Performance and reliability checks.",
        "Guidance for deployments and updates.",
      ],
    },

    {
      title: "Communication",
      points: [
        "Updates shared through email or project tools.",
        "Weekly review calls when applicable.",
        "Transparent status and release tracking.",
      ],
    },

    {
      title: "Maintenance",
      points: [
        "Regular dependency and security updates.",
        "Monitoring support for production systems.",
        "Optional long-term maintenance contracts.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 text-sm text-slate-500">
          <Link to="/" className="font-medium text-purple-600">
            Home
          </Link>

          <span>/</span>

          <Link
            to="/trust-center"
            className="font-medium text-purple-600"
          >
            Trust Center
          </Link>

          <span>/</span>

          <span>Support</span>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
            Support information
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Support Information
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Information about support availability, response expectations, and
            maintenance options for client projects.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[26px] border border-slate-200 bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  <Headphones size={22} />
                </div>

                <h2 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h2>

                <div className="mt-5 space-y-3">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-sm leading-7 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-purple-600" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;