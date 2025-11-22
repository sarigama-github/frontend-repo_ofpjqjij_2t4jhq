import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500/40 selection:text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-slate-400 bg-slate-950">
        © {new Date().getFullYear()} Your Name — Crafted with passion
      </footer>
    </div>
  )
}

export default App
