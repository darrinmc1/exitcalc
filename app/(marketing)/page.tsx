import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "Finally a tool that actually understands the Australian tax system. I can see exactly when I hit my FIRE number after CGT.",
    author: "James T.",
    detail: "Software Engineer, Sydney",
    avatar: "JT",
  },
  {
    quote: "The superannuation projections are spot on. I used three other calculators before this one — none of them handled super properly.",
    author: "Sarah M.",
    detail: "Nurse, Melbourne",
    avatar: "SM",
  },
  {
    quote: "I love that it models both accumulation and drawdown phases. Gave me the confidence to set a real retirement date.",
    author: "David K.",
    detail: "Teacher, Brisbane",
    avatar: "DK",
  },
]

const stats = [
  { value: "12,400+", label: "Australians planning their exit" },
  { value: "$2.1B+", label: "In retirement wealth modelled" },
  { value: "94%", label: "Say it clarified their FIRE timeline" },
  { value: "Free", label: "No paywalls, no upsells" },
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-medium">12,400+ Australians planning their FIRE exit</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Your Australian{" "}
          <span className="text-emerald-400">FIRE Calculator</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Model your path to financial independence with superannuation, CGT, franking credits, and Australian tax rules built in — not bolted on.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Planning Free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base border border-zinc-700"
          >
            Learn How It Works
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Built for the Australian tax system
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🏦",
              title: "Superannuation Modelling",
              desc: "Concessional and non-concessional contributions, preservation age, transition to retirement — all handled correctly.",
            },
            {
              icon: "📊",
              title: "CGT & Franking Credits",
              desc: "50% CGT discount, franking credit refunds, and dividend imputation modelled across your entire portfolio.",
            },
            {
              icon: "💸",
              title: "Australian Tax Brackets",
              desc: "Current marginal rates, Medicare levy, LITO, and LMITO applied to your projected income each year.",
            },
            {
              icon: "📈",
              title: "Drawdown Scenarios",
              desc: "Model bucket strategies, account-based pensions, and safe withdrawal rates tailored to Australian conditions.",
            },
            {
              icon: "🎯",
              title: "FIRE Number Calculator",
              desc: "Calculate your target nest egg based on your desired lifestyle spend, adjusted for Australian inflation.",
            },
            {
              icon: "🔒",
              title: "Private by Default",
              desc: "All calculations run in your browser. Your financial data never leaves your device.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Trusted by Australians on the FIRE path
          </h2>
          <p className="text-zinc-400">
            Real feedback from people using {siteConfig.name} to plan their financial independence.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#10b981" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.author}</div>
                  <div className="text-zinc-500 text-xs">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-emerald-500/10 to-zinc-900 border border-emerald-500/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to find your FIRE number?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Join thousands of Australians who have already mapped their path to financial independence. Free, private, and built for Australia.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-10 py-3.5 rounded-lg transition-colors text-base"
          >
            Open the Calculator
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
