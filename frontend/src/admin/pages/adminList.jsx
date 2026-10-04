import { useEffect, useState } from "react";
import axios from "axios";

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "admin",
        status: "pending",
    });

    // Get all admins
    const getAdmins = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                "http://localhost:8080/api/admin/all"
            );

            setAdmins(res.data.allAdmin || []);
        } catch (error) {
            console.log(
                error.response?.data?.message || error.message
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAdmins();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Add Admin
    const handleAddAdmin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8080/api/admin/add",
                formData
            );

            alert(res.data.message || "Admin added successfully");

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                password: "",
                role: "admin",
                status: "pending",
            });

            // Close form
            setShowForm(false);

            // Refresh list
            getAdmins();

        } catch (error) {
            console.log(
                error.response?.data?.message || error.message
            );

            alert(
                error.response?.data?.message ||
                "Failed to add admin"
            );
        }
    };

    // Change status
    const changeStatus = async (id, currentStatus) => {
        try {
            const newStatus =
                currentStatus === "approval"
                    ? "pending"
                    : "approval";

            const res = await axios.put(
                `http://localhost:8080/api/admin/update/${id}`,
                {
                    status: newStatus,
                }
            );

            alert(res.data.message);

            // Update UI without refresh
            setAdmins((prevAdmins) =>
                prevAdmins.map((admin) =>
                    admin._id === id
                        ? {
                              ...admin,
                              status: newStatus,
                          }
                        : admin
                )
            );

        } catch (error) {
            console.log(
                error.response?.data?.message || error.message
            );
        }
    };

    // Delete admin
    const deleteAdmin = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this admin?"
        );

        if (!confirmDelete) return;

        try {
            const res = await axios.delete(
                `http://localhost:8080/api/admin/delete/${id}`
            );

            alert(res.data.message || "Admin deleted successfully");

            // Remove from UI
            setAdmins((prevAdmins) =>
                prevAdmins.filter(
                    (admin) => admin._id !== id
                )
            );

        } catch (error) {
            console.log(
                error.response?.data?.message || error.message
            );

            alert(
                error.response?.data?.message ||
                "Failed to delete admin"
            );
        }
    };

    if (loading) {
        return (
            <div className="p-6 text-center">
                Loading admins...
            </div>
        );
    }

    return (
        <div className="p-6">

            {/* ================= HEADER ================= */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Admin Management
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage admin approval and accounts
                    </p>
                </div>

                {/* Add Admin Button */}
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="cursor-pointer rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
                >
                    {showForm ? "Close Form" : "+ Add Admin"}
                </button>

            </div>


            {/* ================= ADD ADMIN FORM ================= */}
            {showForm && (
                <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    {/* Form Header */}
                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-slate-800">
                                Add New Admin
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Create a new admin account
                            </p>
                        </div>

                        <button
                            onClick={() => setShowForm(false)}
                            className="cursor-pointer text-xl text-slate-400 hover:text-red-500"
                        >
                            ✕
                        </button>

                    </div>


                    {/* Form */}
                    <form
                        onSubmit={handleAddAdmin}
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    >

                        {/* Full Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Himanshu Saini"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="admin@gmail.com"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>


                        {/* Password */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                minLength={6}
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>


                        {/* Role */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                Role
                            </label>

                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            >
                                <option value="admin">
                                    Admin
                                </option>

                                <option value="user">
                                    User
                                </option>
                            </select>
                        </div>


                        {/* Status */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            >
                                <option value="pending">
                                    Pending
                                </option>

                                <option value="approval">
                                    Approval
                                </option>
                            </select>
                        </div>


                        {/* Buttons */}
                        <div className="flex items-end gap-3 md:col-span-2">

                            <button
                                type="submit"
                                className="cursor-pointer rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700"
                            >
                                Add Admin
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="cursor-pointer rounded-lg bg-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-300"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>
            )}


            {/* ================= ADMIN TABLE ================= */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        {/* Table Header */}
                        <thead className="border-b border-slate-200 bg-slate-50">

                            <tr>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    #
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    Full Name
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* Table Body */}
                        <tbody>

                            {admins.length > 0 ? (

                                admins.map((admin, index) => (

                                    <tr
                                        key={admin._id}
                                        className="border-b border-slate-100 hover:bg-slate-50"
                                    >

                                        {/* Number */}
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            {index + 1}
                                        </td>


                                        {/* Full Name */}
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-800">
                                                {admin.fullName || "N/A"}
                                            </div>
                                        </td>


                                        {/* Email */}
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-800">
                                                {admin.email}
                                            </div>
                                        </td>


                                        {/* Role */}
                                        <td className="px-6 py-4">

                                            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                                                {admin.role}
                                            </span>

                                        </td>


                                        {/* Status */}
                                        <td className="px-6 py-4">

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                    admin.status === "approval"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}
                                            >
                                                {admin.status}
                                            </span>

                                        </td>


                                        {/* Actions */}
                                        <td className="px-6 py-4">

                                            <div className="flex items-center gap-2">

                                                {/* Status Button */}
                                                <button
                                                    onClick={() =>
                                                        changeStatus(
                                                            admin._id,
                                                            admin.status
                                                        )
                                                    }
                                                    className={`cursor-pointer rounded-lg px-3 py-2 text-xs font-medium text-white ${
                                                        admin.status === "approval"
                                                            ? "bg-yellow-500 hover:bg-yellow-600"
                                                            : "bg-green-600 hover:bg-green-700"
                                                    }`}
                                                >
                                                    {admin.status === "approval"
                                                        ? "Set Pending"
                                                        : "Approve"}
                                                </button>


                                                {/* Delete Button */}
                                                <button
                                                    onClick={() =>
                                                        deleteAdmin(
                                                            admin._id
                                                        )
                                                    }
                                                    className="cursor-pointer rounded-lg bg-red-500 px-3 py-2 text-xs font-medium text-white hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="px-6 py-10 text-center text-slate-500"
                                    >
                                        No admins found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default AdminList;