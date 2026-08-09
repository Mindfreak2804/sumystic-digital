import { motion } from "framer-motion"
import { site } from "../data/site"

export function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-navy-light/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-medium uppercase tracking-widest text-chartreuse">
              How We Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
              Strategy first.
              <br />
              Scale second.
            </h2>
            <p className="mt-4 max-w-md text-slate-muted">
              We do not throw budget at platforms and hope. Every campaign starts
              with economics, tracking, and a clear path to profitability.
            </p>
          </div>

          <div className="space-y-8">
            {site.process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 rounded-2xl border border-white/8 bg-navy p-8"
              >
                <span className="font-display text-4xl font-extrabold text-chartreuse/30">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
