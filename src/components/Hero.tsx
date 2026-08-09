import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { site } from "../data/site"

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-chartreuse/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-6xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-chartreuse/20 bg-chartreuse/5 px-4 py-1.5 text-sm text-chartreuse"
        >
          <TrendingUp size={14} />
          Performance Marketing Agency · Texas, USA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-cream md:text-7xl"
        >
          Ads that convert.
          <br />
          <span className="text-chartreuse">Scale without guesswork.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-muted"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-chartreuse px-7 py-3.5 font-semibold text-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a Campaign
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-cream transition-colors hover:border-chartreuse/40 hover:bg-white/5"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-chartreuse md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
