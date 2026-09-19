import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isLatestBlog, setIsLatestBlog] = useState('');

  const [loading, setLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // GET SINGLE BLOG
  // =====================================================
  const getBlog = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `http://localhost:8080/api/blog/${slug}`
      );

      console.log("SINGLE BLOG:", response.data);

      if (response.data.success) {
        setBlog(response.data.blog);
      } else {
        setBlog(null);
        setError(response.data.message || "Blog not found");
      }
    } catch (error) {
      console.log("Blog Error:", error);

      setBlog(null);
      setError(
        error?.response?.data?.message || "Blog not found"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // GET LATEST BLOGS FROM BACKEND
  // =====================================================
  const getLatestBlog = async () => {
    try {
      setBlogsLoading(true);

      const response = await axios.get(
        "http://localhost:8080/api/latest-blog"
      );

      console.log("LATEST BLOGS:", response?.data.latestBlog);

      if (response.data.success) {
        setIsLatestBlog(response.data.latestBlog || []);
      } else {
        setIsLatestBlog([]);
      }
    } catch (error) {
      console.log(
        "Latest Blog Error:",
        error?.response?.data || error.message
      );

      setIsLatestBlog([]);
    } finally {
      setBlogsLoading(false);
    }
  };

  // =====================================================
  // GET ALL BLOGS
  // Used for Related Articles
  // =====================================================
  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/blogs"
      );

      console.log("ALL BLOGS:", response.data);

      if (response.data.success) {
        setBlogs(response.data.blogs || []);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.log("Blogs Error:", error);
      setBlogs([]);
    }
  };
