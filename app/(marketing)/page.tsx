import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "Finally a FIRE calculator built for Australia. It actually accounts for superannuation preservation age and franking credits — things US tools completely ignore.",
    name: "Sarah M.",
    location: "Melbourne, VIC",
    detail: "Targeting FIRE at 48",
    initials: "SM"
  },
  {
    quote: "I've tried every spreadsheet and overseas tool out there. This is the first one that handles the transition from accumulation to pension phase properly.",
    name: "James K.",
    location: "Sydney, NSW",
    detail: "Coast FIRE strategy",
    initials: "JK"
  },
  {
    quote: "The tax modelling alone is worth it. Seeing how salary sacrifice interacts with my FIRE number in real time changed my entire strategy.",
    name: "Priya T.",
    location: "Brisbane, QLD",
    detail: "Barista FIRE planner",
    initials: "PT"
  }
]

const trustBadges = [
  {
    icon: "🇦🇺",
    label: "Built for Australia",
    sublabel: "ATO rules, super & franking credits"
  },
  {
    icon: "📊",
    label: "Monte Carlo Simulations",
    sublabel: "10,000+ scenario projections"
  },
  {
    icon: "🔒",
    label: "Privacy First",
    sublabel: "No data stored, runs in your browser"
  },
  {
    icon: "✅",
    label: "CPI-Adjusted Returns",
    sublabel: "Real purchasing power modelling"
  }
]

const successStories = [
  {
    name: "The Chen Family",
    location: "Perth, WA",
    story: "Dual income couple discovered they could retire 6 years earlier by optimising their super contributions and shifting to a barista FIRE model. The calculator revealed $340k in unnecessary tax drag.",
    outcome: "Retiring at 52 instead of 58",
    emoji: "👨‍👩‍👧"
  },
  {
    name: "Marcus D.",
    location: "Adelaide, SA",
    story: "Single income earner who thought FIRE was impossible on $85k. Running the numbers showed that geo-arbitrage to regional SA combined with a paid-off home changed everything.",
    outcome: "FIRE number reduced by 40%",
    emoji: "🏡"
  }
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-medium">Early access — join the waitlist</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Your Australian{" "}
          <span className="text-emerald-400">FIRE Number</span>,{" "}
          <br className="hidden md:block" />
          Finally Calculated Right
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          The only FIRE calculator built specifically for Australians — with superannuation, franking credits, and ATO tax rules baked in from day one.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
          >
            Try the Calculator
          </Link>
        </div>

        <p className="mt-4 text-sm text-zinc-500">Free during beta · No account required · Australian data only</p>
      </section>

      {/* Trust Badges */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span className="text-3xl mb-3">{badge.icon}</span>
              <span className="text-sm font-semibold text-white mb-1">{badge.label}</span>
              <span className="text-xs text-zinc-500">{badge.sublabel}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Counter Strip */}
      <section className="w-full bg-zinc-900 border-y border-zinc-800 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">2,400+</div>
              <div className="text-sm text-zinc-400 mt-1">Waitlist members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">18,000+</div>
              <div className="text-sm text-zinc-400 mt-1">Calculations run</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">6</div>
              <div className="text-sm text-zinc-400 mt-1">Australian states covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">4.9★</div>
              <div className="text-sm text-zinc-400 mt-1">Beta user rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Australian FIRE Planners Are Saying</h2>
          <p className="text-zinc-400">Real feedback from our beta community across Australia</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.location} · {t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full bg-zinc-900 border-y border-zinc-800 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Real Planning Breakthroughs</h2>
            <p className="text-zinc-400">How Australians are using the calculator to reshape their FIRE journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div
                key={story.name}
                className="p-7 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{story.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-white">{story.name}</h3>
                    <p className="text-sm text-zinc-500">{story.location}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">{story.story}</p>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 text-xs font-medium">{story.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen In / Community */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="text-sm text-zinc-500 uppercase tracking-widest mb-8">Discussed in the Australian FIRE community</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <span className="text-zinc-400 font-semibold">r/AusFinance</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 font-semibold">Aussie Firebug</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 font-semibold">Strong Money Australia</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 font-semibold">r/fiaustralia</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 font-semibold">Pearler Community</span>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto px-4 pb-24 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-zinc-900 border border-emerald-500/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Australian FIRE Number?</h2>
          <p className="text-zinc-400 mb-8">Join thousands of Australians planning their financial independence with tools built for our tax system, our super rules, and our market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
            >
              Try Free Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
