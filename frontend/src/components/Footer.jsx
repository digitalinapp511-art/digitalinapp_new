import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlineMap,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { ChevronRight, ChevronUp, Sparkles } from "lucide-react";
import { socialLinks } from "../data/footerData";
import logoImg from "../assets/logo.png";

const getIcon = (icon) => {
  switch (icon) {
    case "facebook":
      return <FaFacebookF />;
    case "twitter":
      return <FaTwitter />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "youtube":
      return <FaYoutube />;
    case "skype":
      return <FaSkype />;
    case "whatsapp":
      return <FaWhatsapp />;
    default:
      return null;
  }
};

function Footer() {
  const links = [
    ["Privacy & Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
    ["Disclaimer", "/disclaimer"],
    ["Services", "/services"],
    ["Contact", "/contact"],
  ];

  const posts = [
    {
      img: "https://www.digitalinapp.in/uploads/article/ChatGPT Image Jan 15, 2026, 11_36_53 AM_1768457225.png",
      date: "January 15 2026",
      title: "SEO Services for Small Businesses in India",
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400",
      date: "December 21 2025",
      title: "Application Development Services by Digital In App",
    },
  ];

  return (
    <>
      <footer className="relative overflow-hidden bg-[#070014] text-white">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-purple-600/30 blur-[100px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* NEWSLETTER */}
        <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.08] p-1 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
            <div className="rounded-[30px] bg-gradient-to-br from-white/10 to-white/[0.03] p-6 md:p-9">
              <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-100">
                    <Sparkles size={15} className="text-yellow-300" />
                    Newsletter
                  </div>

                  <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                    Get Updates &{" "}
                    <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                      Latest News
                    </span>
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                    Subscribe to receive latest web development, app development
                    and digital growth updates.
                  </p>
                </div>

                <form className="rounded-3xl border border-white/10 bg-white p-2 shadow-xl">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="min-h-14 flex-1 rounded-2xl bg-slate-50 px-5 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 focus:bg-white"
                    />
                    <button
                      type="button"
                      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 px-7 font-bold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-fuchsia-500/50"
                    >
                      Send
                      <IoIosSend size={21} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_1.15fr_0.85fr_1.25fr] lg:px-8">
          {/* BRAND */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <img
              src={logoImg}
              alt="DigitalInApp"
              className="relative z-10 h-14 w-14 rounded-full object-contain"
            />

            <p className="mt-5 text-sm leading-7 text-slate-300">
              We build modern websites, mobile apps, ERP dashboards and cloud
              solutions for growing businesses.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-fuchsia-400/50 hover:bg-fuchsia-600"
                >
                  {getIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-black">Contact Info</h3>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />

            <div className="mt-7 space-y-5">
              <div className="flex gap-4 rounded-2xl bg-white/[0.05] p-4">
                <MdOutlineMap className="mt-1 shrink-0 text-2xl text-fuchsia-400" />
                <p className="text-sm leading-7 text-slate-300">
                  <strong>MAIN-BRANCH</strong> <br></br>
                  3rd Floor, Ashoka Apartment, THDC Colony, Dehrakhas, Patel
                  Nagar, Dehradun, Uttarakhand 248001
                </p>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white/[0.05] p-4">
                <MdOutlineMap className="mt-1 shrink-0 text-2xl text-fuchsia-400" />
                <p className="text-sm leading-7 text-slate-300">
                  <strong>BRANCH-OFFICE</strong> <br></br>
                  Shimla By-Pass ,  Devlok Colony , Dehradun , UTTARAKHAND , 248001
                </p>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white/[0.05] p-4">
                <MdOutlinePhoneInTalk className="mt-1 shrink-0 text-2xl text-fuchsia-400" />
                <p className="text-sm leading-7 text-slate-300">
                  +91 7419064919 <br />
                  +91 7456804919<br></br>
                   LandLine <br></br>
                  +91 135 317 3355<br></br>
                </p>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white/[0.05] p-4">
                <MdOutlineMail className="mt-1 shrink-0 text-2xl text-fuchsia-400" />
                <p className="text-sm leading-7 text-slate-300">
                  digitalinapp511@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-black">Useful Links</h3>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />

            <ul className="mt-7 space-y-4 text-sm text-slate-300">
              {links.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    className="group flex items-center gap-2 transition hover:text-fuchsia-300"
                  >
                    <ChevronRight
                      size={16}
                      className="text-fuchsia-400 transition group-hover:translate-x-1"
                    />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* POSTS */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-black">Recent Posts</h3>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />

            <div className="mt-7 space-y-5">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-2xl bg-white/[0.05] p-3 transition hover:bg-white/[0.09]"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-20 w-24 shrink-0 rounded-2xl object-cover transition group-hover:scale-105"
                  />
                  <div>
                    <p className="text-xs font-bold text-fuchsia-400">
                      {post.date}
                    </p>
                    <h4 className="mt-1 text-sm font-bold leading-6 text-white transition group-hover:text-fuchsia-200">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative border-t border-white/10 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:text-left lg:px-8">
            <p>
              © 2025 - DIGITALINAPP | Created By{" "}
              <span className="font-bold text-fuchsia-400">DIGITALINAPP</span>
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </button>
          </div>
        </div>
      </footer>

      {/* FLOAT WHATSAPP */}
     <a
  href="https://wa.me/917419064919"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-5 right-5 z-50 hidden items-center gap-1.5 rounded-full bg-green-500 px-3.5 py-2 text-xs font-bold text-white shadow-xl shadow-green-500/25 ring-2 ring-green-500/20 transition hover:scale-105 hover:bg-green-600 md:flex"
  aria-label="Chat with us on WhatsApp"
>
  <FaWhatsapp size={20} />
  <span>Chat with us</span>
</a>
    </>
  );
}

export default Footer;