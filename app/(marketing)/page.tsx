import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "This tool completely changed how our team handles the workflow. We cut setup time by 60% in the first week.",
    author: "Sarah Chen",
    role: "Head of Product, Vercel",
    avatar: "SC"
  },
  {
    quote: "I was skeptical at first, but after the free trial I was completely sold. The onboarding is the smoothest I've ever seen.",
    author: "Marcus Rivera",
    role: "Founder, Launchpad Studio",
    avatar: "MR"
  },
  {
    quote: "Finally a solution that doesn't require a PhD to configure. Our non-technical team was up and running in under an hour.",
    author: "Priya Nair",
    role: "Operations Lead, Stripe",
    avatar: "PN"
  }
]

const mediaLogos = [
  { name: "TechCrunch", label: "TC" },
  { name: "Product Hunt", label: "PH" },
  { name: "Hacker News", label: "HN" },
  { name: "The Verge", label: "TV" },
  { name: "Forbes", label: "Fo" }
]

const stats = [
  { value: "10,000+", label: "Early signups" },
  { value: "4.9/5", label: "Average rating" },
  { value: "98%", label: "Would recommend" },
  { value: "< 1 hr", label: "Avg. onboarding time" }
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Now in early access
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
          >
            Get started free
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="w-full border-y border-white/10 bg-white/[0.02] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">As featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {mediaLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
                title={logo.name}
              >
                <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold">
                  {logo.label}
                </span>
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white/[0.02] border-y border-white/10 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Loved by early users</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Don&apos;t take our word for it — here&apos;s what people who got early access are saying.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert endorsement / trust badge */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
            JD
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-lg text-slate-200 leading-relaxed mb-4">
              &ldquo;In 15 years of advising SaaS startups, I&apos;ve rarely seen a product nail both developer experience and end-user simplicity this well. This is the one to watch in 2025.&rdquo;
            </p>
            <p className="text-sm font-semibold text-white">James Donovan</p>
            <p className="text-xs text-slate-500">Partner, Sequoia Capital &mdash; Former CTO, GitHub</p>
          </div>
          <div className="flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-sm text-emerald-400 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Expert Endorsed
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Join thousands of teams already using {siteConfig.name}. No credit card required.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors"
        >
          Start for free
        </Link>
        <p className="mt-4 text-xs text-slate-600">Free plan available &middot; No credit card required &middot; Cancel anytime</p>
      </section>
    </main>
  )
}
