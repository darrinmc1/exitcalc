import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Choose the plan that fits your FIRE journey. Free tools, a $59 workbook, or full membership for $5/month.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start calculating your path to financial independence with our core tools.",
    cta: "Get Started Free",
    href: "/sign-up",
    highlight: false,
    features: [
      { text: "FIRE Number Calculator", included: true },
      { text: "Coast FIRE Calculator", included: true },
      { text: "Super Projection Calculator", included: true },
      { text: "All free lessons & guides", included: true },
      { text: "Newsletter access", included: true },
      { text: "The Exit Workbook ($59 value)", included: false },
      { text: "Progress tracking & XP", included: false },
      { text: "Member-only lessons", included: false },
      { text: "Early access to new tools", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Workbook",
    price: "$59",
    period: "one-time",
    description: "The complete step-by-step workbook to map your exit from the 9-to-5 grind.",
    cta: "Buy the Workbook",
    href: "/products",
    highlight: false,
    features: [
      { text: "FIRE Number Calculator", included: true },
      { text: "Coast FIRE Calculator", included: true },
      { text: "Super Projection Calculator", included: true },
      { text: "All free lessons & guides", included: true },
      { text: "Newsletter access", included: true },
      { text: "The Exit Workbook (PDF + fillable)", included: true },
      { text: "Progress tracking & XP", included: false },
      { text: "Member-only lessons", included: false },
      { text: "Early access to new tools", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Member",
    price: "$5",
    period: "per month",
    description: "Full access to everything — tools, lessons, workbook, and the growing member community.",
    cta: "Become a Member",
    href: "/sign-up",
    highlight: true,
    features: [
      { text: "FIRE Number Calculator", included: true },
      { text: "Coast FIRE Calculator", included: true },
      { text: "Super Projection Calculator", included: true },
      { text: "All free lessons & guides", included: true },
      { text: "Newsletter access", included: true },
      { text: "The Exit Workbook (PDF + fillable)", included: true },
      { text: "Progress tracking & XP", included: true },
      { text: "Member-only lessons", included: true },
      { text: "Early access to new tools", included: true },
      { text: "Priority support", included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
            Simple, transparent pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Invest in your exit.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you&apos;re just starting out or ready to go all-in, there&apos;s a plan for every stage of your FIRE journey.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.highlight
                  ? "border-emerald-500 bg-emerald-950/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1">/ {tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        feature.included
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-600"
                      }`}
                    >
                      {feature.included ? "✓" : "✕"}
                    </span>
                    <span
                      className={`text-sm ${
                        feature.included ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Reassurance */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Common questions</h2>
          <div className="space-y-6">
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="font-semibold text-white mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-slate-400 text-sm">Yes. Cancel anytime from your account settings — no questions asked. You keep access until the end of your billing period.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="font-semibold text-white mb-2">What&apos;s included in the workbook?</h3>
              <p className="text-slate-400 text-sm">The Exit Workbook is a comprehensive PDF and fillable digital workbook that walks you through calculating your FIRE number, mapping your timeline, and building your exit strategy step by step.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="font-semibold text-white mb-2">Is the workbook included in the membership?</h3>
              <p className="text-slate-400 text-sm">Yes! Members get the full workbook included as part of their $5/month subscription — along with all member-only lessons and early tool access.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="font-semibold text-white mb-2">Do the free calculators require an account?</h3>
              <p className="text-slate-400 text-sm">No. All free calculators and public lessons are accessible without signing up. Create a free account to save your progress and unlock XP tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center border border-emerald-500/20 rounded-2xl bg-emerald-950/20 p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your exit?</h2>
          <p className="text-slate-400 mb-8">Start free today. Upgrade whenever it makes sense for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Start for Free
            </Link>
            <Link
              href="/tools"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-xl border border-slate-700 transition-all"
            >
              Explore the Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
