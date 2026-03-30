import { Link } from 'react-router-dom'

const experience = [
  {
    period: 'Apr 2023 – Aug 2025',
    role: 'Energy Data Scientist Intern',
    org: 'ENGIE North America',
    logo: '/engielogo.png',
    url: 'https://www.engie-na.com',
    location: 'Iowa City, IA',
    bullets: [
      'Forecasted excessive campus energy usage in Python Notebook using multiple linear regression with best subset selection techniques.',
      'Built a Power BI dashboard instantly flagging buildings with high electricity usage, replacing a 1-month manual process.',
      'Presented a Paper for the Plant Manager on detecting hot weather days given temperature and humidity data that triggers a spark in electric usage using Approximation Convergence Theorem Techniques and a Jupyter Notebook for the calculations.',
      'Led a presentation on Fuel Analysis Data Visualization for the Senior Software Developer, Project Manager, and Facilities, demonstrating how to use the dashboard to detect high fuel usage across campus.',
    ],
  },
  {
    period: 'May 2024 – Aug 2024',
    role: 'Software Engineer Intern',
    org: 'Collins Aerospace',
    logo: '/CollinsLogo.png',
    url: 'https://www.collinsaerospace.com',
    location: 'Annapolis, MD',
    bullets: [
      'Built a Python application replacing an outdated Unix Bash query for instantaneous data retrieval for the FAA requirement on Documented Flight Plans.',
      'Developed a Tkinter frontend with PyODBC backend to manage queries on a PostgreSQL database.',
      'Presented to key engineers on an application streamlining flight plan package retrieval.',
    ],
  },
  {
    period: 'Jun 2021 – Aug 2021',
    role: 'AmeriCorps Member',
    org: 'Johnson Foundation – AmeriCorps VISTA',
    logo: null,
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
    degree: 'B.S. Statistics (Statistical Computing)',
    school: 'University of Iowa',
    period: 'Aug 2020 – May 2024',
  },
  {
    degree: 'B.A. Political Science & Government',
    school: 'University of Iowa',
    period: 'Aug 2020 – May 2024',
  },

]

const skills = [
  { label: 'Languages', items: 'Python · SQL · R · SAS · PowerBI · Unix' },
  { label: 'Data Tools', items: 'STATA · SAS · PI System · Excel · GIS · Statistical Learning · Jupyter Notebook' },
  { label: 'AI Tools', items: 'Claude Code · ChatGPT · Gemini' },
  { label: 'Spoken', items: 'English (Fluent) · Chinese (Fluent)' },
  { label: 'Writing', items: 'Technical Writing · Legal Research · Public Speaking' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Full-height tan panel aligned with the right aside column */}
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[calc(480px+((100vw-1024px)/2)+32px)] -z-10" style={{background: 'linear-gradient(to right, transparent, #faf8f4 30%)'}} />
    <div className="max-w-5xl mx-auto px-8 py-14 flex flex-col md:grid md:grid-cols-[1fr_280px] md:gap-16">

      {/* ── LEFT COLUMN ── */}
      <main className="order-last md:order-first">
        {/* About snippet */}
        <section className="mb-12">
          <p className="section-label mb-4">About</p>
          <div className="divider mb-6" />
          <p className="font-serif text-lg leading-relaxed text-ink-light mb-4">
            <strong>Currently, I am <span className="bg-yellow-100/50">looking</span> for work!</strong>
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink-light">
            I enjoy working with analytics and I love reading the news. I am corn-fed, born and raised in Iowa City, Iowa. My previous work is in energy analytics, aerospace software, and statistical modeling. I enjoy collecting obscure datapoints and turning them into notable insights. In my spare time, I like to read{" "}
            <a href="https://apnews.com" target="_blank" rel="noreferrer" className="underline hover:text-ink transition-colors">AP News</a> and{" "}
            <a href="https://npr.org" target="_blank" rel="noreferrer" className="underline hover:text-ink transition-colors">NPR</a> at the Java House Coffee.
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
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-1">
                  <p className="text-xs font-mono text-parchment-500 mb-1">{job.period}</p>
                  <p className="font-bold text-ink text-sm mb-0.5">{job.role}</p>
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
                {job.logo && (
                  <div className="shrink-0">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noreferrer">
                        <img src={job.logo} alt={job.org} className="h-16 w-16 object-contain rounded-full border border-parchment-200 bg-white p-1 hover:animate-spin" />
                      </a>
                    ) : (
                      <img src={job.logo} alt={job.org} className="h-16 w-16 object-contain rounded-full border border-parchment-200 bg-white p-1" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-12">
          <p className="section-label mb-4">Leadership</p>
          <div className="divider mb-6" />
          <div className="space-y-4 text-sm text-ink-light">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <p className="text-xs font-mono text-parchment-500 mb-1">Mar 2023 – May 2024</p>
                <p className="font-bold text-ink text-sm">Founder & President</p>
                <p className="font-serif italic text-parchment-600 text-sm mb-3">Data Science Organization, University of Iowa</p>
                <p className="text-sm text-ink-light leading-relaxed">
                  Started a club dedicated to educating students on the culture of data science.
                  Grew to 80 members; recognized and funded by the Iowa Statistics Department.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── RIGHT COLUMN ── */}
      <aside className="mb-12 md:mb-0 order-first md:order-last">
        <img
          src="/profilepicture.jpeg"
          alt="Wylan Gao"
          className="w-full aspect-square object-cover rounded-sm shadow-md border border-parchment-200 mb-3"
        />
        <p className="text-xs text-parchment-500 italic font-serif text-left mb-4">I wore a <a href="https://biggrove.com" target="_blank" rel="noreferrer" className="underline hover:text-ink transition-colors">Big Grove</a> Shirt, this is a local beer company in Iowa City. This photo was taken while visiting Lima, Peru. (circa 2023)</p>

        {/* Name + title */}
        <h1 className="font-serif text-4xl leading-tight text-ink mb-1">
          Wylan<br />Gao (高伟伦)
        </h1>
        <p className="text-xs tracking-widest uppercase text-parchment-600 mb-8">Will-an Gao (ENG.) · Gāo Wěi lún (CHI.)</p>

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

        {/* Contact */}
        <div className="divider pt-6 mb-6 space-y-2 text-sm text-ink-light font-sans mt-10">
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
