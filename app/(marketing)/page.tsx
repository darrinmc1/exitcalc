import { siteConfig } from "@/config/site.config"

export default function MarketingHomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your FIRE Number,
          <br />
          <span className="text-emerald-400">Calculated for Australia</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Free FIRE calculators built specifically for Australians — superannuation, preservation age, concessional caps and all.
        </p>
        <a
          href="/tools"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Try the Calculators
        </a>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-10">
          Everything you need to know about our FIRE calculator for Australia.
        </p>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              How accurate is the FIRE calculator?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our calculators use the widely accepted 4% safe withdrawal rate (SWR) as a baseline, derived from the Trinity Study. You can adjust the withdrawal rate to suit your own risk tolerance. All projections assume a constant real (inflation-adjusted) return, so results are estimates — not guarantees. We recommend using them alongside a licensed financial adviser.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Does the calculator account for Australian superannuation?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yes. Our Super Projection calculator models your superannuation balance separately from your non-super (outside-super) investments. This matters because super is locked away until you reach your preservation age — you can&apos;t access it early in most circumstances.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              What is preservation age in Australia?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Preservation age is the earliest age at which you can access your superannuation (subject to meeting a condition of release). For anyone born after 30 June 1964, preservation age is <strong className="text-white">60</strong>. If you plan to retire before 60, you&apos;ll need enough outside-super assets to bridge the gap — our Coast FIRE calculator helps you model exactly that.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              What are the current superannuation contribution caps?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              For the 2024–25 financial year, the <strong className="text-white">concessional (pre-tax) contributions cap</strong> is <strong className="text-white">$30,000</strong> per year (including employer SG contributions). The <strong className="text-white">non-concessional (after-tax) cap</strong> is <strong className="text-white">$120,000</strong> per year. Caps are set by the ATO and indexed periodically — always verify the current figures at ato.gov.au.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              What is Coast FIRE and how is it different from regular FIRE?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Regular FIRE means accumulating enough invested assets to fund your entire retirement from day one. Coast FIRE means you&apos;ve saved enough that — if you simply leave it invested and never touch it — compound growth will carry you to your full FIRE number by retirement age. You still need to cover living expenses until then, but you no longer need to save aggressively.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Is this financial advice?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No. {siteConfig.name} provides educational tools and general information only. Nothing on this site constitutes personal financial advice. Please consult a licensed financial adviser (AFS licence holder) before making investment or retirement decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
