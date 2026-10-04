import { useEffect, useState } from "react";
import { BarChart3, Bell, BriefcaseBusiness, CheckCircle2, FileText, Lock, Settings, ShieldCheck, Users, Search, Menu, X, ChevronLeft, ChevronRight, LogOut } from "lucide-react";

import { Avatar, Badge, ProgressBar, PageHeader, EmptyState } from "../components/AdminUI";
// import { projects, team } from "../data/demoData";
import axios from "axios";

function Projects() {

  const [allTeamMember] = JSON.parse(
    localStorage.getItem("teamList")
  );

  // =========================
  // ALERT STATE
  // =========================
  const [alertMsg, setAlertMsg] = useState('')
  const [showAlertPopup, setShowAlertPopup] = useState(false)
  const [alertColor, setAlertColor] = useState('')
  const [alertType, setAlertType] = useState(false)

  // =========================
  // Loading State
  // =========================

  const [loading, setLoading] = useState(false)


  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [projectList, setProjectList] = useState([])

  const getAllProject = async () => {
    try {


      const res = await axios.get(
        "http://localhost:8080/api/projects"
      );

      console.log("Projects:", res.data);

      setProjectList(res.data.AllProject || []);

    } catch (error) {
      console.log(
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    getAllProject();
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    category: "Website Development",
    client: "",
    clientEmail: "",
    technology: "",
    budget: "",
    startDate: "",
    due: "",
    status: "Development",
    priority: "Medium",
    team: [],
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

  const handleEditProject = (item) => {
    setEditId(item._id);

    setFormData({
      title: item.title || "",
      category: item.category || "Website Development",
      client: item.client || "",
      clientEmail: item.clientEmail || "",
      technology: item.technology || "",
      budget: item.budget || "",
      startDate: item.startDate
        ? item.startDate.split("T")[0]
        : "",
      due: item.due
        ? item.due.split("T")[0]
        : "",
      status: item.status || "Development",
      priority: item.priority || "Medium",
      team: item.team || [],
      description: item.description || "",
    });

    setShowForm(true);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.title ||
      !formData.client ||
      !formData.category ||
      !formData.due
    ) {
      alert("Please fill project title, category, client name and deadline");
      setLoading(false);
      return;
    }

    const projectData = {
      title: formData.title,
      category: formData.category,
      client: formData.client,
      clientEmail: formData.clientEmail,
      technology: formData.technology,
      budget: formData.budget,
      startDate: formData.startDate,
      due: formData.due,
      team: formData.team,
      status: formData.status,
      priority: formData.priority,
      description: formData.description,
    };

    try {
      let res;
      if (editId) {
        // EDIT PROJECT
        res = await axios.put(
          `http://localhost:8080/api/project/update/${editId}`,
          projectData
        );
      } else {
        // ADD PROJECT
        res = await axios.post(
          "http://localhost:8080/api/add-project",
          projectData
        );
      }

      if (res.data.success) {
        setAlertMsg(res.data.message);
        setAlertColor("green");
        setShowAlertPopup(true);
        setAlertType(true);

        await getAllProject();

        setFormData({
          title: "",
          category: "Website Development",
          client: "",
          clientEmail: "",
          technology: "",
          budget: "",
          startDate: "",
          due: "",
          status: "Development",
          priority: "Medium",
          team: [],
          description: "",
        });

        setShowForm(false);
        setEditId(null);
      }

    } catch (error) {
      setAlertMsg(
        error.response?.data?.message ||
        "Something went wrong"
      );

      setAlertColor("red");
      setShowAlertPopup(true);

      console.log(error.response?.data?.message);

    } finally {
      setLoading(false);
    }
  };


  const handleDeleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team member?"
    );
    console.log(id)
    if (!confirmDelete) return;
    try {
      const res = await axios.delete(`http://localhost:8080/api/project/delete/${id}`)
      if (res.data.success) {
        setAlertMsg(res.data.message)
        setAlertColor('green')
        setShowAlertPopup(true)
      }

      await getAllProject();
    } catch (error) {
      console.log(error.message)
      console.log(error.response?.data?.message)
      setAlertMsg(error.response?.data?.message ||
        "Something went wrong while adding team member")
      setAlertColor('red')
    }

  };

  return (
    <div>
      {/* =========================
          ERROR AND SUCCESS POP-UP
      ========================= */}
      {
        showAlertPopup && (
          <div className="absolute left-1/2 top-1/2 z-50 w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-7 shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => { setShowAlertPopup(false) }}
              className="cursor-pointer absolute right-4 top-4 text-xl text-gray-400 hover:text-gray-700">
              ×
            </button>

            {/* Error Icon */}

            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full 
            ${alertColor === "green" ? "bg-green-100" : "bg-red-100"}  `}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${alertColor === "green" ? "bg-green-500" : "bg-red-500"} `}>
                <span className="text-2xl font-bold text-white">
                  {alertColor === "green" ? "✓" : "!"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-center text-xl font-bold text-gray-800">
              {alertMsg}
            </h2>


            {/* Button */}
            <div
              onClick={() => { setShowAlertPopup(false), setEditId(null) }}
              className="mt-6 flex justify-center">
              <button className={`rounded-lg bg-${alertColor}-500 px-6 py-2.5 text-sm font-semibold cursor-pointer cursor-pointer text-white transition hover:bg-${alertColor}-600`}>
                OK
              </button>
            </div>

          </div>
        )
      }
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
              onClick={() => {
                setShowForm(false);
                setEditId(null);
              }
              }
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
                Client Email *
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
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

            {/* <div className="md:col-span-2 xl:col-span-3">
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
            </div> */}
            <div className="md:col-span-2 xl:col-span-3">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Assigned Team
              </label>

              <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {JSON.parse(localStorage.getItem("teamList") || "[]").map((member) => (
                  <label
                    key={member._id}
                    className="flex cursor-pointer items-center gap-2 rounded-xl bg-white p-3"
                  >
                    <input
                      type="checkbox"
                      value={member.name}
                      checked={formData.team.includes(member.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            team: [...formData.team, member.name],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            team: formData.team.filter(
                              (name) => name !== member.name
                            ),
                          });
                        }
                      }}
                      className="h-4 w-4"
                    />

                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        {member.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {member.role}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <p className="mt-2 text-xs font-semibold text-slate-400">
                Select the team members assigned to this project.
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
                className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                {
                  loading == true ? (
                    <div
                      className="cursor-pointer position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
                      style={{ zIndex: 9999 }}
                    >
                      <div className="cursor-pointer spinner-border text-primary" role="status">
                        <span className="visually-hidden">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) :
                    editId ?
                      "Update Development Project"
                      :
                      "Save Development Project"

                }

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
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  {/* <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item._id}
                  </p> */}
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
                  <span>{getProgressByStatus(item.status)}%</span>
                </div>
                <ProgressBar value={getProgressByStatus(item.status)} />
              </div>

              {item.description && (
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {item.team.map((member) => (
                    <Avatar key={member.split(" ").map(word => word[0]).join("").toUpperCase()} initials={member.split(" ").map(word => word[0]).join("").toUpperCase()} />
                  ))}
                </div>

                <div className="text-right">
                  {item.startDate && (
                    <p className="text-xs font-bold text-slate-400">
                      Start: {new Date(item.startDate).toLocaleDateString("en-IN")}
                    </p>
                  )}
                  <p className="text-xs font-black text-slate-500">
                    Due: <span className="text-orange-500">{new Date(item.due).toLocaleDateString("en-IN")}</span>
                  </p>
                </div>
              </div>

              <div

                className="mt-5 flex gap-3">
                <button
                  onClick={() => handleEditProject(item)}
                  className="cursor-pointer flex-1 rounded-full bg-purple-100 px-4 py-2.5 text-xs font-black text-purple-700">
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteProject(item._id)}
                  className="cursor-pointer flex-1 rounded-full bg-red-100 px-4 py-2.5 text-xs font-black text-red-700"
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

export default Projects;
