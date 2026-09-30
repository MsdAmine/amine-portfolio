import {
  Database,
  GitBranch,
  Layers3,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    description: "APIs, application logic, and backend architecture.",
    icon: Server,
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
    description: "Modern interfaces and responsive web applications.",
    icon: Monitor,
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
    description: "Relational, document, graph, and caching technologies.",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Redis"],
  },
  {
    title: "Tools & Engineering",
    description: "Development tools and practices used across projects.",
    icon: Wrench,
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
        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sky-400 font-medium mb-3">Technical Stack</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            A practical overview of the technologies I use to design, build,
            and maintain modern software applications.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-slate-800 bg-[#111821] p-6 md:p-7 transition duration-300 hover:border-slate-700"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-[#0b0f14] text-sky-400">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {group.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-800 bg-[#0b0f14] px-3 py-2 text-sm text-slate-300 transition group-hover:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Engineering focus */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-[#0b0f14] p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#111821] text-sky-400">
              <Layers3 size={20} strokeWidth={1.8} />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Engineering Focus
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-slate-400">
                I&apos;m particularly interested in backend development,
                software architecture, REST APIs, authentication, databases,
                and building reliable full-stack applications.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <GitBranch size={16} />
              <span>Continuous learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;