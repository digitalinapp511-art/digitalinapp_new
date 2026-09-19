import { useEffect, useState } from "react";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import axios from "axios";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "projects", icon: BriefcaseBusiness, label: "Projects" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "team", icon: ShieldCheck, label: "Team" },
  { id: "content", icon: FileText, label: "Content" },
  { id: "blogs", icon: FileText, label: "Blogs" },
  { id: "security", icon: Lock, label: "Security" },
  { id: "blogList", icon: FileText, label: "BlogList" },

];

const stats = [
  {
    label: "Total Projects",
    value: "48",
    delta: "+6 this month",
    icon: BriefcaseBusiness,
  },
  {
    label: "Active Clients",
    value: "31",
    delta: "+3 new clients",
    icon: Users,
  },
  {
    label: "Monthly Revenue",
    value: "₹9.4L",
    delta: "+18% growth",
    icon: BarChart3,
  },
  {
    label: "Pending Tasks",
    value: "127",
    delta: "12 overdue",
    icon: CheckCircle2,
  },
];

const projects = [
  {
    name: "DigitalInApp Website",
    client: "DigitalInApp",
    status: "Development",
    progress: 72,
    due: "Jun 15",
    team: ["SC", "VK", "AK"],
  },
  {
    name: "School ERP",
    client: "Bright School",
    status: "Testing",
    progress: 88,
    due: "May 30",
    team: ["SC", "RP"],
  },
  {
    name: "E-Commerce Platform",
    client: "ShopMax",
    status: "Planning",
    progress: 25,
    due: "Jul 08",
    team: ["AK", "NG"],
  },
  {
    name: "Mobile App UI",
    client: "Startup India",
    status: "Completed",
    progress: 100,
    due: "May 10",
    team: ["SC", "VK"],
  },
];

const clients = [
  {
    name: "DigitalInApp",
    contact: "Sangam Choudhary",
    projects: 4,
    status: "Active",
    value: "₹3.8L",
    lastBill: "May 15",
  },
  {
    name: "Bright School",
    contact: "Admin Team",
    projects: 2,
    status: "Active",
    value: "₹2.5L",
    lastBill: "May 01",
  },
  {
    name: "ShopMax",
    contact: "Rahul Sharma",
    projects: 1,
    status: "Active",
    value: "₹1.2L",
    lastBill: "Apr 28",
  },
  {
    name: "Startup India",
    contact: "Priya Verma",
    projects: 1,
    status: "Inactive",
    value: "₹90K",
    lastBill: "May 10",
  },
];

const team = [
  {
    name: "Sangam Choudhary",
    role: "Full Stack Developer",
    status: "Active",
    hours: 42,
    project: "DigitalInApp Website",
    initials: "SC",
  },
  {
    name: "Vikrant Bhawani",
    role: "Business Partner",
    status: "Active",
    hours: 36,
    project: "Client Handling",
    initials: "VK",
  },
  {
    name: "Amit Kumar",
    role: "Frontend Developer",
    status: "Active",
    hours: 34,
    project: "E-Commerce Platform",
    initials: "AK",
  },
  {
    name: "Neha Gupta",
    role: "UI/UX Designer",
    status: "Leave",
    hours: 0,
    project: "Mobile App UI",
    initials: "NG",
  },
];

const posts = [
  {
    title: "Why Every Business Needs a Website",
    type: "Blog",
    status: "Published",
    date: "May 15",
  },
  {
    title: "DigitalInApp Company Portfolio",
    type: "Portfolio",
    status: "Published",
    date: "May 10",
  },
  {
    title: "School ERP Case Study",
    type: "Case Study",
    status: "Draft",
    date: "Apr 28",
  },
];

const leads = [
  {
    name: "Deepa Nair",
    company: "TechFlow",
    source: "Contact Form",
    date: "May 20",
    status: "New",
  },
  {
    name: "Sameer Patel",
    company: "Nova Retail",
    source: "Website",
    date: "May 19",
    status: "Contacted",
  },
  {
    name: "Rina Thomas",
    company: "GreenBuild",
    source: "Referral",
    date: "May 18",
    status: "Qualified",
  },
];

const activityLog = [
  {
    user: "Sangam",
    action: "Updated homepage premium UI section",
    time: "2m ago",
  },
  {
    user: "Admin",
    action: "New enquiry received from website",
    time: "18m ago",
  },
  {
    user: "Vikrant",
    action: "Closed client follow-up task",
    time: "1h ago",
  },
  {
    user: "System",
    action: "Website backup completed successfully",
    time: "3h ago",
  },
];

function Avatar({ initials }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-200 bg-gradient-to-br from-purple-100 to-pink-100 text-xs font-black text-purple-700">
      {initials}
    </div>
  );
}

