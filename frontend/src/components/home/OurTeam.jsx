import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import founderImg from "../../assets/founder.jpeg";
import cofounderImg from "../../assets/cofounder.jpeg";
import { memo } from "react";
const OurTeam=memo(()=>{
    return(
        <section id="team" className="relative overflow-hidden bg-white py-12 md:py-14">
          <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-purple-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-pink-200/50 blur-3xl" />
        
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            {/* HEADING */}
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
                Our Team
              </p>
        
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Meet the people behind{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  DigitalinApp.
                </span>
              </h2>
        
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                A hands-on team focused on clean UI, scalable code and reliable delivery.
              </p>
            </div>
        
            {/* ONE PAGE CARDS */}
            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  name: "Vikrant Bhawani",
                  role: "Founder & CEO",
                  badge: "Founder",
                  image: founderImg,
                  desc: "Leading company vision, innovation and growth strategy with a focus on reliable digital solutions.",
                  link: "/team/vikrant-bhawani",
                  instagram: "https://www.instagram.com/vikrantbhawanisaini/",
                  linkedin:
                    "https://www.linkedin.com/in/vikrant-bhawani-saini-415980175/",
                  gradient: "from-purple-500 to-indigo-600",
                },
                {
                  name: "Ankit Kumar",
                  role: "Co-Founder & COO",
                  badge: "Co-Founder",
                  image: cofounderImg,
                  desc: "Managing operations, delivery support and helping the team build scalable digital products.",
                  link: "/team/ankit-kumar",
                  gradient: "from-pink-500 to-rose-600",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="grid items-center sm:grid-cols-[0.42fr_0.58fr]">
                    {/* IMAGE */}
                    <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 sm:h-[360px]">
                      <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-purple-300/50 blur-3xl" />
                      <div className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full bg-pink-300/50 blur-3xl" />
        
                      <span
                        className={`absolute left-4 top-4 z-20 rounded-full bg-gradient-to-r ${member.gradient} px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-white shadow-lg`}
                      >
                        {member.badge}
                      </span>
        
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative z-10 h-full w-full object-contain object-center p-3 transition duration-700 group-hover:scale-105"
                      />
                    </div>
        
                    {/* CONTENT */}
                    <div className="relative p-5 md:p-6">
                      <span className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                        0{index + 1}
                      </span>
        
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">
                        {member.role}
                      </p>
        
                      <h4 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
                        {member.name}
                      </h4>
        
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {member.desc}
                      </p>
        
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Leadership", "Strategy", "Growth"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-700 ring-1 ring-purple-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
        
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link
                          to={member.link}
                          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${member.gradient} px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-1`}
                        >
                          View profile
                          <ArrowRight size={15} />
                        </Link>
        
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-purple-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-purple-50 hover:text-purple-700"
                          >
                            Instagram
                          </a>
                        )}
        
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-purple-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-purple-50 hover:text-purple-700"
                          >
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        
            {/* VIEW TEAM BUTTON */}
            <div className="mt-7 text-center">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1"
              >
                View full team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
    )
})
export default OurTeam