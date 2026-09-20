import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Choose the plan that fits your FIRE journey — from a one-time workbook to a full membership.",
}

const features = {
  free: [
    "All free FIRE calculators",
    "Coast FIRE & FI Number tools",
    "Public lessons & guides",
    "Newsletter access",
  ],
  membership: [
    "Everything in Free",
    "Full lesson library (all modules)",
    "Progress tracking & XP badges",
    "Downloadable worksheets",
    "Early access to new tools",
    "Members-only community updates",
    "Cancel anytime",
  ],
  workbook: [
    "One-time purchase, yours forever",
    "Step-by-step FIRE planning workbook",
    "Printable & fillable PDF format",
    "Covers savings rate, FI number, timeline",
    "Bonus: Coast FIRE cheat sheet",
    "Lifetime updates included",
  ],
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Invest in your{" "}
          <span className="text-emerald-400">financial independence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Start free. Upgrade when you&apos;re ready. No hidden fees, no upsells — just tools and knowledge to help you reach FIRE faster.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* Free */}
          <div className="flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
              </div>
              <p className="text-slate-400 text-sm">Always free. No credit card needed.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.free.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Membership — highlighted */}
          <div className="flex flex-col bg-emerald-500/10 border-2 border-emerald-500/50 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2">Membership</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white">$5</span>
                <span className="text-slate-400 text-sm mb-1">/month</span>
              </div>
              <p className="text-slate-400 text-sm">Cancel anytime. No lock-in.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.membership.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Start Membership
            </Link>
          </div>

          {/* Workbook */}
          <div className="flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">Workbook</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white">$59</span>
                <span className="text-slate-400 text-sm mb-1">one-time</span>
              </div>
              <p className="text-slate-400 text-sm">Buy once, use forever.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.workbook.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="block text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Get the Workbook
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I really use the calculators for free?",
              a: "Yes — all FIRE calculators (FI Number, Coast FIRE, Super Projection) are completely free, forever. No account required.",
            },
            {
              q: "What's included in the $5/month membership?",
              a: "The membership unlocks the full lesson library, progress tracking, XP badges, downloadable worksheets, and early access to new tools. Cancel any time from your account settings.",
            },
            {
              q: "Is the $59 workbook a subscription?",
              a: "No — it's a one-time purchase. You get lifetime access and all future updates at no extra cost.",
            },
            {
              q: "Do I need a membership to buy the workbook?",
              a: "Nope. The workbook is a standalone product. You can purchase it without a membership account.",
            },
            {
              q: "How do I cancel my membership?",
              a: "You can cancel anytime from your account settings page. You'll keep access until the end of your billing period.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
          <p className="text-slate-400 mb-6">Try the free calculators first — no sign-up required. Upgrade when you want more.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Try Free Tools
            </Link>
            <Link
              href="/lessons"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
