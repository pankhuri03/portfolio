
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

type PublicationItem = {
  title: string
  venue: string
  year: string
  description: string
  detailsPath: string
  detailsLabel: string
  paperUrl?: string
}

const publications: PublicationItem[] = [
  {
    title: 'A Classification Based Approach to the Prediction of Song Popularity',
    venue: 'IEEE ICSES',
    year: '2021',
    description:
      'Explored machine learning approaches to predicting song popularity using audio features and lyric analysis, achieving 85.06% accuracy with Random Forest.',
    detailsPath: '/projects/song-popularity-prediction',
    detailsLabel: 'Explore Research',
    paperUrl: 'https://doi.org/10.1109/ICSES52305.2021.9633884',
  },
  {
    title: 'A Study on User Experience',
    venue: 'IRJET',
    year: '2022',
    description:
      'Examined UX design methodologies, measurement techniques, and user-centered principles for web applications.',
    detailsPath: '/publications/user-experience-study',
    detailsLabel: 'Explore Research',
    paperUrl: 'https://www.irjet.net/archives/V9/i7/IRJET-V9I7425.pdf',
  },
]

function Publications() {
  return (
    <section className="bg-surface py-20 md:py-25">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Research
        </p>

        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="rounded-2xl border border-soft-blue bg-white p-6 md:p-8"
            >
              <p className="mb-3 text-sm font-medium text-accent">
                {publication.venue} · {publication.year}
              </p>

              <h3 className="max-w-3xl text-xl font-semibold md:text-2xl">
                {publication.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-relaxed">
                {publication.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium">
                <Link
                  to={publication.detailsPath}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-accent transition-colors hover:text-ink hover:underline underline-offset-4"
                >
                  {publication.detailsLabel} 
                  <ArrowUpRight size={15} strokeWidth={1.8} />
                </Link>

                {publication.paperUrl && (
                  <a
                    href={publication.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-accent transition-colors hover:text-ink hover:underline underline-offset-4"
                  >
                    Read Paper 
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
