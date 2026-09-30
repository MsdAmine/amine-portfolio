import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    period: "Jul 2026 — Sep 2026",
    company: "Conseil Supérieur du Pouvoir Judiciaire",
    role: "Software Engineering Intern",
    type: "Internship",
    description:
      "Developed a secure institutional messaging platform designed for internal communication and administrative workflows.",
    technologies: [
      "ASP.NET Core 10",
      ".NET 10",
      "React",
      "SQL Server",
      "JWT",
      "TOTP 2FA",
    ],
    highlights: [
      "Built REST APIs and a React-based frontend",
      "Implemented JWT authentication and TOTP-based two-factor authentication",
      "Developed messaging, conversations, attachments, and group workflows",
      "Applied security measures including XSS/IDOR protection, rate limiting, and audit logging",
      "Implemented bilingual Arabic/French support with RTL interface handling",
    ],
    featured: true,
  },
  {
    period: "Jul 2025 — Aug 2025",
    company: "SNRT",
    role: "Systems & Software Tools Intern",
    type: "Internship",
    description:
      "Worked with the technical department on Audio over IP infrastructure and network equipment configuration.",
    technologies: [
      "Dante",
      "Dante Controller",
      "Cisco",
      "Dell CLI",
      "Networking",
    ],
    highlights: [
      "Worked with Dante-based Audio over IP infrastructure",
      "Configured and standardized network equipment",
      "Used Dante Controller and Cisco/Dell command-line interfaces",
      "Participated in technical infrastructure operations",
    ],
    featured: false,
  },
  {
    period: "Sep 2024 — Oct 2024",
    company: "INRA",
    role: "IT Intern",
    type: "Internship",
    description:
      "Participated in software project activities while gaining practical experience in application development and technical support.",
    technologies: ["C#", "Angular", "IT Support"],
    highlights: [
      "Contributed to software project management activities",
      "Worked with C# and Angular",
      "Provided technical and IT support",
    ],
    featured: false,
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sky-400 font-medium mb-3">Experience</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Where I&apos;ve Worked
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Practical experience across software development, IT systems, and
            technical infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 hidden md:block w-px bg-slate-800" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="relative md:pl-12"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-2 hidden md:flex h-4 w-4 items-center justify-center rounded-full border border-sky-400/40 bg-[#0b0f14]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      experience.featured ? "bg-sky-400" : "bg-slate-600"
                    }`}
                  />
                </div>

                <div
                  className={`rounded-2xl border p-6 md:p-8 transition duration-300 ${
                    experience.featured
                      ? "border-slate-700 bg-[#111821]"
                      : "border-slate-800 bg-[#111821]/60 hover:border-slate-700"
                  }`}
                >
                  {/* Top information */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-sky-400">
                          {experience.role}
                        </span>

                        {experience.featured && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-slate-700" />

                            <span className="rounded-full border border-sky-400/20 bg-sky-400/5 px-2.5 py-1 text-[11px] font-medium text-sky-300">
                              Latest Experience
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {experience.company}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 shrink-0">
                      <CalendarDays size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="max-w-3xl text-slate-400 leading-relaxed mb-7">
                    {experience.description}
                  </p>

                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                    {/* Technologies */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-600 mb-4">
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-slate-800 bg-[#0b0f14] px-3 py-1.5 text-xs text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-600 mb-4">
                        What I Worked On
                      </p>

                      <ul className="space-y-3">
                        {experience.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Featured project connection */}
                  {experience.featured && (
                    <div className="mt-8 border-t border-slate-800 pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                          <BriefcaseBusiness size={17} className="text-sky-400" />
                          <span>
                            Full-stack development & secure software engineering
                          </span>
                        </div>

                        <a
                          href="https://github.com/MsdAmine/cspj-mini-mail"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-sky-400"
                        >
                          View Project
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile index */}
                <span className="md:hidden block mt-3 font-mono text-[11px] text-slate-700">
                  EXPERIENCE / 0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;