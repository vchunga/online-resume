import { resume } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">About</p>
      <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Building practical software with a strong product mindset.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I enjoy turning ideas into reliable web products, from frontend interfaces to backend systems and deployment workflows. My focus is on writing maintainable code, improving user experience, and shipping useful features with consistency.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Currently</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Based in {resume.location}, working across full-stack web development and modern application tooling.</p>
        </div>
      </div>
    </section>
  );
}