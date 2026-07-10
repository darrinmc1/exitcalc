import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className={`${siteConfig.theme.heroGradient} py-24 md:py-32`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-6xl mb-6 animate-float">{siteConfig.theme.emoji}</div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
            FIRE = Financial Independence, Retire Early
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text-cyan">Know Your FIRE Number. Plan Your Exit.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Your FIRE number is the total you need invested to retire. Most
            Australians need $600k–$800k. Find yours in 3 minutes using our free
            calculator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/fire-number"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              Calculate Your FIRE Number
            </Link>
            <Link
              href="/lessons"
              className="px-8 py-4 rounded-xl font-bold border border-white/10 text-slate-200 hover:bg-white/5 transition-all"
            >
              {siteConfig.copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          <span className="gradient-text-cyan">What You&apos;ll Learn</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.categories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-slate-400">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          {siteConfig.copy.emailCaptureHeading}
        </h2>
        <p className="text-slate-400 mb-8">
          {siteConfig.copy.emailCaptureSubheading}
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
        >
          Get the Exit Plan Workbook
        </Link>
      </div>
    </div>
  )
}
