import { Link } from 'react-router-dom'
import { useRef } from 'react'

const experience = [
  {
    period: 'Apr 2023 – Aug 2025',
    role: 'Energy Data Scientist Intern',
    org: 'ENGIE North America',
    location: 'Iowa City, IA',
    bullets: [
      'Forecasted peak campus energy usage in Python using multiple linear regression with best subset selection.',
      'Built a Power BI dashboard flagging buildings with high electricity usage, replacing a 1-month manual process.',
      'Authored a paper for the Plant Manager on detecting hot weather days that trigger exponential electricity increases.',
    ],
  },
  {
    period: 'May 2024 – Aug 2024',
    role: 'Software Engineer Intern',
    org: 'Collins Aerospace',
    location: 'Annapolis, MD',
    bullets: [
      'Built a Python application replacing an outdated Unix Bash query for instantaneous data retrieval.',
      'Developed a Tkinter frontend with PyODBC backend to manage queries on a PostgreSQL database.',
      'Presented to key engineers on an application streamlining flight plan package retrieval.',
    ],
  },
  {
    period: 'Jun 2021 – Aug 2021',
    role: 'AmeriCorps Member',
    org: 'Johnson Foundation – AmeriCorps VISTA',
    location: 'Cedar Rapids, IA',
    bullets: [
      'Co-designed curriculum for 100 students at the Leaders Believers Achievers summer camp.',
      'Awarded Segal AmeriCorps Education Award for completing 300 hours of community service.',
    ],
  },
]

const education = [
  {
    degree: 'M.S. Data Science',
    school: 'University of Iowa',
    period: 'Aug 2023 – May 2025',
  },
  {
    degree: 'B.S. Statistics (Statistical Computing) & B.A. Political Science',
    school: 'University of Iowa',
    period: 'Aug 2020 – May 2024',
  },
]

const skills = [
  { label: 'Languages', items: 'Python · SQL · R · SAS · PowerBI · Unix' },
  { label: 'Data Tools', items: 'STATA · SAS · PI System · Excel · GIS · Statistical Learning' },
  { label: 'Spoken', items: 'English (Fluent) · Chinese (Fluent)' },
  { label: 'Writing', items: 'Technical Writing · Legal Research · Public Speaking' },
]

function HoverVideo() {
  const videoRef = useRef(null)

  return (
    <video
      ref={videoRef}
      src="/profilepicture.mov"
      loop
      muted
      playsInline
      className="w-full aspect-square object-cover rounded-sm shadow-md border border-parchment-200 mb-6"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { videoRef.current?.pause(); videoRef.current.currentTime = 0 }}
    />
  )
}

export default function Home() {
  return (
    <div className="relative">
      {/* Full-height tan panel aligned with the right aside column */}
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[calc(480px+((100vw-1024px)/2)+32px)] -z-10" style={{background: 'linear-gradient(to right, transparent, #faf8f4 30%)'}} />
    <div className="max-w-5xl mx-auto px-8 py-14 md:grid md:grid-cols-[1fr_280px] md:gap-16">

      {/* ── LEFT COLUMN ── */}
      <main>
        {/* About snippet */}
        <section className="mb-12">
          <p className="section-label mb-4">About</p>
          <div className="divider mb-6" />
          <p className="font-serif text-lg leading-relaxed text-ink-light italic">
            Data Scientist and statistician based in Iowa City with a background spanning energy analytics,
            aerospace software, and public health research. I turn complex datasets into clear decisions —
            through rigorous modeling, thoughtful visualization, and precise communication.
          </p>
          <Link to="/about" className="inline-block mt-4 text-xs tracking-widest uppercase text-parchment-600 hover:text-ink transition-colors border-b border-parchment-300">
            Read more →
          </Link>
        </section>

        {/* Work Experience */}
        <section>
          <p className="section-label mb-4">Work Experience</p>
          <div className="divider mb-6" />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i}>
                <p className="text-xs font-mono text-parchment-500 mb-1">{job.period}</p>
                <p className="font-medium text-ink text-sm">{job.role}</p>
                <p className="font-serif italic text-parchment-600 text-sm mb-3">
                  {job.org} · {job.location}
                </p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-ink-light leading-relaxed flex gap-2">
                      <span className="text-parchment-400 mt-1 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── RIGHT COLUMN ── */}
      <aside className="mb-12 md:mb-0">
        <HoverVideo />

        {/* Name + title */}
        <h1 className="font-serif text-4xl leading-tight text-ink mb-1">
          Wylan<br />Gao
        </h1>
        <p className="section-label mb-8">Data Scientist</p>

        {/* Contact */}
        <div className="divider pt-6 mb-6 space-y-2 text-sm text-ink-light font-sans">
          <p>
            <span className="font-medium text-ink">Phone</span><br />
            +1 (319) 621-8718
          </p>
          <p>
            <span className="font-medium text-ink">Email</span><br />
            <a href="mailto:gaowylan@gmail.com" className="hover:text-parchment-700 transition-colors">
              gaowylan@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium text-ink">Location</span><br />
            Iowa City, IA
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/wylan-gao-b16b82167/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-parchment-700 transition-colors"
            >
              LinkedIn ↗
            </a>
          </p>
        </div>

        {/* Download CV */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-2 text-xs tracking-widest uppercase border border-ink px-5 py-2 hover:bg-ink hover:text-parchment-50 transition-colors duration-200 font-sans font-medium"
        >
          Download CV ↓
        </a>

        {/* Education */}
        <div className="mt-10">
          <p className="section-label mb-4">Education</p>
          <div className="divider" />
          <div className="space-y-4 mt-4">
            {education.map((e, i) => (
              <div key={i}>
                <p className="text-xs text-parchment-500 font-mono mb-0.5">{e.period}</p>
                <p className="text-sm font-medium text-ink leading-snug">{e.degree}</p>
                <p className="text-xs text-ink-muted italic font-serif">{e.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <p className="section-label mb-4">Skills & Tools</p>
          <div className="divider" />
          <div className="space-y-3 mt-4">
            {skills.map((s, i) => (
              <div key={i}>
                <p className="text-xs font-medium text-ink mb-0.5">{s.label}</p>
                <p className="text-xs text-ink-muted leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
    </div>
  )
}
