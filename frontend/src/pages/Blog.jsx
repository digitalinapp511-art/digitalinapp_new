import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

const categories = [
  "All",
  "AI Agents",
  "ERP",
  "Mobile",
  "Digital Services",
  "Web Development",
  "Cybersecurity",
];

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://digitalinapp-new.onrender.com/api/blogs");

        setPosts(res.data.allPost);

        console.log(res.data.allPost);
      } catch (error) {
        console.error("api error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="overflow-hidden bg-slate-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-24 text-white md:py-32">

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-base font-bold uppercase tracking-wider text-purple-100">
            Insights Blog
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-6xl">
            Blog: AI, ERP & Software Development Insights
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practical insights on AI automation, ERP systems, SaaS products,
            mobile apps, and scalable digital marketing strategies built by our
            engineering team.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Updated</p>
              <h3 className="mt-1 text-xl font-black">Weekly</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Articles</p>
              <h3 className="mt-1 text-xl font-black">{posts.length}+</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">Focused on</p>
              <h3 className="mt-1 text-xl font-black">AI, SaaS, ERP</h3>
            </div>

          </div>
        </div>
      </div>

      {/* Search + Categories */}
      <div className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative z-10 rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-purple-100">

          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-5 py-4">

            <Search className="text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search AI, ERP, SaaS, mobile or marketing insights..."
              className="w-full bg-transparent text-sm font-medium outline-none"
            />

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            {/* {categories.map((item) => (
              <button
                key={item}
                className="rounded-full border border-slate-200 px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-indigo-600 hover:text-white"
              >
                {item}
              </button>
            ))} */}

          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {posts.map((post) => (

            <article
              key={post._id || post.slug}
              className={`group overflow-hidden rounded-[30px] border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                post.featured
                  ? "border-indigo-200 md:col-span-2 xl:col-span-1"
                  : "border-slate-200"
              }`}
            >

              {/* ================= BLOG IMAGE ================= */}
              <div className="relative h-56 w-full overflow-hidden">

                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
                    <span className="text-lg font-bold text-white">
                      No Image
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {post.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-indigo-700 shadow-lg">
                    Featured Article
                  </span>
                )}

              </div>

              {/* ================= CARD CONTENT ================= */}
              <div className="p-7">

                {/* Category + Date */}
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">

                  <span className="rounded-full bg-purple-50 px-3 py-1 text-indigo-600">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar size={15} />

                    {post.publishDate
                      ? new Date(post.publishDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "No date"}
                  </span>

                </div>

                {/* Title */}
                <h2 className="text-2xl font-black leading-snug text-slate-950">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-base leading-8 text-slate-500">
                  {post.shortDescription}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">

                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Clock size={16} />

                    {post.readTime} min read
                  </span>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-indigo-600 transition-all group-hover:gap-3"
                  >
                    Read article
                    <ArrowRight size={17} />
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-[36px] bg-gradient-to-r from-indigo-600 to-purple-700 p-10 text-center text-white shadow-2xl shadow-purple-200">

          <h2 className="text-3xl font-black md:text-5xl">
            Request Technical Content
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-purple-100">
            Share your topic ideas on AI, SaaS, ERP or mobile development and
            we’ll publish a detailed engineering guide.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 transition hover:bg-purple-100"
            >
              Submit Topic
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Blog;
