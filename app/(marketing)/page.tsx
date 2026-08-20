import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "I finally understand how much I actually need to retire. This tool gave me a clear target and a plan to get there.",
    name: "Sarah M.",
    title: "Teacher, age 42",
    initials: "SM"
  },
  {
    quote: "I was guessing at my retirement number for years. Now I have a real figure based on my actual lifestyle and goals.",
    name: "James T.",
    title: "Software Engineer, age 35",
    initials: "JT"
  },
  {
    quote: "The inflation and withdrawal rate adjustments made this so much more realistic than anything else I've tried.",
    name: "Linda R.",
    title: "Small Business Owner, age 51",
    initials: "LR"
  }
]

const trustStats = [
  { value: "4% Rule", label: "Industry-standard safe withdrawal rate" },
  { value: "Inflation", label: "Adjusted for real purchasing power" },
  { value: "Free", label: "No account or credit card required" },
  { value: "Private", label: "Your data never leaves your browser" }
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Know Your Number.
          <br />
          <span className="text-emerald-400">Retire With Confidence.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Calculate exactly how much you need to retire — based on your real expenses, timeline, and goals. No guesswork, no jargon.
        </p>
        <Link
          href="/calculator"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/40"
        >
          Calculate My Retirement Number
        </Link>
        <p className="mt-4 text-sm text-slate-500">Free · No signup · Results in under 2 minutes</p>
      </section>

      {/* Trust Stats Bar */}
      <section className="w-full bg-slate-800/50 border-y border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
              <span className="text-emerald-400 font-bold text-lg">{stat.value}</span>
              <span className="text-slate-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
            <div className="text-emerald-400 text-3xl font-black mb-3">1</div>
            <h3 className="text-white font-semibold text-lg mb-2">Enter Your Expenses</h3>
            <p className="text-slate-400 text-sm">Tell us your expected monthly spending in retirement. Be as detailed or as simple as you like.</p>
          </div>
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
            <div className="text-emerald-400 text-3xl font-black mb-3">2</div>
            <h3 className="text-white font-semibold text-lg mb-2">Set Your Timeline</h3>
            <p className="text-slate-400 text-sm">Choose your target retirement age and how long you want your savings to last.</p>
          </div>
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
            <div className="text-emerald-400 text-3xl font-black mb-3">3</div>
            <h3 className="text-white font-semibold text-lg mb-2">Get Your Number</h3>
            <p className="text-slate-400 text-sm">Instantly see your retirement target, adjusted for inflation and based on proven withdrawal strategies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-slate-800/30 border-y border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Real People. Real Clarity.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">See how others have used this calculator to take control of their financial future.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700/60 flex flex-col gap-4"
              >
                <div className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-emerald-400 text-2xl font-serif leading-none mr-1">&ldquo;</span>
                  {t.quote}
                  <span className="text-emerald-400 text-2xl font-serif leading-none ml-1">&rdquo;</span>
                </div>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-700/50">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to find your number?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Join thousands of people who have taken the first step toward a confident retirement.</p>
        <Link
          href="/calculator"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/40"
        >
          Start the Calculator — It&apos;s Free
        </Link>
      </section>
    </main>
  )
}
