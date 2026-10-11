import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ThemeToggle from "../components/ThemeToggle";
import { resume } from "../data/resume";
import { absoluteUrl, siteUrl } from "../lib/seo";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    jobTitle: resume.title,
    description: resume.summary,
    email: resume.email,
    telephone: resume.phone,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richmond",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    alumniOf: resume.education.map((school) => ({
      "@type": "CollegeOrUniversity",
      name: school.school,
    })),
    knowsAbout: resume.skills,
    sameAs: [resume.linkedin, resume.github].filter(Boolean),
    worksFor: resume.experiences.map((job) => ({
      "@type": "Organization",
      name: job.company,
    })),
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${resume.name} - ${resume.title}`,
    url: siteUrl,
    image: absoluteUrl("/computer-monitor.png"),
    mainEntity: personJsonLd,
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat bg-fixed text-slate-900 dark:text-slate-100"
      style={{
        backgroundImage: "url('/computer-monitor.png')",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,251,255,0.86)_0%,rgba(255,255,255,0.8)_42%,rgba(239,246,255,0.86)_100%)] dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.84)_42%,rgba(17,24,39,0.9)_100%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16">
        <header className="sticky top-0 z-10 flex justify-end py-6 backdrop-blur">
          <ThemeToggle />
        </header>

        <section className="space-y-16">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </section>
      </div>
    </main>
  );
}
