import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { Images } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Layers,
  Globe,
  Smartphone,
  LayoutDashboard,
  School,
  ShoppingCart,
  Cloud,
  Megaphone,
  PenTool,
  Puzzle,
  GitBranch,
  Briefcase,
  Shield,
  Rocket,
  Tags,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

const serviceCategories = [
  { icon: Layers, title: "All services", link: "/services" },
  { icon: Globe, title: "Website development", link: "/website-development" },
  { icon: Smartphone, title: "Mobile app development", link: "/mobile-app-development" },
  { icon: LayoutDashboard, title: "ERP panels", link: "/erp-panel" },
  { icon: School, title: "School ERP", link: "/school-erp" },
  { icon: ShoppingCart, title: "eCommerce", link: "/ecommerce" },
  { icon: Cloud, title: "Cloud & DevOps", link: "/cloud-devops" },
  { icon: Megaphone, title: "Digital marketing", link: "/digital-marketing" },
];

const buildItems = [
  { title: "School ERP", text: "Fees, attendance, parent app." },
  { title: "Clinic management", text: "Appointments, billing, records." },
  { title: "Restaurant billing", text: "POS, inventory, reports." },
  { title: "Startup MVP", text: "Launch your product fast." },
  { title: "Website development", text: "Business sites, landing pages." },
  { title: "Mobile apps", text: "Android, iOS & cross-platform." },
  { title: "ERP dashboards", text: "CRM and admin tools." },
  { title: "eCommerce", text: "Catalog, cart and checkout." },
];

const moreMenu = [
  { icon: PenTool, title: "Blogs", path: "/blog" },
  { icon: Puzzle, title: "Solutions", path: "/solutions" },
  { icon: GitBranch, title: "Process", path: "/process" },
  { icon: Briefcase, title: "Work", path: "/work" },
  { icon: Shield, title: "Trust center", path: "/trust-center" },
  { icon: Tags, title: "Pricing", path: "/pricing" },
  { icon: Rocket, title: "App", path: "/app" },
  { icon: Images, title: "Gallery", path: "/gallery" },
];

