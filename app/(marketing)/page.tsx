import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Retire Early. <span className="text-emerald-400">Calculate Your Path.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Australia&apos;s free FIRE calculator suite. Find your FIRE number, model Coast FIRE, and project your super — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            Try the Calculators
          </Link>
          <Link
            href="#fire-101"
            className="inline-block border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-bold px-8 py-4 rounded-xl transition-all"
          >
            What is FIRE? ↓
          </Link>
        </div>
      </section>

      {/* FIRE 101 — Beginner Guide */}
      <section id="fire-101" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FIRE 101 — The Beginner&apos;s Guide</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            New to FIRE? Here&apos;s everything you need to know before you touch a calculator.
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔥</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What is FIRE?</h3>
                <p className="text-slate-400">
                  FIRE stands for <strong className="text-white">Financial Independence, Retire Early</strong>. The goal is simple: save and invest enough money so that your investment returns cover your living expenses — forever. You stop working because you <em>want</em> to, not because you have to.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Your FIRE Number</h3>
                <p className="text-slate-400">
                  Your FIRE number is the total investment portfolio you need to retire. The most common rule of thumb is the <strong className="text-white">25× Rule</strong>: multiply your annual expenses by 25. For example, if you spend $60,000/year, your FIRE number is $1,500,000. This is based on the <strong className="text-white">4% Safe Withdrawal Rate</strong> — the idea that you can withdraw 4% of your portfolio each year without running out of money over a 30+ year retirement.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌊</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Coast FIRE — Work Less, Stress Less</h3>
                <p className="text-slate-400">
                  Coast FIRE is a milestone <em>before</em> full FIRE. You&apos;ve invested enough that — if you simply leave it alone — compound growth will carry you to your full FIRE number by retirement age. Once you hit Coast FIRE, you only need to earn enough to cover today&apos;s expenses. No more aggressive saving required.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🦘</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">FIRE in Australia — Super Matters</h3>
                <p className="text-slate-400">
                  Australians have a unique advantage: <strong className="text-white">compulsory superannuation</strong>. Your employer contributes at least 11.5% of your salary into super, which grows tax-advantaged. The catch? You can&apos;t access super until your preservation age (currently 60). Smart Australian FIRE planners build <em>two</em> portfolios: a <strong className="text-white">bridge portfolio</strong> (accessible now) to fund early retirement, and their super (to fund later years).
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📈</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The FIRE Formula in 3 Steps</h3>
                <ol className="text-slate-400 space-y-2 list-none">
                  <li><span className="text-emerald-400 font-bold">1. Reduce expenses.</span> Every dollar you don&apos;t spend is a dollar you don&apos;t need to earn — and a dollar that can compound.</li>
                  <li><span className="text-emerald-400 font-bold">2. Increase your savings rate.</span> The higher your savings rate, the faster you reach FIRE. Going from 20% to 50% can cut your timeline in half.</li>
                  <li><span className="text-emerald-400 font-bold">3. Invest in low-cost index funds.</span> Most Australian FIRE seekers use ETFs like VAS (Australian shares) and VGS (global shares) via a brokerage account.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧮</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Types of FIRE</h3>
                <ul className="text-slate-400 space-y-2">
                  <li><strong className="text-white">Lean FIRE</strong> — Retire on a minimal budget (under ~$40k/year). Maximum freedom, maximum frugality.</li>
                  <li><strong className="text-white">Fat FIRE</strong> — Retire with a generous lifestyle budget ($100k+/year). Requires a much larger portfolio.</li>
                  <li><strong className="text-white">Barista FIRE</strong> — Semi-retire. Work part-time to cover some expenses while your portfolio grows.</li>
                  <li><strong className="text-white">Coast FIRE</strong> — Stop aggressively saving. Let compounding do the heavy lifting from here.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6 text-lg">Ready to run the numbers for your situation?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Calculate My FIRE Number →
            </Link>
            <Link
              href="/lessons"
              className="inline-block border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Explore Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Free Tools</span>
          <h2 className="text-3xl font-bold mb-4">Start Calculating</h2>
          <p className="text-slate-400">Three calculators built specifically for Australians on the path to FIRE.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/tools/fire-number" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all block">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-white mb-2">FIRE Number</h3>
            <p className="text-sm text-slate-400">How much do you need to retire? Calculate your target portfolio based on your annual spending.</p>
          </Link>
          <Link href="/tools/coast-fire" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all block">
            <div className="text-3xl mb-3">🌊</div>
            <h3 className="font-bold text-white mb-2">Coast FIRE</h3>
            <p className="text-sm text-slate-400">Find out if you can stop saving aggressively and let compound growth carry you to retirement.</p>
          </Link>
          <Link href="/tools/super-projection" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all block">
            <div className="text-3xl mb-3">🦘</div>
            <h3 className="font-bold text-white mb-2">Super Projection</h3>
            <p className="text-sm text-slate-400">Project your superannuation balance at preservation age and plan your bridge portfolio.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
