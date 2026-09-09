import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Compare free, workbook, and membership plans for ExitCalc. Find the right option to accelerate your path to financial independence.",
}

const features = [
  {
    category: "Calculators & Tools",
    rows: [
      { label: "FIRE Number Calculator", free: true, workbook: true, member: true },
      { label: "Coast FIRE Calculator", free: true, workbook: true, member: true },
      { label: "Super Projection Calculator", free: true, workbook: true, member: true },
      { label: "All Future Tools", free: false, workbook: false, member: true },
    ],
  },
  {
    category: "Lessons & Education",
    rows: [
      { label: "Free Introductory Lessons", free: true, workbook: true, member: true },
      { label: "Full Lesson Library", free: false, workbook: false, member: true },
      { label: "Step-by-Step Modules", free: false, workbook: false, member: true },
      { label: "XP & Badge Progress Tracking", free: false, workbook: false, member: true },
    ],
  },
  {
    category: "The $59 Workbook",
    rows: [
      { label: "Printable FIRE Planning Workbook (PDF)", free: false, workbook: true, member: true },
      { label: "Guided Worksheets & Exercises", free: false, workbook: true, member: true },
      { label: "One-Time Purchase (No Subscription)", free: false, workbook: true, member: false },
    ],
  },
  {
    category: "Membership Perks",
    rows: [
      { label: "Early Access to New Features", free: false, workbook: false, member: true },
      { label: "Members-Only Updates & Insights", free: false, workbook: false, member: true },
      { label: "Support Independent Development", free: false, workbook: false, member: true },
      { label: "Workbook Included", free: false, workbook: false, member: true },
    ],
  },
]

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
      ✓
    </span>
  )
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700/40 text-slate-600 text-sm">
      –
    </span>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Simple, Honest Pricing
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start free. Grab the workbook when you&apos;re ready. Join the membership to unlock everything and support the project.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Free */}
          <div className="glass-card rounded-2xl p-6 flex flex-col">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Free</p>
              <p className="text-4xl font-extrabold text-white">$0</p>
              <p className="text-slate-400 text-sm mt-1">Forever free, no card needed</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 flex-1">
              <li>✦ All core calculators</li>
              <li>✦ Free introductory lessons</li>
              <li>✦ Newsletter & updates</li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all py-2.5 text-sm font-semibold"
            >
              Get Started Free
            </Link>
          </div>

          {/* Workbook */}
          <div className="glass-card rounded-2xl p-6 flex flex-col border border-amber-500/30">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">Workbook</p>
              <p className="text-4xl font-extrabold text-white">$59</p>
              <p className="text-slate-400 text-sm mt-1">One-time purchase, yours forever</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 flex-1">
              <li>✦ Everything in Free</li>
              <li>✦ Printable FIRE planning workbook (PDF)</li>
              <li>✦ Guided worksheets & exercises</li>
              <li>✦ No subscription required</li>
            </ul>
            <Link
              href="/products"
              className="block text-center rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold transition-all py-2.5 text-sm"
            >
              Buy the Workbook
            </Link>
          </div>

          {/* Membership */}
          <div className="glass-card rounded-2xl p-6 flex flex-col border border-emerald-500/40 relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-emerald-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">
              Best Value
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">Membership</p>
              <p className="text-4xl font-extrabold text-white">Coming Soon</p>
              <p className="text-slate-400 text-sm mt-1">Full access, billed annually</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 flex-1">
              <li>✦ Everything in Free + Workbook</li>
              <li>✦ Full lesson library & modules</li>
              <li>✦ XP, badges & progress tracking</li>
              <li>✦ Early access to new tools</li>
              <li>✦ Members-only insights</li>
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-all py-2.5 text-sm"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-700/50">
            <h2 className="text-xl font-bold text-white">Full Feature Comparison</h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-0 px-6 py-3 border-b border-slate-700/50 bg-slate-800/30">
            <div className="text-sm font-semibold text-slate-400">Feature</div>
            <div className="text-center text-sm font-semibold text-slate-400">Free</div>
            <div className="text-center text-sm font-semibold text-amber-400">Workbook $59</div>
            <div className="text-center text-sm font-semibold text-emerald-400">Membership</div>
          </div>

          {features.map((section) => (
            <div key={section.category}>
              <div className="px-6 py-2.5 bg-slate-800/50">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{section.category}</p>
              </div>
              {section.rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 gap-0 px-6 py-3 border-b border-slate-700/20 ${
                    i % 2 === 0 ? "" : "bg-slate-800/10"
                  }`}
                >
                  <div className="text-sm text-slate-300 pr-4">{row.label}</div>
                  <div className="flex items-center justify-center">{row.free ? <Check /> : <Cross />}</div>
                  <div className="flex items-center justify-center">{row.workbook ? <Check /> : <Cross />}</div>
                  <div className="flex items-center justify-center">{row.member ? <Check /> : <Cross />}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* FAQ / Reassurance */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 text-center">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-2xl mb-3">🔒</p>
            <h3 className="font-bold text-white mb-1">Secure Checkout</h3>
            <p className="text-sm text-slate-400">Payments processed securely via Stripe. We never store your card details.</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <p className="text-2xl mb-3">📄</p>
            <h3 className="font-bold text-white mb-1">One-Time Workbook</h3>
            <p className="text-sm text-slate-400">The $59 workbook is a single purchase — no hidden renewals, no subscriptions.</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <p className="text-2xl mb-3">💬</p>
            <h3 className="font-bold text-white mb-1">Questions?</h3>
            <p className="text-sm text-slate-400">
              Reach out via the{" "}
              <Link href="/about" className="text-emerald-400 hover:underline">about page</Link>
              {" "}— we&apos;re happy to help.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
