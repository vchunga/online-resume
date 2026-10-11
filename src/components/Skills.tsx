import { resume } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Skills</p>
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Core stack and tools</h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">A practical mix of frontend, backend, and collaboration tools used to ship reliable products.</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {resume.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}