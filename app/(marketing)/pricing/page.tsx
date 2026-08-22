import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Choose the plan that fits your FIRE journey. Start free, upgrade when you're ready for advanced projections, downloadable reports, and personalized coaching.",
}

const freeTier = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Everything you need to start your FIRE journey.",
  cta: "Get Started Free",
  ctaHref: "/sign-up",
  highlight: false,
  features: [
    { text: "FIRE Number Calculator", included: true },
    { text: "Coast FIRE Calculator", included: true },
    { text: "Basic Retirement Projections", included: true },
    { text: "5 Core Financial Lessons", included: true },
    { text: "XP & Badge System", included: true },
    { text: "Community Access", included: true },
    { text: "Advanced Scenario Modeling", included: false },
    { text: "Downloadable PDF Reports", included: false },
    { text: "Personalized Coaching Sessions", included: false },
    { text: "Priority Support", included: false },
  ],
}

const proPlan = {
  name: "Pro",
  price: "$9",
  period: "per month",
  description: "Unlock the full power of your exit strategy.",
  cta: "Start 7-Day Free Trial",
  ctaHref: "/sign-up?plan=pro",
  highlight: true,
  badge: "Most Popular",
  features: [
    { text: "Everything in Free", included: true },
    { text: "Advanced Scenario Modeling", included: true },
    { text: "Super Projection Calculator", included: true },
    { text: "Downloadable PDF Reports", included: true },
    { text: "All Financial Lessons (20+)", included: true },
    { text: "Personalized Coaching Sessions", included: true },
    { text: "Early Access to New Tools", included: true },
    { text: "Priority Support", included: true },
    { text: "Ad-Free Experience", included: true },
    { text: "Export Data to CSV", included: true },
  ],
}