function Badge({ label }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Leave: "bg-orange-100 text-orange-700",
    Inactive: "bg-slate-100 text-slate-600",
    Planning: "bg-slate-100 text-slate-600",
    Development: "bg-purple-100 text-purple-700",
    Testing: "bg-orange-100 text-orange-700",
    Completed: "bg-green-100 text-green-700",
    Published: "bg-green-100 text-green-700",
    Draft: "bg-orange-100 text-orange-700",
    New: "bg-purple-100 text-purple-700",
    Contacted: "bg-orange-100 text-orange-700",
    Qualified: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-black ${styles[label] || "bg-slate-100 text-slate-600"
        }`}
    >
      {label}
    </span>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <div
        style={{ width: `${value}%` }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
      />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-widest text-purple-600">
          Overview
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          Welcome back, Admin
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Manage DigitalInApp projects, clients, content, team and security.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-2xl" />

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200">
                <Icon size={24} />
              </div>

              <h3 className="relative text-3xl font-black text-slate-950">
                {item.value}
              </h3>
              <p className="relative mt-1 text-sm font-bold text-slate-500">
                {item.label}
              </p>
              <p className="relative mt-3 text-xs font-black text-purple-600">
                {item.delta}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        <ProjectTable />

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black text-slate-950">Activity Log</h2>

          <div className="mt-5 space-y-4">
            {activityLog.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Bell size={16} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-black text-slate-950">
                    {item.user}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {item.action}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-400">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectTable() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-950">
            Active Projects
          </h2>
          <p className="text-sm text-slate-500">
            Project progress and delivery status.
          </p>
        </div>

        <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b bg-slate-50 text-left text-xs uppercase tracking-widest text-slate-500">
              <th className="px-4 py-4">Project</th>
              <th className="px-4 py-4">Client</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Progress</th>
              <th className="px-4 py-4">Due</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item) => (
              <tr key={item.name} className="border-b last:border-b-0">
                <td className="px-4 py-4">
                  <p className="font-black text-slate-950">{item.name}</p>
                  <div className="mt-2 flex -space-x-2">
                    {item.team.map((member) => (
                      <Avatar key={member} initials={member} />
                    ))}
                  </div>
                </td>

                <td className="px-4 py-4 text-sm font-semibold text-slate-500">
                  {item.client}
                </td>

                <td className="px-4 py-4">
                  <Badge label={item.status} />
                </td>

                <td className="px-4 py-4">
                  <div className="mb-2 text-xs font-black text-slate-500">
                    {item.progress}%
                  </div>
                  <ProgressBar value={item.progress} />
                </td>

                <td className="px-4 py-4 text-sm font-bold text-slate-500">
                  {item.due}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [projectList, setProjectList] = useState(() => {
    const savedProjects = localStorage.getItem("digitalinapp_projects");

    if (savedProjects) {
      return JSON.parse(savedProjects);
    }

    return projects;
  });

  const [formData, setFormData] = useState({
    title: "",
    category: "Website Development",
    client: "",
    technology: "",
    budget: "",
    startDate: "",
    due: "",
    status: "Development",
    priority: "Medium",
    team: "",
    description: "",
  });

  const filters = ["All", "Planning", "Development", "Testing", "Completed"];

  const filtered =
    filter === "All"
      ? projectList
      : projectList.filter((item) => item.status === filter);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getProgressByStatus = (status) => {
    if (status === "Planning") return 10;
    if (status === "Development") return 45;
    if (status === "Testing") return 80;
    if (status === "Completed") return 100;
    return 0;
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.client || !formData.category || !formData.due) {
      alert("Please fill project title, category, client name and deadline");
      return;
    }

    const newProject = {
      name: formData.title,
      category: formData.category,
      client: formData.client,
      technology: formData.technology,
      budget: formData.budget,
      startDate: formData.startDate,
      due: formData.due,
      status: formData.status,
      priority: formData.priority,
      description: formData.description,
      progress: getProgressByStatus(formData.status),
      team: formData.team
        ? formData.team
          .split(",")
          .map((item) => item.trim().toUpperCase())
          .filter(Boolean)
        : ["AD"],
    };

    const updatedProjects = [newProject, ...projectList];

    setProjectList(updatedProjects);
    localStorage.setItem(
      "digitalinapp_projects",
      JSON.stringify(updatedProjects)
    );

    setFormData({
      title: "",
      category: "Website Development",
      client: "",
      technology: "",
      budget: "",
      startDate: "",
      due: "",
      status: "Development",
      priority: "Medium",
      team: "",
      description: "",
    });

    setShowForm(false);
  };

  const handleDeleteProject = (projectName) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    const updatedProjects = projectList.filter(
      (item) => item.name !== projectName
    );

    setProjectList(updatedProjects);
    localStorage.setItem(
      "digitalinapp_projects",
      JSON.stringify(updatedProjects)
    );
  };

  return (
    <div>
      <PageHeader
        title="Projects & Tasks"
        subtitle="Manage projects, progress and delivery timeline."
        button="+ New Project"
        onButtonClick={() => setShowForm(true)}
      />

      {/* ADD PROJECT FORM */}
      {showForm && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Add Development Project
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Fill project details and save it.
              </p>
            </div>

            <button
              onClick={() => setShowForm(false)}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
            >
              Close
            </button>
          </div>

          <form
            onSubmit={handleAddProject}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Development Project Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Website Development Project"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Project Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="ERP / CRM Panel">ERP / CRM Panel</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="School ERP">School ERP</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Custom Software">Custom Software</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Client Name *
              </label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="Client / Company Name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Technology Stack
              </label>
              <input
                type="text"
                name="technology"
                value={formData.technology}
                onChange={handleChange}
                placeholder="React, Node, MongoDB"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Project Budget
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="₹25,000"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Project Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Planning">Planning</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Deadline *
              </label>
              <input
                type="date"
                name="due"
                value={formData.due}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Project Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Assigned Team
              </label>
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="SC, VK, AK"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
              <p className="mt-2 text-xs font-semibold text-slate-400">
                Use comma separated initials. Example: SC, VK, AK
              </p>
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Write project requirements, modules, features, pages, API details..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                Save Development Project
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FILTERS */}
      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-xs font-black ${filter === item
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-white text-slate-500 ring-1 ring-slate-200"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={`${item.name}-${item.client}`}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-slate-950">{item.name}</h3>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item.client}
                  </p>

                  {item.category && (
                    <p className="mt-2 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-700">
                      {item.category}
                    </p>
                  )}
                </div>

                <Badge label={item.status} />
              </div>

              {(item.technology || item.budget || item.priority) && (
                <div className="mb-5 grid gap-3 rounded-2xl bg-slate-50 p-4">
                  {item.technology && (
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                        Technology
                      </p>
                      <p className="mt-1 text-sm font-black text-slate-700">
                        {item.technology}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    {item.budget && (
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                          Budget
                        </p>
                        <p className="mt-1 text-sm font-black text-green-600">
                          {item.budget}
                        </p>
                      </div>
                    )}

                    {item.priority && (
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                          Priority
                        </p>
                        <p className="mt-1 text-sm font-black text-orange-500">
                          {item.priority}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <div className="mb-2 flex justify-between text-xs font-black text-slate-500">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <ProgressBar value={item.progress} />
              </div>

              {item.description && (
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {item.team.map((member) => (
                    <Avatar key={member} initials={member} />
                  ))}
                </div>

                <div className="text-right">
                  {item.startDate && (
                    <p className="text-xs font-bold text-slate-400">
                      Start: {item.startDate}
                    </p>
                  )}
                  <p className="text-xs font-black text-slate-500">
                    Due: <span className="text-orange-500">{item.due}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-full bg-purple-100 px-4 py-2.5 text-xs font-black text-purple-700">
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteProject(item.name)}
                  className="flex-1 rounded-full bg-red-100 px-4 py-2.5 text-xs font-black text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-purple-200 bg-white p-10 text-center">
          <h3 className="text-2xl font-black text-slate-950">
            No projects found
          </h3>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Add a new project or change the filter.
          </p>
        </div>
      )}
    </div>
  );
}
function Clients() {
  const [showForm, setShowForm] = useState(false);

  const [clientList, setClientList] = useState(() => {
    const savedClients = localStorage.getItem("digitalinapp_clients");

    if (savedClients) {
      return JSON.parse(savedClients);
    }

    return clients;
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    projects: "",
    status: "Active",
    value: "",
    lastBill: "",
    companyType: "Business",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClient = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.value) {
      alert("Please fill client/company name, contact person and value");
      return;
    }

    const newClient = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      phone: formData.phone,
      projects: Number(formData.projects) || 0,
      status: formData.status,
      value: formData.value,
      lastBill: formData.lastBill || "Not billed",
      companyType: formData.companyType,
      notes: formData.notes,
    };

    const updatedClients = [newClient, ...clientList];

    setClientList(updatedClients);
    localStorage.setItem("digitalinapp_clients", JSON.stringify(updatedClients));

    setFormData({
      name: "",
      contact: "",
      email: "",
      phone: "",
      projects: "",
      status: "Active",
      value: "",
      lastBill: "",
      companyType: "Business",
      notes: "",
    });

    setShowForm(false);
  };

  const handleDeleteClient = (clientName) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) return;

    const updatedClients = clientList.filter((item) => item.name !== clientName);

    setClientList(updatedClients);
    localStorage.setItem("digitalinapp_clients", JSON.stringify(updatedClients));
  };

  return (
    <div>
      <PageHeader
        title="Clients & Billing"
        subtitle="Manage company clients, billing and CRM details."
        button="+ Add Client"
        onButtonClick={() => setShowForm(true)}
      />

      {/* ADD CLIENT FORM */}
      {showForm && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Add New Client
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Add client company, contact and billing details.
              </p>
            </div>

            <button
              onClick={() => setShowForm(false)}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
            >
              Close
            </button>
          </div>

          <form
            onSubmit={handleAddClient}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Client / Company Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="DigitalInApp"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Contact Person *
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Sangam Choudhary"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Company Type
              </label>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Business">Business</option>
                <option value="Startup">Startup</option>
                <option value="School">School</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Agency">Agency</option>
                <option value="Individual">Individual</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="client@gmail.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Client Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Total Projects
              </label>
              <input
                type="number"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                placeholder="2"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Total Value *
              </label>
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleChange}
                placeholder="₹50,000"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Last Bill Date
              </label>
              <input
                type="date"
                name="lastBill"
                value={formData.lastBill}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Client Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Write client requirements, billing notes, CRM details..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                Save Client
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CLIENT CARDS */}
      {clientList.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {clientList.map((item) => (
            <div
              key={`${item.name}-${item.contact}`}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar initials={item.name.slice(0, 2).toUpperCase()} />

                  <div>
                    <h3 className="font-black text-slate-950">{item.name}</h3>

                    <p className="text-sm font-semibold text-slate-500">
                      {item.contact}
                    </p>

                    {item.companyType && (
                      <p className="mt-1 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-700">
                        {item.companyType}
                      </p>
                    )}
                  </div>
                </div>

                <Badge label={item.status} />
              </div>

              {(item.email || item.phone) && (
                <div className="mb-5 rounded-2xl bg-slate-50 p-4">
                  {item.email && (
                    <p className="text-sm font-bold text-slate-600">
                      Email: <span className="text-slate-950">{item.email}</span>
                    </p>
                  )}

                  {item.phone && (
                    <p className="mt-2 text-sm font-bold text-slate-600">
                      Phone: <span className="text-slate-950">{item.phone}</span>
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Projects", item.projects],
                  ["Value", item.value],
                  ["Last Bill", item.lastBill],
                ].map(([key, value]) => (
                  <div key={key} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-black uppercase text-slate-400">
                      {key}
                    </p>
                    <p className="mt-1 text-sm font-black text-slate-950">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {item.notes && (
                <p className="mt-5 rounded-2xl bg-purple-50 p-4 text-sm font-semibold leading-6 text-slate-600">
                  {item.notes}
                </p>
              )}

              <div className="mt-5 grid grid-cols-3 gap-3">
                <button className="rounded-full bg-purple-100 px-4 py-2.5 text-xs font-black text-purple-700">
                  View CRM
                </button>

                <button className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-black text-white">
                  Send Invoice
                </button>

                <button
                  onClick={() => handleDeleteClient(item.name)}
                  className="rounded-full bg-red-100 px-4 py-2.5 text-xs font-black text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-purple-200 bg-white p-10 text-center">
          <h3 className="text-2xl font-black text-slate-950">
            No clients found
          </h3>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Add a new client to manage billing and CRM details.
          </p>
        </div>
      )}
    </div>
  );
}

function Team() {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [teamList, setTeamList] = useState(() => {
    const savedTeam = localStorage.getItem("digitalinapp_team");

    if (savedTeam) {
      return JSON.parse(savedTeam);
    }

    return team;
  });

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    project: "",
    hours: "",
    status: "Active",
    initials: "",
    email: "",
    phone: "",
  });

  const generateInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      project: "",
      hours: "",
      status: "Active",
      initials: "",
      email: "",
      phone: "",
    });

    setEditIndex(null);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      initials:
        name === "name" && !prev.initials
          ? generateInitials(value)
          : prev.initials,
    }));
  };

  const handleSubmitMember = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.role || !formData.project) {
      alert("Please fill name, role and assigned project");
      return;
    }

    const memberData = {
      name: formData.name,
      role: formData.role,
      project: formData.project,
      hours: Number(formData.hours) || 0,
      status: formData.status,
      initials: formData.initials || generateInitials(formData.name),
      email: formData.email,
      phone: formData.phone,
    };

    let updatedTeam;

    if (editIndex !== null) {
      updatedTeam = [...teamList];
      updatedTeam[editIndex] = memberData;
    } else {
      updatedTeam = [memberData, ...teamList];
    }

    setTeamList(updatedTeam);
    localStorage.setItem("digitalinapp_team", JSON.stringify(updatedTeam));
    resetForm();
  };

  const handleEditMember = (member, index) => {
    setFormData({
      name: member.name || "",
      role: member.role || "",
      project: member.project || "",
      hours: member.hours || "",
      status: member.status || "Active",
      initials: member.initials || generateInitials(member.name),
      email: member.email || "",
      phone: member.phone || "",
    });

    setEditIndex(index);
    setShowForm(true);
  };

  const handleDeleteMember = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team member?"
    );

    if (!confirmDelete) return;

    const updatedTeam = teamList.filter((_, i) => i !== index);

    setTeamList(updatedTeam);
    localStorage.setItem("digitalinapp_team", JSON.stringify(updatedTeam));
  };

  return (
    <div>
      <PageHeader
        title="Team & HR"
        subtitle="Manage team members, roles and weekly work status."
        button="+ Add Member"
        onButtonClick={() => {
          resetForm();
          setShowForm(true);
        }}
      />

      {/* ADD / EDIT MEMBER FORM */}
      {showForm && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {editIndex !== null ? "Edit Team Member" : "Add Team Member"}
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Add employee details, role, assigned project and working hours.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
            >
              Close
            </button>
          </div>

          <form
            onSubmit={handleSubmitMember}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Employee Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sangam Choudhary"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Role *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="">Select Role</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Business Partner">Business Partner</option>
                <option value="SEO Executive">SEO Executive</option>
                <option value="Digital Marketer">Digital Marketer</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Assigned Project *
              </label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="DigitalInApp Website"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Weekly Hours
              </label>
              <input
                type="number"
                name="hours"
                min="0"
                max="80"
                value={formData.hours}
                onChange={handleChange}
                placeholder="40"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Active">Active</option>
                <option value="Leave">Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Initials
              </label>
              <input
                type="text"
                name="initials"
                value={formData.initials}
                onChange={handleChange}
                placeholder="SC"
                maxLength="3"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold uppercase outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="member@gmail.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                {editIndex !== null ? "Update Member" : "Save Member"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* DESKTOP / TABLE VIEW */}
      <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] border-collapse">
            <thead>
              <tr className="border-b bg-slate-50 text-left text-xs uppercase tracking-widest text-slate-500">
                <th className="px-5 py-4">Employee</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Assigned To</th>
                <th className="px-5 py-4">Hours</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {teamList.map((item, index) => (
                <tr key={`${item.name}-${index}`} className="border-b last:border-b-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={item.initials} />
                      <span className="font-black text-slate-950">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-500">
                    {item.role}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-purple-600">
                    {item.project}
                  </td>

                  <td className="px-5 py-4">
                    <p className="mb-2 text-sm font-black text-slate-950">
                      {item.hours}h
                    </p>
                    <ProgressBar value={(item.hours / 45) * 100} />
                  </td>

                  <td className="px-5 py-4">
                    <Badge label={item.status} />
                  </td>

                  <td className="px-5 py-4">
                    {item.email && (
                      <p className="text-xs font-bold text-slate-500">
                        {item.email}
                      </p>
                    )}
                    {item.phone && (
                      <p className="mt-1 text-xs font-bold text-slate-500">
                        {item.phone}
                      </p>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditMember(item, index)}
                        className="rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteMember(index)}
                        className="rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE / CARD VIEW */}
      <div className="grid gap-5 lg:hidden">
        {teamList.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar initials={item.initials} />

                <div>
                  <h3 className="font-black text-slate-950">{item.name}</h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <Badge label={item.status} />
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Assigned Project
                </p>
                <p className="mt-1 text-sm font-black text-purple-600">
                  {item.project}
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Weekly Hours
                </p>
                <p className="mb-2 mt-1 text-sm font-black text-slate-950">
                  {item.hours}h
                </p>
                <ProgressBar value={(item.hours / 45) * 100} />
              </div>

              {(item.email || item.phone) && (
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">
                    Contact
                  </p>
                  {item.email && (
                    <p className="mt-1 text-sm font-bold text-slate-600">
                      {item.email}
                    </p>
                  )}
                  {item.phone && (
                    <p className="mt-1 text-sm font-bold text-slate-600">
                      {item.phone}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleEditMember(item, index)}
                className="rounded-full bg-purple-100 px-4 py-2.5 text-xs font-black text-purple-700"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteMember(index)}
                className="rounded-full bg-red-100 px-4 py-2.5 text-xs font-black text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {teamList.length === 0 && (
        <div className="rounded-[28px] border border-dashed border-purple-200 bg-white p-10 text-center">
          <h3 className="text-2xl font-black text-slate-950">
            No team members found
          </h3>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Add a new member to manage team and HR details.
          </p>
        </div>
      )}
    </div>
  );
}

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState("");

//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     category: "",
//     shortDescription: "",
//     content: "",
//     featured: false,
//     publishDate: "",
//     readTime: "",
//     coverImage: null,
//     author: "Admin",
//     tags: "",
//     status: "draft",
//   });

//   // -------------------------
//   // Generate Slug
//   // -------------------------
//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/--+/g, "-");
//   };

//   // -------------------------
//   // Handle Input
//   // -------------------------
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     // Image
//     if (type === "file") {
//       const file = files[0];

//       if (!file) return;

//       setFormData((prev) => ({
//         ...prev,
//         coverImage: file,
//       }));

//       // Preview
//       setImagePreview(URL.createObjectURL(file));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,

//       ...(name === "title" && {
//         slug: generateSlug(value),
//       }),
//     }));
//   };

//   // -------------------------
//   // Reset Form
//   // -------------------------
//   const resetForm = () => {
//     setFormData({
//       title: "",
//       slug: "",
//       category: "",
//       shortDescription: "",
//       content: "",
//       featured: false,
//       publishDate: "",
//       readTime: "",
//       coverImage: null,
//       author: "Admin",
//       tags: "",
//       status: "draft",
//     });

//     setImagePreview("");
//   };
//   console.log(formData)
//   console.log(imagePreview)
//   // -------------------------
//   // Submit
//   // -------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       // FormData for image upload
//       const data = new FormData();

//       data.append("title", formData.title);
//       data.append("slug", formData.slug);
//       data.append("category", formData.category);
//       data.append("shortDescription", formData.shortDescription);
//       data.append("content", formData.content);
//       data.append("featured", formData.featured);
//       data.append("publishDate", formData.publishDate);
//       data.append("readTime", Number(formData.readTime));
//       data.append("author", formData.author);
//       data.append("status", formData.status);

//       // Tags convert string -> array
//       const tagsArray = formData.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter(Boolean);

//       data.append("tags", JSON.stringify(tagsArray));

//       // Image
//       if (formData.coverImage) {
//         data.append("coverImage", formData.coverImage);
//       }

//       console.log("Sending Blog...");

//       const res = await axios.post(
//         "https://digitalinapp-new.onrender.com/api/create/blog",
//         data
//       );

//       console.log(res.data);

//       // Add returned blog to frontend list
//       if (res.data.addblog) {
//         setBlogs((prev) => [res.data.addblog, ...prev]);
//       } else {
//         setBlogs((prev) => [
//           {
//             ...formData,
//             readTime: Number(formData.readTime),
//             tags: tagsArray,
//           },
//           ...prev,
//         ]);
//       }

//       alert("Blog created successfully!");
// console.log(blogs)
//       resetForm();
//     } catch (error) {
//       console.log("Error:", error);

//       console.log(
//         error?.response?.data?.message || "Something went wrong"
//       );

//       alert(
//         error?.response?.data?.message ||
//         "Blog create nahi ho saka"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 md:p-8">

//       {/* ================= HEADER ================= */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-black text-slate-900">
//           Create Blog
//         </h1>

//         <p className="mt-1 text-sm text-slate-500">
//           Create and manage your website blogs.
//         </p>
//       </div>

//       {/* ================= FORM CARD ================= */}
//       <div className="mx-auto max-w-5xl rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-8">

//         <form onSubmit={handleSubmit}>

//           {/* ================= TITLE ================= */}
//           <div className="mb-6">
//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Blog Title *
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               placeholder="Enter blog title"
//               className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//             />
//           </div>

//           {/* ================= SLUG ================= */}
//           <div className="mb-6">
//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Slug
//             </label>

//             <input
//               type="text"
//               name="slug"
//               value={formData.slug}
//               readOnly
//               className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500"
//             />

//             <p className="mt-1 text-xs text-slate-400">
//               Slug automatically generate hoga.
//             </p>
//           </div>

//           {/* ================= CATEGORY + AUTHOR ================= */}
//           <div className="grid gap-5 md:grid-cols-2">

//             <div>
//               <label className="mb-2 block text-sm font-bold text-slate-700">
//                 Category *
//               </label>

//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 placeholder="ERP, AI, Web Development"
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-slate-700">
//                 Author
//               </label>

//               <input
//                 type="text"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleChange}
//                 placeholder="Admin"
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//               />
//             </div>

//           </div>

//           {/* ================= SHORT DESCRIPTION ================= */}
//           <div className="mt-6">
//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Short Description *
//             </label>

//             <textarea
//               name="shortDescription"
//               value={formData.shortDescription}
//               onChange={handleChange}
//               required
//               rows={4}
//               placeholder="Enter short description..."
//               className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//             />
//           </div>

//           {/* ================= CONTENT ================= */}
//           <div className="mt-6">
//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Blog Content *
//             </label>

//             <textarea
//               name="content"
//               value={formData.content}
//               onChange={handleChange}
//               required
//               rows={12}
//               placeholder="Write your blog content..."
//               className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-7 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//             />
//           </div>

//           {/* ================= IMAGE UPLOAD ================= */}
//           <div className="mt-6">

//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Cover Image *
//             </label>

//             <div className="rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50/30 p-5">

//               <input
//                 type="file"
//                 name="coverImage"
//                 accept="image/png,image/jpeg,image/jpg,image/webp"
//                 onChange={handleChange}
                
//                 className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-purple-600 file:px-5 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-purple-700"
//               />

//               <p className="mt-2 text-xs text-slate-400">
//                 PNG, JPG, JPEG or WEBP
//               </p>

//               {/* Image Preview */}
//               {imagePreview && (
//                 <div className="mt-5">

//                   <p className="mb-2 text-sm font-bold text-slate-700">
//                     Image Preview
//                   </p>

//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="h-64 w-full rounded-2xl object-cover shadow-sm md:h-80"
//                   />

//                 </div>
//               )}

//             </div>
//           </div>

//           {/* ================= DATE + READ TIME ================= */}
//           <div className="mt-6 grid gap-5 md:grid-cols-2">

//             <div>
//               <label className="mb-2 block text-sm font-bold text-slate-700">
//                 Publish Date
//               </label>

//               <input
//                 type="date"
//                 name="publishDate"
//                 value={formData.publishDate}
//                 onChange={handleChange}
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-slate-700">
//                 Read Time (Minutes) *
//               </label>

//               <input
//                 type="number"
//                 name="readTime"
//                 value={formData.readTime}
//                 onChange={handleChange}
//                 required
//                 min="1"
//                 placeholder="5"
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//               />
//             </div>

//           </div>

//           {/* ================= TAGS ================= */}
//           <div className="mt-6">

//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Tags
//             </label>

//             <input
//               type="text"
//               name="tags"
//               value={formData.tags}
//               onChange={handleChange}
//               placeholder="React, Node.js, MongoDB, AI"
//               className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//             />

//             <p className="mt-1 text-xs text-slate-400">
//               Multiple tags comma (,) se separate karein.
//             </p>

//           </div>

//           {/* ================= STATUS ================= */}
//           <div className="mt-6">

//             <label className="mb-2 block text-sm font-bold text-slate-700">
//               Status
//             </label>

//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
//             >
//               <option value="draft">
//                 Draft
//               </option>

//               <option value="published">
//                 Published
//               </option>
//             </select>

//           </div>

//           {/* ================= FEATURED ================= */}
//           <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

//             <input
//               type="checkbox"
//               name="featured"
//               checked={formData.featured}
//               onChange={handleChange}
//               className="h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
//             />

//             <div>
//               <p className="text-sm font-bold text-slate-800">
//                 Featured Blog
//               </p>

//               <p className="text-xs text-slate-500">
//                 Is blog ko featured section me show karein.
//               </p>
//             </div>

//           </div>

//           {/* ================= BUTTONS ================= */}
//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">

//             <button
//               type="submit"
//               disabled={loading}
//               className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {loading ? "Creating Blog..." : "Create Blog"}
//             </button>

//             <button
//               type="button"
//               onClick={resetForm}
//               className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
//             >
//               Reset
//             </button>

//           </div>

//         </form>
//       </div>

//       {/* ================= BLOG LIST ================= */}
//       {blogs.length > 0 && (
//         <div className="mx-auto mt-8 max-w-5xl">

//           <h2 className="mb-4 text-xl font-black text-slate-900">
//             Created Blogs
//           </h2>

//           <div className="space-y-4">

//             {blogs.map((blog, index) => (

//               <div
//                 key={blog._id || index}
//                 className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm"
//               >

//                 <div className="flex flex-col md:flex-row">

//                   {/* Image */}
//                   {blog.coverImage && (
//                     <img
//                       src={
//                         typeof blog.coverImage === "string"
//                           ? blog.coverImage
//                           : ""
//                       }
//                       alt={blog.title}
//                       className="h-48 w-full object-cover md:h-auto md:w-56"
//                     />
//                   )}

//                   <div className="flex-1 p-5">

//                     <div className="flex flex-wrap gap-2">

//                       <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
//                         {blog.category}
//                       </span>

//                       <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
//                         {blog.status}
//                       </span>

//                     </div>

//                     <h3 className="mt-3 text-xl font-black text-slate-900">
//                       {blog.title}
//                     </h3>

//                     <p className="mt-1 text-xs text-slate-400">
//                       /{blog.slug}
//                     </p>

//                     <p className="mt-3 text-sm leading-6 text-slate-600">
//                       {blog.shortDescription}
//                     </p>

//                     <p className="mt-3 text-xs font-bold text-slate-500">
//                       {blog.readTime} min read
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  // =========================
  // CATEGORY OPTIONS
  // =========================
  const categoryOptions = [
    "AI",
    "ERP",
    "AI AGENTS",
    "MOBILE APP",
    "WEB DEVELOPMENT",
    "CMS",
    "Cybersecurity",
    "Digital Services",
    "WEB APPLICATION",
    "SEO",
    "OPTIMIZE",
  ];

  // =========================
  // TAG OPTIONS
  // =========================
  const tagOptions = [
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "ExpressJS",
    "JavaScript",
    "AI",
    "AI Agents",
    "Web",
    "App",
    "Mobile",
    "CMS",
    "SEO",
    "Optimization",
    "MERN",
    "Cloudinary",
  ];

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    shortDescription: "",
    content: "",
    featured: false,
    publishDate: "",
    readTime: "",
    coverImage: null,
    author: "Admin",
    tags: [],
    status: "draft",
  });

  // =========================
  // GENERATE SLUG
  // =========================
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  };

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // IMAGE
    if (type === "file") {
      const file = files[0];

      if (!file) return;

      setFormData((prev) => ({
        ...prev,
        coverImage: file,
      }));

      setImagePreview(URL.createObjectURL(file));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,

      ...(name === "title" && {
        slug: generateSlug(value),
      }),
    }));
  };

  // =========================
  // HANDLE TAG SELECT
  // =========================
  const handleTagChange = (e) => {
    const selectedTag = e.target.value;

    if (!selectedTag) return;

    setFormData((prev) => {
      // Already selected hai to duplicate nahi hoga
      if (prev.tags.includes(selectedTag)) {
        return prev;
      }

      return {
        ...prev,
        tags: [...prev.tags, selectedTag],
      };
    });

    // dropdown ko wapas default par le jayega
    e.target.value = "";
  };

  // =========================
  // REMOVE TAG
  // =========================
  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      category: "",
      shortDescription: "",
      content: "",
      featured: false,
      publishDate: "",
      readTime: "",
      coverImage: null,
      author: "Admin",
      tags: [],
      status: "draft",
    });

    setImagePreview("");
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("category", formData.category);
      data.append("shortDescription", formData.shortDescription);
      data.append("content", formData.content);
      data.append("featured", formData.featured);
      data.append("publishDate", formData.publishDate);
      data.append("readTime", Number(formData.readTime));
      data.append("author", formData.author);
      data.append("status", formData.status);

      // =========================
      // TAGS ARRAY
      // =========================
      data.append("tags", JSON.stringify(formData.tags));

      // =========================
      // IMAGE
      // =========================
      if (formData.coverImage) {
        data.append("coverImage", formData.coverImage);
      }

      console.log("========== SENDING BLOG ==========");
      console.log("Title:", formData.title);
      console.log("Category:", formData.category);
      console.log("Tags:", formData.tags);
      console.log("Image:", formData.coverImage);

      const res = await axios.post(
        "https://digitalinapp-new.onrender.com/api/create/blog",
        data
      );

      console.log("========== RESPONSE ==========");
      console.log(res.data);

      // =========================
      // ADD CREATED BLOG
      // =========================
      if (res.data.addblog) {
        setBlogs((prev) => [res.data.addblog, ...prev]);
      } else {
        setBlogs((prev) => [
          {
            ...formData,
            readTime: Number(formData.readTime),
          },
          ...prev,
        ]);
      }

      alert("Blog created successfully!");

      resetForm();
    } catch (error) {
      console.log("========== BLOG ERROR ==========");

      console.log("Error:", error);

      console.log(
        "Message:",
        error?.response?.data?.message || "Something went wrong"
      );

      alert(
        error?.response?.data?.message ||
          "Blog create nahi ho saka"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">

      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-3xl font-black text-slate-900">
          Create Blog
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Create and manage your website blogs.
        </p>
      </div>

      {/* ================= FORM CARD ================= */}
      <div className="mx-auto max-w-5xl rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-8">

        <form onSubmit={handleSubmit}>

          {/* ================= TITLE ================= */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Blog Title *
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter blog title"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* ================= SLUG ================= */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              readOnly
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500"
            />

            <p className="mt-1 text-xs text-slate-400">
              Slug automatically generate hoga.
            </p>
          </div>

          {/* ================= CATEGORY + AUTHOR ================= */}
          <div className="grid gap-5 md:grid-cols-2">

            {/* CATEGORY */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Category *
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              >
                <option value="">
                  Select Category
                </option>

                {categoryOptions.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* AUTHOR */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Admin"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

          </div>

          {/* ================= SHORT DESCRIPTION ================= */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Short Description *
            </label>

            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter short description..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Blog Content *
            </label>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              placeholder="Write your blog content..."
              className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-7 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* ================= IMAGE UPLOAD ================= */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Cover Image *
            </label>

            <div className="rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50/30 p-5">

              <input
                type="file"
                name="coverImage"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleChange}
                className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-purple-600 file:px-5 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-purple-700"
              />

              <p className="mt-2 text-xs text-slate-400">
                PNG, JPG, JPEG or WEBP
              </p>

              {/* IMAGE PREVIEW */}
              {imagePreview && (
                <div className="mt-5">

                  <p className="mb-2 text-sm font-bold text-slate-700">
                    Image Preview
                  </p>

                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-64 w-full rounded-2xl object-cover shadow-sm md:h-80"
                  />

                </div>
              )}

            </div>
          </div>

          {/* ================= DATE + READ TIME ================= */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* DATE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Publish Date
              </label>

              <input
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* READ TIME */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Read Time (Minutes) *
              </label>

              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                required
                min="1"
                placeholder="5"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

          </div>

          {/* ================= TAGS ================= */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Tags
            </label>

            {/* TAG DROPDOWN */}
            <select
              defaultValue=""
              onChange={handleTagChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            >
              <option value="">
                Select Tags
              </option>

              {tagOptions.map((tag) => (
                <option
                  key={tag}
                  value={tag}
                  disabled={formData.tags.includes(tag)}
                >
                  {tag}
                </option>
              ))}
            </select>

            {/* SELECTED TAGS */}
            {formData.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">

                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700"
                  >
                    {tag}

                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-purple-500 transition hover:text-red-600"
                    >
                      ×
                    </button>
                  </span>
                ))}

              </div>
            )}

            <p className="mt-2 text-xs text-slate-400">
              Dropdown se multiple tags select kar sakte hain.
            </p>

          </div>

          {/* ================= STATUS ================= */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            >
              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>
            </select>

          </div>

          {/* ================= FEATURED ================= */}
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
            />

            <div>
              <p className="text-sm font-bold text-slate-800">
                Featured Blog
              </p>

              <p className="text-xs text-slate-500">
                Is blog ko featured section me show karein.
              </p>
            </div>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-md transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Creating Blog..."
                : "Create Blog"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Reset
            </button>

          </div>

        </form>
      </div>

      {/* ================= BLOG LIST ================= */}
      {blogs.length > 0 && (
        <div className="mx-auto mt-8 max-w-5xl">

          <h2 className="mb-4 text-xl font-black text-slate-900">
            Created Blogs
          </h2>

          <div className="space-y-4">

            {blogs.map((blog, index) => (

              <div
                key={blog._id || index}
                className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm"
              >

                <div className="flex flex-col md:flex-row">

                  {/* IMAGE */}
                  {blog.coverImage && (
                    <img
                      src={
                        typeof blog.coverImage === "string"
                          ? blog.coverImage
                          : ""
                      }
                      alt={blog.title}
                      className="h-48 w-full object-cover md:h-auto md:w-56"
                    />
                  )}

                  <div className="flex-1 p-5">

                    <div className="flex flex-wrap gap-2">

                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                        {blog.category}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        {blog.status}
                      </span>

                    </div>

                    <h3 className="mt-3 text-xl font-black text-slate-900">
                      {blog.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      /{blog.slug}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {blog.shortDescription}
                    </p>

                    {/* BLOG TAGS */}
                    {blog.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">

                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-pink-50 px-2.5 py-1 text-xs font-semibold text-pink-600"
                          >
                            #{tag}
                          </span>
                        ))}

                      </div>
                    )}

                    <p className="mt-3 text-xs font-bold text-slate-500">
                      {blog.readTime} min read
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      )}

    </div>
  );
}
function Content() {
  const [tab, setTab] = useState("cms");
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [cmsList, setCmsList] = useState(() => {
    const savedCms = localStorage.getItem("digitalinapp_cms");

    if (savedCms) {
      return JSON.parse(savedCms);
    }

    return posts;
  });

  const [leadList, setLeadList] = useState(() => {
    const savedLeads = localStorage.getItem("digitalinapp_leads");

    if (savedLeads) {
      return JSON.parse(savedLeads);
    }

    return leads;
  });

  const [cmsForm, setCmsForm] = useState({
    title: "",
    type: "Blog",
    status: "Draft",
    date: "",
    category: "",
    description: "",
  });

  const [leadForm, setLeadForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    source: "Website",
    date: "",
    status: "New",
    requirement: "",
  });

  const resetForms = () => {
    setCmsForm({
      title: "",
      type: "Blog",
      status: "Draft",
      date: "",
      category: "",
      description: "",
    });

    setLeadForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      source: "Website",
      date: "",
      status: "New",
      requirement: "",
    });

    setEditIndex(null);
    setShowForm(false);
  };

  const handleCmsChange = (e) => {
    const { name, value } = e.target;

    setCmsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;

    setLeadForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitCms = (e) => {
    e.preventDefault();

    if (!cmsForm.title || !cmsForm.type || !cmsForm.date) {
      alert("Please fill content title, type and date");
      return;
    }

    const contentData = {
      title: cmsForm.title,
      type: cmsForm.type,
      status: cmsForm.status,
      date: cmsForm.date,
      category: cmsForm.category,
      description: cmsForm.description,
    };

    let updatedCms;

    if (editIndex !== null) {
      updatedCms = [...cmsList];
      updatedCms[editIndex] = contentData;
    } else {
      updatedCms = [contentData, ...cmsList];
    }

    setCmsList(updatedCms);
    localStorage.setItem("digitalinapp_cms", JSON.stringify(updatedCms));
    resetForms();
  };

  const handleSubmitLead = (e) => {
    e.preventDefault();

    if (!leadForm.name || !leadForm.company || !leadForm.source) {
      alert("Please fill lead name, company and source");
      return;
    }

    const leadData = {
      name: leadForm.name,
      company: leadForm.company,
      email: leadForm.email,
      phone: leadForm.phone,
      source: leadForm.source,
      date: leadForm.date || new Date().toISOString().slice(0, 10),
      status: leadForm.status,
      requirement: leadForm.requirement,
    };

    let updatedLeads;

    if (editIndex !== null) {
      updatedLeads = [...leadList];
      updatedLeads[editIndex] = leadData;
    } else {
      updatedLeads = [leadData, ...leadList];
    }

    setLeadList(updatedLeads);
    localStorage.setItem("digitalinapp_leads", JSON.stringify(updatedLeads));
    resetForms();
  };

  const handleEditCms = (item, index) => {
    setCmsForm({
      title: item.title || "",
      type: item.type || "Blog",
      status: item.status || "Draft",
      date: item.date || "",
      category: item.category || "",
      description: item.description || "",
    });

    setEditIndex(index);
    setShowForm(true);
    setTab("cms");
  };

  const handleEditLead = (item, index) => {
    setLeadForm({
      name: item.name || "",
      company: item.company || "",
      email: item.email || "",
      phone: item.phone || "",
      source: item.source || "Website",
      date: item.date || "",
      status: item.status || "New",
      requirement: item.requirement || "",
    });

    setEditIndex(index);
    setShowForm(true);
    setTab("leads");
  };

  const handleDeleteCms = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this content?"
    );

    if (!confirmDelete) return;

    const updatedCms = cmsList.filter((_, i) => i !== index);

    setCmsList(updatedCms);
    localStorage.setItem("digitalinapp_cms", JSON.stringify(updatedCms));
  };

  const handleDeleteLead = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    const updatedLeads = leadList.filter((_, i) => i !== index);

    setLeadList(updatedLeads);
    localStorage.setItem("digitalinapp_leads", JSON.stringify(updatedLeads));
  };

  const handleAddButton = () => {
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <div>
      <PageHeader
        title="Content & Leads"
        subtitle="Manage blogs, case studies, portfolio and website leads."
        button={tab === "cms" ? "+ Add Content" : "+ Add Lead"}
        onButtonClick={handleAddButton}
      />

      {/* TABS */}
      <div className="mb-5 flex gap-2">
        {[
          ["cms", "CMS"],
          ["leads", "Leads"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => {
              setTab(id);
              resetForms();
            }}
            className={`rounded-full px-5 py-2.5 text-sm font-black ${tab === id
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-white text-slate-500 ring-1 ring-slate-200"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ADD / EDIT CMS FORM */}
      {showForm && tab === "cms" && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {editIndex !== null ? "Edit Content" : "Add New Content"}
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Add blog, case study, portfolio or website content.
              </p>
            </div>

            <button
              onClick={resetForms}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
            >
              Close
            </button>
          </div>

          <form
            onSubmit={handleSubmitCms}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Content Title *
              </label>
              <input
                type="text"
                name="title"
                value={cmsForm.title}
                onChange={handleCmsChange}
                placeholder="Why Every Business Needs a Website"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Content Type *
              </label>
              <select
                name="type"
                value={cmsForm.type}
                onChange={handleCmsChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Blog">Blog</option>
                <option value="Case Study">Case Study</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Service Page">Service Page</option>
                <option value="Landing Page">Landing Page</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Content Status
              </label>
              <select
                name="status"
                value={cmsForm.status}
                onChange={handleCmsChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={cmsForm.date}
                onChange={handleCmsChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={cmsForm.category}
                onChange={handleCmsChange}
                placeholder="Website Development"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Description
              </label>
              <textarea
                name="description"
                value={cmsForm.description}
                onChange={handleCmsChange}
                rows="4"
                placeholder="Write content summary, SEO notes or page details..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                {editIndex !== null ? "Update Content" : "Save Content"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ADD / EDIT LEAD FORM */}
      {showForm && tab === "leads" && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {editIndex !== null ? "Edit Lead" : "Add New Lead"}
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Add website enquiry or business lead details.
              </p>
            </div>

            <button
              onClick={resetForms}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600"
            >
              Close
            </button>
          </div>

          <form
            onSubmit={handleSubmitLead}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Lead Name *
              </label>
              <input
                type="text"
                name="name"
                value={leadForm.name}
                onChange={handleLeadChange}
                placeholder="Rahul Sharma"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Company / Business *
              </label>
              <input
                type="text"
                name="company"
                value={leadForm.company}
                onChange={handleLeadChange}
                placeholder="TechFlow"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Lead Source *
              </label>
              <select
                name="source"
                value={leadForm.source}
                onChange={handleLeadChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="Website">Website</option>
                <option value="Contact Form">Contact Form</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Referral">Referral</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={leadForm.email}
                onChange={handleLeadChange}
                placeholder="lead@gmail.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={leadForm.phone}
                onChange={handleLeadChange}
                placeholder="+91 9876543210"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Lead Date
              </label>
              <input
                type="date"
                name="date"
                value={leadForm.date}
                onChange={handleLeadChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Lead Status
              </label>
              <select
                name="status"
                value={leadForm.status}
                onChange={handleLeadChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Requirement
              </label>
              <textarea
                name="requirement"
                value={leadForm.requirement}
                onChange={handleLeadChange}
                rows="4"
                placeholder="Write lead requirement, service interest, budget or follow-up note..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                {editIndex !== null ? "Update Lead" : "Save Lead"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CMS LIST */}
      {tab === "cms" && (
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          {cmsList.length > 0 ? (
            <div className="space-y-4">
              {cmsList.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <h3 className="font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {item.type} · {item.date}
                    </p>

                    {item.category && (
                      <p className="mt-2 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-700">
                        {item.category}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <Badge label={item.status} />

                    <button
                      onClick={() => handleEditCms(item, index)}
                      className="rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteCms(index)}
                      className="rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No content found"
              text="Add your first blog, case study or portfolio item."
            />
          )}
        </div>
      )}

      {/* LEADS LIST */}
      {tab === "leads" && (
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          {leadList.length > 0 ? (
            <div className="space-y-4">
              {leadList.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <h3 className="font-black text-slate-950">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {item.company} · {item.source} · {item.date}
                    </p>

                    {(item.email || item.phone) && (
                      <div className="mt-2 text-sm font-bold text-slate-500">
                        {item.email && <p>Email: {item.email}</p>}
                        {item.phone && <p>Phone: {item.phone}</p>}
                      </div>
                    )}

                    {item.requirement && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                        {item.requirement}
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <Badge label={item.status} />

                    <button
                      onClick={() => handleEditLead(item, index)}
                      className="rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteLead(index)}
                      className="rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No leads found"
              text="Add your first website lead or customer enquiry."
            />
          )}
        </div>
      )}
    </div>
  );
}

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

function PageHeader({ title, subtitle, button, onButtonClick }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-black uppercase tracking-widest text-purple-600">
          DigitalInApp Admin
        </p>

        <h1 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          {title}
        </h1>

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
const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get All Blogs
  const getAllBlogs = async () => {
    try {
      const res = await axios.get(
        "https://digitalinapp-new.onrender.com/api/blogs"
      );


      setAllBlogs(res.data.allPost);

      console.log(res.data.allPost)
    } catch (error) {
      console.log("Get blogs error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `https://digitalinapp-new.onrender.com/api/blog/delete/${id}`
      );

      if (response.data.success) {
        // UI se deleted blog remove
        setAllBlogs((prev) =>
          prev.filter((blog) => blog._id !== id)
        );
      }

    } catch (error) {
      console.log("Delete error:", error);
    }

  };
  useEffect(() => {
    getAllBlogs();
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            All Blogs
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your created blog posts
          </p>
        </div>

        <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
          <span className="text-sm text-gray-500">
            Total Blogs
          </span>

          <span className="ml-2 font-bold text-gray-800">
            {allBlogs.length}
          </span>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
        </div>
      ) : allBlogs.length === 0 ? (

        /* No Blogs */
        <div className="rounded-xl bg-white py-16 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">
            No Blogs Found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            You haven't created any blogs yet.
          </p>
        </div>

      ) : (

        /* Blog Table */
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    #
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Blog
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Author
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Created At
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">

                {allBlogs.map((blog, index) => (

                  <tr
                    key={blog._id}
                    className="transition hover:bg-gray-50"
                  >

                    {/* Number */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {index + 1}
                    </td>

                    {/* Blog */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-4">

                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          className="h-16 w-24 rounded-lg object-cover"
                        />

                        <div>
                          <h3 className="max-w-[350px] truncate font-semibold text-gray-800">
                            {blog.title}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            {blog.slug}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                        {blog.category}
                      </span>

                    </td>

                    {/* Author */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {blog.author}
                    </td>

                    {/* Created At */}
                    <td className="px-6 py-4 text-sm text-gray-600">

                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}

                    </td>

                    {/* Delete */}
                    <td className="px-6 py-4 text-center">

                      <button
                        onClick={() =>
                          deleteBlog(blog._id)
                        }
                        className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
};
const pages = {
  dashboard: Dashboard,
  projects: Projects,
  clients: Clients,
  team: Team,
  content: Content,
  blogs: Blogs,
  blogList: BlogList,
  security: Security,
};

function AdminDashboard() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const Page = pages[active];

  const handleLogout = () => {
    localStorage.removeItem("digitalinapp_admin_token");
    window.location.href = "/admin-login";
  };

  return (
    <section className="min-h-screen bg-[#faf7ff]">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-purple-100 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden">
        <div>
          <h1 className="text-xl font-black text-slate-950">DigitalInApp</h1>
          <p className="text-xs font-bold text-purple-600">Admin Panel</p>
        </div>

        <button
          onClick={() => setMobileSidebar(true)}
          className="rounded-2xl bg-slate-950 p-2 text-white"
        >
          <Menu size={22} />
        </button>
      </header>

      {mobileSidebar && (
        <div
          onClick={() => setMobileSidebar(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full bg-[#090416] text-white transition-all duration-300 lg:translate-x-0 ${collapsed ? "lg:w-20" : "lg:w-72"
          } ${mobileSidebar ? "w-72 translate-x-0" : "w-72 -translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-black">
                D
              </div>

              {!collapsed && (
                <div>
                  <h2 className="font-black">DigitalInApp</h2>
                  <p className="text-xs font-bold text-purple-200">
                    Admin Dashboard
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileSidebar(false)}
              className="rounded-xl bg-white/10 p-2 lg:hidden"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 space-y-2 px-3 py-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    setMobileSidebar(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${isActive
                    ? "bg-white text-purple-700 shadow-lg"
                    : "text-purple-100 hover:bg-white/10"
                    }`}
                >
                  <Icon size={19} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-white/10 p-3">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-black text-purple-100 transition hover:bg-white/10 lg:flex"
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              {!collapsed && "Collapse"}
            </button>

            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-black text-white transition hover:bg-red-600"
            >
              <LogOut size={18} />
              {!collapsed && "Logout"}
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main
        className={`transition-all duration-300 ${collapsed ? "lg:ml-20" : "lg:ml-72"
          }`}
      >
        {/* Desktop Topbar */}
        <div className="sticky top-0 z-30 hidden border-b border-purple-100 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-xl lg:block">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search projects, clients, tasks..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-2xl bg-purple-100 p-3 text-purple-700">
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              <div className="flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2">
                <Avatar initials="AD" />
                <div>
                  <p className="text-sm font-black text-slate-950">Admin</p>
                  <p className="text-xs font-bold text-slate-500">
                    Super Admin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Page />
        </div>
      </main>
    </section>
  );
}

export default AdminDashboard;
