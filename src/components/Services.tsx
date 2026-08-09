import { motion } from "framer-motion"
import {
  Target,
  ShoppingBag,
  Phone,
  BarChart3,
  FlaskConical,
  Layers,
} from "lucide-react"
import { site } from "../data/site"

const iconMap = {
  target: Target,
  shopping: ShoppingBag,
  phone: Phone,
  chart: BarChart3,
  flask: FlaskConical,
  layers: Layers,
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-chartreuse">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
            Every channel. Every vertical.
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            From e-commerce catalogs to pay-per-call lead gen, we build campaigns
            that match your payout model and scale with your budget.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/8 bg-navy-light/50 p-8 transition-colors hover:border-chartreuse/25 hover:bg-navy-light"
              >
                <div className="mb-5 inline-flex rounded-xl bg-chartreuse/10 p-3 text-chartreuse transition-colors group-hover:bg-chartreuse/20">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-muted">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
