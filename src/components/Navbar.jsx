import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume' },
  { to: '/misc',     label: 'Misc' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setToggled(t => !t)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="border-b border-parchment-200 px-8 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Wordmark */}
        <Link to="/" className="font-serif tracking-tight text-ink" style={{fontSize: '42px'}}>
          wylan
          <span className="relative inline-block">
            <span className={`inline-block bg-yellow-100/50 px-0.5 transition-all duration-500 ${toggled ? 'translate-y-4 opacity-0' : ''}`}>gao</span>
            <span className={`inline-block transition-all duration-500 ${toggled ? 'translate-y-4 opacity-0' : ''}`}>.</span>
            <span className={`absolute left-0 top-0 transition-all duration-500 ${toggled ? 'opacity-100' : 'opacity-0'}`}>&nbsp;&nbsp;is&nbsp;&nbsp;</span>
          </span>me
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link font-bold ${isActive ? 'text-ink' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden nav-link"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden mt-4 px-8 pb-4 flex flex-col gap-4 border-t border-parchment-200 pt-4">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="nav-link font-bold"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
