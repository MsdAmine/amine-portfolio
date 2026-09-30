import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800 pt-16">
          <div className="max-w-3xl">
            <p className="text-sky-400 font-medium mb-3">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I&apos;m currently preparing for the next step in my software
              engineering career. If you&apos;re interested in my work,
              projects, or potential opportunities, feel free to get in touch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400 text-slate-950 font-medium hover:bg-sky-300 transition"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/amine-msd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-sky-400 hover:text-sky-400 transition"
              >
                <FaLinkedin size={18} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/MsdAmine"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-sky-400 hover:text-sky-400 transition"
              >
                <FaGithub size={18} />
                GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;