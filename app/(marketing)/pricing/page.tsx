import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing. Start free, upgrade when you're ready. Compare our free tools, $59 workbook, and $5/month membership.",
}

const freeFeatures = [
  { label: "FIRE number calculator", included: true },
  { label: "Coast FIRE calculator", included: true },
  { label: "Super projection calculator", included: true },
  { label: "All free lessons", included: true },
  { label: "Blog & updates", included: true },
  { label: "Basic tools & resources", included: true },
  { label: "Interactive workbook exercises", included: false },
  { label: "Step-by-step exit planning templates", included: false },
  { label: "Printable worksheets & checklists", included: false },
  { label: "Members-only lessons", included: false },
  { label: "Priority support", included: false },
  { label: "Community access", included: false },
]

const workbookFeatures = [
  { label: "FIRE number calculator", included: true },
  { label: "Coast FIRE calculator", included: true },
  { label: "Super projection calculator", included: true },
  { label: "All free lessons", included: true },
  { label: "Blog & updates", included: true },
  { label: "Basic tools & resources", included: true },
  { label: "Interactive workbook exercises", included: true },
  { label: "Step-by-step exit planning templates", included: true },
  { label: "Printable worksheets & checklists", included: true },
  { label: "Members-only lessons", included: false },
  { label: "Priority support", included: false },
  { label: "Community access", included: false },
]

const memberFeatures = [
  { label: "FIRE number calculator", included: true },
  { label: "Coast FIRE calculator", included: true },
  { label: "Super projection calculator", included: true },
  { label: "All free lessons", included: true },
  { label: "Blog & updates", included: true },
  { label: "Basic tools & resources", included: true },
  { label: "Interactive workbook exercises", included: true },
  { label: "Step-by-step exit planning templates", included: true },
  { label: "Printable worksheets & checklists", included: true },
  { label: "Members-only lessons", included: true },
  { label: "Priority support", included: true },
  { label: "Community access", included: true },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
            Simple, transparent pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Invest in your exit.
            <br />
            <span className="text-emerald-400">Not in subscriptions you forget.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start completely free. Upgrade to the workbook or membership when you&apos;re ready to get serious about your financial independence plan.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">

          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-extrabold text-white">$0</span>
                <span className="text-slate-500 mb-2">/forever</span>
              </div>
              <p className="text-slate-400 text-sm">All the calculators and core lessons to get started on your FIRE journey.</p>
            </div>
            <Link
              href="/tools"
              className="block w-full text-center py-3 px-6 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all mb-8"
            >
              Start for free
            </Link>
            <ul className="space-y-3 flex-1">
              {freeFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  {f.included ? (
                    <span className="text-emerald-400 text-base">✓</span>
                  ) : (
                    <span className="text-slate-700 text-base">✗</span>
                  )}
                  <span className={f.included ? "text-slate-300" : "text-slate-600"}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workbook */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Workbook</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-extrabold text-white">$59</span>
                <span className="text-slate-500 mb-2">/one-time</span>
              </div>
              <p className="text-slate-400 text-sm">A complete, printable workbook to map your exit plan step by step.</p>
            </div>
            <Link
              href="/products"
              className="block w-full text-center py-3 px-6 rounded-xl border border-slate-600 text-slate-200 font-semibold hover:border-slate-400 hover:text-white transition-all mb-8"
            >
              Get the workbook
            </Link>
            <ul className="space-y-3 flex-1">
              {workbookFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  {f.included ? (
                    <span className="text-emerald-400 text-base">✓</span>
                  ) : (
                    <span className="text-slate-700 text-base">✗</span>
                  )}
                  <span className={f.included ? "text-slate-300" : "text-slate-600"}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership — highlighted */}
          <div className="rounded-2xl border border-emerald-500/50 bg-gradient-to-b from-emerald-950/60 to-slate-900 p-8 flex flex-col relative shadow-xl shadow-emerald-900/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Most popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2">Membership</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-extrabold text-white">$5</span>
                <span className="text-slate-400 mb-2">/month</span>
              </div>
              <p className="text-slate-400 text-sm">Everything in the workbook, plus members-only lessons, community, and priority support.</p>
            </div>
            <Link
              href="/sign-up"
              className="block w-full text-center py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all mb-8"
            >
              Start membership
            </Link>
            <ul className="space-y-3 flex-1">
              {memberFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  {f.included ? (
                    <span className="text-emerald-400 text-base">✓</span>
                  ) : (
                    <span className="text-slate-700 text-base">✗</span>
                  )}
                  <span className={f.included ? "text-slate-200" : "text-slate-600"}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full feature comparison</h2>
          <div className="rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900">
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-semibold">Workbook</th>
                  <th className="text-center py-4 px-4 text-emerald-400 font-semibold">Membership</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "FIRE calculators", free: true, workbook: true, member: true },
                  { label: "Coast FIRE & Super projections", free: true, workbook: true, member: true },
                  { label: "Free lessons", free: true, workbook: true, member: true },
                  { label: "Blog & updates", free: true, workbook: true, member: true },
                  { label: "Workbook exercises", free: false, workbook: true, member: true },
                  { label: "Exit planning templates", free: false, workbook: true, member: true },
                  { label: "Printable checklists", free: false, workbook: true, member: true },
                  { label: "Members-only lessons", free: false, workbook: false, member: true },
                  { label: "Community access", free: false, workbook: false, member: true },
                  { label: "Priority support", free: false, workbook: false, member: true },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-slate-800/60 ${i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/40"}`}>
                    <td className="py-4 px-6 text-slate-300">{row.label}</td>
                    <td className="py-4 px-4 text-center">
                      {row.free ? <span className="text-emerald-400">✓</span> : <span className="text-slate-700">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.workbook ? <span className="text-emerald-400">✓</span> : <span className="text-slate-700">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.member ? <span className="text-emerald-400 font-bold">✓</span> : <span className="text-slate-700">—</span>}
                    </td>
                  </tr>
                ))}
                <tr className="bg-slate-900">
                  <td className="py-4 px-6 font-bold text-white">Price</td>
                  <td className="py-4 px-4 text-center text-slate-300 font-semibold">$0</td>
                  <td className="py-4 px-4 text-center text-slate-300 font-semibold">$59 once</td>
                  <td className="py-4 px-4 text-center text-emerald-400 font-bold">$5/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel my membership anytime?",
                a: "Yes. Cancel anytime from your account settings. You keep access until the end of your billing period.",
              },
              {
                q: "Is the workbook a one-time purchase?",
                a: "Yes — pay once, own it forever. You get all future updates to the workbook at no extra cost.",
              },
              {
                q: "Do I need a membership to use the calculators?",
                a: "No. All calculators are completely free, forever. No account required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit and debit cards via Stripe. Payments are secure and encrypted.",
              },
              {
                q: "Is there a free trial for the membership?",
                a: "The free tier gives you a solid taste of what we offer. If you want to try membership, the $5/month price makes it easy to test with minimal commitment.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Ready to plan your exit?</h2>
          <p className="text-slate-400 mb-8">Start free today. Upgrade whenever it makes sense for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="py-3 px-8 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
            >
              Try free tools
            </Link>
            <Link
              href="/sign-up"
              className="py-3 px-8 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all"
            >
              Start membership — $5/mo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
