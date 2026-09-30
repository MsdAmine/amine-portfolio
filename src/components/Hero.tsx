function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-lg mb-4">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Amine Moussaid
        </h1>

        <h2 className="text-2xl md:text-3xl mb-6">
          Final-Year Software Engineering Student Focused on Backend Development
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed mb-8">
          Final-year Software Engineering student at EMSI with a passion for
          building modern web applications, scalable backend systems, and
          solving real-world problems through technology.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border"
          >
            View Projects
          </a>

          <a
            href="https://github.com/MsdAmine"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amine-msd/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;