import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Content from "./pages/Content";
import Blogs from "./pages/Blogs";
import BlogList from "./pages/BlogList";
import Security from "./pages/Security";
import AdminList from "./pages/adminList"
import { Avatar } from "./components/AdminUI";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "projects", icon: BriefcaseBusiness, label: "Projects" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "team", icon: ShieldCheck, label: "Team" },
  { id: "content", icon: FileText, label: "Content" },
  { id: "blogs", icon: FileText, label: "Blogs" },
  { id: "blogList", icon: FileText, label: "Blog List" },
  { id: "users", icon: FileText, label: "Admin List" },

  { id: "security", icon: Lock, label: "Security" },
];

const pages = {
  dashboard: Dashboard,
  projects: Projects,
  clients: Clients,
  team: Team,
  content: Content,
  blogs: Blogs,
  blogList: BlogList,
  security: Security,
  users: AdminList
};

function AdminDashboard() {

  const loginUser = JSON.parse(localStorage.getItem("digitalinapp_admin_token"));

  console.log(loginUser)
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const active = useMemo(() => {
    const segment = location.pathname.split("/")[2];
    return pages[segment] ? segment : "dashboard";
  }, [location.pathname]);

  const Page = pages[active];

  const goTo = (id) => {
    navigate(id === "dashboard" ? "/admin" : `/admin/${id}`);
    setMobileSidebar(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("digitalinapp_admin_token");
    navigate("/admin-login", { replace: true });
  };

  return (
    <section className="min-h-screen bg-[#faf7ff]">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-purple-100 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden">
        <div>
          <h1 className="text-xl font-black text-slate-950">DigitalInApp</h1>
          <p className="text-xs font-bold text-purple-600">Admin Panel</p>
        </div>
        <button onClick={() => setMobileSidebar(true)} className="rounded-2xl bg-slate-950 p-2 text-white">
          <Menu size={22} />
        </button>
      </header>

      {mobileSidebar && <div onClick={() => setMobileSidebar(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

      <aside className={`fixed left-0 top-0 z-50 h-full bg-[#090416] text-white transition-all duration-300 lg:translate-x-0 ${collapsed ? "lg:w-20" : "lg:w-72"} ${mobileSidebar ? "w-72 translate-x-0" : "w-72 -translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <button onClick={() => goTo("dashboard")} className="flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-black">D</div>
              {!collapsed && (
                <div>
                  <h2 className="font-black">DigitalInApp</h2>
                  <p className="text-xs font-bold text-purple-200">Admin Dashboard</p>
                </div>
              )}
            </button>
            <button onClick={() => setMobileSidebar(false)} className="rounded-xl bg-white/10 p-2 lg:hidden"><X size={18} /></button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${active === item.id ? "bg-white text-purple-700 shadow-lg" : "text-purple-100 hover:bg-white/10"}`}
                >
                  <Icon size={19} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-white/10 p-3">
            <button onClick={() => setCollapsed(!collapsed)} className="hidden w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-black text-purple-100 transition hover:bg-white/10 lg:flex">
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              {!collapsed && "Collapse"}
            </button>
            <button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-black text-white transition hover:bg-red-600">
              <LogOut size={18} />
              {!collapsed && "Logout"}
            </button>
          </div>
        </div>
      </aside>

      <main className={`transition-all duration-300 ${collapsed ? "lg:ml-20" : "lg:ml-72"}`}>
        <div className="sticky top-0 z-30 hidden border-b border-purple-100 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-xl lg:block">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Search projects, clients, tasks..." className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white" />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative rounded-2xl bg-purple-100 p-3 text-purple-700">
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
              </button>
              <div className="flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2">
                <Avatar initials={loginUser.fullName.split(" ").map(word => word[0]).join("").toUpperCase()} />
                <div>
                  <p className="text-sm font-black text-slate-950">{loginUser.fullName}</p>
                  <p className="text-xs font-bold text-slate-500">Super Admin</p>
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
