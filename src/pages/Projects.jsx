import { useState } from 'react'

const projects = [
  {
    title: 'Personal Website Christopher Cumberbatch',
    date: 'Mar 2025',
    role: 'Frontend Developer',
    tags: ['React', 'Vite', 'JavaScript', 'HTML/CSS'],
    description:
      'Designed and developed a personal advocacy website for Christopher Cumberbatch — Iowa Law student (Class of 2027) and 2nd Lieutenant in the Iowa Army National Guard. Scoped requirements directly with the client to define content hierarchy and brand identity. Architected a component-based frontend in React 18 using Vite for fast bundling and hot module replacement. Structured the site around a single-page layout optimized for public-facing presence and future content expansion.',
    link: 'https://christophercumberbatch.com',
    image: null,
  },
  {
    title: 'Writing Sample: Geographic Database Analysis',
    date: 'May 2024',
    role: 'Geographic Database Systems · University of Iowa',
    tags: ['MongoDB', 'GIS', 'Raster Data', 'Iowa', 'Database Design'],
    description:
      'Final project for Geographic Database Systems. Designed and queried a MongoDB database integrating Iowa raster and geospatial datasets. Analyzed spatial relationships across geographic features in Iowa, combining NoSQL database design with GIS raster analysis to surface meaningful patterns in the data. Submitted as a written analysis report.',
    link: null,
    pdf: '/gdb_final_proj.pdf',
    image: null,
  },
  {
    title: 'Public Health: Flint Michigan Water Crisis',
    date: 'Dec 2024',
    role: 'Project Lead',
    tags: ['Python', 'GIS', 'Statistical Modeling', 'Census Data'],
    description:
      'Scraped U.S. Census data and EBLL readings in Michigan to validate Dr. Mona Hanna-Attisha\'s landmark study on elevated blood lead levels in children. Mapped spatial areas of high lead exposure and economic disparity at the ZIP code level using GIS, validating findings through statistical modeling in Python.',
    link: null,
    image: null,
  },
  {
    title: '2024 Hawkeye Datathon — 2nd Place',
    date: 'Dec 2024',
    role: 'Project Lead',
    tags: ['Python', 'Random Forest', 'Demographic Data', 'Presentation'],
    description:
      'Developed a Random Forest model using demographic data to predict student enrollment at a Midwestern university. Awarded Second Place for Best Presentation out of 16 competing teams.',
    link: null,
    image: null,
  },
  {
    title: 'Bradley & Riley PC — Employment Law Invoice Analysis',
    date: 'May 2025',
    role: 'Project Lead',
    tags: ['Python', 'PDF Scraping', 'EDA', 'Legal Analytics'],
    description:
      'Scraped retention invoice PDFs with Python and performed exploratory data analysis to surface actionable insights. Coordinated with attorney Joseph Younker to identify KPIs showing which lawyers received Chubb adjustments, enabling accurate follow-up and streamlined case management.',
    link: null,
    image: null,
  },
  {
    title: 'Campus Energy Usage Forecasting',
    date: '2023–2025',
    role: 'Energy Data Scientist Intern · ENGIE',
    tags: ['Python', 'Regression', 'PowerBI', 'Forecasting'],
    description:
      'Built a multiple linear regression model with best subset selection to forecast peak campus electricity usage. Created a Power BI dashboard that instantly flags buildings with unusually high consumption using confidence interval metrics, replacing a manual month-long process.',
    link: null,
    image: '/HighUsageDash.png',
  },
  {
    title: 'Flight Plan Package Retrieval App',
    date: 'Summer 2024',
    role: 'Software Engineer Intern · Collins Aerospace',
    tags: ['Python', 'Tkinter', 'PyODBC', 'PostgreSQL'],
    description:
      'Replaced an outdated Unix Bash query with a Python application enabling instantaneous data retrieval. Built a Tkinter frontend with a PyODBC-powered backend to execute and manage queries on a PostgreSQL database.',
    link: null,
    image: null,
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-16">
        <aside className="mb-10 md:mb-0">
          <h2 className="font-serif text-3xl text-ink mb-1">Projects</h2>
          <p className="section-label">Selected Work</p>
          <p className="mt-6 text-sm text-ink-muted leading-relaxed">
            These are some of my projects I did throughout University as well companies I have worked for.
          </p>
        </aside>

        <main className="space-y-10">
          {projects.map((p, i) => (
            <article key={i} className="border-t border-parchment-200 pt-6">
              <p className="text-xs font-mono text-parchment-500 mb-1">{p.date}</p>
              <h3 className="font-serif text-xl text-ink mb-0.5">{p.title}</h3>
              <p className="font-sans text-xs text-parchment-600 italic mb-3">{p.role}</p>
              <p className="text-sm text-ink-light leading-relaxed mb-4">{p.description}</p>

              {p.image && (
                <div className="mb-4">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-xs tracking-widest uppercase text-parchment-600 hover:text-ink border-b border-parchment-300 transition-colors mb-3"
                  >
                    {expanded === i ? 'Close Image ↑' : 'View Dashboard ↓'}
                  </button>
                  {expanded === i && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full rounded-sm border border-parchment-200 shadow-md mt-2"
                    />
                  )}
                </div>
              )}

              {p.pdf && (
                <div className="mb-4">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-xs tracking-widest uppercase text-parchment-600 hover:text-ink border-b border-parchment-300 transition-colors mb-3"
                  >
                    {expanded === i ? 'Close Writing Sample ↑' : 'View Writing Sample ↓'}
                  </button>
                  {expanded === i && (
                    <iframe
                      src={p.pdf}
                      className="w-full rounded-sm border border-parchment-200 shadow-md mt-2"
                      style={{ height: '600px' }}
                      title={p.title}
                    />
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 bg-parchment-100 border border-parchment-200 text-parchment-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-xs tracking-widest uppercase text-parchment-600 hover:text-ink border-b border-parchment-300 transition-colors"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}
