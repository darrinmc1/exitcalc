import Link from "next/link"
import { tools } from "@/data/tools"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Free Financial Calculators | ${siteConfig.name}`,
  description:
    "Explore our suite of free financial independence calculators. Calculate your FIRE number, superannuation balance, Coast FIRE target, and more to plan your path to financial freedom.",
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Free Financial Independence Calculators
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Powerful, free tools to help you calculate your FIRE number, plan your
          superannuation, and map your journey to financial independence.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.id}`}
            className="group rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="mb-4 text-4xl">{tool.emoji}</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {tool.name}
            </h2>
            <p className="text-muted-foreground text-sm flex-1">{tool.description}</p>
            <span className="mt-4 text-sm font-medium text-primary">Use calculator &rarr;</span>
          </Link>
        ))}
      </div>

      {/* Why use our calculators */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Use Our Calculators?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Built for Australians",
              description:
                "Our calculators account for Australian superannuation rules, tax rates, and the unique considerations of the Australian financial landscape.",
              icon: "🇦🇺",
            },
            {
              title: "No Sign-up Required",
              description:
                "Get instant results without creating an account. Your data stays in your browser — we never store your personal financial information.",
              icon: "🔒",
            },
            {
              title: "Evidence-Based Assumptions",
              description:
                "Default values are grounded in historical market data and widely accepted financial independence research, including the 4% safe withdrawal rate.",
              icon: "📊",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is a FIRE number?",
              a: "Your FIRE number is the total investment portfolio value you need to retire early and live off investment returns indefinitely. It is typically calculated as your annual expenses multiplied by 25, based on the 4% safe withdrawal rate.",
            },
            {
              q: "What is Coast FIRE?",
              a: "Coast FIRE is the point at which you have saved enough that, even if you stop contributing, your investments will grow to your full FIRE number by traditional retirement age. Once you reach Coast FIRE, you only need to cover current living expenses.",
            },
            {
              q: "How does superannuation fit into FIRE planning?",
              a: "Superannuation is a tax-advantaged retirement savings vehicle in Australia. For FIRE planning, it is important to model both your super balance (accessible at preservation age) and your outside-super investments to ensure you can bridge the gap between early retirement and preservation age.",
            },
            {
              q: "Are these calculators accurate?",
              a: "Our calculators use standard financial formulas and evidence-based default assumptions. They are designed for planning and education purposes. For personalised financial advice, please consult a licensed financial adviser.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
