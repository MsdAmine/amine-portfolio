import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects, otherProjects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sky-400 font-medium mb-3">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects I&apos;ve Built
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            A selection of projects where I&apos;ve worked across backend
            development, full-stack applications, system design, and
            real-world problem solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-700 bg-slate-800/40 p-6 md:p-8 hover:border-slate-600 transition"
            >
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">

                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-sky-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-sky-400 transition"
                    >
                      <FaGithub size={17} />
                      View Code
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-sky-400 transition"
                      >
                        <ExternalLink size={17} />
                        Live Project
                      </a>
                    )}
                  </div>
                </div>

                {/* Right */}
                <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-6">
                  <p className="text-sm font-medium text-slate-300 mb-5">
                    Key Features
                  </p>

                  <ul className="space-y-4">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        <span className="text-sky-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-20">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sky-400 font-medium mb-2">
                More Work
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold">
                Other Projects
              </h3>
            </div>

            <a
              href="https://github.com/MsdAmine"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition"
            >
              View GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-slate-700 bg-slate-800/30 p-6 hover:border-slate-600 transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-sky-400 mb-2">
                      {project.category}
                    </p>

                    <h4 className="text-xl font-semibold">
                      {project.title}
                    </h4>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-slate-400 hover:text-sky-400 transition"
                  >
                    <FaGithub size={19} />
                  </a>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700 bg-slate-900/50 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;