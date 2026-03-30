import { useRef } from 'react'

const videos = [
  {
    src: '/profilepicture.mov',
    caption: 'This was taken in Aswan, Egypt in a Nubian Village (circa 2024)',
  },
  {
    src: '/nevadoteluco.mov',
    caption: 'I climbed Nevado de Toluca summit was 15,350 ft (circa 2024)',
  },
]

function HoverVideo({ src, caption }) {
  const videoRef = useRef(null)

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full aspect-square object-cover rounded-sm shadow-md border border-parchment-200 mb-2"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => { videoRef.current?.pause(); videoRef.current.currentTime = 0 }}
      />
      <p className="text-xs text-parchment-500 italic font-serif">{caption}</p>
    </div>
  )
}

export default function Misc() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-16">
        <aside className="mb-10 md:mb-0">
          <h2 className="font-serif text-3xl text-ink mb-1">Misc</h2>
          <p className="section-label">Miscellaneous</p>
          <p className="mt-6 text-sm text-ink-muted leading-relaxed">
            {null}
          </p>
        </aside>

        <main>
          <div className="border-t border-parchment-200 pt-6">
            <div className="grid grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <HoverVideo key={i} src={v.src} caption={v.caption} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
