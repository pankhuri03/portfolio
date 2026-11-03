export type ExperienceItem = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Holiday Channel',
    period: 'Sep 2026 – Present',
    highlights: [
      'Developing full-stack marketplace features using React, Next.js, Node.js, Express, Prisma, and PostgreSQL.',
      'Building seller-facing service listings and booking workflows, integrating responsive interfaces with REST APIs, validation, and database operations.',
      'Leading frontend code reviews and approving pull requests while collaborating on feature development and implementation.',
    ],
  },
  {
    role: 'Associate Software Developer',
    company: 'Oracle',
    period: 'Aug 2022 – Aug 2024',
    highlights: [
      "Improved API throughput by 25% using Java's CompletableFuture and custom thread pools, supporting peak traffic of approximately 8,000 requests per minute.",
      'Reduced report generation time by 40% through a Spring Boot microservice and SQL optimizations, including partitioning and optimizer hints.',
      'Reduced frontend load times by 85% by eliminating redundant API calls and optimizing asynchronous UI rendering.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Oracle',
    period: 'Jan 2022 – Jul 2022',
    highlights: [
      'Refactored synchronous API processing using CompletableFuture, reducing API timeouts by 60%.',
      'Developed UI navigation and unsaved-changes safeguards to reduce accidental data loss.',
      'Improved user experience through clearer save-state feedback and interface enhancements.',
    ],
  },
]