function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sky-400 font-medium mb-3">
            Education
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Academic Background
          </h2>

          <p className="text-slate-400 text-lg">
            Developing a strong foundation in software engineering,
            application development, and information systems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Ingénierie Informatique et Réseaux
              </h3>

              <p className="text-sky-400 mt-2">
                École Marocaine des Sciences de l&apos;Ingénieur (EMSI)
              </p>
            </div>

            <span className="text-slate-400">
              Oct 2022 – Present
            </span>
          </div>

          <div className="mt-6 space-y-3 text-slate-300">
            <p>
              <span className="text-slate-400">Specialization:</span>{" "}
              Développement Digital &amp; Systèmes d&apos;Information
            </p>

            <p>
              <span className="text-slate-400">Current level:</span>{" "}
              5th Year
            </p>

            <p>
              <span className="text-slate-400">Expected graduation:</span>{" "}
              2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;