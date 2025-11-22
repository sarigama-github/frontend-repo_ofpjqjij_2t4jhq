import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.35),transparent_60%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-fuchsia-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Available for freelance & collaborations
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(168,85,247,0.25)]">
            Crafting Futuristic Web Experiences
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            I blend cutting-edge 3D, motion, and code to deliver immersive, high-performance interfaces that feel alive. Let’s build something unforgettable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-600/30 hover:shadow-fuchsia-600/40 transition">
              Lihat Proyek
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/15 transition">
              Hubungi Saya
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-slate-300/70">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <div className="text-xs uppercase tracking-[0.3em] mb-2">Scroll</div>
          <div className="w-5 h-8 rounded-full border border-white/30 mx-auto relative">
            <motion.span className="absolute left-1/2 -translate-x-1/2 top-1.5 w-1 h-1 rounded-full bg-white/80" animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
