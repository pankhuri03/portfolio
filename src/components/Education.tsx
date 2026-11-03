type EducationItem = {
  degree: string
  institution: string
  period: string
  coursework?: string[]
}

const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'North Carolina State University',
    period: 'Aug 2024 – May 2026',
    coursework: [
      'Object-Oriented Design & Development',
      'Graph Theory',
      'Neural Networks',
      'Computer Networks',
      'Foundations of Data Science',
      'Database Management Systems',
      'Deep Learning Beyond Accuracy',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Information Science and Engineering',
    institution: 'RV College of Engineering',
    period: 'Aug 2018 – Jul 2022',
    coursework: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Software Engineering',
      'Advanced Algorithms',
      'Web Technology',
    ],
  },
]

function Education() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Academic Background
        </p>

        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
          Education
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.institution}
              className="rounded-2xl border border-soft-blue bg-page p-6 md:p-8"
            >
              <p className="mb-4 text-sm font-medium text-accent">
                {item.period}
              </p>

              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>

              <p className="mt-3 text-base">
                {item.institution}
              </p>

              {item.coursework && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold">
                    Relevant Coursework
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg bg-surface px-3 py-1.5 text-sm text-ink"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
