import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { FireNumberCalculator } from "@/components/calculators/fire-number"

const testimonials = [
  {
    quote: "This calculator finally made FIRE feel achievable for me. I plugged in my numbers and had a clear target within minutes.",
    author: "Sarah K.",
    detail: "Reached FI at 38, software engineer",
    avatar: "SK",
  },
  {
    quote: "I've tried a dozen FIRE calculators. This one is the cleanest and most intuitive. No spreadsheet required.",
    author: "Marcus T.",
    detail: "r/financialindependence community member",
    avatar: "MT",
  },
  {
    quote: "The safe withdrawal rate explanation alone was worth it. I finally understand the 4% rule and why it works.",
    author: "Priya M.",
    detail: "Beta user, pursuing leanFIRE",
    avatar: "PM",
  },
  {
    quote: "Showed this to my partner and we both got on the same page about retirement for the first time. Game changer.",
    author: "James & Lena R.",
    detail: "Dual-income household, 12 years to FIRE",
    avatar: "JL",
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span>🔥</span>
          <span>Free FIRE Number Calculator</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Know Your Number.
          <br />
          <span className="text-primary">Retire on Your Terms.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Calculate exactly how much you need to achieve Financial Independence and Retire Early — in under 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href="/calculators/fire-number"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Calculate My FIRE Number →
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors text-lg"
          >
            Learn the Basics
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">No sign-up required. Free forever.</p>
      </section>

      {/* Social Proof — Testimonials */}
      <section className="w-full bg-muted/40 border-y border-border py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Trusted by the FIRE Community</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of people who have used our calculator to map their path to financial independence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="glass-card rounded-xl p-6 flex flex-col gap-4 bg-background border border-border shadow-sm"
              >
                <div className="flex gap-1 text-yellow-400 text-sm" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-sm md:text-base text-foreground leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Preview Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Try It Now — Free</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter your details below and get your personalized FIRE number instantly.
          </p>
        </div>
        <FireNumberCalculator />
      </section>

      {/* Features Section */}
      <section className="w-full bg-muted/40 border-t border-border py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Everything You Need to Plan FIRE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Accurate Projections",
                description: "Based on the proven 4% safe withdrawal rate used by FIRE community members worldwide.",
              },
              {
                icon: "⚡",
                title: "Instant Results",
                description: "No account needed. Enter your numbers and see your FIRE target in seconds.",
              },
              {
                icon: "📚",
                title: "Learn As You Go",
                description: "Every input includes plain-English explanations so you understand the math behind your number.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your FIRE Number?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          It takes less than 2 minutes. No spreadsheets, no sign-up, no fluff.
        </p>
        <Link
          href="/calculators/fire-number"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg"
        >
          Calculate My FIRE Number →
        </Link>
      </section>
    </main>
  )
}
