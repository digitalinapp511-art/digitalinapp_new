import { useState } from "react";
import { Plus, Trash2, Save, X } from "lucide-react";
import { Badge, PageHeader } from "../components/AdminUI";
import { demoBlogs } from "../data/demoData";

const STORAGE_KEY = "digitalinapp_demo_blogs";

function getBlogs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : demoBlogs;
  } catch {
    return demoBlogs;
  }
}

function Blogs() {
  const [blogs, setBlogs] = useState(getBlogs);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "WEB DEVELOPMENT",
    author: "Admin",
    readTime: 5,
    status: "draft",
    coverImage: "",
  });

  const saveBlogs = (next) => {
    setBlogs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    const slug = form.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    const nextBlog = {
      _id: `demo-${Date.now()}`,
      ...form,
      readTime: Number(form.readTime) || 5,
      slug,
      shortDescription: "Demo blog created from the admin dashboard.",
      content: "This is demo content. Connect this form to your backend API when you are ready.",
      tags: [],
      createdAt: new Date().toISOString(),
      publishDate: new Date().toISOString().slice(0, 10),
    };

    saveBlogs([nextBlog, ...blogs]);
    setForm({ title: "", category: "WEB DEVELOPMENT", author: "Admin", readTime: 5, status: "draft", coverImage: "" });
    setShowForm(false);
  };

  const deleteBlog = (id) => {
    if (!window.confirm("Delete this demo blog?")) return;
    saveBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div>
      <PageHeader
        title="Blogs"
        subtitle="Create and manage demo blog posts. Backend API can be connected later."
        button={showForm ? "Close Form" : "Create Blog"}
        onButtonClick={() => setShowForm((value) => !value)}
      />

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-[28px] border border-purple-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-black text-slate-700">Title</label>
              <input name="title" value={form.title} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-400" placeholder="Enter blog title" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3">
                {["AI", "ERP", "AI AGENTS", "MOBILE APP", "WEB DEVELOPMENT", "CMS", "Cybersecurity", "Digital Services", "SEO"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">Status</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">Author</label>
              <input name="author" value={form.author} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">Read Time</label>
              <input type="number" min="1" name="readTime" value={form.readTime} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-black text-slate-700">Cover Image URL (demo)</label>
              <input name="coverImage" value={form.coverImage} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="https://..." />
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button className="flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"><Save size={16} /> Save Demo Blog</button>
            <button type="button" onClick={() => setShowForm(false)} className="flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700"><X size={16} /> Cancel</button>
          </div>
        </form>
      )}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <article key={blog._id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {blog.coverImage ? <img src={blog.coverImage} alt={blog.title} className="h-48 w-full object-cover" /> : <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 text-5xl font-black text-purple-400">B</div>}
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <Badge label={blog.status} />
                <span className="text-xs font-bold text-slate-400">{blog.readTime} min</span>
              </div>
              <h2 className="mt-4 line-clamp-2 text-xl font-black text-slate-950">{blog.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{blog.category} · {blog.author}</p>
              <button onClick={() => deleteBlog(blog._id)} className="mt-5 flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-black text-red-600"><Trash2 size={15} /> Delete</button>
            </div>
          </article>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center">
          <Plus className="mx-auto text-purple-400" />
          <p className="mt-3 font-black text-slate-800">No demo blogs</p>
        </div>
      )}
    </div>
  );
}

export { STORAGE_KEY, getBlogs };
export default Blogs;
