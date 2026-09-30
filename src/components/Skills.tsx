const skillGroups = [
  {
    title: "Backend Development",
    description: "Building APIs, business logic, authentication, and backend services.",
    skills: [
      "Java",
      "Spring Boot",
      "C#",
      "ASP.NET Core",
      "Node.js",
      "Django",
      "Laravel",
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web applications.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Databases & Data",
    description: "Working with relational, document, graph, and caching technologies.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Redis",
    ],
  },
  {
    title: "Tools & Engineering",
    description: "Tools and practices I use to build, test, and manage software.",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Docker",
      "REST APIs",
      "JWT",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sky-400 font-medium mb-3">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 text-lg">
            A combination of backend, frontend, database, and engineering
            technologies I've worked with through academic projects,
            internships, and personal development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {group.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;