import { featuredProjects, otherProjects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:text-sky-300"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mt-20 mb-8">
          More Projects
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-sky-500 transition"
            >
              {project.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;