import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'


const categories = [
  'All Projects',
  'Software Engineering',
  'AI & Machine Learning',
  'Research',
] as const

function SelectedWork() {
    const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All Projects')
    const filteredProjects = projects.filter(
    (project) =>
        project.type === 'project' &&
        (selectedCategory === 'All Projects' ||
        project.categories.includes(selectedCategory))
    )
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-25">
      <header>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Selected Work
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Projects
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
          A collection of things I've built, explored, and learned from.
        </p>
      </header>

      <div className="mt-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'border-ink bg-ink text-white'
                : 'border-soft-blue text-ink hover:bg-surface'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default SelectedWork