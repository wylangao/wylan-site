const projects = [
  {
    title: 'Public Health: Flint Michigan Water Crisis',
    date: 'Dec 2024',
    role: 'Project Lead',
    tags: ['Python', 'GIS', 'Statistical Modeling', 'Census Data'],
    description:
      'Scraped U.S. Census data and EBLL readings in Michigan to validate Dr. Mona Hanna-Attisha\'s landmark study on elevated blood lead levels in children. Mapped spatial areas of high lead exposure and economic disparity at the ZIP code level using GIS, validating findings through statistical modeling in Python.',
    link: null,
  },
  {
    title: '2024 Hawkeye Datathon — 2nd Place',
    date: 'Dec 2024',
    role: 'Project Lead',
    tags: ['Python', 'Random Forest', 'Demographic Data', 'Presentation'],
    description:
      'Developed a Random Forest model using demographic data to predict student enrollment at a Midwestern university. Awarded Second Place for Best Presentation out of 16 competing teams.',
    link: null,
  },
  {
    title: 'Bradley & Riley PC — Employment Law Invoice Analysis',
    date: 'May 2025',
    role: 'Project Lead',
    tags: ['Python', 'PDF Scraping', 'EDA', 'Legal Analytics'],
    description:
      'Scraped retention invoice PDFs with Python and performed exploratory data analysis to surface actionable insights. Coordinated with attorney Joseph Younker to identify KPIs showing which lawyers received Chubb adjustments, enabling accurate follow-up and streamlined case management.',
    link: null,
  },
  {
    title: 'Campus Energy Usage Forecasting',
    date: '2023–2025',
    role: 'Energy Data Scientist Intern · ENGIE',
    tags: ['Python', 'Regression', 'PowerBI', 'Forecasting'],
    description:
      'Built a multiple linear regression model with best subset selection to forecast peak campus electricity usage. Created a Power BI dashboard that instantly flags buildings with unusually high consumption using confidence interval metrics, replacing a manual month-long process.',
    link: null,
  },
  {
    title: 'Flight Plan Package Retrieval App',
    date: 'Summer 2024',
    role: 'Software Engineer Intern · Collins Aerospace',
    tags: ['Python', 'Tkinter', 'PyODBC', 'PostgreSQL'],
    description:
      'Replaced an outdated Unix Bash query with a Python application enabling instantaneous data retrieval. Built a Tkinter frontend with a PyODBC-powered backend to execute and manage queries on a PostgreSQL database.',
    link: null,
  },
]

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-16">
        <aside className="mb-10 md:mb-0">
          <h2 className="font-serif text-3xl text-ink mb-1">Projects</h2>
          <p className="section-label">Selected Work</p>
          <p className="mt-6 text-sm text-ink-muted leading-relaxed">
            A selection of research, competitions, and applied data science projects across
            public health, aerospace, energy, and legal analytics.
          </p>
        </aside>

        <main className="space-y-10">
          {projects.map((p, i) => (
            <article key={i} className="border-t border-parchment-200 pt-6">
              <p className="text-xs font-mono text-parchment-500 mb-1">{p.date}</p>
              <h3 className="font-serif text-xl text-ink mb-0.5">{p.title}</h3>
              <p className="font-sans text-xs text-parchment-600 italic mb-3">{p.role}</p>
              <p className="text-sm text-ink-light leading-relaxed mb-4">{p.description}</p>
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
