import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500/40 selection:text-white">
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
