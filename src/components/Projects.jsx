import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'Holographic Dashboard',
    desc: 'Realtime analytics UI with immersive glassmorphism and motion.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive Spline-driven landing page with 3D interactions.',
    tags: ['Spline', 'Vite', 'Three'],
  },
  {
    title: 'AI Agent Studio',
    desc: 'Chat-driven development workflow and automation tools.',
    tags: ['FastAPI', 'MongoDB', 'LLM'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Proyek Unggulan</h2>
            <p className="mt-3 text-slate-300">Beberapa karya terbaik yang menonjolkan interaksi dan performa.</p>
          </div>
          <a href="#" onClick={(e)=>e.preventDefault()} className="hidden sm:inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <Github className="w-5 h-5" />
            Lihat di GitHub
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a key={i} href="#" onClick={(e)=>e.preventDefault()} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="absolute -inset-1 bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/0 to-indigo-500/0 group-hover:from-fuchsia-500/10 group-hover:to-indigo-500/10 transition" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
