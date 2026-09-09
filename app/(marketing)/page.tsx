import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Know exactly when you can exit.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-all"
          >
            Try the Free Calculators
          </Link>
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-bold text-lg transition-all"
          >
            Browse Lessons
          </Link>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="w-full border-y border-slate-800 bg-slate-900/50 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-6">Trusted by early members &amp; built on solid foundations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">500+</p>
              <p className="text-sm text-slate-400 mt-1">Waitlist members</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">100%</p>
              <p className="text-sm text-slate-400 mt-1">Free to start</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">5+</p>
              <p className="text-sm text-slate-400 mt-1">FIRE calculators</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">🔒</p>
              <p className="text-sm text-slate-400 mt-1">No data sold, ever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">What early members are saying</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Real feedback from our beta community — people who are actively planning their financial independence.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;Finally a FIRE calculator that actually explains the maths behind the number. I ran my Coast FIRE scenario in under 2 minutes.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">JM</div>
              <div>
                <p className="text-white text-sm font-semibold">Jamie M.</p>
                <p className="text-slate-500 text-xs">Software engineer, beta member</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;The lessons are concise and jargon-free. I finally understand the 4% rule and how it applies to my super balance.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm">SR</div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah R.</p>
                <p className="text-slate-500 text-xs">Teacher, waitlist member</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;I&apos;ve tried every FIRE spreadsheet out there. ExitCalc is the first tool that made me feel like I actually have a plan.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">DK</div>
              <div>
                <p className="text-white text-sm font-semibold">Daniel K.</p>
                <p className="text-slate-500 text-xs">Small business owner, beta member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility / Expert Endorsement */}
      <section className="w-full border-t border-slate-800 bg-slate-900/40 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-8">Built with financial rigour</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl">📐</div>
              <h3 className="text-white font-semibold">Evidence-based formulas</h3>
              <p className="text-slate-400 text-sm">Every calculation is grounded in peer-reviewed research including the Trinity Study and Bengen&apos;s 4% rule.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-2xl">🔍</div>
              <h3 className="text-white font-semibold">Transparent methodology</h3>
              <p className="text-slate-400 text-sm">We publish exactly how each number is calculated. No black boxes — <Link href="/lessons/how-its-calculated" className="text-emerald-400 hover:underline">read the methodology</Link>.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-2xl">🛡️</div>
              <h3 className="text-white font-semibold">Privacy first</h3>
              <p className="text-slate-400 text-sm">Your financial data never leaves your browser for calculations. We don&apos;t sell or share your information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Ready to find your exit number?</h2>
        <p className="text-slate-400 mb-8">Join hundreds of people already planning their financial independence with ExitCalc.</p>
        <Link
          href="/tools"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-all"
        >
          Start for Free — No Sign-up Needed
        </Link>
      </section>
    </main>
  )
}
