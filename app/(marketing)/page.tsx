import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6">
          Know Your Number.
          <br />
          <span className="text-emerald-400">Plan Your Exit.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 text-base transition-colors"
          >
            Start Learning Free
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white font-semibold px-8 py-3 text-base transition-colors"
          >
            Try the Calculators
          </Link>
        </div>

        {/* Waitlist / Email Capture */}
        <div className="w-full max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            Early Access
          </p>
          <h2 className="text-2xl font-bold text-white mb-2">
            Get notified when new lessons drop
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Join the waitlist and be the first to access new modules, tools, and FIRE milestones — no spam, ever.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  )
}
