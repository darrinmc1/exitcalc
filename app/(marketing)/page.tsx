import Link from "next/link"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { ArrowRight, CheckCircle, Calculator, Shield, Zap } from "lucide-react"

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
            <Zap className="w-3.5 h-3.5" />
            <span>AI-powered tax optimization</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Stop overpaying
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              on your taxes
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Our AI calculator finds every deduction you qualify for in minutes.
            The average user saves $4,200 per year.
          </p>

          {/* Primary CTA — single, prominent action */}
          <div className="flex flex-col items-center gap-4">
            <SignedOut>
              <Link
                href="/sign-up"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-800/60 hover:-translate-y-0.5"
              >
                Calculate my savings — it&apos;s free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-sm text-white/40">
                No credit card required &middot; Takes 3 minutes
              </p>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-800/60 hover:-translate-y-0.5"
              >
                Open my dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </SignedIn>
          </div>

          {/* Trust signals below primary CTA */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              IRS-compliant calculations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              256-bit encryption
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Trusted by 50,000+ filers
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need to file smarter
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            Built for freelancers, small business owners, and anyone tired of leaving money on the table.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                title: "Smart deduction finder",
                description:
                  "Answer a few questions and our AI surfaces every deduction relevant to your situation — ones most CPAs miss.",
              },
              {
                icon: Zap,
                title: "Real-time estimates",
                description:
                  "See your refund or liability update instantly as you enter information. No waiting, no surprises.",
              },
              {
                icon: Shield,
                title: "Audit protection",
                description:
                  "Every recommendation is backed by IRS documentation so you can file with confidence.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
          <p className="text-white/50 mb-16">
            Start free. Upgrade when you&apos;re ready to file.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/3 text-left">
              <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Free</p>
              <p className="text-4xl font-bold mb-1">$0</p>
              <p className="text-white/40 text-sm mb-8">Forever free</p>
              <ul className="space-y-3 text-sm text-white/70 mb-8">
                {["Deduction calculator", "Tax estimate", "Up to 3 scenarios"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="block text-center py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Get started free
              </Link>
            </div>
            <div className="p-8 rounded-2xl border border-violet-500/40 bg-violet-500/8 text-left relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                Most popular
              </div>
              <p className="text-sm text-violet-300 uppercase tracking-widest mb-2">Pro</p>
              <p className="text-4xl font-bold mb-1">$49</p>
              <p className="text-white/40 text-sm mb-8">per tax year</p>
              <ul className="space-y-3 text-sm text-white/70 mb-8">
                {[
                  "Everything in Free",
                  "Unlimited scenarios",
                  "Export to TurboTax / H&R Block",
                  "Priority support",
                  "Audit protection report",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="block text-center py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-semibold"
              >
                Start saving now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} TaxEdge. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
