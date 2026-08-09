import { site } from "../data/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-chartreuse font-display text-xs font-extrabold text-navy">
            S
          </span>
          <span className="font-display font-bold text-cream">
            Sumystic<span className="text-chartreuse"> Digital</span>
          </span>
        </div>

        <p className="text-center text-sm text-slate-muted">
          Performance marketing · E-commerce · Pay per call · CPS · Peptides
        </p>

        <p className="text-sm text-slate-muted">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
