import { Link } from "react-router-dom";
import founderImg from "../assets/founder.jpeg";
import cofounderImg from "../assets/cofounder.jpeg";
import developer4Img from "../assets/developer4.jpg";
import vaibhavImg from "../assets/vaibhav.png";
import dhruvImg from "../assets/dhruv.jpeg";
import mohitImg from "../assets/mohit.jpg";
import ayushImg from "../assets/ayush.jpg";
import alkaImg from "../assets/alka.jpg";
import aryanImg from "../assets/aryan.jpg";
import tanishkaImg from "../assets/tanishka.jpg";
import niyatiImg from "../assets/niyati.jpg";
import priyanshiImg from "../assets/priyanshi.png";
import trishaImg from "../assets/trisha.png";
import abuzarImg from "../assets/abuzar.png";

function Team() {
  const members = [
    {
      name: "Vikrant Bhawani",
      role: "Founder & CEO",
      image: founderImg,
      profile: "/team/vikrant-bhawani",
      desc: "Leading the company vision, innovation, and growth strategy with a focus on reliable digital solutions and long-term client success.",
      tags: ["Vision", "Innovation", "Strategy", "Leadership"],
    },
    {
      name: "Ankit Kumar",
      role: "Co-Founder & COO",
      image: cofounderImg,
      profile: "/team/ankit-kumar",
      desc: "Managing operations, project delivery, and business growth with a focus on quality, efficiency, and client satisfaction.",
      tags: ["Operations", "Delivery", "Growth", "Leadership"],
    },
    {
      name: "Abuzar Ahmed",
      role: "Full Stack Developer",
      image: abuzarImg,
      profile: "/team/abuzar",
      desc: "I build complete web applications with modern frontend and scalable backend technologies. I specialize in creating responsive user interfaces, secure APIs, database integration, authentication systems, and efficient server-side logic to deliver reliable, maintainable, and deployment-ready solutions with seamless user experiences.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "PHP", "Laravel", "MySQL", "REST API", "JWT Auth", "Redux", "React Query", "Axios", "Database Design", "MVC Architecture", "Composer", "PHP OOP", "API Integration", "Git", "Postman", "Linux", "Apache", "Nginx", "Docker", "Responsive Design", "Deployment"],
    },
    {
      name: "Anirudh Saini",
      role: "PHP Backend Developer",
      image: developer4Img,
      profile: "/team/anirudh",
      desc: "I build robust and scalable backend systems using PHP, creating secure APIs, database-driven applications, authentication systems, and efficient server-side logic. I specialize in database integration, user management, performance optimization, and clean architecture to deliver reliable, maintainable, and deployment-ready web solutions. I focus on writing secure, efficient code that powers seamless and high-performing applications.",
      tags: ["PHP","Laravel","MySQL","REST API", "Database Design", "MVC Architecture", "Composer","PHP OOP","API Integration","Git","Postman","Linux","Apache","Nginx","Deployment"],
    },
    {
      name: "Vaibhav Baliyan",
      role: "Application Developer",
      image: vaibhavImg,
      profile: "/team/vaibhav",
      desc: "I build modern, responsive, and user-friendly mobile applications with clean UI, smooth performance, and scalable architecture. I specialize in API integration, authentication, database connectivity, state management, and performance optimization to deliver secure, reliable, and deployment-ready applications. I focus on creating intuitive user experiences and maintainable code that ensures seamless functionality across devices.",
      tags: ["React Native", "Flutter", "Firebase", "REST API", "Authentication", "Mobile UI", "Android", "iOS", "State Management", "Push Notifications", "Deployment"],
    },
    {
      name: "Dhruv Vashishtha",
      role: "App Developer",
      image: dhruvImg,
      profile: "/team/dhruv",
      desc: "I build modern Android applications using Kotlin with clean UI, smooth performance, API integration, Firebase, authentication, database connectivity, and scalable app architecture.",
      tags: ["Kotlin", "Android", "Jetpack Compose", "Firebase", "REST API", "Room DB", "MVVM", "Play Store"],
    },
    {
      name: "Mohit ",
      role: "Mobile Application Developer",
      image: mohitImg,
      profile: "/team/mohit",
      desc: "I build modern and high-performance mobile applications using Kotlin, focusing on clean UI, smooth user experiences, and scalable architecture. I specialize in Android development, API integration, Firebase services, authentication, local and cloud database connectivity, and performance optimization. I create secure, maintainable, and deployment-ready applications that deliver reliable functionality and seamless experiences across Android devices.",
      tags: ["Kotlin", "Android", "Jetpack Compose", "Firebase", "REST API", "Room DB", "MVVM", "Coroutines", "Hilt", "Authentication", "Git", "Play Store"],
    },
    {
      name: "Ayush Pandey ",
      role: "FrontEnd Developer",
      image: ayushImg,
      profile: "/team/ayush",
      desc: "I build modern, responsive, and high-performance web applications with a focus on clean UI, seamless user experiences, and scalable frontend architecture. I specialize in React, TypeScript, and modern JavaScript frameworks, creating intuitive interfaces with efficient state management, API integration, and performance optimization. I develop secure, maintainable, and deployment-ready applications that deliver consistent functionality and exceptional user experiences across devices and browsers.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query", "REST API", "Responsive Design", "Git", "Vite", "Deployment"],
    },
    {
      name: "Alka Rautela",
      role: "FrontEnd Developer",
      image: alkaImg,
      profile: "/team/alka",
       desc: "I build modern, responsive, and high-performance web applications using React and TypeScript. I specialize in creating clean UI, seamless user experiences, API integration, and scalable frontend architectures, delivering secure and production-ready applications across devices and browsers.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query", "REST API", "Git", "Vite"],
    }, 
    {
      name: "Aryan Singh",
      role: "Sales",
      image: aryanImg,
      profile: "/team/aryan",
      desc: "I drive business growth by building strong customer relationships, identifying sales opportunities, and delivering solutions that meet client needs. I specialize in lead generation, client communication, negotiation, and customer satisfaction, ensuring consistent revenue growth and long-term business success.",
      tags: ["Sales", "Lead Generation", "Customer Relations", "Negotiation", "CRM", "Client Management", "Communication", "Business Development"],
    },
    {
      name: "Tanishka Thapa",
      role: "HR ",
      image: tanishkaImg,
      profile: "/team/tanishka",
      desc: "I support organizational growth by managing talent acquisition, employee engagement, and HR operations. I specialize in recruitment, onboarding, employee relations, performance management, and fostering a positive workplace culture to ensure long-term organizational success.",
      tags: ["HR", "Talent Acquisition", "Employee Engagement", "Recruitment", "Onboarding", "Employee Relations", "Performance Management", "Workplace Culture", "Business Development"],
    },
    {
      name: "Niyati Singhal",
      role: "HR ",
      image: niyatiImg,
      profile: "/team/niyati",
      desc: "I help organizations grow by managing recruitment, employee relations, and HR processes. I focus on talent acquisition, onboarding, performance management, and creating a positive work environment.",
      tags: ["HR", "Recruitment", "Talent Acquisition", "Onboarding", "Employee Relations", "Employee Engagement", "Performance Management",],
    },
    {
      name: "Priyanshi Saini",
      role: "Sales",
      image: priyanshiImg,
      profile: "/team/priyanshi",
      desc: "I help businesses grow by building strong customer relationships and identifying new opportunities. I specialize in lead generation, client communication, negotiation, and customer satisfaction to drive revenue and long-term business success.",
      tags: ["Sales", "Lead Generation", "Customer Relations", "Negotiation", "CRM", "Client Management", "Communication", "Business Development"],
    }, 
    {
      name: "Tisha Bhatia",
      role: "Lead CRM",
      image: trishaImg,
      profile: "/team/Trisha",
       desc: "I help businesses grow by generating quality leads, managing CRM systems, and building strong customer relationships. I specialize in lead generation, client communication, sales pipeline management, negotiation, and customer satisfaction to drive revenue and long-term business success.",
      tags: ["Sales", "Lead Generation", "CRM", "Client Management", "Customer Relations", "Communication", "Negotiation", "Business Development"],
    }, 
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 text-sm text-slate-500 lg:px-8">
          <Link to="/" className="font-medium text-purple-600">
            Home
          </Link>
          <span>/</span>
          <span>Team</span>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          {/* Heading */}
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              Our team
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">
              Meet the people behind DigitalinApp.
            </h1>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              A focused leadership team building reliable digital products with
              clean UX, scalable code, and strong delivery support.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {members.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-200/60"
              >
                {/* Image */}
                <div className="relative flex h-[230px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 md:h-[250px]">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-200/50 blur-3xl" />
                  <div className="absolute -bottom-14 -left-12 h-36 w-36 rounded-full bg-pink-200/60 blur-3xl" />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 h-full w-full object-contain object-center p-2 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
                    {member.role}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    {member.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                    {member.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;