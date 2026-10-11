import { resume } from "../data/resume";

export default function Projects() {
  if (resume.projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Projects</p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Featured work</h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">Selected projects that reflect a practical, user-focused approach to modern software development.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {resume.projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70"
          >
            <div className="h-2 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
