import { Sparkles } from "lucide-react";
import { resume } from "../data/resume";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/80 md:p-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
          <Sparkles className="h-4 w-4" />
          Full-stack developer • building reliable web experiences
        </span>

        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
          {resume.name}
        </h1>

        <p className="mt-4 text-2xl font-semibold text-cyan-600 dark:text-cyan-300">
          {resume.title}
        </p>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
          {resume.summary}
        </p>

        {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div> */}

        <div className="mt-10 grid w-full gap-4 text-left md:grid-cols-3">
          {[
            ["Focus", "Next.js, Laravel, React, and scalable APIs"],
            ["Approach", "Clean code, accessible interfaces, and practical delivery"],
            ["Goal", "Build tools that help teams move faster"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">{label}</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
