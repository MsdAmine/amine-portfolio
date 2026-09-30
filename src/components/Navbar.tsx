import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold"
        >
          Amine Moussaid
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            Experience
          </a>

          <a
            href="#education"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-sky-400 transition"
          >
            Contact
          </a>

          <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
            <a
              href="https://github.com/MsdAmine"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-sky-400 transition"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/amine-msd/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-sky-400 transition"
            >
              <FaLinkedin size={19} />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-sky-400 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              Experience
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-300 hover:text-sky-400 transition"
            >
              Contact
            </a>

            <div className="flex gap-5 pt-2 border-t border-slate-800">
              <a
                href="https://github.com/MsdAmine"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-300 hover:text-sky-400 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/amine-msd/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-300 hover:text-sky-400 transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;