import { useEffect, useState } from "react";
import axios from 'axios'
import { Avatar, Badge, ProgressBar, PageHeader } from "../components/AdminUI";
import IdCard from "../components/EmployeeIdCard"
function Team() {

  const [showIdCrad, setShowIdCard] = useState(false)
  const [oneMember, setOneMember] = useState('')

  const handleOneMember = async (id) => {
    setShowIdCard(!showIdCrad)
    try {
      const res = await axios.get(`http://localhost:8080/api/team/${id}`)
      setOneMember(res.data.oneTeamMember)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(oneMember)
  const getTeamMember = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/team')
      setTeamList(res.data.allTeamMember)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTeamMember()
  }, [])


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

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // =========================
  // TEAM LIST
  // =========================

  const [teamList, setTeamList] = useState([])
  const allTeamMember = localStorage.setItem(
    "teamList",
    JSON.stringify(teamList)
  );
  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] = useState({
    EmpId: "",
    name: "",
    role: "",
    department: "",
    assigned: "",
    hours: "",
    status: "Active",
    email: "",
    phone: "",
    joinedDate: "",
    image: null,
  });

  const departments = [
    "IT",
    "Development",
    "Design",
    "Marketing",
    "HR",
    "Sales",
    "Finance",
    "Management",
  ];
  // =========================
  // GENERATE EMPLOYEE ID
  // Example:
  // Himanshu Saini
  // 2026-09-15
  // HIMA0926
  // =========================

  const generateEmpId = (name, joiningDate) => {
    if (!name || !joiningDate) return "";

    const first4 = name
      .replace(/\s/g, "")
      .substring(0, 4)
      .toUpperCase();

    const date = new Date(joiningDate);

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = String(date.getFullYear()).slice(-2);

    return `${first4}${month}${year}`;
  };

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setFormData({
      EmpId: "",
      name: "",
      role: "",
      department: "",
      assigned: "",
      hours: "",
      status: "Active",
      email: "",
      phone: "",
      joinedDate: "",
      image: null,
    });

    setEditIndex(null);
    setShowForm(false);
  };

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: files ? files[0] : value,
      };

      updatedData.EmpId = generateEmpId(
        updatedData.name,
        updatedData.joinedDate
      );

      return updatedData;
    });
  };

  // =========================
  // SUBMIT MEMBER
  // =========================

  const handleSubmitMember = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.name ||
      !formData.role ||
      !formData.department ||
      !formData.assigned ||
      !formData.joinedDate ||
      !formData.email
    ) {
      window.alert(
        "Please fill Name, Role, Department, Assigned Project, Joining Date and Email"
      );

      setLoading(false);
      return;
    }

    try {
      const data = new FormData();

      data.append("EmpId", formData.EmpId);
      data.append("name", formData.name);
      data.append("role", formData.role);
      data.append("department", formData.department);
      data.append("assigned", formData.assigned);
      data.append(
        "hours",
        Number(formData.hours) || 0
      );
      data.append("status", formData.status);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("joinedDate", formData.joinedDate);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const res = await axios.post(
        "http://localhost:8080/api/add-member",
        data
      );

      console.log(res);

      if (res.data.success) {
        setAlertMsg(res.data.message);
        setAlertColor("green");
        setShowAlertPopup(true);
        setAlertType(true);

        await getTeamMember();
        resetForm();
      }
    } catch (error) {
      console.log(error);

      setAlertMsg(
        error.response?.data?.message ||
        "Something went wrong while adding team member"
      );

      setAlertColor("red");
      setShowAlertPopup(true);
      setAlertType(false);
    } finally {
      setLoading(false);
    }
  };
  // =========================
  // EDIT MEMBER
  // =========================

  const handleEditMember = (member, index) => {
    setFormData({
      EmpId: member.EmpId || "",

      name: member.name || "",

      role: member.role || "",

      project: member.project || "",

      hours: member.hours || "",

      status: member.status || "Active",


      email: member.email || "",

      phone: member.phone || "",

      joinedDate: member.joinedDate || "",
    });

    setEditIndex(index);

    setShowForm(true);
  };

  // =========================
  // DELETE MEMBER
  // =========================



  const handleDeleteMember = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team member?"
    );
    console.log(id)
    if (!confirmDelete) return;
    try {
      const res = await axios.delete(`http://localhost:8080/api/delete/${id}`)
      if (res.data.success) {
        setAlertMsg(res.data.message)
        setAlertColor('green')
        setShowAlertPopup(true)
      }

      await getTeamMember();
      resetForm();

    } catch (error) {
      console.log(error.message)
      console.log(error.response?.data?.message)
      setAlertMsg(error.response?.data?.message ||
        "Something went wrong while adding team member")
      setAlertColor('red')
    }

  };
  // =========================
  // Find One member
  // =========================



  // =========================
  // UI
  // =========================

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
              onClick={() => { setShowAlertPopup(false) }}
              className="mt-6 flex justify-center">
              <button className={`rounded-lg bg-${alertColor}-500 px-6 py-2.5 text-sm font-semibold cursor-pointer cursor-pointer text-white transition hover:bg-${alertColor}-600`}>
                OK
              </button>
            </div>

          </div>
        )
      }


      {/* =========================
          PAGE HEADER
      ========================= */}
      <PageHeader
        title="Team & HR"
        subtitle="Manage team members, roles and weekly work status."
        button="+ Add Member"
        onButtonClick={() => {
          resetForm();
          setShowForm(true);
        }}
      />

      {/* =========================
          ADD ID CARD FORM
      ========================= */}

      {
        showIdCrad && (
          <IdCard member={oneMember} />
        )
      }

      {/* =========================
          ADD / EDIT FORM
      ========================= */}

      {showForm && (
        <div className="mb-6 rounded-[28px] border border-purple-100 bg-white p-5 shadow-xl shadow-purple-100">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {editIndex !== null
                  ? "Edit Team Member"
                  : "Add Team Member"}
              </h2>

              <p className="text-sm font-semibold text-slate-500">
                Add employee details, role, assigned project and
                working hours.
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
            {/* =========================
                EMPLOYEE ID
            ========================= */}

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Employee ID
              </label>

              <input
                type="text"
                name="EmpId"
                value={formData.EmpId}
                readOnly
                placeholder="Auto Generated"
                className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600 outline-none"
              />

              <p className="mt-1 text-xs font-semibold text-slate-400">
                Auto generated from name & joining date
              </p>
            </div>

            {/* =========================
                EMPLOYEE NAME
            ========================= */}

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Employee Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Himanshu Saini"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            {/* =========================
                JOINING DATE
            ========================= */}
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Department *
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none"
              >
                <option value="">
                  Select Department
                </option>

                {departments.map((department) => (
                  <option
                    key={department}
                    value={department}
                  >
                    {department}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Joining Date *
              </label>

              <input
                type="date"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            {/* =========================
                ROLE
            ========================= */}

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

                <option value="Frontend Developer">
                  Frontend Developer
                </option>

                <option value="Backend Developer">
                  Backend Developer
                </option>

                <option value="UI/UX Designer">
                  UI/UX Designer
                </option>

                <option value="Project Manager">
                  Project Manager
                </option>

                <option value="Business Partner">
                  Business Partner
                </option>

                <option value="SEO Executive">
                  SEO Executive
                </option>

                <option value="Digital Marketer">
                  Digital Marketer
                </option>
              </select>
            </div>

            {/* =========================
                PROJECT
            ========================= */}

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Assigned Project *
              </label>

              <input
                type="text"
                name="assigned"
                value={formData.assigned}
                onChange={handleChange}
                placeholder="DigitalInApp Website"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:bg-white"
              />
            </div>

            {/* =========================
                HOURS
            ========================= */}

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

            {/* =========================
                STATUS
            ========================= */}

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

            {/* =========================
                INITIALS
            ========================= */}

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Employee Image
              </label>

              <input
                type="file"
                name="image"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none"
              />

              <p className="mt-1 text-xs font-semibold text-slate-400">
                JPG, PNG or WEBP
              </p>

              {formData.image && (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Employee Preview"
                  className="mt-3 h-20 w-20 rounded-full border object-cover"
                />
              )}
            </div>

            {/* =========================
                EMAIL
            ========================= */}

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Email *
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

            {/* =========================
                PHONE
            ========================= */}

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

            {/* =========================
                SAVE BUTTON
            ========================= */}

            <div className="flex items-end">
              <button
                type="submit"
                className="cursor-pointer w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
              >
                {
                  loading == true ? (
                    <div
                      className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
                      style={{ zIndex: 9999 }}
                    >
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">
                          Loading...
                        </span>
                      </div>
                    </div>
                  ) :
                    editIndex !== null
                      ? "Update Member"
                      : "Save Member"
                }

              </button>
            </div>
          </form>
        </div>
      )}

      {/* =========================
          DESKTOP TABLE
      ========================= */}

      <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] border-collapse">
            <thead>
              <tr className="border-b bg-slate-50 text-left text-xs uppercase tracking-widest text-slate-500">
                <th className="px-5 py-4">
                  Employee ID
                </th>

                <th className="px-5 py-4">
                  Employee
                </th>

                <th className="px-5 py-4">
                  Role
                </th>

                <th className="px-5 py-4">
                  Assigned To
                </th>

                <th className="px-5 py-4">
                  Hours
                </th>

                <th className="px-5 py-4">
                  Status
                </th>

                <th className="px-5 py-4">
                  Contact
                </th>

                <th className="px-5 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {teamList.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b last:border-b-0"
                >
                  {/* EMPLOYEE ID */}

                  <td className="px-5 py-4">
                    <span
                      onClick={() => handleOneMember(item._id)}
                      className=" inline-flex items-center gap-1 cursor-pointer rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-700 shadow-sm transition-all duration-200 hover:bg-purple-600 hover:text-white hover:shadow-md active:scale-95
  "
                    >
                      {item.EmpId || "N/A"}
                      <span className="text-[10px]">→</span>
                    </span>
                  </td>

                  {/* EMPLOYEE */}

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={item.name.substring(0, 1).toUpperCase()} />

                      <span className="font-black text-slate-950">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  {/* ROLE */}

                  <td className="px-5 py-4 text-sm font-semibold text-slate-500">
                    {item.role}
                  </td>

                  {/* PROJECT */}

                  <td className="px-5 py-4 text-sm font-bold text-purple-600">
                    {item.assigned}
                  </td>

                  {/* HOURS */}

                  <td className="px-5 py-4">
                    <p className="mb-2 text-sm font-black text-slate-950">
                      {item.hours}h
                    </p>

                    <ProgressBar
                      value={(item.hours / 45) * 100}
                    />
                  </td>

                  {/* STATUS */}

                  <td className="px-5 py-4">
                    <Badge label={item.status} />
                  </td>

                  {/* CONTACT */}

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

                  {/* ACTION */}

                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEditMember(item, index)
                        }
                        className="cursor-pointer rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteMember(item._id)
                        }
                        className="cursor-pointer rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700"
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

      {/* =========================
          MOBILE CARD VIEW
      ========================= */}

      <div className="grid gap-5 lg:hidden">
        {teamList.map((item, index) => (
          <div
            key={item._id}
            className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            {/* HEADER */}

            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar initials={item.initials} />

                <div>
                  <h3 className="font-black text-slate-950">
                    {item.name}
                  </h3>

                  <p className="text-sm font-semibold text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <Badge label={item.status} />
            </div>

            {/* DETAILS */}

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
              {/* EMPLOYEE ID */}

              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Employee ID
                </p>

                <p className="mt-1 text-sm font-black text-purple-600">
                  {item.EmpId || "N/A"}
                </p>
              </div>

              {/* PROJECT */}

              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Assigned Project
                </p>

                <p className="mt-1 text-sm font-black text-purple-600">
                  {item.project}
                </p>
              </div>

              {/* JOINING DATE */}

              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Joining Date
                </p>

                <p className="mt-1 text-sm font-bold text-slate-600">
                  {item.joinedDate || "N/A"}
                </p>
              </div>

              {/* HOURS */}

              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Weekly Hours
                </p>

                <p className="mb-2 mt-1 text-sm font-black text-slate-950">
                  {item.hours}h
                </p>

                <ProgressBar
                  value={(item.hours / 45) * 100}
                />
              </div>

              {/* CONTACT */}

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

            {/* ACTION */}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  handleEditMember(item, index)
                }
                className="cursor-pointer rounded-full bg-purple-100 px-4 py-2.5 text-xs font-black text-purple-700"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDeleteMember(item._id)
                }
                className="rounded-full bg-red-100 px-4 py-2.5 text-xs font-black text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          EMPTY STATE
      ========================= */}

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


export default Team;