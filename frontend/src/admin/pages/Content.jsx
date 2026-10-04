import { useState } from "react";
import { BarChart3, Bell, BriefcaseBusiness, CheckCircle2, FileText, Lock, Settings, ShieldCheck, Users, Search, Menu, X, ChevronLeft, ChevronRight, LogOut } from "lucide-react";

import { Avatar, Badge, ProgressBar, PageHeader, EmptyState } from "../components/AdminUI";
import { posts, leads } from "../data/demoData";

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

export default Content;
