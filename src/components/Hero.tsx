import heroIllustration from '../assets/images/image5.png'
import { Link } from 'react-router'

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-16">
      {/* Left: Introduction */}
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Software Engineer
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Hi, I'm Pankhuri.
        </h1>

        <h2 className="mt-6 max-w-xl text-2xl font-medium leading-snug md:text-3xl">
          Building software, exploring intelligence,
          solving meaningful problems.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          I'm a software engineer with experience building full-stack applications
          and scalable backend systems, alongside academic research in AI and machine
          learning. I enjoy bringing ideas to life through thoughtful engineering and
          practical problem-solving.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects"
            className="rounded-full bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-accent"
          >
            Explore My Work
          </Link>

          <a
            href="#contact"
            className="rounded-full border border-ink px-6 py-3 font-medium transition-colors hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right: Hero illustration */}
      <div className="h-[420px] overflow-hidden rounded-3xl bg-surface">
        <img
          src={heroIllustration}
          alt="Software engineering and AI illustration"
          className="h-full w-full object-cover"
        />
      </div>

    </section>
  )
}

export default Hero
