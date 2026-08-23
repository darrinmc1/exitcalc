import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Know Your Number.<br />
            <span className="text-emerald-400">Plan Your Exit.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto">
            Free calculators, plain-English lessons, and a step-by-step roadmap to financial independence — built for people who want out of the 9-to-5.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg transition-all shadow-lg shadow-emerald-900/40"
            >
              🧮 Run the Calculator
            </Link>
            <Link
              href="/lessons"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all border border-white/20"
            >
              📚 Start Free Lessons
            </Link>
          </div>
          <p className="text-sm text-slate-500">No account required to use the calculators. Free forever.</p>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-6 px-4 border-y border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide">Free Calculators</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">10+</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide">Lessons</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide">Free to Start</p>
          </div>
        </div>
      </section>

      {/* Tools preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Free FIRE Calculators</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Plug in your numbers and see exactly where you stand — no spreadsheet required.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/fire-number" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all group">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-white text-lg mb-2">FIRE Number</h3>
              <p className="text-slate-400 text-sm mb-4">Calculate the exact portfolio size you need to retire early.</p>
              <span className="text-emerald-400 text-sm font-semibold group-hover:underline">Calculate now →</span>
            </Link>
            <Link href="/tools/coast-fire" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all group">
              <div className="text-3xl mb-3">🏄</div>
              <h3 className="font-bold text-white text-lg mb-2">Coast FIRE</h3>
              <p className="text-slate-400 text-sm mb-4">Find out if you can stop saving and let compound interest do the work.</p>
              <span className="text-emerald-400 text-sm font-semibold group-hover:underline">Calculate now →</span>
            </Link>
            <Link href="/tools/super-projection" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all group">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-white text-lg mb-2">Super Projection</h3>
              <p className="text-slate-400 text-sm mb-4">Project your superannuation balance at retirement age.</p>
              <span className="text-emerald-400 text-sm font-semibold group-hover:underline">Calculate now →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/tools" className="text-slate-400 hover:text-white text-sm underline underline-offset-4 transition-colors">View all tools →</Link>
          </div>
        </div>
      </section>

      {/* Lessons CTA */}
      <section className="py-20 px-4 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Learn the Fundamentals</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Short, jargon-free lessons that explain how FIRE actually works — from the 4% rule to tax-efficient investing.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">What is FIRE?</h3>
              <p className="text-slate-400 text-sm">Understand the core concept behind Financial Independence, Retire Early and whether it's right for you.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">📐</div>
              <h3 className="font-bold text-white mb-2">The 4% Rule Explained</h3>
              <p className="text-slate-400 text-sm">The research behind the most important number in early retirement planning.</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/lessons"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg transition-all"
            >
              Browse All Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-3xl font-bold text-white mb-4">Get Weekly FIRE Tips</h2>
          <p className="text-slate-400 mb-8">Join readers getting one actionable tip per week on saving more, investing smarter, and reaching financial independence faster. No spam, unsubscribe anytime.</p>
          <div className="glass-card p-8 rounded-2xl">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="py-20 px-4 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Go Deeper with Premium Resources</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Spreadsheets, guides, and courses for people serious about reaching FIRE. New products launching soon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all border border-white/20"
            >
              View Products
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all border border-white/20"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-white/10 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-300 text-center sm:text-left">
            <span className="font-semibold text-white">Ready to find your FIRE number?</span> It takes 60 seconds.
          </p>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/tools/fire-number"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all"
            >
              🧮 Run Calculator
            </Link>
            <Link
              href="/lessons"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20"
            >
              📚 Free Lessons
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
