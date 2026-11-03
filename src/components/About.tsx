
function About() {
  return (
    <section
      id="about"
      className="bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          A Little About Me
        </p>

        <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
          Beyond the code.
        </h2>

        <div className="max-w-3xl space-y-5 text-base leading-relaxed md:text-lg">
          <p>
            I'm a software engineer with a Master's in Computer Science
            from North Carolina State University and a background in
            building production applications and exploring AI and
            machine learning.
          </p>

          <p>
            My experience ranges from optimizing backend services and
            developing user-facing applications to researching how
            machine learning models behave beyond accuracy alone.
          </p>

          <p>
            I enjoy understanding how things work, solving challenging
            problems, and building solutions that are both technically
            sound and useful to people.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
