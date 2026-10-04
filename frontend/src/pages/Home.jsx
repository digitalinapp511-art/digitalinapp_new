import React, {
  lazy,
  Suspense,
} from "react";

import { Link } from "react-router-dom";
import founderImg from "../assets/founder.jpeg";
import devloperImg from "../assets/devloper.jpeg";
import cofounderImg from "../assets/cofounder.jpeg";

import {
  ArrowRight,
  Code2,
  Smartphone,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  CalendarCheck,
  UserCheck,
  ExternalLink,
  LockKeyhole,
  FileText,
  Headphones,
  Palette,
  BriefcaseBusiness,
  Settings,
  Users,
  MonitorCog,
  Bug,
  CalendarDays,
  Network,
  Search,
  Laptop,
  ServerCog,
} from "lucide-react";



/* ===================
   LAZY IMPORTS
=================== */

const Hero =
  lazy(() =>
    import("../components/home/Hero")
  );

const DigitalProcess =
  lazy(() =>
    import(
      "../components/home/DigitalProcess"
    )
  );
const Blog =
  lazy(() =>
    import(
      "./Blog"
    )
  );

const DevelopmentJourney =
  lazy(() =>
    import(
      "../components/home/DevelopmentJourney"
    )
  );

const Services =
  lazy(() =>
    import(
      "../components/home/Services"
    )
  );

const Proof =
  lazy(() =>
    import(
      "../components/home/Proof"
    )
  );

const Testimonials =
  lazy(() =>
    import(
      "../components/home/Testimonials"
    )
  );

const Pricing =
  lazy(() =>
    import(
      "../components/home/Pricing"
    )
  );

const About =
  lazy(() =>
    import(
      "../components/home/About"
    )
  );

const OurTeam =
  lazy(() =>
    import(
      "../components/home/OurTeam"
    )
  );

const TrustCenter =
  lazy(() =>
    import(
      "../components/home/TrustCenter"
    )
  );

const Contact =
  lazy(() =>
    import(
      "../components/home/Contact"
    )
  );
  const AIChatbot = lazy(() =>
  import("../components/home/AIChatbot")
);



/* ===================
   SECTION LOADER
=================== */

const SectionLoader =
  ({ children }) => (

    <Suspense
      fallback={
        <div
          className="
min-h-[300px]
animate-pulse
"
        />
      }
    >

      {children}

    </Suspense>

  );



function Home() {

  const stats = [
    ["150+", "Projects Finished"],
    ["120+", "Happy Clients"],
    ["24/7", "Support Available"],
    ["89+", "Expert Team"]
  ];


  const points = [
    "Website & web-app development",
    "Native & cross-platform apps",
    "Custom ERP & admin automation",
    "Cloud, DevOps & managed hosting",
  ];


  const digitalItems = [
    {
      icon: Palette,
      title: "Design",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: LayoutDashboard,
      title: "Business Model",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: LayoutDashboard,
      title: "Operations",
      color: "from-red-500 to-rose-600",
    },
  ];


  const benefits = [
    "Customer Understanding",
    "Digital Accessibility",
    "Refined Business",
    "Digital Globalization",
    "Operations Monitoring",
    "Customer Satisfaction",
    "Elevated ROI",
  ];


  const journeySteps = [
    {
      icon: Users,
      title: "Scheduling",
      points: [
        "Beta Release",
        "Milestone Plans",
        "Discuss Project Schedule",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      points: [
        "Discuss UI/UX Interface",
        "System Design",
        "Project Execution Plan",
      ],
    },
    {
      icon: MonitorCog,
      title: "System Architecture",
      points: [
        "Research",
        "Sprint Plan",
        "Technical Planning",
      ],
    },
    {
      icon: Code2,
      title: "Development & Sprints",
      points: [
        "Frontend Development",
        "Backend Development",
        "Sprint Release",
      ],
    },
    {
      icon: Bug,
      title: "QA & Deployment",
      points: [
        "Quality Testing",
        "Beta Release",
        "Deployment Planning",
      ],
    },
    {
      icon: Rocket,
      title: "Launch",
      points: [
        "Final Deployment",
        "Live Monitoring",
        "Business Support",
      ],
    },
  ];


  return (

    <main
      className="
overflow-hidden
bg-slate-50
text-slate-950
"
    >


      <SectionLoader>
        <Hero />
      </SectionLoader>



      <SectionLoader>
        <DigitalProcess
          digitalItems={digitalItems}
          benefits={benefits}
          journeySteps={journeySteps}
        />
      </SectionLoader>


      <SectionLoader>
        <Blog />
      </SectionLoader>

      <SectionLoader>
        <DevelopmentJourney
          stats={stats}
          points={points}
        />
      </SectionLoader>


      <SectionLoader>
        <Services />
      </SectionLoader>


      <SectionLoader>
        <Proof />
      </SectionLoader>


      <SectionLoader>
        <Testimonials />
      </SectionLoader>


      <SectionLoader>
        <Pricing />
      </SectionLoader>


      <SectionLoader>
        <About />
      </SectionLoader>

      <SectionLoader>
        <OurTeam />
      </SectionLoader>


      <SectionLoader>
        <TrustCenter />
      </SectionLoader>


      <SectionLoader>
        <Contact />
      </SectionLoader>

<SectionLoader>
  <AIChatbot />
</SectionLoader>
      
      {/* MOBILE ACTIONS */}

      <div
        className="
fixed
bottom-3
left-1/2
z-50
flex
w-[92%]
max-w-md
-translate-x-1/2
items-center
justify-between
rounded-full
bg-white
p-2
shadow-2xl
ring-1
ring-slate-200
md:hidden
"
      >

        <a
          href="tel:+917419064919"
          className="
flex
h-12
flex-1
items-center
justify-center
rounded-full
bg-slate-950
text-white
"
        >

          📞 Call

        </a>


        <a
          href="
https://wa.me/917419064919
"
          target="_blank"
          rel="noreferrer"
          className="
mx-2
flex
h-12
flex-1
items-center
justify-center
rounded-full
bg-[#25D366]
text-white
"
        >

          WhatsApp

        </a>


        <a
          href="
https://calendar.app.google/DTek8gGctaBMv7RD8
"
          className="
flex
h-12
flex-1
items-center
justify-center
rounded-full
bg-slate-100
"
        >

          📅 Book

        </a>
<SectionLoader>
  <AIChatbot />
</SectionLoader>
      </div>


    </main>

  );

}

export default Home;