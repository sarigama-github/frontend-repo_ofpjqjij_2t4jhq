import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mari Berkolaborasi</h2>
          <p className="mt-3 text-slate-300">Ceritakan ide Anda, saya akan bantu mewujudkannya dengan pengalaman yang megah dan animasi yang epik.</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Nama" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <input placeholder="Subjek" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <textarea rows="5" placeholder="Pesan" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-600/30 hover:shadow-fuchsia-600/40 transition">Kirim Pesan</button>
            <span className="text-slate-400 text-sm">Atau email langsung ke: hello@yourname.dev</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
