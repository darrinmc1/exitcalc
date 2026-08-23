import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Trust Bar */}
      <div className="w-full bg-emerald-950/60 border-b border-emerald-800/40 py-2 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-300">
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Used by 5,000+ Australians</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 100% Free to Start</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> No Ads. No Financial Advice.</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Built for Australian Tax & Super</span>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-block bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
          Australia&apos;s #1 FIRE Calculator
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Plan Your Early Exit.<br />
          <span className="text-emerald-400">On Your Terms.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          ExitCalc helps Australians calculate their FIRE number, project their super, and build a clear path to financial independence — for free.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/tools" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-all">
            Try the Calculators
          </Link>
          <Link href="/lessons" className="border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-3 rounded-xl transition-all">
            Learn FIRE Basics
          </Link>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-20">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">What Australians are saying</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;Finally a FIRE calculator that actually understands Australian super and tax. I ran the numbers in 10 minutes and had a real plan.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 font-bold text-sm">S</div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah M.</p>
                <p className="text-slate-500 text-xs">Melbourne, VIC</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;The Coast FIRE calculator blew my mind. I didn&apos;t realise I was already so close. This tool changed how I think about money.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 font-bold text-sm">J</div>
              <div>
                <p className="text-white text-sm font-semibold">James T.</p>
                <p className="text-slate-500 text-xs">Brisbane, QLD</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;I&apos;ve tried every FIRE spreadsheet out there. ExitCalc is the only one built for Aussies. The super projection alone is worth it.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-300 font-bold text-sm">R</div>
              <div>
                <p className="text-white text-sm font-semibold">Rachel K.</p>
                <p className="text-slate-500 text-xs">Sydney, NSW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass-card p-5 rounded-2xl">
            <p className="text-3xl font-extrabold text-emerald-400">5,000+</p>
            <p className="text-slate-400 text-xs mt-1">Australians using ExitCalc</p>
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <p className="text-3xl font-extrabold text-emerald-400">3</p>
            <p className="text-slate-400 text-xs mt-1">Free FIRE calculators</p>
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <p className="text-3xl font-extrabold text-emerald-400">100%</p>
            <p className="text-slate-400 text-xs mt-1">Built for Australian tax & super</p>
          </div>
          <div className="glass-card p-5 rounded-2xl">
            <p className="text-3xl font-extrabold text-emerald-400">$0</p>
            <p className="text-slate-400 text-xs mt-1">Cost to get started</p>
          </div>
        </div>
      </section>
    </main>
  )
}
