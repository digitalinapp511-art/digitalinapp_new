import {
  CheckCircle2,
  ShieldCheck,
  Users,
  Lock,
  Settings,
} from "lucide-react";

export function Avatar({ initials = "AD" }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-200 bg-gradient-to-br from-purple-100 to-pink-100 text-xs font-black text-purple-700">
      {initials}
    </div>
  );
}

export function Badge({ label }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Leave: "bg-orange-100 text-orange-700",
    Inactive: "bg-slate-100 text-slate-600",
    Planning: "bg-slate-100 text-slate-600",
    Development: "bg-purple-100 text-purple-700",
    Testing: "bg-orange-100 text-orange-700",
    Completed: "bg-green-100 text-green-700",
    Published: "bg-green-100 text-green-700",
    published: "bg-green-100 text-green-700",
    Draft: "bg-orange-100 text-orange-700",
    draft: "bg-orange-100 text-orange-700",
    New: "bg-purple-100 text-purple-700",
    Contacted: "bg-orange-100 text-orange-700",
    Qualified: "bg-green-100 text-green-700",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ${styles[label] || "bg-slate-100 text-slate-600"}`}>
      {label}
    </span>
  );
}

export function ProgressBar({ value }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <div
        style={{ width: `${value}%` }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
      />
    </div>
  );
}

export function EmptyState({ title, text }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
      <CheckCircle2 className="mx-auto text-purple-400" size={32} />
      <h3 className="mt-3 font-black text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
    </div>
  );
}

export function PageHeader({ title, subtitle, button, onButtonClick }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-black uppercase tracking-widest text-purple-600">
          DigitalInApp Admin
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>
      {button && (
        <button
          onClick={onButtonClick}
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
        >
          {button}
        </button>
      )}
    </div>
  );
}

export { ShieldCheck, Users, Lock, Settings };
