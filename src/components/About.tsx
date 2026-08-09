import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import { site } from "../data/site"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-chartreuse">
              About Us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
              Built for operators who need results.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-muted">
              Sumystic Digital is a performance marketing agency headquartered in
              Dallas, Texas. We partner with brands, affiliates, and networks that
              demand measurable returns from every ad dollar.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              Whether you are scaling an e-commerce store, buying pay-per-call
              traffic, running CPS offers, or launching in peptides and wellness,
              our team brings platform expertise and vertical-specific playbooks
              to your account from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-light to-navy p-10"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-chartreuse/10 blur-3xl" />
            <h3 className="relative font-display text-2xl font-bold text-cream">
              Why Sumystic?
            </h3>
            <ul className="relative mt-6 space-y-4">
              {[
                "Transparent reporting with real-time dashboards",
                "Creative testing at scale across Meta, Google, and TikTok",
                "Compliance-aware campaigns for regulated verticals",
                "Dedicated account management, not a ticket queue",
                "Flexible models: agency, white-label, or media buying only",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chartreuse" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-navy-light/20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-chartreuse">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
              Ready to scale?
            </h2>
            <p className="mt-4 max-w-md text-slate-muted">
              Tell us about your offer, payout model, and goals. We will put
              together a custom media plan within 48 hours.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-4 text-cream transition-colors hover:text-chartreuse"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-chartreuse/10 text-chartreuse">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-slate-muted">Phone</span>
                  {site.phone}
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 text-cream transition-colors hover:text-chartreuse"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-chartreuse/10 text-chartreuse">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs text-slate-muted">Email</span>
                  {site.email}
                </span>
              </a>
              <div className="flex items-start gap-4 text-cream">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-chartreuse/10 text-chartreuse">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs text-slate-muted">Office</span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <br />
                  {site.address.country}
                </span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-navy p-8"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              const name = data.get("name")
              const email = data.get("email")
              const message = data.get("message")
              const subject = encodeURIComponent(`Campaign Inquiry from ${name}`)
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
              )
              window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
            }}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cream">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-cream outline-none transition-colors focus:border-chartreuse/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-cream">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-cream outline-none transition-colors focus:border-chartreuse/50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream">
                  Tell us about your campaign
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-cream outline-none transition-colors focus:border-chartreuse/50"
                  placeholder="Vertical, payout model, monthly budget, goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-chartreuse py-3.5 font-semibold text-navy transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
