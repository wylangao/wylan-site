import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog',     label: 'Blog' },
  { to: '/resume',   label: 'Resume' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-parchment-200 px-8 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Wordmark */}
        <Link to="/" className="font-serif tracking-tight text-ink" style={{fontSize: '42px'}}>
          wylangao.me
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
