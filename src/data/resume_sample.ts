// Sample resume data: replace these example values with your own information.
// Keep the property names and data shapes unchanged so the app can display them.
// Add skills as strings; each experience description as an array of bullet strings;
// and each project with a title, description, and technologies array.

export const resumeSample = {
  name: "Alex Morgan",
  title: "Frontend Developer",

  summary:
    "Frontend Developer with experience building accessible, responsive web applications. Skilled in React, TypeScript, and collaborating with teams to deliver useful products.",

  location: "Seattle, WA",

  phone: "(555) 010-1234",

  email: "alex.morgan@example.com",

  linkedin: "https://www.linkedin.com/in/alex-morgan-example/",

  github: "https://github.com/alex-morgan-example",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "REST APIs",
    "Git",
    "Responsive Design",
    "Accessibility",
  ],

  experiences: [
    {
      company: "Example Digital",
      role: "Frontend Developer",
      location: "Seattle, WA",
      period: "Jan 2023 - Present",
      description: [
        "Built responsive interfaces with React and TypeScript for customer-facing web applications.",
        "Worked with design and backend teams to deliver features and improve application usability.",
        "Improved page performance by reviewing rendering behavior and optimizing shared components.",
      ],
    },
    {
      company: "Sample Studio",
      role: "Web Developer",
      location: "Portland, OR",
      period: "Jun 2020 - Dec 2022",
      description: [
        "Developed and maintained websites using JavaScript, HTML, and CSS.",
        "Added accessible UI components and fixed reported cross-browser issues.",
      ],
    },
  ],

  education: [
    {
      school: "Example State University",
      location: "Portland, OR",
      degree: "BSc. Computer Science",
    },
  ],

  projects: [
    {
      title: "Community Events Directory",
      description:
        "A searchable directory that helps people discover local community events.",
      technologies: ["React", "TypeScript", "CSS"],
    },
  ],
};
