import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Know Your Number.
          <br />
          <span className="text-emerald-400">Plan Your Exit.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all"
          >
            Try the Calculators
          </Link>
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-700 hover:border-emerald-500 text-white font-bold transition-all"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Use-Case Sections */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Built for Every Stage of Your Career</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Whether you&apos;re just starting out or already earning big, ExitCalc gives you the clarity to make smarter financial decisions — on your timeline.
        </p>

        {/* Early Career */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌱</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">For Early Career Professionals</h3>
              <p className="text-slate-400 mb-4">
                Just landed your first real job? The decisions you make in your 20s and early 30s have an outsized impact on when you can retire. Compound interest is your biggest asset — and ExitCalc helps you see exactly how powerful starting early really is.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Calculate your FIRE number based on your current salary and savings rate</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> See how increasing your savings rate by just 5% can shave years off your working life</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Learn the fundamentals of superannuation, index funds, and tax-effective investing</li>
              </ul>
              <div className="mt-6">
                <Link href="/tools" className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all">
                  Calculate My FIRE Number
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* High Earners */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">For High Earners</h3>
              <p className="text-slate-400 mb-4">
                Earning well but not sure if you&apos;re on track? High income doesn&apos;t automatically mean financial freedom — lifestyle inflation, tax drag, and poor asset allocation can quietly erode your wealth. ExitCalc helps high earners optimise every dollar.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Model Coast FIRE scenarios — find the point where your investments grow themselves</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Understand super contribution caps and how to maximise concessional contributions</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Project your superannuation balance at retirement with realistic growth assumptions</li>
              </ul>
              <div className="mt-6">
                <Link href="/tools" className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all">
                  Explore Coast FIRE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Part-Time Workers */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚖️</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">For Part-Time &amp; Flexible Workers</h3>
              <p className="text-slate-400 mb-4">
                Working part-time, freelancing, or taking career breaks? Traditional retirement calculators assume a steady full-time income — ExitCalc doesn&apos;t. Model irregular income streams, gaps in contributions, and find a path to financial independence that fits your life.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Adjust income and contribution assumptions to reflect your actual working pattern</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Understand how career breaks affect your super balance and what you can do about it</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Learn strategies to stay on track for FIRE even on a reduced income</li>
              </ul>
              <div className="mt-6">
                <Link href="/lessons" className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all">
                  Browse FIRE Lessons
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Career Changers */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🔄</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">For Career Changers &amp; Late Starters</h3>
              <p className="text-slate-400 mb-4">
                Starting your financial independence journey later than you&apos;d like? You&apos;re not alone — and it&apos;s not too late. ExitCalc helps you understand exactly where you stand today and what levers you can pull to accelerate your path to freedom.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Get a clear picture of your current super balance vs. where you need to be</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Explore catch-up concessional contribution strategies to boost your super fast</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Model different retirement ages and spending levels to find your realistic exit date</li>
              </ul>
              <div className="mt-6">
                <Link href="/tools" className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all">
                  Project My Super Balance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools CTA */}
      <section className="py-16 px-4 text-center">
        <div className="glass-card rounded-2xl p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Free Calculators. No Sign-Up Required.</h2>
          <p className="text-slate-400 mb-8">
            Run the numbers on your FIRE journey right now. Our calculators are free, private, and built specifically for Australians.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all"
          >
            Open the Calculators
          </Link>
        </div>
      </section>
    </main>
  )
}
