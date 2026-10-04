import { ArrowRight, GraduationCap } from "lucide-react";

const modules = [
  "Student management",
  "Fees management",
  "Attendance system",
  "Parent communication",
  "Homework & notices",
  "Reports & certificates",
];

function SchoolErp() {
  return (
    <section className="bg-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-5 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase">
            School ERP
          </p>
          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            Complete school ERP for students, parents and staff.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Manage admissions, fees, attendance, notices, exams, reports and
            parent communication from one digital platform.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-950"
          >
            Get School ERP <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-3">
        {modules.map((item) => (
          <div key={item} className="rounded-[28px] border bg-white p-7 shadow-sm">
            <GraduationCap className="mb-5 text-indigo-600" size={34} />
            <h3 className="text-xl font-black text-slate-950">{item}</h3>
            <p className="mt-4 text-slate-500">
              Simple and powerful school management module for daily operations.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SchoolErp;