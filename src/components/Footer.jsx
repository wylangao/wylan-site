export default function Footer() {
  return (
    <footer className="border-t border-parchment-200 px-8 py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-serif italic text-parchment-500 text-sm">
          Wylan Gao — Iowa City, IA
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/wylan-gao-b16b82167/" target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href="mailto:gaowylan@gmail.com" className="nav-link">Email</a>
          {/* TODO: Add GitHub link when available */}
        </div>
      </div>
    </footer>
  )
}
