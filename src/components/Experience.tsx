const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Conseil Supérieur du Pouvoir Judiciaire (CSPJ)",
    period: "July 2026 – September 2026",
    description:
      "Developed a secure institutional messaging platform (CSPJ Mail) designed for multi-user communication within a professional environment.",
    highlights: [
      "Designed and developed REST APIs with ASP.NET Core / .NET 10 and a React.js frontend.",
      "Implemented JWT authentication, TOTP-based two-factor authentication, and secure password reset.",
      "Applied security measures including XSS and IDOR protection, rate limiting, and audit logging.",
      "Developed multi-user messaging features including conversation threads, attachments, and groups.",
      "Built a bilingual Arabic/French interface with RTL support and modeled the system using UML.",
    ],
  },
  {
    role: "Systems & Software Tools Intern",
    company: "SNRT",
    period: "July 2025 – August 2025",
    description:
      "Completed an internship within the technical department of SNRT focused on analyzing and optimizing an Audio over IP infrastructure.",
    highlights: [
      "Analyzed and optimized an Audio over IP infrastructure based on Dante technology.",
      "Used monitoring and supervision tools such as Dante Controller and Cisco/Dell CLI.",
      "Configured and standardized network equipment through software interfaces and command-line tools.",
    ],
  },
  {
    role: "IT Intern",
    company: "INRA",
    period: "September 2024 – October 2024",
    description:
      "Completed an introductory internship within the IT department, gaining practical exposure to software development and IT operations.",
    highlights: [
      "Discovered the software project management process within an IT department.",
      "Worked with technologies and tools used in professional environments, including C# and Angular.",
      "Provided technical and IT assistance to users.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sky-400 font-medium mb-3">
            Experience
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Where I’ve Applied My Skills
          </h2>

          <p className="text-slate-400 text-lg">
            Professional experience gained through internships and
            real-world software development projects.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="text-sky-400 mt-1">
                    {experience.company}
                  </p>
                </div>

                <span className="text-slate-400">
                  {experience.period}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
                {experience.description}
              </p>

              <ul className="space-y-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-slate-400"
                  >
                    <span className="text-sky-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;