import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free, upgrade when you're ready.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to plan your exit — start free, go deeper when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Free Tier */}
          <div className="glass-card rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-slate-400 mb-2">/forever</span>
              </div>
              <p className="text-slate-400 text-sm">Access the core calculators and lessons — no credit card required.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-400 mt-0.5">✓</span>
                FIRE Number Calculator
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Coast FIRE Calculator
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Super Projection Tool
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Free lessons &amp; guides
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-green-400 mt-0.5">✓</span>
                Progress tracking dashboard
              </li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center py-3 px-6 rounded-xl border border-slate-600 text-white font-semibold hover:border-slate-400 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Membership Tier */}
          <div className="glass-card rounded-2xl p-8 flex flex-col border border-emerald-500/40 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2">Member</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-white">$5</span>
                <span className="text-slate-400 mb-2">/month</span>
              </div>
              <p className="text-slate-400 text-sm">Unlock premium lessons, tools, and community access to accelerate your exit plan.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Everything in Free
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                All premium lessons &amp; modules
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Advanced projection scenarios
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Downloadable worksheets
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Early access to new tools
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Cancel anytime
              </li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center py-3 px-6 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
            >
              Start Membership — $5/mo
            </Link>
          </div>

          {/* Workbook Tier */}
          <div className="glass-card rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Workbook</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-white">$59</span>
                <span className="text-slate-400 mb-2">one-time</span>
              </div>
              <p className="text-slate-400 text-sm">The complete Exit Calc workbook — a step-by-step guide to building your personal exit plan.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>
                Comprehensive exit planning workbook
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>
                Printable &amp; fillable PDF format
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>
                Step-by-step FIRE planning framework
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>
                Lifetime access &amp; free updates
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>
                One-time purchase, no subscription
              </li>
            </ul>
            <Link
              href="/products"
              className="block text-center py-3 px-6 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:border-blue-400 hover:text-blue-300 transition-colors"
            >
              Get the Workbook — $59
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Compare Plans</h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-center p-4 text-slate-400 font-medium">Free</th>
                  <th className="text-center p-4 text-emerald-400 font-medium">Member</th>
                  <th className="text-center p-4 text-blue-400 font-medium">Workbook</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                <tr>
                  <td className="p-4 text-slate-300">Core calculators</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Free lessons</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Progress dashboard</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Premium lessons</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Advanced scenarios</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Downloadable worksheets</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Exit planning workbook (PDF)</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Lifetime access</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Pricing FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-slate-400 text-sm">Yes. Cancel anytime from your account settings. You&apos;ll keep access until the end of your billing period.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Is the workbook a one-time purchase?</h3>
              <p className="text-slate-400 text-sm">Yes. Pay once and own it forever — including all future updates at no extra cost.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Do I need a membership to use the calculators?</h3>
              <p className="text-slate-400 text-sm">No. All core calculators are completely free. A membership unlocks premium lessons and advanced features.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">What&apos;s the difference between the membership and the workbook?</h3>
              <p className="text-slate-400 text-sm">The membership ($5/mo) gives you ongoing access to premium digital content. The workbook ($59) is a standalone PDF guide you own outright — no subscription needed.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to plan your exit?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Start free today. Upgrade whenever it makes sense for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="py-3 px-8 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
            >
              Start Free
            </Link>
            <Link
              href="/products"
              className="py-3 px-8 rounded-xl border border-slate-600 text-white font-semibold hover:border-slate-400 transition-colors"
            >
              View Workbook
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
