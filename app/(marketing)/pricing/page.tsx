import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { isPurchasesUiOpen } from "@/lib/purchases"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description:
    "Free FIRE calculators forever. Pro checkout is not live — join the waitlist to be notified.",
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

function ProCta() {
  if (isPurchasesUiOpen()) {
    return (
      <Link
        href="/sign-up"
        className="block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 transition-colors"
      >
        Get Pro Access
      </Link>
    )
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400">
        Checkout is not live. There is no payment method yet. Leave your email
        and we&apos;ll notify you when Pro is available.
      </p>
      <NewsletterForm
        source="waitlist-pro"
        buttonLabel="Notify me"
        align="start"
      />
    </div>
  )
}

export default function PricingPage() {
  const purchasesOpen = isPurchasesUiOpen()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
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
            Every FIRE calculator on {siteConfig.name} is free, forever. Pro is
            planned for structured lessons and deeper tools — checkout is not
            live yet.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

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

          <div className="rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-950/60 to-slate-900/80 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Coming soon
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-2">Pro</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-extrabold text-white">$9</span>
                <span className="text-slate-400 mb-2">/ month</span>
              </div>
              <p className="text-slate-400 text-sm">
                {purchasesOpen
                  ? "Cancel anytime. Billed monthly. Annual plan coming soon."
                  : "Planned monthly price when checkout is live. No payment method yet."}
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {proTierFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 text-emerald-400 text-base">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <ProCta />
          </div>
        </div>
      </section>

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
              <p className="text-slate-400 text-sm">Pro is planned to unlock the full guided lesson library, structured FIRE roadmap modules, XP tracking, badges, downloadable resources, and early access to new features. Checkout is not live yet — join the waitlist to be notified.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">Can I buy Pro today?</h3>
              <p className="text-slate-400 text-sm">Not yet. There is no payment method. Use Notify me on this page and we&apos;ll email you when Pro checkout opens.</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-2">Is there a free trial for Pro?</h3>
              <p className="text-slate-400 text-sm">We&apos;re working on a trial offer. In the meantime, open any calculator — they stay free. Join the waitlist when you want to hear about Pro.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-12">
          <h2 className="text-3xl font-bold mb-4">Start free. Join the waitlist for Pro.</h2>
          <p className="text-slate-400 mb-8">Open any calculator right now — no sign-up needed. Pro checkout is not live.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="rounded-xl border border-emerald-500/40 text-emerald-400 font-semibold py-3 px-8 hover:bg-emerald-500/10 transition-colors"
            >
              Try Free Calculators
            </Link>
            {purchasesOpen ? (
              <Link
                href="/sign-up"
                className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 transition-colors"
              >
                Get Pro Access
              </Link>
            ) : (
              <Link
                href="#pricing-waitlist"
                className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 transition-colors"
              >
                Notify me about Pro
              </Link>
            )}
          </div>
          {!purchasesOpen && (
            <div id="pricing-waitlist" className="mt-8 max-w-md mx-auto text-left">
              <NewsletterForm
                source="waitlist-pro-cta"
                buttonLabel="Notify me"
                align="center"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
