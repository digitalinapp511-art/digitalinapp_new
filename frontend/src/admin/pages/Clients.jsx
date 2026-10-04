import { useState,useEffect } from "react";
import { BarChart3, Bell, BriefcaseBusiness, CheckCircle2, FileText, Lock, Settings, ShieldCheck, Users, Search, Menu, X, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import axios from 'axios'
import { Avatar, Badge, ProgressBar, PageHeader, EmptyState } from "../components/AdminUI";
import { clients, projects } from "../data/demoData";

function Clients() {
  const [showForm, setShowForm] = useState(false);

  const [clientList, setClientList] = useState([])

  const getAllClients = async () => {
    try {


      const res = await axios.get(
        "http://localhost:8080/api/clients"
      );

      console.log("Projects:", res.data);

      setClientList(res.data.AllClients || []);

    } catch (error) {
      console.log(
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    projects: "",
    status: "Active",
    Totalvalue: "",
    lastBillPay: "",
    pendingAmount: "",
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
      Totalvalue: formData.Totalvalue,
      lastBillPay: formData.lastBillPay || "Not billed",
      companyType: formData.companyType,
      notes: formData.notes,
    };


    setFormData({
      name: "",
      contact: "",
      email: "",
      phone: "",
      projects: "",
      status: "Active",
      Totalvalue: "",
      lastBillPay: "",
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
                name="Totalvalue"
                value={formData.Totalvalue}
                onChange={handleChange}
                placeholder="₹50,000"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Last Pay Ammount
              </label>
              <input
                type="number"
                name="lastBillPay"
                value={formData.lastBillPay}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>
            {/* <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Amount Due
              </label>
              <input
                type="number"
                name="pendingAmount"
                value={formData.pendingAmount}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div> */}

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
                  ["Value", item.Totalvalue],
                  ["Last Bill", item.lastBillPay],
                  ["Amount Due", item.pendingAmount],
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

export default Clients;
