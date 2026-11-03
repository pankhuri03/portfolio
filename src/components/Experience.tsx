
import { experiences } from '../data/experiences'

function Experience() {
  return (
    <section id="experience" className="pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Professional Journey
        </p>

        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
          Experience
        </h2>


        <div className="relative ml-2 before:absolute before:top-3 before:bottom-0 before:left-0 before:w-0.5 before:bg-soft-blue">
        {experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className="relative pb-12 pl-8 last:pb-0"
            >
            {/* Timeline dot */}
            <span
                className={`absolute -left-[7px] top-1 h-4 w-4 rounded-full border-4 border-page ${
                index === 0 ? 'bg-accent' : 'bg-soft-blue'
                }`}
            />

            {/* Experience details */}
            <p className="mb-2 text-sm font-medium text-accent">
                {experience.period}
            </p>

            <h3 className="text-xl font-semibold md:text-2xl">
                {experience.role}
            </h3>

            <p className="mt-1 font-medium">
                {experience.company}
            </p>

            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
