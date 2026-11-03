import { Link, useParams } from 'react-router'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-semibold">Project not found</h1>

        <Link to="/projects" className="mt-6 inline-block text-accent hover:underline">
          Back to Projects
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Link to="/projects" className="text-sm text-accent hover:underline">
            ← Back to Projects
        </Link>

        <p className="mb-4 mt-12 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {project.categories.join(' · ')}
        </p>

        {project.research && (
        <span className="mb-5 inline-flex w-fit rounded-md border border-accent px-3 py-1 text-xs font-medium text-accent">
            Research
        </span>
        )}

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
            <span
                key={technology}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium"
            >
                {technology}
            </span>
            ))}
        </div>

        <div className="mt-20 max-w-3xl space-y-12">
            {project.problem && (
                <section className="border-t border-soft-blue pt-8">
                    <div className="flex items-baseline gap-5">
                    <span className="text-sm font-medium text-accent">01</span>
                    <h2 className="text-2xl font-semibold">The Problem</h2>
                    </div>

                    <p className="mt-4 pl-10 leading-relaxed">
                    {project.problem}
                    </p>
                </section>
            )}

            {project.approach && (
                <section className="border-t border-soft-blue pt-8">
                    <div className="flex items-baseline gap-5">
                    <span className="text-sm font-medium text-accent">02</span>
                    <h2 className="text-2xl font-semibold">My Approach</h2>
                    </div>

                    <p className="mt-4 pl-10 leading-relaxed">
                    {project.approach}
                    </p>
                </section>
                )}

                {project.features && project.features.length > 0 && (
                <section className="border-t border-soft-blue pt-8">
                    <div className="flex items-baseline gap-5">
                    <span className="text-sm font-medium text-accent">03</span>
                    <h2 className="text-2xl font-semibold">Key Features</h2>
                    </div>

                    <ul className="mt-4 list-disc space-y-3 pl-14 leading-relaxed">
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                    </ul>
                </section>
                )}

                {project.results && project.results.length > 0 && (
                <section className="border-t border-soft-blue pt-8">
                    <div className="flex items-baseline gap-5">
                    <span className="text-sm font-medium text-accent">04</span>
                    <h2 className="text-2xl font-semibold">Results & Learnings</h2>
                    </div>

                    <ul className="mt-4 list-disc space-y-3 pl-14 leading-relaxed">
                    {project.results.map((result) => (
                        <li key={result}>{result}</li>
                    ))}
                    </ul>
                </section>
            )}
        </div>
    </main>
  )
}

export default ProjectDetail