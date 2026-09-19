import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

function Privacy() {
  const items = [
    {
      title: "Information we collect",
      points: [
        "Basic contact details submitted through forms.",
        "Project communication and support information.",
        "Technical details required for troubleshooting.",
      ],
    },

    {
      title: "How we use data",
      points: [
        "To respond to enquiries and proposals.",
        "To manage projects and support requests.",
        "To improve reliability and delivery workflows.",
      ],
    },

    {
      title: "Data protection",
      points: [
        "Restricted access to sensitive information.",
        "Secure storage and encrypted communication.",
        "No selling of personal information.",
      ],
    },

    {
      title: "Cookies & tracking",
      points: [
        "Only essential cookies are used when required.",
        "No aggressive advertising trackers.",
        "Privacy-friendly analytics when enabled.",
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

          <span>Privacy</span>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
            Privacy policy
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            This page explains how we collect, use, and protect information
            shared through our website and client engagements.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[26px] border border-slate-200 bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  <Lock size={22} />
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

export default Privacy;