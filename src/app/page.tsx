import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { ALL_PRODUCTS } from "@/data/products"
import {
  ArrowRight,
  BookOpen,
  Calculator,
  TrendingUp,
  Flame,
  Target,
  DollarSign,
} from "lucide-react"

const TOOLS = [
  {
    id: "super-projection",
    name: "Super Projection",
    description: "Project your super balance at retirement with the current 11.5% SG rate.",
    emoji: "🏦",
    icon: TrendingUp,
    color: "teal",
  },
  {
    id: "fire-number",
    name: "FIRE Number",
    description: "Calculate your target number and how many years until you hit it.",
    emoji: "🔥",
    icon: Target,
    color: "amber",
  },
  {
    id: "coast-fire",
    name: "Coast-FIRE",
    description: "Find out if you can stop contributing and let compound interest coast you to retirement.",
    emoji: "🏖️",
    icon: Calculator,
    color: "emerald",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative hero-gradient hero-glow overflow-hidden">
          <div className="grid-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-8 animate-pulse-glow">
                <span className="text-lg">{siteConfig.theme.emoji}</span>
                <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
                  AU FIRE Planning
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-[var(--font-outfit)] leading-[0.95] mb-6">
                <span className="text-white">Know Your Number.</span>
                <br />
                <span className="gradient-text">Plan Your Exit.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {siteConfig.copy.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 text-lg btn-glow"
                >
                  {siteConfig.copy.ctaButton}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/lessons"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-300 border-2 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300 text-lg"
                >
                  {siteConfig.copy.ctaSecondary}
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-teal-500" />
                  <span>15 lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-amber-500" />
                  <span>3 calculators</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-rose-500" />
                  <span>100% AU-focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase">
                  Free Calculators
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-outfit)] text-white">
                Run Your Numbers
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Three calculators built for Australian super and FIRE planning.
                No sign-up required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{tool.emoji}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-sm font-semibold text-teal-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Open calculator <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
                  Go Deeper
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-outfit)] text-white">
                Exit Plan Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ALL_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="glass-card p-8 flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign className="h-8 w-8 text-amber-400" />
                      <span className="text-2xl font-extrabold text-white">
                        ${product.priceAud}
                        <span className="text-sm text-slate-400 font-normal ml-1">AUD</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-teal-500 mt-0.5">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <EmailCapture />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
