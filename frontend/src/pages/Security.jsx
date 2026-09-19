import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function Security() {
  const items = [
    {
      title: "Access control",
      points: [
        "Role-based access aligned to project responsibilities.",
        "Least-privilege approach for systems and tools.",
        "Credential rotation and access reviews as required.",
      ],
    },

    {
      title: "Data protection",
      points: [
        "Encryption in transit for client-facing systems.",
        "Restricted access to production data and backups.",
        "Secure file sharing for project assets.",
      ],
    },

    {
      title: "Application security",
      points: [
        "Secure coding standards and review checkpoints.",
        "Dependency updates and vulnerability checks.",
        "Audit logging and monitoring as scoped.",
      ],
    },

    {
      title: "Business continuity",
      points: [
        "Regular backups and recovery procedures when applicable.",
        "Staging and production separation for releases.",
        "Incident handling based on project severity.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 text-sm text-slate-500 lg:px-8">
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

          <span>Security</span>
        </div>
      </section>

      {/* HERO */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              Security overview
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-950 md:text-5xl">
              Security Overview
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              We apply security best practices across access control,
              development, and operations. This summary covers the baseline
              measures we follow for client work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[26px] border border-slate-200 bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  <ShieldCheck size={22} />
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

          {/* CONTACT */}
          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-slate-950">
              Security contact
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Report security questions to{" "}
              <a
                href="mailto:info@digitalinapp.in"
                className="font-semibold text-purple-600"
              >
                info@digitalinapp.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Security;