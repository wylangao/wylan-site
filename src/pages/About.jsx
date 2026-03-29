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
              I am from Iowa City, Iowa, with a degree in Political Science, Statistics and Data Science. My interests sit in the diaspora of
              statistical modeling and rad data visualization.
            </p>
            <p>
              I have previously applied machine learning and data analysis techniques in energy systems at ENGIE North America,
              aerospace software at Collins Aerospace, and explored public health research in the realms of the Flint
              water crisis. My dream is to make data based decisions regarding the human condition with written policy.
            </p>
            <p>
              Outside of work, I am into running, making asian cuisine, chilling with my friends and picking a random hobby that I hyperfixiate on. Currently it is{' '}
              <a href="https://datalemur.com" target="_blank" rel="noreferrer" className="underline hover:text-ink transition-colors">DataLemur</a> and{' '}
              <a href="https://7sage.com" target="_blank" rel="noreferrer" className="underline hover:text-ink transition-colors">7Sage</a>.
            </p>
          </div>
        </section>

      </main>
    </div>
    </div>
  )
}
