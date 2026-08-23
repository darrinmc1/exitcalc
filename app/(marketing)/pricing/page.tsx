import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Free FIRE calculators forever. Upgrade to Pro for guided lessons, advanced projections, and expert resources.",
}

const freeTierFeatures = [
  "FIRE Number Calculator",
  "Coast FIRE Calculator",
  "Super / Pension Projection Tool",
  "All future free calculators",
  "Community blog & updates",
  "No account required",
]

const proTierFeatures = [
  "Everything in Free",
  "Full guided lesson library",
  "Step-by-step FIRE roadmap modules",
  "Advanced scenario modelling",
  "Downloadable worksheets & checklists",
  "XP progress tracking & badges",
  "Priority email support",
  "Early access to new tools & lessons",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
            Simple, transparent pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Calculators are free. <br />
            <span className="text-emerald-400">Mastery is Pro.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every FIRE calculator on {siteConfig.name} is free, forever. Upgrade to Pro when you\'re ready for structured lessons, deeper tools, and a clear path to financial independence.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">Free</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 mb-2">/ forever</span>
              </div>
              <p className="text-slate-400 text-sm">No credit card. No account needed. Just open a calculator and go.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {freeTierFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 text-emerald-400 text-base">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/tools"
              className="block text-center rounded-xl border border-emerald-500/40 text-emerald-400 font-semibold py-3 px-6 hover:bg-emerald-500/10 transition-colors"
            >
              Open Free Calculators
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-950/60 to-slate-900/80 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2">Pro</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-extrabold text-white">$9</span>
                <span className="text-slate-400 mb-2">/ month</span>
              </div>
              <p className="text-slate-400 text-sm">Cancel anytime. Billed monthly. Annual plan coming soon.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {proTierFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 text-emerald-400 text-base">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 transition-colors"
            >
              Get Pro Access
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">Are the calculators really free?</h3>
              <p className="text-slate-400 text-sm">Yes — every calculator on {siteConfig.name} is completely free to use with no account required. We believe everyone deserves access to the core tools for planning financial independence.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">What do I get with Pro?</h3>
              <p className="text-slate-400 text-sm">Pro unlocks the full guided lesson library, structured FIRE roadmap modules, XP tracking, badges, downloadable resources, and early access to new features. It&apos;s for people who want a clear, step-by-step path — not just numbers.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-slate-400 text-sm">Absolutely. Cancel your Pro subscription at any time from your account settings. You&apos;ll retain access until the end of your billing period.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">Is there a free trial for Pro?</h3>
              <p className="text-slate-400 text-sm">We&apos;re working on a trial offer. In the meantime, sign up and explore the free tier — it&apos;s genuinely useful on its own. Upgrade when you&apos;re ready to go deeper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-12">
          <h2 className="text-3xl font-bold mb-4">Start free. Upgrade when ready.</h2>
          <p className="text-slate-400 mb-8">Open any calculator right now — no sign-up needed. When you want a structured plan to reach FIRE, Pro is here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="rounded-xl border border-emerald-500/40 text-emerald-400 font-semibold py-3 px-8 hover:bg-emerald-500/10 transition-colors"
            >
              Try Free Calculators
            </Link>
            <Link
              href="/sign-up"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 transition-colors"
            >
              Get Pro Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
