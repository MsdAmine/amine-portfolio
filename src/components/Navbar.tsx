import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="border-b border-slate-800/80 bg-[#0b0f14]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="font-semibold tracking-tight text-slate-100 hover:text-sky-400 transition"
            >
              AM
            </a>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-slate-100 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop social links */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/MsdAmine"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-sky-400 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/amine-msd/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-sky-400 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#contact"
                className="ml-2 rounded-md border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:border-sky-400 hover:text-sky-400 transition"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden text-slate-300 hover:text-sky-400 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-slate-800 py-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-3 text-sm text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-5 pt-5 border-t border-slate-800">
                <a
                  href="https://github.com/MsdAmine"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 hover:text-sky-400 transition"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/amine-msd/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-sky-400 transition"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto text-sm font-medium text-sky-400"
                >
                  Contact →
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;