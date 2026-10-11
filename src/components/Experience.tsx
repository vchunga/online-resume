import { resume } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Experience</p>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Career highlights</h2>

      <div className="mt-8 space-y-6">
        {resume.experiences.map((job) => (
          <article
            key={job.company}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="text-cyan-600 dark:text-cyan-300">{job.company}</p>
              </div>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200">{job.period}</span>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
              {job.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}