const helpfulPages = [
  { title: "Blog", text: "Updates, insights and product notes." },
  { title: "Solutions", text: "Ready-to-adapt business solutions." },
  { title: "Process", text: "How we plan, design and deliver." },
  { title: "Careers", text: "Internships and full-time roles." },
  { title: "Work", text: "Projects and case study snapshots." },
  { title: "Pricing", text: "Affordable plans with clear scope." },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const closeMenus = () => {
    clearTimer();
    setServicesOpen(false);
    setMoreOpen(false);
  };

  const closeMenusDelay = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setServicesOpen(false);
      setMoreOpen(false);
    }, 300);
  };

  const openServices = () => {
    clearTimer();
    setServicesOpen(true);
    setMoreOpen(false);
  };

  const openMore = () => {
    clearTimer();
    setMoreOpen(true);
    setServicesOpen(false);
  };

 const linkClass =
  "relative text-[15px] font-semibold text-slate-900 transition duration-300 hover:text-purple-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full";

  const mobileLink =
    "rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-900 transition duration-300 hover:bg-purple-500/10 hover:text-purple-600";

  return (
    <header className="sticky top-0  z-40 border-b border-purple-500/10 bg-white backdrop-blur-2xl  ">
  
   {/*   <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_0%)]" />*/}

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-1 lg:px-8">
        {/* LOGO */}
        <NavLink to="/" onClick={closeMenus} className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-xl" />
           <div className="flex items-center">
  <img
    src={logoImg}
    alt="DigitalInApp"
    className="relative z-12 h-18 w-18 rounded-full object-contain"
  />
</div>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" onClick={closeMenus} className={linkClass}>
            Home
          </NavLink>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeMenusDelay}
          >
            <button
              type="button"
              className={`${linkClass} flex items-center gap-1 ${
                servicesOpen ? "text-purple-400" : ""
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <NavLink to="/about" onClick={closeMenus} className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenus} className={linkClass}>
            Contact
          </NavLink>


    
          {/* MORE */}
          <div
            className="relative"
            onMouseEnter={openMore}
            onMouseLeave={closeMenusDelay}
          >
            <button
              type="button"
              className={`${linkClass} flex items-center gap-1 ${
                moreOpen ? "text-purple-400" : ""
              }`}
            >
              More
              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+917419064919"
            className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-white px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur-xl transition hover:border-purple-400/40 hover:bg-purple-50"
          >
            <Phone size={16} className="text-purple-400" />
            +91 7419064919
            
          </a>

          <a
            href="https://wa.me/917419064919"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          <a
  href="https://calendar.app.google/DTek8gGctaBMv7RD8"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenus}
  className="rounded-full border border-purple-500/20 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-purple-50 hover:text-purple-700"
>
  Book a call
</a>

          <NavLink
            to="/contact"
            onClick={closeMenus}
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(139,92,246,0.45)] transition duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            Get Proposal
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
  onClick={() => setOpen(!open)}
  className="rounded-2xl border border-purple-500/20 bg-white p-2 text-slate-900 transition hover:bg-purple-50 hover:text-purple-700 lg:hidden"
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>
      </div>

      {/* SERVICES MENU */}
      {servicesOpen && (
        <div
          onMouseEnter={openServices}
          onMouseLeave={closeMenusDelay}
          className="absolute left-0 right-0 top-[88px] z-50 hidden px-6 lg:block"
        >
          <div className="mx-auto grid max-w-[1180px] grid-cols-[250px_1fr_280px] gap-8 rounded-[28px] border border-purple-500/10 bg-[#14052D]/95 p-6 shadow-[0_25px_80px_rgba(91,33,182,0.45)] backdrop-blur-2xl">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Service Categories
              </p>

              <div className="space-y-2">
                {serviceCategories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.title}
                      to={item.link}
                      onClick={closeMenus}
                      className="group flex items-center gap-3 rounded-2xl px-3 py-2 text-[14px] font-semibold text-slate-100 transition duration-300 hover:bg-purple-500/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 transition duration-300 group-hover:bg-purple-500 group-hover:text-white">
                        <Icon size={18} />
                      </span>

                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* CENTER */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                What do you want to build?
              </p>

              <div className="grid grid-cols-2 gap-4">
                {buildItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to="/services"
                    onClick={closeMenus}
                    className="rounded-2xl border border-transparent bg-white/5 p-4 transition duration-300 hover:border-purple-500/20 hover:bg-purple-500/10"
                  >
                    <h3 className="text-[15px] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-slate-400">
                      {item.text}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Teams we work with
              </p>

              <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-5">
                <p className="text-sm leading-6 text-slate-300">
                  "We helped brands move from idea to scalable products with
                  modern UI and fast development."
                </p>

                <h4 className="mt-4 text-sm font-bold text-white">
                  Founder, Startup Brand
                </h4>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Institutes", "Retail", "Agencies"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MORE MENU */}
      {moreOpen && (
        <div
          onMouseEnter={openMore}
          onMouseLeave={closeMenusDelay}
          className="absolute left-0 right-0 top-[88px] z-50 hidden px-6 lg:block"
        >
          <div className="mx-auto grid max-w-[1080px] grid-cols-[240px_1fr_260px] gap-8 rounded-[28px] border border-purple-500/10 bg-[#14052D]/95 p-6 shadow-[0_25px_80px_rgba(91,33,182,0.45)] backdrop-blur-2xl">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Explore
              </p>

              <div className="space-y-2">
                {moreMenu.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.title}
                      to={item.path}
                      onClick={closeMenus}
                      className="group flex items-center gap-3 rounded-2xl px-3 py-2 text-[14px] font-semibold text-slate-100 transition duration-300 hover:bg-purple-500/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 transition duration-300 group-hover:bg-purple-500 group-hover:text-white">
                        <Icon size={18} />
                      </span>

                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* CENTER */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Helpful Pages
              </p>

              <div className="grid grid-cols-2 gap-4">
                {helpfulPages.map((item) => (
                  <NavLink
                    key={item.title}
                    to="/blog"
                    onClick={closeMenus}
                    className="rounded-2xl border border-transparent bg-white/5 p-4 transition duration-300 hover:border-purple-500/20 hover:bg-purple-500/10"
                  >
                    <h3 className="text-[15px] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-slate-400">
                      {item.text}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                Need Help?
              </p>

              <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-5">
                <p className="text-sm text-slate-300">
                  Want a quick estimate?
                </p>

                <h4 className="mt-3 text-xl font-bold text-white">
                  +91 7419064919
                </h4>
              </div>

              <div className="mt-5 grid gap-3">
                <NavLink
                  to="/contact"
                  onClick={closeMenus}
                  className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-purple-500/30"
                >
                  Get Proposal
                </NavLink>

                <a
                  href="https://wa.me/917419064919"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-purple-500/20 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:bg-purple-500/10"
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/search?q=digital+in+app+dehradun"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/20 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-purple-500/10"
                >
                  <FaGoogle className="text-purple-300" />
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BG GLOW */}
{/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_0%)]" />

MOBILE BUTTON */}


{/* MOBILE MENU */}
{open && (
  <div className="relative z-40 border-t border-purple-500/10 bg-white px-4 py-5 lg:hidden">
    <div className="flex flex-col gap-2">
      <NavLink
        to="/"
        onClick={() => setOpen(false)}
        className={mobileLink}
      >
        Home
      </NavLink>

      {/* SERVICES DROPDOWN */}
      <button
        type="button"
        onClick={() => {
          setServicesOpen(!servicesOpen);
          setMoreOpen(false);
        }}
        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition ${
  servicesOpen
    ? "bg-purple-500/10 text-purple-600"
    : "text-slate-900 hover:bg-purple-500/10 hover:text-purple-600"
}`}
      >
        Services
        <ChevronDown
          size={18}
          className={`transition ${servicesOpen ? "rotate-180" : ""}`}
        />
      </button>

      {servicesOpen && (
        <div className="ml-3 flex flex-col gap-1 border-l border-purple-500/20 pl-3">
          {serviceCategories.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              onClick={() => {
                setOpen(false);
                setServicesOpen(false);
              }}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-purple-500/10 hover:text-purple-600"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}

      <NavLink
        to="/about"
        onClick={() => setOpen(false)}
        className={mobileLink}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setOpen(false)}
        className={mobileLink}
      >
        Contact
      </NavLink>

      {/* MORE DROPDOWN */}
      <button
        type="button"
        onClick={() => {
          setMoreOpen(!moreOpen);
          setServicesOpen(false);
        }}
        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition ${
  servicesOpen
    ? "bg-purple-500/10 text-purple-600"
    : "text-slate-900 hover:bg-purple-500/10 hover:text-purple-600"
}`}
      >
        More
        <ChevronDown
          size={18}
          className={`transition ${moreOpen ? "rotate-180" : ""}`}
        />
      </button>

      {moreOpen && (
        <div className="ml-3 flex flex-col gap-1 border-l border-purple-500/20 pl-3">
          {moreMenu.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => {
                setOpen(false);
                setMoreOpen(false);
              }}
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-purple-500/10 hover:text-purple-600"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}

      <a
        href="tel:+917419064919"
        className="mt-4 rounded-full border border-purple-500/20 bg-white px-4 py-3 text-center font-semibold text-slate-900 hover:bg-purple-50"
      >
        +91 7419064919
      </a>

      <a
        href="https://wa.me/917419064919"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 font-bold text-white"
      >
        <FaWhatsapp className="text-lg" />
        WhatsApp
      </a>

      <NavLink
        to="/contact"
        onClick={() => setOpen(false)}
        className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-4 py-3 text-center font-bold text-white"
      >
        Get Proposal
      </NavLink>
    </div>
  </div>
)}
    </header>
  );
}

export default Navbar;