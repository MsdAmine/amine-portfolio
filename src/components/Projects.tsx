import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects, otherProjects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sky-400 font-medium mb-3">Selected Work</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Projects I&apos;ve Built
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            A selection of projects where I&apos;ve worked across backend
            development, full-stack applications, system design, and real-world
            problem solving.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#111821] transition duration-300 hover:border-slate-700"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Project screenshot */}
                <div className="relative min-h-[280px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-[#0b0f14]">
                  <div className="absolute inset-0 bg-sky-400/[0.02]" />

                  <div className="relative flex h-full flex-col justify-between p-4 md:p-6">
                    {/* Project number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs tracking-[0.2em] text-slate-600">
                        PROJECT / 0{index + 1}
                      </span>

                      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]" />
                    </div>

                    {/* Image */}
                    <div className="relative flex flex-1 items-center justify-center">
                      <div
                        className={`w-full overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f14] shadow-2xl ${
                          project.title === "NutriSafe"
                            ? "flex justify-center"
                            : ""
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          className={
                            project.title === "NutriSafe"
                              ? "block max-h-[360px] w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                              : "block w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                          }
                        />
                      </div>
                    </div>

                    {/* Project type */}
                    <p className="font-mono text-xs text-slate-600 mt-4">
                      Full-stack / Software Engineering
                    </p>
                  </div>
                </div>

                {/* Project information */}
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-sm font-medium text-sky-400">
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-700" />

                    <span className="font-mono text-xs text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-7 max-w-xl">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-800 bg-[#0b0f14] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="border-t border-slate-800 pt-7">
                    <p className="text-sm font-medium text-slate-300 mb-4">
                      Key Features
                    </p>

                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-5 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-sky-400"
                    >
                      <FaGithub size={17} />
                      View Code
                      <ArrowUpRight size={15} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-sky-400"
                      >
                        <ExternalLink size={16} />
                        Live Project
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sky-400 font-medium mb-2">More Work</p>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Other Projects
              </h3>
            </div>

            <a
              href="https://github.com/MsdAmine"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
            >
              View GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-slate-800 bg-[#111821]/70 p-6 transition duration-300 hover:border-slate-700 hover:bg-[#111821]"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-xs font-medium text-sky-400 mb-2">
                      {project.category}
                    </p>

                    <h4 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h4>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-slate-500 transition hover:text-sky-400"
                  >
                    <FaGithub size={19} />
                  </a>
                </div>

                <p className="text-sm leading-relaxed text-slate-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-800 bg-[#0b0f14] px-2.5 py-1 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            href="https://github.com/MsdAmine"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden inline-flex items-center gap-2 mt-6 text-sm text-slate-400 transition hover:text-sky-400"
          >
            View all projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