const annualPlan = {
  name: "Pro Annual",
  price: "$79",
  period: "per year",
  description: "Best value — save 27% vs monthly.",
  cta: "Get Pro Annual",
  ctaHref: "/sign-up?plan=pro-annual",
  highlight: false,
  badge: "Best Value",
  features: [
    { text: "Everything in Pro", included: true },
    { text: "2 Months Free vs Monthly", included: true },
    { text: "Annual Financial Review Session", included: true },
    { text: "Custom FIRE Roadmap PDF", included: true },
    { text: "Lifetime Discount Lock-In", included: true },
    { text: "VIP Community Badge", included: true },
    { text: "Early Beta Feature Access", included: true },
    { text: "Dedicated Account Manager", included: true },
    { text: "Bulk Data Export", included: true },
    { text: "Cancel Anytime", included: true },
  ],
}

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel your subscription at any time from your account settings. You'll retain Pro access until the end of your billing period.",
  },
  {
    q: "What's included in a coaching session?",
    a: "Pro members get a 30-minute 1-on-1 video call with a certified financial independence coach each month to review your FIRE plan and answer questions.",
  },
  {
    q: "Are the PDF reports customized?",
    a: "Yes. Reports are generated from your actual calculator inputs and projections, giving you a personalized document you can share with a financial advisor.",
  },
  {
    q: "Is there a free trial?",
    a: "Pro monthly plans include a 7-day free trial. No credit card required to start — upgrade only when you're ready.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and Apple Pay via Stripe. All payments are encrypted and secure.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-12 text-center">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-emerald-500/20">
          Simple, Transparent Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Invest in Your{" "}
          <span className="text-emerald-400">Financial Freedom</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Start free and upgrade when you're ready for advanced projections, downloadable reports, and personalized coaching to accelerate your path to FIRE.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Free */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 flex flex-col h-full">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">{freeTier.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-white">{freeTier.price}</span>
                <span className="text-slate-400 text-sm mb-1">/ {freeTier.period}</span>
              </div>
              <p className="text-slate-400 text-sm">{freeTier.description}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {freeTier.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm">
                  <span className={f.included ? "text-emerald-400" : "text-slate-600"}>
                    {f.included ? "✓" : "✕"}
                  </span>
                  <span className={f.included ? "text-slate-200" : "text-slate-600"}>{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href={freeTier.ctaHref}
              className="block text-center rounded-xl border border-slate-600 text-slate-300 font-semibold py-3 px-6 hover:border-slate-400 hover:text-white transition-all"
            >
              {freeTier.cta}
            </Link>
          </div>

          {/* Pro Monthly */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-slate-900/80 p-8 flex flex-col h-full relative shadow-xl shadow-emerald-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                {proPlan.badge}
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-1">{proPlan.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-white">{proPlan.price}</span>
                <span className="text-slate-400 text-sm mb-1">/ {proPlan.period}</span>
              </div>
              <p className="text-slate-400 text-sm">{proPlan.description}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {proPlan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm">
                  <span className={f.included ? "text-emerald-400" : "text-slate-600"}>
                    {f.included ? "✓" : "✕"}
                  </span>
                  <span className={f.included ? "text-slate-200" : "text-slate-600"}>{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href={proPlan.ctaHref}
              className="block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 transition-all"
            >
              {proPlan.cta}
            </Link>
            <p className="text-center text-xs text-slate-500 mt-3">No credit card required</p>
          </div>

          {/* Pro Annual */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 flex flex-col h-full relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                {annualPlan.badge}
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-1">{annualPlan.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-white">{annualPlan.price}</span>
                <span className="text-slate-400 text-sm mb-1">/ {annualPlan.period}</span>
              </div>
              <p className="text-slate-400 text-sm">{annualPlan.description}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {annualPlan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-sm">
                  <span className={f.included ? "text-amber-400" : "text-slate-600"}>
                    {f.included ? "✓" : "✕"}
                  </span>
                  <span className={f.included ? "text-slate-200" : "text-slate-600"}>{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href={annualPlan.ctaHref}
              className="block text-center rounded-xl border border-amber-500 text-amber-400 font-semibold py-3 px-6 hover:bg-amber-500 hover:text-slate-950 transition-all"
            >
              {annualPlan.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Full Feature Comparison</h2>
        <div className="rounded-2xl border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/80">
                <th className="text-left px-6 py-4 text-slate-300 font-semibold">Feature</th>
                <th className="text-center px-4 py-4 text-slate-300 font-semibold">Free</th>
                <th className="text-center px-4 py-4 text-emerald-400 font-semibold">Pro</th>
                <th className="text-center px-4 py-4 text-amber-400 font-semibold">Pro Annual</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["FIRE Number Calculator", true, true, true],
                ["Coast FIRE Calculator", true, true, true],
                ["Super Projection Calculator", false, true, true],
                ["Advanced Scenario Modeling", false, true, true],
                ["Core Lessons (5)", true, true, true],
                ["All Lessons (20+)", false, true, true],
                ["XP & Badge System", true, true, true],
                ["Downloadable PDF Reports", false, true, true],
                ["Export Data to CSV", false, true, true],
                ["Monthly Coaching Session", false, true, true],
                ["Annual Financial Review", false, false, true],
                ["Custom FIRE Roadmap PDF", false, false, true],
                ["VIP Community Badge", false, false, true],
                ["Priority Support", false, true, true],
                ["Ad-Free Experience", false, true, true],
              ].map(([feature, free, pro, annual], i) => (
                <tr key={String(feature)} className={i % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"}>
                  <td className="px-6 py-3 text-slate-300">{String(feature)}</td>
                  <td className="text-center px-4 py-3">
                    <span className={free ? "text-emerald-400" : "text-slate-600"}>{free ? "✓" : "—"}</span>
                  </td>
                  <td className="text-center px-4 py-3">
                    <span className={pro ? "text-emerald-400" : "text-slate-600"}>{pro ? "✓" : "—"}</span>
                  </td>
                  <td className="text-center px-4 py-3">
                    <span className={annual ? "text-amber-400" : "text-slate-600"}>{annual ? "✓" : "—"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "The advanced projections alone are worth 10x the price. I finally have a clear picture of my FIRE date.",
              name: "Sarah K.",
              role: "Software Engineer, FIRE at 42",
            },
            {
              quote: "The monthly coaching session helped me optimize my withdrawal strategy. Genuinely life-changing advice.",
              name: "Marcus T.",
              role: "Teacher, Coast FIRE achieved",
            },
            {
              quote: "I downloaded my PDF report and shared it with my financial advisor. She was impressed by the detail.",
              name: "Priya M.",
              role: "Nurse, 8 years to FIRE",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <p className="text-slate-300 text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-slate-500 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10">
          <h2 className="text-3xl font-extrabold mb-3">Ready to accelerate your FIRE date?</h2>
          <p className="text-slate-400 mb-6">Join thousands of members using ExitCalc to plan their financial independence. Start free — upgrade anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up?plan=pro"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              href="/sign-up"
              className="rounded-xl border border-slate-600 text-slate-300 font-semibold py-3 px-8 hover:border-slate-400 hover:text-white transition-all"
            >
              Start for Free
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-4">No credit card required &bull; Cancel anytime &bull; 7-day free trial on Pro</p>
        </div>
      </section>
    </main>
  )
}
