import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free, upgrade when you're ready.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to plan your exit — start free, go deeper when you're ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Free</p>
              <p className="text-5xl font-bold text-white">$0</p>
              <p className="text-slate-400 mt-1">Forever free</p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> FIRE number calculator</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Coast FIRE calculator</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Super projection tool</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Free lessons &amp; guides</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Newsletter access</li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Workbook */}
          <div className="rounded-2xl border border-emerald-500 bg-slate-800/50 p-8 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2">Exit Workbook</p>
              <p className="text-5xl font-bold text-white">$59</p>
              <p className="text-slate-400 mt-1">One-time purchase</p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Everything in Free</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Step-by-step exit planning workbook</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Printable &amp; fillable PDF</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Lifetime access &amp; updates</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> No subscription required</li>
            </ul>
            <Link
              href="/products"
              className="block text-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Buy the workbook — $59
            </Link>
          </div>

          {/* Membership */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Membership</p>
              <p className="text-5xl font-bold text-white">$5<span className="text-2xl font-normal text-slate-400">/mo</span></p>
              <p className="text-slate-400 mt-1">Cancel anytime</p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Everything in Free</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Full lesson library access</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Progress tracking &amp; XP badges</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Members-only tools &amp; updates</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span> Priority support</li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl border border-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              Start membership — $5/mo
            </Link>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 pr-6 text-slate-400 font-medium w-1/2">Feature</th>
                  <th className="py-3 px-4 text-center text-slate-400 font-medium">Free</th>
                  <th className="py-3 px-4 text-center text-emerald-400 font-medium">Workbook</th>
                  <th className="py-3 px-4 text-center text-slate-400 font-medium">Membership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["FIRE calculators", true, true, true],
                  ["Free lessons", true, true, true],
                  ["Newsletter", true, true, true],
                  ["Exit planning workbook (PDF)", false, true, false],
                  ["Lifetime workbook updates", false, true, false],
                  ["Full lesson library", false, false, true],
                  ["Progress tracking &amp; XP", false, false, true],
                  ["Members-only tools", false, false, true],
                  ["Priority support", false, false, true],
                ].map(([feature, free, workbook, member]) => (
                  <tr key={String(feature)}>
                    <td className="py-3 pr-6 text-slate-300" dangerouslySetInnerHTML={{ __html: String(feature) }} />
                    <td className="py-3 px-4 text-center">{free ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">—</span>}</td>
                    <td className="py-3 px-4 text-center">{workbook ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">—</span>}</td>
                    <td className="py-3 px-4 text-center">{member ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-1">Is the free tier really free?</h3>
              <p className="text-slate-400 text-sm">Yes — the calculators, free lessons, and newsletter are free forever. No credit card required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">What's included in the $59 workbook?</h3>
              <p className="text-slate-400 text-sm">A comprehensive, printable PDF workbook that walks you through every step of planning your financial exit. One-time purchase, lifetime access, free updates.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Can I cancel my membership anytime?</h3>
              <p className="text-slate-400 text-sm">Absolutely. Cancel anytime from your account settings — no questions asked, no lock-in.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Do I need both the workbook and a membership?</h3>
              <p className="text-slate-400 text-sm">They're separate products designed for different needs. The workbook is a one-time deep-dive; the membership gives you ongoing access to lessons and tools. Many members find value in both.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
