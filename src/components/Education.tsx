import { ArrowUpRight, GraduationCap } from "lucide-react";

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sky-400 font-medium mb-3">Education</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Academic Background
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Building a strong foundation in software engineering while
            developing practical experience through projects and internships.
          </p>
        </div>

        {/* Education card */}
        <article className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111821]">
          {/* Subtle background detail */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Main information */}
              <div className="flex gap-5">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-[#0b0f14] text-sky-400">
                  <GraduationCap size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-medium text-sky-400 mb-2">
                    Ingénierie Informatique et Réseaux
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                    École Marocaine des Sciences de l&apos;Ingénieur
                  </h3>

                  <p className="text-slate-400">
                    Specialization:{" "}
                    <span className="text-slate-300">
                      Développement Digital &amp; Systèmes d&apos;Information
                    </span>
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="shrink-0">
                <p className="font-mono text-sm text-slate-400">
                  Oct 2022 — Present
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Expected graduation: 2027
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-slate-800" />

            {/* Details */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-600 mb-2">
                  Current Level
                </p>

                <p className="text-sm font-medium text-slate-300">
                  5th Year
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-600 mb-2">
                  Field
                </p>

                <p className="text-sm font-medium text-slate-300">
                  Software Engineering
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-600 mb-2">
                  Focus
                </p>

                <p className="text-sm font-medium text-slate-300">
                  Digital Development &amp; Information Systems
                </p>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-slate-800 bg-[#0b0f14]/70 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />

                <p className="text-sm text-slate-400">
                  Currently completing my final year of engineering studies.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-sky-400"
              >
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;