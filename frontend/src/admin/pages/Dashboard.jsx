import { BarChart3, Bell, BriefcaseBusiness, CheckCircle2, Users } from "lucide-react";
import { Avatar, Badge, ProgressBar } from "../components/AdminUI";
import { stats, projects, activityLog } from "../data/demoData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


function Dashboard() {
  const [completedProjects, setCompletedProjects] = useState([])
  const [totalProjects, setTotalProjects] = useState([])
  const [totalTeam, setTotalTeam] = useState([])
  const [totalClient, setTotalClient] = useState([])

  const getalldata = async () => {
    try {
      const res = await axios.get('https://digitalinapp-new.onrender.com/api/dashboard')
      setTotalTeam(res.data.totalTeam)
      setTotalClient(res.data.totalClient)
      setTotalProjects(res.data.totalProject)
      setCompletedProjects(res.data.completedProjects)

    } catch (error) {
      console.log(
        error.response?.data?.message || error.message
      );
    }
  }

  useEffect(() => {
    getalldata()
  }, [])


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
        <div
          className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-2xl" />

          <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200">
            <BriefcaseBusiness size={24} />
          </div>

          <h3 className="relative text-3xl font-black text-slate-950">
            {totalProjects.length} +
          </h3>
          <p className="relative mt-1 text-sm font-bold text-slate-500">
            Total Project
          </p>
          <p className="relative mt-3 text-xs font-black text-purple-600">
            +6 this month
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-2xl" />

          <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200">
            <Users size={24} />
          </div>

          <h3 className="relative text-3xl font-black text-slate-950">
            {totalClient.length} +
          </h3>
          <p className="relative mt-1 text-sm font-bold text-slate-500">
            Active Clients
          </p>
          <p className="relative mt-3 text-xs font-black text-purple-600">
            +3 new clients
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-2xl" />

          <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200">
            <BriefcaseBusiness size={24} />
          </div>

          <h3 className="relative text-3xl font-black text-slate-950">
            {completedProjects.length} +
          </h3>
          <p className="relative mt-1 text-sm font-bold text-slate-500">
            Completed Project
          </p>
          <p className="relative mt-3 text-xs font-black text-purple-600">
            +6 this month
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-2xl" />

          <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200">
            <Users size={24} />
          </div>

          <h3 className="relative text-3xl font-black text-slate-950">
            {totalTeam.length} +
          </h3>
          <p className="relative mt-1 text-sm font-bold text-slate-500">
            Active Team Member
          </p>
          <p className="relative mt-3 text-xs font-black text-purple-600">
            +3 new Member
          </p>
        </div>

      </div>


      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        <ProjectTable totalProjects={totalProjects} />

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

function ProjectTable({ totalProjects }) {

  const getProgressByStatus = (status) => {
    if (status === "Planning") return 10;
    if (status === "Development") return 45;
    if (status === "Testing") return 80;
    if (status === "Completed") return 100;
    return 0;
  };
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
        <Link to='/admin/projects'>
          <button className="cursor-pointer rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white">
            View All
          </button>
        </Link>

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
            {totalProjects.map((item) => (
              <tr key={item.name} className="border-b last:border-b-0">
                <td className="px-4 py-4">
                  <p className="font-black text-slate-950">{item.name}</p>
                  <div className="mt-2 flex -space-x-2">
                    {item.team.map((member) => (
                      <Avatar key={member.split(" ").map(word => word[0]).join("").toUpperCase()} initials={member.split(" ").map(word => word[0]).join("").toUpperCase()} />
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
                    {getProgressByStatus(item?.status)}%
                  </div>
                  <ProgressBar value={getProgressByStatus(item?.status)} />
                </td>

                <td className="px-4 py-4 text-sm font-bold text-slate-500">
                  {new Date(item.due).toLocaleDateString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