useEffect(() => {
  console.log('hjkhkjhk')
  getLatestBlog();
}, []);
  // =====================================================
  // GET BLOG DATA
  // =====================================================
  useEffect(() => {
    getBlog();
    getBlogs();
  }, [slug]);

  // =====================================================
  // LOADING
  // =====================================================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 border-r-indigo-600 rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-sm text-slate-500">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // BLOG NOT FOUND
  // =====================================================
  if (error || !blog) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-5">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center text-4xl">
            📄
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Blog Not Found
          </h2>

          <p className="mt-3 mb-7 text-slate-500 leading-7">
            {error ||
              "The article you're looking for doesn't exist."}
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // =====================================================
  // ONLY PUBLISHED BLOGS
  // Used for Related Articles
  // =====================================================
  const publishedBlogs = blogs.filter(
    (item) => item.status === "published"
  );

  // =====================================================
  // SORT BLOGS - NEWEST FIRST
  // =====================================================
  const sortedBlogs = [...publishedBlogs].sort(
    (a, b) =>
      new Date(
        b.createdAt || b.publishDate || 0
      ) -
      new Date(
        a.createdAt || a.publishDate || 0
      )
  );

  // =====================================================
  // RELATED BLOGS
  // SAME CATEGORY
  // =====================================================
  const relatedBlogs = sortedBlogs
    .filter(
      (item) =>
        item.slug !== blog.slug &&
        item.category?.toLowerCase() ===
          blog.category?.toLowerCase()
    )
    .slice(0, 3);

  // =====================================================
  // DATE FORMAT
  // =====================================================
  const formatDate = (date) => {
    if (!date) {
      return "Date not available";
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return "Date not available";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formattedDate = formatDate(
    blog.publishDate || blog.createdAt
  );

  // =====================================================
  // RETURN
  // =====================================================
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/70">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-7 lg:py-12">

          {/* BREADCRUMB */}
          <div className="flex items-center flex-wrap gap-2 text-sm mb-12">

            <Link
              to="/"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to="/blog"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              Blogs
            </Link>

            <span className="text-slate-300">/</span>

            <span className="text-blue-600 font-semibold">
              {blog.category}
            </span>

          </div>

          {/* HERO GRID */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <div>

              {/* BADGES */}
              <div className="flex items-center flex-wrap gap-2.5 mb-6">

                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide">
                  {blog.category}
                </span>

                {blog.featured && (
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
                    ⭐ Featured
                  </span>
                )}

              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] leading-[1.08] tracking-[-2px] font-extrabold text-slate-950">
                {blog.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="max-w-3xl mt-7 text-base sm:text-lg lg:text-xl leading-8 text-slate-500">
                {blog.shortDescription}
              </p>

              {/* META */}
              <div className="flex flex-wrap gap-3 mt-8">

                {/* AUTHOR */}
                <div className="flex items-center gap-3 bg-white/80 border border-slate-200 rounded-xl px-3 py-2.5 shadow-sm">

                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">
                    {blog.author?.charAt(0)?.toUpperCase() || "A"}
                  </div>

                  <div>
                    <span className="block text-[11px] text-slate-400">
                      Written by
                    </span>

                    <strong className="block text-sm text-slate-700">
                      {blog.author || "Admin"}
                    </strong>
                  </div>

                </div>

                {/* DATE */}
                <div className="flex items-center gap-3 bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">

                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    📅
                  </div>

                  <div>
                    <span className="block text-[11px] text-slate-400">
                      Published
                    </span>

                    <strong className="block text-sm text-slate-700">
                      {formattedDate}
                    </strong>
                  </div>

                </div>

                {/* READ TIME */}
                <div className="flex items-center gap-3 bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">

                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                    ⏱
                  </div>

                  <div>
                    <span className="block text-[11px] text-slate-400">
                      Reading time
                    </span>

                    <strong className="block text-sm text-slate-700">
                      {blog.readTime || 1} min read
                    </strong>
                  </div>

                </div>

              </div>
            </div>

            {/* COVER IMAGE */}
            <div>

              <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden bg-slate-100 border border-white shadow-[0_25px_70px_rgba(15,23,42,0.14)]">

                {blog.coverImage ? (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">

                    <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-5xl shadow-xl">
                      📝
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                      {blog.category}
                    </h3>

                    <span className="mt-1 text-sm text-white/70">
                      Digital Insights
                    </span>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ARTICLE SECTION
      ===================================================== */}
      <section className="py-14 lg:py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-10 items-start">

            {/* ARTICLE */}
            <main>

              <article className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 lg:p-12">

                <div className="flex items-center gap-4 mb-8">

                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {blog.category}
                  </span>

                  <div className="flex-1 h-px bg-slate-200" />

                </div>

                {/* CONTENT */}
                <div className="text-[17px] sm:text-[18px] leading-[1.95] text-slate-600 whitespace-pre-line">
                  {blog.content}
                </div>

                {/* TAGS */}
                {blog.tags?.length > 0 && (

                  <div className="mt-12 pt-7 border-t border-slate-200">

                    <h4 className="text-base font-bold text-slate-900 mb-4">
                      Related Topics
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {blog.tags.map((tag, index) => (

                        <span
                          key={index}
                          className="px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition"
                        >
                          #{tag}
                        </span>

                      ))}

                    </div>

                  </div>

                )}

              </article>

              {/* BACK */}
              <div className="mt-5">

                <Link
                  to="/blog"
                  className="inline-flex items-center px-5 py-3 rounded-xl border border-blue-600 text-blue-600 bg-white text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all"
                >
                  ← Back to All Blogs
                </Link>

              </div>

            </main>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="lg:sticky lg:top-6">

              <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

                {/* HEADING */}
                <div className="mb-5">

                  <span className="text-[10px] tracking-[2px] font-bold text-blue-600">
                    EXPLORE
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Latest Blogs
                  </h3>

                </div>

                {/* LATEST BLOGS */}
                {blogsLoading ? (

                  <div className="space-y-4">

                    {[1, 2, 3].map((item) => (

                      <div
                        key={item}
                        className="flex gap-3 animate-pulse"
                      >

                        <div className="w-[72px] h-[72px] rounded-xl bg-slate-200 shrink-0" />

                        <div className="flex-1">

                          <div className="h-4 bg-slate-200 rounded mb-2" />

                          <div className="h-4 bg-slate-200 rounded w-3/4 mb-3" />

                          <div className="h-3 bg-slate-200 rounded w-1/2" />

                        </div>

                      </div>

                    ))}

                  </div>

                ) : isLatestBlog.length > 0 ? (

                  <div>

                    {isLatestBlog.map((item) => (

                      <div
                        key={item._id}
                        className="py-4 border-b border-slate-100 last:border-0"
                      >

                        <Link
                          to={`/blog/${item.slug}`}
                          className="flex gap-3 group"
                        >

                          {/* IMAGE */}
                          <div className="w-[72px] h-[72px] shrink-0 rounded-xl overflow-hidden bg-blue-50">

                            {item.coverImage ? (

                              <img
                                src={item.coverImage}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />

                            ) : (

                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xl">
                                📝
                              </div>

                            )}

                          </div>

                          {/* CONTENT */}
                          <div className="min-w-0">

                            <h4 className="text-sm font-bold leading-5 text-slate-700 group-hover:text-blue-600 transition line-clamp-2">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-[11px] text-slate-400">
                              {item.category}
                              {" • "}
                              {item.readTime || 1} min read
                            </p>

                          </div>

                        </Link>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p className="text-sm text-slate-400">
                    No latest blogs available.
                  </p>

                )}

                {/* VIEW ALL */}
                <Link
                  to="/blog"
                  className="mt-5 flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 transition-all"
                >

                  <span>
                    View All Blogs
                  </span>

                  <span className="text-lg">
                    →
                  </span>

                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}
      {relatedBlogs.length > 0 && (

        <section className="py-16 lg:py-20 bg-white border-t border-slate-200">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

            {/* HEADING */}
            <div className="max-w-2xl mx-auto text-center mb-12">

              <span className="text-[11px] tracking-[2px] font-bold text-blue-600">
                KEEP READING
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Related Articles
              </h2>

              <p className="mt-3 text-slate-500">
                Explore more articles from the{" "}
                <strong className="text-slate-700">
                  {blog.category}
                </strong>{" "}
                category.
              </p>

            </div>

            {/* RELATED CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {relatedBlogs.map((item) => (

                <article
                  key={item._id}
                  className="group overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300"
                >

                  {/* IMAGE */}
                  <div className="relative h-52 overflow-hidden bg-blue-50">

                    {item.coverImage ? (

                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                    ) : (

                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-5xl">
                        📝
                      </div>

                    )}

                    {/* CATEGORY */}
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 text-blue-600 text-[10px] font-bold uppercase shadow-sm">
                      {item.category}
                    </span>

                  </div>

                  {/* BODY */}
                  <div className="p-6">

                    <h3 className="text-lg font-bold leading-6 text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500 leading-6 line-clamp-3">
                      {item.shortDescription}
                    </p>

                    {/* TAGS */}
                    {item.tags?.length > 0 && (

                      <div className="flex flex-wrap gap-1.5 mt-4">

                        {item.tags
                          .slice(0, 3)
                          .map((tag, index) => (

                            <span
                              key={index}
                              className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold"
                            >
                              #{tag}
                            </span>

                          ))}

                      </div>

                    )}

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">

                      <span className="text-[11px] text-slate-400">
                        {item.readTime || 1} min read
                      </span>

                      <Link
                        to={`/blog/${item.slug}`}
                        className="text-xs font-bold text-blue-600 hover:text-indigo-600"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      )}

    </div>
  );
};

export default BlogDetails;