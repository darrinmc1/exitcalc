import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Know Your Number.<br />
          <span className="text-emerald-400">Plan Your Exit.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 hover:border-emerald-500 text-slate-300 font-bold text-lg transition-all"
          >
            Explore Tools
          </Link>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="w-full border-y border-slate-800 bg-slate-900/60 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-6">Trusted by early members &amp; featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-slate-400 font-semibold text-sm tracking-wide">🏆 Product Hunt</span>
            <span className="text-slate-400 font-semibold text-sm tracking-wide">📰 Indie Hackers</span>
            <span className="text-slate-400 font-semibold text-sm tracking-wide">💬 r/financialindependence</span>
            <span className="text-slate-400 font-semibold text-sm tracking-wide">🎙️ FIRE Podcast</span>
            <span className="text-slate-400 font-semibold text-sm tracking-wide">📊 The FI Weekly</span>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What Early Members Are Saying</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Real results from people who used ExitCalc to map their path to financial independence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;I finally understood my FIRE number after years of guessing. ExitCalc made it crystal clear in under 5 minutes.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">JM</div>
              <div>
                <p className="text-white text-sm font-semibold">James M.</p>
                <p className="text-slate-500 text-xs">Software Engineer, 34</p>
              </div>
            </div>
            <div className="flex gap-0.5 text-emerald-400 text-xs">★★★★★</div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;The super projection calculator showed me I was 4 years closer to retirement than I thought. Game changer.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">SR</div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah R.</p>
                <p className="text-slate-500 text-xs">Nurse Practitioner, 41</p>
              </div>
            </div>
            <div className="flex gap-0.5 text-emerald-400 text-xs">★★★★★</div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">&ldquo;Coast FIRE clicked for me here. I stopped stressing about saving more and started optimising what I already have.&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">DK</div>
              <div>
                <p className="text-white text-sm font-semibold">David K.</p>
                <p className="text-slate-500 text-xs">Marketing Manager, 38</p>
              </div>
            </div>
            <div className="flex gap-0.5 text-emerald-400 text-xs">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility Numbers */}
      <section className="w-full bg-slate-900/60 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-emerald-400 mb-1">2,400+</p>
              <p className="text-slate-400 text-sm">Waitlist Members</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-emerald-400 mb-1">$4.2M</p>
              <p className="text-slate-400 text-sm">Net Worth Tracked</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-emerald-400 mb-1">18 min</p>
              <p className="text-slate-400 text-sm">Avg. Time to Clarity</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-emerald-400 mb-1">4.9 / 5</p>
              <p className="text-slate-400 text-sm">Early Access Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Endorsement */}
      <section className="w-full max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="glass-card p-8 rounded-2xl">
          <p className="text-2xl text-white font-semibold leading-relaxed mb-6">
            &ldquo;ExitCalc fills a real gap — it combines the rigour of a financial planner with the simplicity of a calculator anyone can use on their lunch break.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">AP</div>
            <div className="text-left">
              <p className="text-white font-bold">Alex Patterson, CFP®</p>
              <p className="text-slate-500 text-sm">Independent Financial Planner &amp; FIRE Advocate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to find your exit number?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of people planning smarter retirements. Free to start, no credit card required.</p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-all"
        >
          Start Calculating Free →
        </Link>
      </section>
    </main>
  )
}
