import Link from "next/link"
import { siteConfig } from "@/config/site.config"

const faqs = [
  {
    q: "What is the preservation age in Australia?",
    a: "Your preservation age is the earliest age you can access your superannuation. For anyone born after 30 June 1964, this is age 60. Once you reach 60 and retire (or turn 65 regardless of work status), you can access your super tax-free."
  },
  {
    q: "Can I retire early (FIRE) before I can access my super?",
    a: "Yes — this is the core FIRE challenge in Australia. You need enough investable assets outside of super to fund your lifestyle from your target retirement age until you can access super at 60. Our Coast FIRE and FIRE Number calculators account for this two-phase approach."
  },
  {
    q: "What is the 4% rule and does it apply in Australia?",
    a: "The 4% rule suggests you can safely withdraw 4% of your portfolio per year in retirement without running out of money over 30 years. It originated from US data, but broadly applies in Australia. For longer retirements (40+ years, common in FIRE), many Australians use a more conservative 3–3.5% withdrawal rate."
  },
  {
    q: "How is my FIRE number calculated?",
    a: "Your FIRE number is your estimated annual expenses divided by your chosen withdrawal rate. For example, if you spend $60,000/year and use a 4% rate, your FIRE number is $1,500,000. Our calculator lets you adjust expenses, withdrawal rate, and expected returns to find your personal target."
  },
  {
    q: "What is Coast FIRE?",
    a: "Coast FIRE is the point where your existing investments, left untouched, will grow to your full FIRE number by your target retirement age — without any additional contributions. Once you hit Coast FIRE, you only need to earn enough to cover current living expenses, giving you much more career flexibility."
  },
  {
    q: "Does superannuation count toward my FIRE number?",
    a: "It depends on your retirement age. If you plan to retire at 60 or later, super absolutely counts. If you plan to retire earlier, super counts only for the phase after you can access it. Our calculators let you split your portfolio into super and non-super buckets so you get an accurate picture."
  },
  {
    q: "What return rate should I use in the calculators?",
    a: "A common assumption for a diversified Australian share portfolio is 7–10% nominal (before inflation) or 4–7% real (after inflation). We recommend using real (inflation-adjusted) returns so your results are expressed in today's dollars. The default in our calculators is 7% nominal, which you can adjust."
  },
  {
    q: "Are these calculators financial advice?",
    a: "No. ExitCalc provides educational tools and general information only. Nothing on this site constitutes personal financial advice. We strongly recommend speaking with a licensed financial adviser before making major financial decisions."
  }
]

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Your Australian <span className="text-emerald-400">FIRE</span> Calculator
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Calculate your FIRE number, Coast FIRE milestone, and superannuation projection — built specifically for Australians navigating early retirement.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all"
          >
            Explore Calculators
          </Link>
          <Link
            href="/lessons"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
          >
            Learn FIRE Basics
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-12">
          Common questions about Australian superannuation, preservation age, and FIRE calculations.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-400 mb-4">Ready to run the numbers for your situation?</p>
          <Link
            href="/tools"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all"
          >
            Open the Calculators
          </Link>
        </div>
      </section>
    </main>
  )
}
