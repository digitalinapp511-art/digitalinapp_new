import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldCheck } from "lucide-react";
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
<<<<<<< HEAD
    email: '',
    password: ''
  })

  const [error, setError] = useState("");



=======
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
<<<<<<< HEAD
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email || !formData.password) {
      return setError('Fill login Details')
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        formData
      );

      console.log(res.data);
      const adminUser = res.data.findLoginUser
      if (res.data.findLoginUser.status !== "approval") {
        alert("You are not an approved user");
        return navigate("/admin-login");
      }

      if (res.data.findLoginUser.role === "admin" && res.data.findLoginUser.status === "approval") {
        localStorage.setItem(
          "digitalinapp_admin_token",
          JSON.stringify(adminUser)
        );
        navigate("/admin");

      }

      else {
        alert('Your Not admin user !!')
        return navigate("/");

      }
    } catch (error) {
      console.log(error)
      console.log(
        error.response?.data?.message || "Something went wrong"
      );

      setError(
        error?.response?.data?.message
      );
=======

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === "digitalinapp511@gmail.com" &&
      formData.password === "digitalinapp@1234"
    ) {
      localStorage.setItem("digitalinapp_admin_token", "admin_logged_in");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070417] px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_35%),linear-gradient(135deg,#070417,#12082e,#1b0b3f)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-purple-700 shadow-xl">
            <ShieldCheck size={34} />
          </div>

          <h1 className="text-3xl font-black text-white">Admin Login</h1>
          <p className="mt-2 text-sm text-purple-100">
            Login to manage Digital In App website.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white">
              <Mail size={18} className="text-purple-200" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@digitalinapp.in"
                className="w-full bg-transparent text-sm outline-none placeholder:text-purple-200"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white">
              <Lock size={18} className="text-purple-200" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-purple-200"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-2xl bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
<<<<<<< HEAD
            className="cursor-pointer w-full rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:bg-purple-100"
=======
            className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:bg-purple-100"
>>>>>>> bcbe85cfaa96d8781fd58698680934e3d464ea1f
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;