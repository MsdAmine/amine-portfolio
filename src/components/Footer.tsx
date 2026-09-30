import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Amine Moussaid. Built with React &
            TypeScript.
          </p>

          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;