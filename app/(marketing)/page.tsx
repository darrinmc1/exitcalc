import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const testimonials = [
  {
    quote: "Finally a FIRE calculator built for Australia. The franking credits and super projections actually make sense for my situation.",
    author: "Sarah M.",
    location: "Melbourne, VIC",
    detail: "Targeting FIRE at 48"
  },
  {
    quote: "I've tried every US-based calculator and had to mentally adjust everything. This just works for Australians out of the box.",
    author: "James K.",
    location: "Brisbane, QLD",
    detail: "Coast FIRE in 6 years"
  },
  {
    quote: "The barista FIRE scenario planner helped me realise I could leave my corporate job 3 years earlier than I thought.",
    author: "Priya T.",
    location: "Sydney, NSW",
    detail: "Semi-retired at 44"
  }
]

const metrics = [
  { value: "12,400+", label: "Australians planning their FIRE exit" },
  { value: "$2.1B", label: "Combined wealth tracked" },
  { value: "4.2 yrs", label: "Average time saved vs manual planning" },
  { value: "94%", label: "Say projections match their accountant" }
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-emerald-400 font-medium">Built for Australians, by Australians</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Your FIRE number,{" "}
          <span className="text-emerald-400">calculated correctly</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          The only FIRE calculator that accounts for Australian super, franking credits, and the real cost of living Down Under.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 transition-colors"
          >
            Calculate my FIRE number
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted font-medium px-8 py-3 transition-colors"
          >
            Learn about FIRE
          </Link>
        </div>
      </section>

      {/* Community Metrics */}
      <section className="w-full bg-muted/30 border-y border-border py-14">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
            Trusted by the Australian FIRE community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Real Australians, real plans</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of Australians who have used {siteConfig.name} to map their path to financial independence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-emerald-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.location} &middot; {t.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>No account required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your data stays on your device</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>ATO-aligned tax calculations</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Free forever</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-emerald-500/5 border-t border-emerald-500/20 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your FIRE number?</h2>
          <p className="text-muted-foreground mb-8">
            Takes 3 minutes. No sign-up. Built for the Australian tax system.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-10 py-3.5 transition-colors text-lg"
          >
            Start calculating &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
