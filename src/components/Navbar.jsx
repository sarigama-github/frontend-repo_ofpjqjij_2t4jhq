import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToId('hero')} className="group inline-flex items-center gap-2">
            <span className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 border border-white/10">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
            </span>
            <span className="text-white font-semibold tracking-tight group-hover:text-fuchsia-300 transition-colors">My Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToId('about')} className="text-slate-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToId('projects')} className="text-slate-300 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToId('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button>
            <a href="#" onClick={(e)=>e.preventDefault()} className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30 transition shadow-">
              Download CV
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToId('about')} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5 text-slate-200">About</button>
            <button onClick={() => scrollToId('projects')} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5 text-slate-200">Projects</button>
            <button onClick={() => scrollToId('contact')} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5 text-slate-200">Contact</button>
          </div>
        )}
      </nav>
    </header>
  )
}
