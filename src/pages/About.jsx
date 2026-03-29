import { useRef } from 'react'

function HoverVideo() {
  const videoRef = useRef(null)

  return (
    <video
      ref={videoRef}
      src="/profilepicture.mov"
      loop
      muted
      playsInline
      className="w-full aspect-square object-cover rounded-sm shadow-md border border-parchment-200 mt-8"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => { videoRef.current?.pause(); videoRef.current.currentTime = 0 }}
    />
  )
}

export default function About() {
  return (
    <div className="relative">
      {/* Full-height tan panel aligned with the left aside column */}
      <div className="hidden md:block absolute top-0 left-0 bottom-0 w-[calc(480px+((100vw-1024px)/2)+32px)] -z-10" style={{background: 'linear-gradient(to left, transparent, #faf8f4 30%)'}} />
    <div className="max-w-5xl mx-auto px-8 py-14 md:grid md:grid-cols-[280px_1fr] md:gap-16">
      <aside className="mb-10 md:mb-0">
        <h2 className="font-serif text-3xl text-ink mb-1">About</h2>
        <p className="section-label">Wylan Gao</p>

        <HoverVideo />
      </aside>

      <main className="space-y-10">
        <section>
          <p className="section-label mb-4">Bio</p>
          <div className="border-t border-parchment-200 mb-6" />
          {/* TODO: Replace with your personal About Me text */}
          <div className="space-y-4 font-serif text-lg leading-relaxed text-ink-light italic">
            <p>
              I'm a data scientist and statistician from Iowa City, Iowa, currently completing my
              M.S. in Data Science at the University of Iowa. My work sits at the intersection of
              statistical modeling, software engineering, and clear communication.
            </p>
            <p>
              I've applied machine learning and data analysis in energy systems at ENGIE North America,
              aerospace software at Collins Aerospace, and public health research exploring the Flint
              water crisis. I care deeply about making data understandable — not just to analysts, but
              to the people making decisions.
            </p>
            <p>
              Outside of work, I founded the Data Science Organization at the University of Iowa,
              which has grown to 80 members and received departmental recognition and funding. I'm
              fluent in both English and Chinese, and I believe the best data science is always
              in service of people.
            </p>
            <p className="text-base not-italic text-parchment-500">
              {/* TODO: Write your own About Me here and remove the italics if you prefer */}
            </p>
          </div>
        </section>

        <section>
          <p className="section-label mb-4">Leadership</p>
          <div className="border-t border-parchment-200 mb-6" />
          <div className="space-y-4 text-sm text-ink-light">
            <div>
              <p className="font-medium text-ink">Founder & President — Data Science Organization, UIowa</p>
              <p className="text-xs font-mono text-parchment-500">Mar 2023 – May 2024</p>
              <p className="mt-1 leading-relaxed">
                Started a club dedicated to educating students on the culture of data science.
                Grew to 80 members; recognized and funded by the Iowa Statistics Department.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  )
}
