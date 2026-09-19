function SectionTitle({ badge, title, text }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
      <p className="mb-4 inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
        {badge}
      </p>

      <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-500 md:text-xl">
        {text}
      </p>
    </div>
  );
}

export default SectionTitle;