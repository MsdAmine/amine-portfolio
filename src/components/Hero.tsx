import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle accent glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full px-6 py-24">
        <div className="max-w-4xl">

          {/* Availability */}
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
            </span>

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
              Open to opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
            Amine
            <span className="text-sky-400"> Moussaid</span>
          </h1>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300">
            Software Engineer & Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Final-year Software Engineering student at EMSI focused on
            building modern web applications, backend systems, and reliable
            software solutions for real-world problems.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-[#071018] transition hover:bg-sky-300"
            >
              View My Work
              <ArrowDown size={16} />
            </a>

            <a
              href="/cv/Amine-Moussaid-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111821] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-sky-400"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="https://github.com/MsdAmine"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-sky-400"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/amine-msd/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-sky-400"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Technical stack */}
          <div className="mt-14 pt-6 border-t border-slate-800 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-600 mb-4">
              Core technologies
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>ASP.NET Core</span>
              <span>Node.js</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;