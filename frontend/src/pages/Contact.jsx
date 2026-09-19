import { useState } from "react";
import axios from "axios";
import { PhoneCall } from 'lucide-react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Send,
  Building2,
  Wallet,
  CalendarDays,
  Clock,
  CheckCircle2,
  Globe2,
  User,
  FileText,
} from "lucide-react";
import { FaKaaba, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "",
    company: "",
    budget: "",
    service: "",
    details: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false)
  const [alertMsg, setAlerthMsg] = useState("")
  const [alertType, setAlertType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEnquiry = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const res = await axios.post('http://localhost:8080/api/send-mail', formData)
      setAlertType('success')
      setAlerthMsg(res.data.message)
      console.log(res.data.message)
      e.target.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        service: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      setAlertType('danger')
      setAlerthMsg(error.response?.data?.message || 'Something went wrong')
      console.log(error?.response.data.message);

    } finally {
      setLoading(false)
    }
  };

  const handleBookCall = async () => {
    try {
      if (!formData.name || !formData.email || !formData.date || !formData.time) {
        alert("Please fill name, email, preferred date and preferred time");
        return;
      }

      const startDateTime = new Date(`${formData.date}T${formData.time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

      const payload = {
        name: formData.name,
        email: formData.email,
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
      };

      console.log("Booking Payload:", payload);

      const res = await fetch("http://localhost:5000/api/book-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Call booked successfully. Meeting link has been created.");
        console.log("Meet Link:", data.meetLink);
        console.log("Calendar Event:", data.eventLink);
      }
      else {
        console.log("Booking failed:", data);
        alert(data.error || data.message || "Booking failed");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Backend not connected");
    }
  };

  const steps = [
    {
      no: "01",
      title: "Share your requirement",
      text: "Tell us about your business, project type, goals and expected timeline.",
    },
    {
      no: "02",
      title: "Get a clear plan",
      text: "We review your requirement and suggest the best solution, budget and next steps.",
    },
    {
      no: "03",
      title: "Start development",
      text: "Once approved, we start design, development and delivery with regular updates.",
    },
  ];

  const highlights = [
    "Discovery call and scope alignment",
    "Clear estimate and timeline",
    "Dedicated point of contact",
  ];

  const services = [
    "Schools, hospitals, SMEs",
    "Web, mobile apps, ERP",
    "Support and maintenance plans",
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-slate-50 py-6 md:py-6"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
      <div className="absolute right-[-120px] bottom-20 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700 shadow-sm">
            CONTACT
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Tell us about your project.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share a few details and we'll get back within one business day with
            the next steps. No long forms, just enough information to help us
            prepare.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleBookCall}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1"
            >
              <CalendarDays size={19} />
              Book a 30-min call
            </button>

            <a
              href="https://wa.me/917419064919"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1"
            >
              <FaWhatsapp size={20} />
              WhatsApp now
            </a>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-800 p-7 text-white shadow-2xl shadow-purple-200 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Response time</h3>
                  <p className="mt-2 text-slate-200">
                    Hear back within one business day.
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">
                    We review every enquiry and reply with next steps, timeline,
                    and required inputs.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="text-emerald-300" />
                    <span className="text-sm font-semibold text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    Service areas
                  </h3>
                  <p className="mt-2 font-semibold text-slate-600">
                    India-first, remote friendly.
                  </p>
                  <p className="mt-4 leading-7 text-slate-500">
                    Based in Dehradun, delivering across India with onsite
                    visits when required.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {steps.map((step) => (
                <div
                  key={step.no}
                  className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <span className="text-3xl font-black text-purple-600">
                      {step.no}
                    </span>
                    <div>
                      <h4 className="text-lg font-black text-slate-950">
                        {step.title}
                      </h4>
                      <p className="mt-1 leading-7 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {alertMsg && (
            <div
              className={`
      fixed top-5 right-5 z-50
      w-[350px]
      flex items-center justify-between
      gap-4
      rounded-xl
      px-5 py-4
      shadow-2xl
      border
      animate-[slideIn_0.3s_ease-out]
      ${alertType === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : alertType === "danger"
                    ? "bg-red-50 border-red-200 text-red-800"
                    : alertType === "warning"
                      ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                      : "bg-blue-50 border-blue-200 text-blue-800"
                }
    `}
              role="alert"
            >
              {/* Icon */}
              <div className="flex items-center gap-3">
                <div
                  className={`
          flex h-9 w-9 items-center justify-center
          rounded-full text-lg font-bold
          ${alertType === "success"
                      ? "bg-green-100 text-green-600"
                      : alertType === "danger"
                        ? "bg-red-100 text-red-600"
                        : alertType === "warning"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                    }
        `}
                >
                  {alertType === "success"
                    ? "✓"
                    : alertType === "danger"
                      ? "!"
                      : alertType === "warning"
                        ? "⚠"
                        : "i"}
                </div>

                <span className="text-sm font-medium">
                  {alertMsg}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setAlertMsg("")}
                className=" cursor-pointer text-xl font-bold opacity-60 transition hover:opacity-100"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          )}
          <form
            onSubmit={handleSendEnquiry}
            className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 md:p-8"
          >
            <div className="rounded-[26px] bg-slate-950 p-6 text-white">
              <h3 className="text-3xl font-black">Start a conversation</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Prefer phone or email? Reach out directly at{" "}
                <a
                  className="font-bold text-white"
                  href="mailto:digitalinapp511@gmail.com"
                >
                  digitalinapp511@gmail.com
                </a>{" "}
                or call +91-7419064919 / +91-7456804919.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                <a
                  href="mailto:info@digitalinapp.in"
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  digitalinapp511@gmail.com
                </a>
                <a
                  href="tel:+917419064919"
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  +91-7419064919
                </a>
                <a
                  href="tel:+917456804919"
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  +91-7456804919
                </a>
              </div>
            </div>

            <div className="hidden">
              <label>Leave this field empty</label>
              <input type="text" />
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <InputField
                icon={<User size={18} />}
                label="Full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />

              <InputField
                icon={<Mail size={18} />}
                label="Work email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                type="email"
              />
              <InputField
                icon={<PhoneCall size={18} />}
                label="Contact Phone"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="Contact Phone"
              />
              <InputField
                icon={<CalendarDays size={18} />}
                label="Preferred date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
              />

              <InputField
                icon={<Clock size={18} />}
                label="Preferred time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
              />

              <InputField
                icon={<Building2 size={18} />}
                label="Company / organisation"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
              />

              <SelectField
                icon={<Wallet size={18} />}
                label="Indicative budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select a range</option>
                <option>Under ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>₹3,00,000 – ₹7,00,000</option>
                <option>₹7,00,000+</option>
              </SelectField>

              <div className="sm:col-span-2">
                <SelectField
                  icon={<ArrowRight size={18} />}
                  label="Services you're interested in"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  <option>Website / Web App</option>
                  <option>Mobile App</option>
                  <option>ERP / Admin System</option>
                  <option>Support and Maintenance</option>
                  <option>UI/UX Consulting</option>
                </SelectField>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Project details
                </label>
                <div className="rounded-2xl border border-slate-300 bg-white px-4 py-3 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
                  <div className="mb-2 flex items-center gap-2 text-slate-400">
                    <FileText size={18} />
                    <span className="text-sm">
                      Tell us about your goals, timelines and any existing
                      systems.
                    </span>
                  </div>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="5"
                    className="w-full resize-none outline-none"
                  />
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              We will review your enquiry and reply within one business day.
            </p>

            <button
              onClick={() => setLoading(true)}
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1 sm:w-auto"
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
                  " Send enquiry"
              }

              <Send size={18} />
            </button>
          </form>
        </div>

        <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-950">
                Visit or write to us
              </h3>
              <p className="mt-2 font-semibold text-purple-700">
                Dehradun, Uttrakhand | Remote-first
              </p>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                3rd Floor, ashoka Apartment, THDC Colony, Dehrakhas, Patel
                Nagar, Dehradun, Uttarakhand 248001
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/Digital+In+App+%E2%80%93+Web+%26+App+Development+Company+in+Dehradun/@30.3000126,78.0200753,11z/data=!4m10!1m2!2m1!1sDigitalinApp!3m6!1s0x3909294c70694ce3:0xf58c06b30913aed4!8m2!3d30.3000464!4d78.0200739!15sCgxEaWdpdGFsaW5BcHBaDiIMZGlnaXRhbGluYXBwkgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11mkkq6xmx?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-6 py-4 font-black text-slate-950 transition hover:bg-slate-950 hover:text-white"
            >
              <MapPin size={19} />
              Find us on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>

      <div className="flex items-center rounded-2xl border border-slate-300 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
        <span className="text-slate-400">{icon}</span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-2xl px-3 py-4 outline-none"
        />
      </div>
    </div>
  );
}

function SelectField({ label, icon, children, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>

      <div className="flex items-center rounded-2xl border border-slate-300 px-4 transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
        <span className="text-slate-400">{icon}</span>

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent px-3 py-4 outline-none"
        >
          {children}
        </select>
      </div>
    </div>
  );
}

export default Contact;