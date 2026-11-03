import { Mail, MapPin } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl bg-surface px-8 py-12 md:px-14 md:py-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Get in Touch
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let's connect.
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed">
          I'm currently exploring opportunities across software
          engineering and AI/ML, where I can apply my experience
          in building software and conducting research to solve
          meaningful problems. I'm also always happy to connect,
          collaborate, and exchange ideas.
        </p>

      <div className="mt-6 mb-3 flex items-center gap-2 text-sm text-ink/70">
        <MapPin size={16} className="text-accent" />
        <span>Based in the USA</span>
      </div>

        <div className="mt-3 flex flex-wrap gap-4">
          <a
            href="mailto:pankhuripriya03@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-accent"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/pankhuri-priya-b2b81b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 font-medium transition-colors hover:bg-soft-blue"
          >
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact