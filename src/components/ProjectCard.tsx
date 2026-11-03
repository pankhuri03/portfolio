import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-soft-blue bg-white p-6 md:p-8">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
        {project.categories.join(' · ')}
      </p>

      {project.research && (
        <span className="mb-5 inline-flex w-fit rounded-md border border-accent px-3 py-1 text-xs font-medium text-accent">
          Research
        </span>
      )}

      <h2 className="text-xl font-semibold md:text-2xl">
        {project.title}
      </h2>

      <p className="mt-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-page px-3 py-1 text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-accent transition-colors hover:text-ink hover:underline underline-offset-4"
        >
          View Project
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard