import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, Headphones, Mail } from "lucide-react";

function TrustCenter() {
  const cards = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Security",
      text: "Our baseline security practices for access control, data handling, and operations.",
      button: "View security overview",
      link: "/security",
    },
    {
      icon: <Lock size={22} />,
      title: "Privacy",
      text: "How we collect and use data on the website and in client engagements.",
      button: "Read privacy policy",
      link: "/privacy",
    },
    {
      icon: <FileText size={22} />,
      title: "Terms",
      text: "Website terms of use and general guidelines for working with us.",
      button: "Review terms",
      link: "/terms",
    },
    {
      icon: <Headphones size={22} />,
      title: "Support",
      text: "How to reach us, response expectations, and support options.",
      button: "Support information",
       link: "/support",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="font-medium text-purple-600">
              Home
            </Link>
            <span>/</span>
            <span>Trust Center</span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              Trust at Digital in App
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-950 md:text-5xl">
              Trust Center
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              Clear, practical information about how we handle security,
              privacy, support, and terms. Use these pages as a quick reference
              before you start a project.
            </p>
          </div>

          <div className="mx-auto mb-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
             "📍Dehradun, Uttrakhand (IN)",
           "🏢 MSME registered ",
             " ⬢ GSTIN 05AAZFD3563E1Z8 ",
             " 🪪 PAN AAZFD3563E ",
           " ⏰ Support hours: 9:00 AM - 9:00 PM IST ",
            "🔒 Privacy-friendly measurement; essential cookies only ",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <Link
  to={item.link}
  className="mt-6 inline-flex text-sm font-semibold text-purple-600"
>
  {item.button}
</Link>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-7 text-center">
            <h2 className="text-2xl font-bold text-slate-950">
              Need a security or compliance answer?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Contact us with your requirements and we will share details that
              apply to your project.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Talk to the team
              </Link>

              <a
                href="mailto:info@digitalinapp.in"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <Mail size={16} />
                Email us
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}

export default TrustCenter;