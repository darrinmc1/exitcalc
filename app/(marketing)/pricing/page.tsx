import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for your financial independence journey. Start free, upgrade when you're ready.",
}

const features = [
  { name: "FIRE Number Calculator", free: true, pro: true },
  { name: "Coast FIRE Calculator", free: true, pro: true },
  { name: "Super Projection Calculator", free: true, pro: true },
  { name: "All Free Lessons", free: true, pro: true },
  { name: "Basic Progress Tracking", free: true, pro: true },
  { name: "Community Access", free: true, pro: true },
  { name: "All Premium Lessons", free: false, pro: true },
  { name: "Advanced Portfolio Tools", free: false, pro: true },
  { name: "Personalised FIRE Roadmap", free: false, pro: true },
  { name: "XP Badges & Achievements", free: false, pro: true },
  { name: "Priority Support", free: false, pro: true },
  { name: "Early Access to New Features", free: false, pro: true },
]

const faqs = [
  {
    q: "When will Pro launch?",
    a: "We're putting the finishing touches on Pro features now. Join the waitlist to be first in line and lock in our early-bird rate.",
  },
  {
    q: "Will my free access ever expire?",
    a: "No. Everything that's free today stays free forever. We'll only charge for genuinely premium features.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We'll accept all major credit and debit cards via Stripe. No hidden fees, cancel any time.",
  },
  {
    q: "Is there a student or low-income discount?",
    a: "Yes — reach out to us directly and we'll sort something out. Financial education should be accessible to everyone.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          Start free.{" "}
          <span className="text-emerald-400">Upgrade when you're ready.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          All the core calculators and lessons are free — forever. Pro unlocks the full curriculum,
          advanced tools, and a personalised roadmap to help you reach financial independence faster.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Free</p>
              <p className="text-5xl font-extrabold text-white">$0</p>
              <p className="text-slate-500 mt-1 text-sm">No credit card required</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.filter((f) => f.free).map((f) => (
                <li key={f.name} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-emerald-400 text-base">✓</span>
                  {f.name}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors py-3 font-semibold"
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 to-slate-900/60 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Coming soon
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2">Pro</p>
              <p className="text-5xl font-extrabold text-white">
                $9
                <span className="text-2xl font-semibold text-slate-400">/mo</span>
              </p>
              <p className="text-slate-500 mt-1 text-sm">Early-bird rate — lock it in now</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f) => (
                <li key={f.name} className={`flex items-center gap-3 text-sm ${f.pro ? "text-slate-300" : "text-slate-600 line-through"}`}>
                  <span className={f.pro ? "text-emerald-400 text-base" : "text-slate-700 text-base"}>✓</span>
                  {f.name}
                </li>
              ))}
            </ul>
            <Link
              href="/#waitlist"
              className="block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition strip */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-3xl mb-3">🧮</p>
            <h3 className="font-bold text-white mb-1">Calculators built for Australians</h3>
            <p className="text-slate-400 text-sm">Super, tax, and FIRE numbers that actually reflect your situation — not a US template.</p>
          </div>
          <div>
            <p className="text-3xl mb-3">📚</p>
            <h3 className="font-bold text-white mb-1">Bite-sized financial lessons</h3>
            <p className="text-slate-400 text-sm">Learn at your own pace with structured modules that go from basics to advanced FIRE strategy.</p>
          </div>
          <div>
            <p className="text-3xl mb-3">🗺️</p>
            <h3 className="font-bold text-white mb-1">Your personalised roadmap</h3>
            <p className="text-slate-400 text-sm">Pro members get a step-by-step plan tailored to their income, expenses, and FIRE target date.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-10">
          <h2 className="text-2xl font-bold mb-3">Ready to start your FIRE journey?</h2>
          <p className="text-slate-400 mb-7 text-sm">
            Create a free account today and get instant access to all calculators and free lessons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 transition-colors"
            >
              Get started — it's free
            </Link>
            <Link
              href="/lessons"
              className="rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white font-semibold px-8 py-3 transition-colors"
            >
              Browse lessons
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
