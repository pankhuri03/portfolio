
import Experience from '../components/Experience'
import Education from '../components/Education'

function Background() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 pt-20 md:px-10 md:pt-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Background
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          The path so far.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
          A look at the experiences, education, and research
          that have shaped how I approach building software.
        </p>
      </header>

      <Experience />
      <Education />
    </>
  )
}

export default Background
