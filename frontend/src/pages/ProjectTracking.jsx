import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  Circle,
  CalendarDays,
  User,
  Code2,
  AlertCircle,
} from "lucide-react";

function ProjectTracking() {
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");

  // Demo project data
  const demoProject = {
    projectId: "PRJ-2026-001",
    title: "E-Commerce Website",
    client: "ABC Company",
    category: "Website Development",
    technology: "React, Node.js, MongoDB",
    startDate: "2026-09-10",
    due: "2026-10-30",
    priority: "High",
    progress: 65,
    status: "Development",

    team: [
      {
        name: "Himanshu Saini",
        role: "Developer",
      },
      {
        name: "Ritik Saini",
        role: "UI Designer",
      },
    ],

    timeline: [
      {
        title: "Project Created",
        date: "10 Sep 2026",
        completed: true,
      },
      {
        title: "Planning",
        date: "12 Sep 2026",
        completed: true,
      },
      {
        title: "Development",
        date: "13 Sep 2026",
        completed: true,
      },
      {
        title: "Testing",
        date: "Pending",
        completed: false,
        current: true,
      },
      {
        title: "Completed",
        date: "Pending",
        completed: false,
      },
    ],
  };

  const handleTrack = () => {
    setError("");

    if (!projectId.trim()) {
      setError("Please enter Project ID");
      return;
    }

    if (projectId.toUpperCase() === demoProject.projectId) {
      setProject(demoProject);
    } else {
      setProject(null);
      setError("Project not found. Please check Project ID.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">

      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">
            Project Tracking
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Track your project using Project ID
          </p>
        </div>

        {/* Search Box */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">

            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Enter Project ID e.g. PRJ-2026-001"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleTrack();
                  }
                }}
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            <button
              onClick={handleTrack}
              className="rounded-2xl bg-purple-600 px-8 py-4 text-sm font-black text-white transition hover:bg-purple-700"
            >
              Track Project
            </button>
          </div>

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-600">
              <AlertCircle size={18} />
              {error}
            </div>
          )}
        </div>

        {/* Project Result */}
        {project && (
          <div className="mt-8">

            {/* Project Header */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-purple-600">
                    Project ID
                  </p>

                  <h2 className="mt-1 text-2xl font-black text-slate-900">
                    {project.projectId}
                  </h2>

                  <p className="mt-2 text-lg font-bold text-slate-700">
                    {project.title}
                  </p>

                  <p className="text-sm text-slate-500">
                    {project.client}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700">
                    {project.status}
                  </span>

                  <p className="mt-3 text-3xl font-black text-slate-900">
                    {project.progress}%
                  </p>

                  <p className="text-xs font-semibold text-slate-400">
                    Project Progress
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-purple-600 transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

              <h3 className="text-xl font-black text-slate-900">
                Project Journey
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Track the current stage of your project
              </p>

              <div className="mt-8 overflow-x-auto">
                <div className="flex min-w-[700px]">

                  {project.timeline.map((item, index) => (
                    <div
                      key={item.title}
                      className="relative flex-1 text-center"
                    >

                      {/* Line */}
                      {index !== project.timeline.length - 1 && (
                        <div
                          className={`absolute left-1/2 top-5 h-1 w-full ${
                            item.completed
                              ? "bg-purple-600"
                              : "bg-slate-200"
                          }`}
                        />
                      )}

                      {/* Circle */}
                      <div className="relative z-10 flex justify-center">

                        {item.completed ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg">
                            <CheckCircle2 size={20} />
                          </div>
                        ) : item.current ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-purple-200 bg-purple-600 text-white">
                            <Clock size={18} />
                          </div>
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-300">
                            <Circle size={18} />
                          </div>
                        )}

                      </div>

                      <h4 className="mt-4 text-sm font-black text-slate-800">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs font-semibold text-slate-400">
                        {item.date}
                      </p>

                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h3 className="mb-5 text-xl font-black text-slate-900">
                  Project Details
                </h3>

                <div className="space-y-4">

                  <Detail
                    icon={<Code2 size={18} />}
                    label="Technology"
                    value={project.technology}
                  />

                  <Detail
                    icon={<CalendarDays size={18} />}
                    label="Start Date"
                    value={project.startDate}
                  />

                  <Detail
                    icon={<CalendarDays size={18} />}
                    label="Due Date"
                    value={project.due}
                  />

                  <Detail
                    icon={<AlertCircle size={18} />}
                    label="Priority"
                    value={project.priority}
                  />

                </div>
              </div>

              {/* Team */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h3 className="mb-5 text-xl font-black text-slate-900">
                  Assigned Team
                </h3>

                <div className="space-y-4">

                  {project.team.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 font-black text-purple-700">
                        {member.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <p className="font-black text-slate-800">
                          {member.name}
                        </p>

                        <p className="text-xs font-semibold text-slate-400">
                          {member.role}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}


/* Detail Component */
function Detail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 pb-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-black text-slate-800">
          {value}
        </p>
      </div>

    </div>
  );
}

export default ProjectTracking;