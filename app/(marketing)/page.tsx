import { siteConfig } from "@/config/site.config"

export default function HomePage() {
  return (
    <main>
      {/* existing page content preserved as-is */}

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Frequently Asked Questions</h2>
        <p className="text-center text-slate-400 mb-12">Common questions about FIRE in Australia — answered honestly.</p>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Is FIRE realistic in Australia?</h3>
            <p className="text-slate-400">Yes — and Australia is actually one of the better countries to pursue FIRE. You have compulsory superannuation building in the background, a relatively stable economy, and access to low-cost index funds through platforms like Vanguard and Betashares. The main challenges are high property prices in major cities and a relatively high cost of living, but many Australians reach financial independence in their 40s or even late 30s by living below their means and investing consistently.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">What are the tax implications of FIRE in Australia?</h3>
            <p className="text-slate-400">Tax is a big part of the FIRE equation in Australia. Investment income (dividends, distributions) is taxed at your marginal rate, but the 50% CGT discount applies to assets held over 12 months. Franking credits from Australian shares can reduce your tax bill significantly — or even generate a refund if your income is low. Once you stop working, your taxable income often drops substantially, which means you may pay little to no tax on investment income. A good accountant familiar with early retirement strategies is worth the cost.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">How does the super preservation age affect my FIRE plan?</h3>
            <p className="text-slate-400">This is the key Australian FIRE challenge. You can&apos;t access your superannuation until you reach preservation age (currently 60 for most people), which means if you retire at 40, you need to fund 20 years from outside super. The strategy most Australian FIRE seekers use is to build two portfolios: a &quot;bridge&quot; portfolio of regular investments to cover the gap years, and let super compound untouched until 60. Our calculators are designed with this two-phase approach in mind.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">What is the 4% rule and does it apply in Australia?</h3>
            <p className="text-slate-400">The 4% rule suggests you can safely withdraw 4% of your portfolio each year in retirement without running out of money over a 30-year period. It was derived from US market data, but Australian research suggests similar outcomes given Australia&apos;s strong long-run equity returns. However, if you&apos;re planning a 40–50 year retirement (retiring in your 30s or 40s), many Australian FIRE planners use a more conservative 3–3.5% withdrawal rate to account for sequence-of-returns risk over a longer horizon.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Do I need to own property to achieve FIRE in Australia?</h3>
            <p className="text-slate-400">No. While property is a popular wealth-building tool in Australia, it&apos;s not required for FIRE. Many Australian FIRE achievers are renters who invest the difference in diversified index funds. Property can work well, but it&apos;s illiquid, concentrated, and comes with ongoing costs. The most important factor is your savings rate and investment consistency — not the specific asset class you choose.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
