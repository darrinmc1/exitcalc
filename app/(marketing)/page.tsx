import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MarketingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section - Above the fold */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Retire Early.
            <span className="text-emerald-400"> On Your Terms.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto">
            Calculate exactly when you can achieve Financial Independence and Retire Early — personalized to your income, expenses, and goals.
          </p>

          {/* PRIMARY CTA — single, high-contrast, above the fold */}
          <div className="pt-4">
            <Link href="/calculator">
              <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-900 shadow-lg shadow-emerald-500/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50">
                Start Your Free FIRE Plan
              </button>
            </Link>
            <p className="mt-3 text-sm text-slate-400">No credit card required &middot; Free forever</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-800 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-emerald-400">12,000+</p>
            <p className="text-slate-400 text-sm mt-1">FIRE plans created</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-600" />
          <div>
            <p className="text-3xl font-bold text-emerald-400">$2.4M</p>
            <p className="text-slate-400 text-sm mt-1">Avg. projected portfolio</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-600" />
          <div>
            <p className="text-3xl font-bold text-emerald-400">8 yrs</p>
            <p className="text-slate-400 text-sm mt-1">Avg. time to FIRE</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Everything you need to reach FIRE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">FIRE Calculator</h3>
              <p className="text-slate-400 text-sm">Input your numbers and instantly see your FIRE date, savings rate, and required portfolio size.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Progress Tracking</h3>
              <p className="text-slate-400 text-sm">Track your net worth and savings rate over time with beautiful charts and milestone alerts.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Scenario Modeling</h3>
              <p className="text-slate-400 text-sm">Model different withdrawal rates, market returns, and spending scenarios to stress-test your plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — single reinforcing CTA, no competing links */}
      <section className="bg-emerald-500 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to find your FIRE date?</h2>
          <p className="text-slate-800 text-lg">Join thousands of people who have already mapped their path to financial independence.</p>
          <Link href="/calculator">
            <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-700/50">
              Start Your Free FIRE Plan
            </button>
          </Link>
        </div>
      </section>

      {/* Minimal footer — no competing nav CTAs */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FIRE Planner. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
