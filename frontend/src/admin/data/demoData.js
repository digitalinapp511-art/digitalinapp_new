export const stats = [
  { label: "Total Projects", value: "48", delta: "+6 this month" },
  { label: "Active Clients", value: "31", delta: "+3 new clients" },
  { label: "Monthly Revenue", value: "₹9.4L", delta: "+18% growth" },
  { label: "Pending Tasks", value: "127", delta: "12 overdue" },
];

export const projects = [
  { name: "DigitalInApp Website", client: "DigitalInApp", status: "Development", progress: 72, due: "Jun 15", team: ["SC", "VK", "AK"] },
  { name: "School ERP", client: "Bright School", status: "Testing", progress: 88, due: "May 30", team: ["SC", "RP"] },
  { name: "E-Commerce Platform", client: "ShopMax", status: "Planning", progress: 25, due: "Jul 08", team: ["AK", "NG"] },
  { name: "Mobile App UI", client: "Startup India", status: "Completed", progress: 100, due: "May 10", team: ["SC", "VK"] },
];

export const clients = [
  { name: "DigitalInApp", contact: "Sangam Choudhary", projects: 4, status: "Active", value: "₹3.8L", lastBill: "May 15" },
  { name: "Bright School", contact: "Admin Team", projects: 2, status: "Active", value: "₹2.5L", lastBill: "May 01" },
  { name: "ShopMax", contact: "Rahul Sharma", projects: 1, status: "Active", value: "₹1.2L", lastBill: "Apr 28" },
  { name: "Startup India", contact: "Priya Verma", projects: 1, status: "Inactive", value: "₹90K", lastBill: "May 10" },
];

export const team = [
  { name: "Sangam Choudhary", role: "Full Stack Developer", status: "Active", hours: 42, project: "DigitalInApp Website", initials: "SC" },
  { name: "Vikrant Bhawani", role: "Business Partner", status: "Active", hours: 36, project: "Client Handling", initials: "VK" },
  { name: "Amit Kumar", role: "Frontend Developer", status: "Active", hours: 34, project: "E-Commerce Platform", initials: "AK" },
  { name: "Neha Gupta", role: "UI/UX Designer", status: "Leave", hours: 0, project: "Mobile App UI", initials: "NG" },
];

export const posts = [
  { title: "Why Every Business Needs a Website", type: "Blog", status: "Published", date: "May 15" },
  { title: "DigitalInApp Company Portfolio", type: "Portfolio", status: "Published", date: "May 10" },
  { title: "School ERP Case Study", type: "Case Study", status: "Draft", date: "Apr 28" },
];

export const leads = [
  { name: "Deepa Nair", company: "TechFlow", source: "Contact Form", date: "May 20", status: "New" },
  { name: "Sameer Patel", company: "Nova Retail", source: "Website", date: "May 19", status: "Contacted" },
  { name: "Rina Thomas", company: "GreenBuild", source: "Referral", date: "May 18", status: "Qualified" },
];

export const activityLog = [
  { user: "Sangam", action: "Updated homepage premium UI section", time: "2m ago" },
  { user: "Admin", action: "New enquiry received from website", time: "18m ago" },
  { user: "Vikrant", action: "Closed client follow-up task", time: "1h ago" },
  { user: "System", action: "Website backup completed successfully", time: "3h ago" },
];

export const demoBlogs = [
  {
    _id: "demo-1",
    title: "AI-Powered ERP Systems for Modern Businesses in India",
    slug: "ai-powered-erp-systems-for-modern-businesses-in-india",
    category: "ERP",
    shortDescription: "How AI and ERP automation help modern businesses manage operations efficiently.",
    content: "Demo blog content for the admin dashboard.",
    featured: true,
    publishDate: "2026-02-20",
    readTime: 10,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    author: "Admin",
    tags: ["ERP", "AI", "Business Automation"],
    status: "published",
    createdAt: "2026-09-14T06:36:22.000Z",
  },
  {
    _id: "demo-2",
    title: "Building Scalable Web Applications with React and Node.js",
    slug: "building-scalable-web-applications-with-react-and-nodejs",
    category: "WEB DEVELOPMENT",
    shortDescription: "A demo article showing how modern MERN applications can be structured for growth.",
    content: "Demo blog content for the admin dashboard.",
    featured: false,
    publishDate: "2026-03-12",
    readTime: 7,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    author: "Admin",
    tags: ["ReactJS", "NodeJS", "MongoDB"],
    status: "published",
    createdAt: "2026-09-12T06:36:22.000Z",
  },
];
