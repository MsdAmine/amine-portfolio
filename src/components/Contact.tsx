import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800 pt-16">
          <div className="max-w-4xl">
            <p className="text-sky-400 font-medium mb-3">Contact</p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s Build Something
            </h2>

            <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10">
              I&apos;m currently preparing for the next step in my software
              engineering career. If you&apos;re interested in my work,
              projects, or potential opportunities, feel free to get in touch.
            </p>

            {/* Contact actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:moussaid.amine19@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-[#071018] transition hover:bg-sky-300"
              >
                <Mail size={17} />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/amine-msd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111821] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-sky-400"
              >
                <FaLinkedin size={17} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/MsdAmine"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111821] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-sky-400"
              >
                <FaGithub size={17} />
                GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Email address */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
              <span className="text-slate-600">Email</span>

              <a
                href="mailto:moussaid.amine19@gmail.com"
                className="text-slate-400 transition hover:text-sky-400"
              >
                moussaid.amine19@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;