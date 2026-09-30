function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-bold"
        >
          Amine Moussaid
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-300 hover:text-sky-400 transition">
            About
          </a>

          <a href="#projects" className="text-slate-300 hover:text-sky-400 transition">
            Projects
          </a>

          <a href="#skills" className="text-slate-300 hover:text-sky-400 transition">
            Skills
          </a>

          <a href="#experience" className="text-slate-300 hover:text-sky-400 transition">
            Experience
          </a>

          <a href="#contact" className="text-slate-300 hover:text-sky-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;