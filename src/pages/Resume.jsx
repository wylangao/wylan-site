export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <p className="section-label">Resume</p>
        <a
          href="/resume.pdf"
          download
          className="text-xs tracking-widest uppercase border border-ink px-5 py-2 hover:bg-ink hover:text-parchment-50 transition-colors duration-200 font-sans font-medium"
        >
          Download ↓
        </a>
      </div>
      <div className="border-t border-parchment-200 mb-6" />
      <object
        data="/resume.pdf#zoom=55"
        type="application/pdf"
        className="w-full border border-parchment-200 shadow-sm"
        style={{ height: '85vh' }}
      >
        <div className="flex flex-col items-center justify-center h-64 text-ink-muted font-serif italic text-sm gap-3">
          <p>Your browser can't display PDFs inline.</p>
          <a
            href="/resume.pdf"
            download
            className="not-italic text-xs tracking-widest uppercase border border-ink px-5 py-2 hover:bg-ink hover:text-parchment-50 transition-colors duration-200 font-sans font-medium"
          >
            Download Resume ↓
          </a>
        </div>
      </object>
    </div>
  )
}
