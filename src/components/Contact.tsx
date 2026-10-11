import { resume } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-[0_18px_45px_-24px_rgba(15,23,42,0.6)] dark:from-slate-950 dark:to-slate-900 md:p-10">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">Let’s build something meaningful.</h2>
      <p className="mt-3 max-w-2xl text-slate-200">If you are looking for a developer who values clean architecture, thoughtful UI, and reliable delivery, I’d love to connect.</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${resume.email}`}
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-100"
        >
          Email Me
        </a>
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-200"
        >
          LinkedIn
        </a>
        {resume.github ? (
          <a
            href={resume.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-200"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </section>
  );
}
