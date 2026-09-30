function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sky-400 font-medium mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Connect
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I&apos;m currently preparing for the next step in my software
            engineering career and I&apos;m open to opportunities, internships,
            and interesting software development projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/amine-msd/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/MsdAmine"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:moussaid.amine19@gmail.com"
              className="px-6 py-3 rounded-lg bg-sky-400 text-slate-950 font-medium hover:bg-sky-300 transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;