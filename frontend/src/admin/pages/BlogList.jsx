import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Badge, PageHeader } from "../components/AdminUI";
import { getBlogs, STORAGE_KEY } from "./Blogs";

function BlogList() {
  const [blogs, setBlogs] = useState(getBlogs);

  const deleteBlog = (id) => {
    if (!window.confirm("Delete this demo blog?")) return;
    const next = blogs.filter((blog) => blog._id !== id);
    setBlogs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <div>
      <PageHeader title="Blog List" subtitle="View all demo blog posts in one place." />
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead className="border-b bg-slate-50">
              <tr>
                {["#", "Blog", "Category", "Author", "Status", "Created", "Action"].map((heading) => (
                  <th key={heading} className="px-5 py-4 text-left text-xs font-black uppercase tracking-wider text-slate-500">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {blogs.map((blog, index) => (
                <tr key={blog._id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 text-sm text-slate-500">{index + 1}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {blog.coverImage ? <img src={blog.coverImage} alt="" className="h-12 w-16 rounded-xl object-cover" /> : <div className="h-12 w-16 rounded-xl bg-purple-100" />}
                      <div>
                        <p className="max-w-[330px] truncate font-black text-slate-900">{blog.title}</p>
                        <p className="text-xs text-slate-400">{blog.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4"><span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">{blog.category}</span></td>
                  <td className="px-5 py-4 text-sm text-slate-600">{blog.author}</td>
                  <td className="px-5 py-4"><Badge label={blog.status} /></td>
                  <td className="px-5 py-4 text-sm text-slate-600">{new Date(blog.createdAt).toLocaleDateString("en-IN")}</td>
                  <td className="px-5 py-4"><button onClick={() => deleteBlog(blog._id)} className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-black text-red-600"><Trash2 size={14} /> Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {blogs.length === 0 && <div className="mt-5 rounded-2xl bg-white p-10 text-center text-sm font-bold text-slate-500">No demo blogs found.</div>}
    </div>
  );
}

export default BlogList;
