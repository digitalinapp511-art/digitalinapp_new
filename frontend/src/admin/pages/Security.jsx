import { useState } from "react";
import { BarChart3, Bell, BriefcaseBusiness, CheckCircle2, FileText, Lock, Settings, ShieldCheck, Users, Search, Menu, X, ChevronLeft, ChevronRight, LogOut } from "lucide-react";

import { Avatar, Badge, ProgressBar, PageHeader, EmptyState } from "../components/AdminUI";

function Security() {
  const securityCards = [
    {
      title: "Data Backup",
      icon: ShieldCheck,
      items: [
        "Last backup: Today 3:00 AM",
        "Auto-backup: Every 6 hours",
        "Retention: 30 days",
      ],
    },
    {
      title: "Integrations",
      icon: Settings,
      items: [
        "Google Calendar — Connected",
        "Gmail SMTP — Connected",
        "Analytics — Active",
      ],
    },
    {
      title: "Role Access",
      icon: Users,
      items: ["Admin: 2 users", "Developer: 3 users", "View only: 1 user"],
    },
    {
      title: "Security Settings",
      icon: Lock,
      items: ["2FA: Enabled", "SSL: Active", "Failed attempts: 0"],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Security & Settings"
        subtitle="Manage access, backup and company security settings."
        button="Update Settings"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {securityCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {card.title}
                </h3>
              </div>

              <div className="space-y-3">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-600"
                  >
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Security;
