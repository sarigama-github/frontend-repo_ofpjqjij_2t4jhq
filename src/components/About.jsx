import { motion } from 'framer-motion'
import { Code2, Cpu, Zap } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: <Code2 className="w-5 h-5" />, label: 'Frontend (React, Vite, Tailwind)' },
    { icon: <Cpu className="w-5 h-5" />, label: 'Backend (FastAPI, Node, MongoDB)' },
    { icon: <Zap className="w-5 h-5" />, label: '3D & Motion (Spline, Framer Motion)' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tentang Saya</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Saya adalah developer yang fokus pada pengalaman pengguna. Saya suka menyatukan estetika cyberpunk dengan arsitektur software yang rapi untuk menghasilkan produk digital yang cepat, interaktif, dan tak terlupakan.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-center gap-3 text-fuchsia-300">
                <span className="p-2 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20">{s.icon}</span>
                <span className="text-white/90">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
