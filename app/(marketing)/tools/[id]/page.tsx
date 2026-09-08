import { notFound } from "next/navigation"
import Link from "next/link"
import { tools } from "@/data/tools"
import { siteConfig } from "@/config/site.config"
import type { Metadata } from "next"

interface Props {
  params: { id: string }
}

// Per-tool rich content
const toolContent: Record<
  string,
  {
    tagline: string
    benefits: { title: string; description: string }[]
    useCases: { title: string; description: string }[]
    faqs: { q: string; a: string }[]
    howItWorks: string[]
  }
> = {
  fire: {
    tagline: "Find out exactly how much you need to retire early and live off your investments forever.",
    benefits: [
      {
        title: "Clarity on your retirement target",
        description:
          "Stop guessing. Get a concrete number that represents true financial independence based on your actual lifestyle costs.",
      },
      {
        title: "Understand the impact of spending",
        description:
          "See how reducing your annual expenses by even a small amount dramatically lowers your FIRE number and accelerates your timeline.",
      },
      {
        title: "Model different withdrawal rates",
        description:
          "The 4% rule is a starting point. Adjust the safe withdrawal rate to see how a more conservative 3% or aggressive 5% changes your target.",
      },
    ],
    useCases: [
      {
        title: "Early career planning",
        description:
          "Discover your FIRE number early so you can set a savings rate that puts you on track from day one.",
      },
      {
        title: "Lifestyle design",
        description:
          "Model different retirement lifestyles — lean FIRE, regular FIRE, or fat FIRE — to understand the trade-offs between spending and timeline.",
      },
      {
        title: "Progress tracking",
        description:
          "Revisit the calculator annually to see how your growing portfolio compares to your FIRE number and adjust your plan.",
      },
    ],
    howItWorks: [
      "Enter your expected annual expenses in retirement.",
      "Adjust the safe withdrawal rate (default 4% based on the Trinity Study).",
      "The calculator multiplies your expenses by the inverse of the withdrawal rate to give your FIRE number.",
      "See how your current savings compare and how long until you reach your target.",
    ],
    faqs: [
      {
        q: "What is the 4% rule?",
        a: "The 4% rule comes from the Trinity Study, which found that a portfolio invested in a mix of stocks and bonds could sustain a 4% annual withdrawal for at least 30 years in nearly all historical market scenarios.",
      },
      {
        q: "Should I use a different withdrawal rate?",
        a: "Many early retirees use 3% to 3.5% for longer retirement horizons (40+ years). A higher rate like 5% may be appropriate if you have other income sources such as part-time work or rental income.",
      },
      {
        q: "Does this include superannuation?",
        a: "This calculator focuses on your total investable assets. Use our Superannuation Calculator to model your super balance separately, especially if you plan to retire before preservation age.",
      },
    ],
  },
  superannuation: {
    tagline: "Project your superannuation balance at retirement and see if you are on track.",
    benefits: [
      {
        title: "Australian-specific calculations",
        description:
          "Models compulsory employer contributions, voluntary concessional contributions, and the tax advantages unique to the Australian super system.",
      },
      {
        title: "Long-term compound growth",
        description:
          "Visualise how decades of compound growth inside a low-tax super environment can dramatically grow your retirement nest egg.",
      },
      {
        title: "Contribution strategy insights",
        description:
          "See the difference that salary sacrificing an extra $100 per month makes over a 20 or 30 year horizon.",
      },
    ],
    useCases: [
      {
        title: "Checking if you are on track",
        description:
          "Compare your projected super balance against your retirement income needs to identify any shortfall early.",
      },
      {
        title: "Salary sacrifice planning",
        description:
          "Model the impact of increasing your concessional contributions to reduce taxable income while boosting retirement savings.",
      },
      {
        title: "FIRE bridge strategy",
        description:
          "For early retirees, understand when your super becomes accessible and how much it will be worth at preservation age.",
      },
    ],
    howItWorks: [
      "Enter your current super balance and age.",
      "Input your salary and employer contribution rate (minimum 11% from 2023-24).",
      "Add any voluntary contributions you make.",
      "Set your expected investment return and retirement age.",
      "The calculator projects your balance using compound growth, accounting for contributions and fees.",
    ],
    faqs: [
      {
        q: "What is the superannuation preservation age?",
        a: "The preservation age is the earliest age you can access your super. For anyone born after 30 June 1964, the preservation age is 60. You can access super as a transition to retirement income stream from preservation age, or unrestricted access from age 65.",
      },
      {
        q: "What return rate should I use?",
        a: "A balanced super fund has historically returned around 7-8% per year before fees and inflation. After fees and adjusting for inflation, 5-6% is a common real return assumption for long-term planning.",
      },
      {
        q: "How much super do I need to retire?",
        a: "The Association of Superannuation Funds of Australia (ASFA) estimates a comfortable retirement requires around $595,000 for a single person and $690,000 for a couple (2023 figures). However, your personal target depends on your desired lifestyle and other assets.",
      },
    ],
  },
  "coast-fire": {
    tagline: "Discover the savings milestone where you can stop investing and still retire on time.",
    benefits: [
      {
        title: "A motivating intermediate milestone",
        description:
          "Coast FIRE is often achievable years before full FIRE, giving you a meaningful goal to celebrate and a point where financial pressure eases.",
      },
      {
        title: "Flexibility to change careers",
        description:
          "Once you hit Coast FIRE, you can take a lower-paying job you love, go part-time, or take a career break without derailing your retirement.",
      },
      {
        title: "Reduce savings pressure",
        description:
          "After reaching your Coast FIRE number, you only need to cover current living expenses — no more aggressive saving required.",
      },
    ],
    useCases: [
      {
        title: "Career change planning",
        description:
          "Calculate whether you have saved enough to coast to retirement before making a move to a more fulfilling but lower-paid career.",
      },
      {
        title: "Parental leave decisions",
        description:
          "Understand whether taking extended parental leave will impact your retirement timeline, or whether you have already coasted past the point of concern.",
      },
      {
        title: "Semi-retirement",
        description:
          "Model a scenario where you work part-time from a certain age, covering expenses but not saving, and still reach your FIRE number by retirement age.",
      },
    ],
    howItWorks: [
      "Enter your target FIRE number (or calculate it with our FIRE Number Calculator).",
      "Input your current age and target retirement age.",
      "Set your expected annual investment return.",
      "The calculator works backwards from your FIRE number to find the lump sum you need today that will grow to your target by retirement age.",
      "Compare this Coast FIRE number to your current portfolio to see how close you are.",
    ],
    faqs: [
      {
        q: "What is the difference between Coast FIRE and Barista FIRE?",
        a: "Coast FIRE means your investments will grow to your FIRE number without any additional contributions. Barista FIRE is similar but assumes you work part-time to cover living expenses, often with the added benefit of employer health insurance (more relevant in the US context).",
      },
      {
        q: "What return rate should I use for Coast FIRE?",
        a: "A real (inflation-adjusted) return of 5-7% is commonly used. Using a more conservative rate gives you a larger Coast FIRE number and a bigger safety margin.",
      },
      {
        q: "Can I include superannuation in my Coast FIRE calculation?",
        a: "Yes, if you are planning to retire at or after preservation age, your super balance can be included. If you plan to retire early, model your super and non-super investments separately to ensure you can cover expenses before super becomes accessible.",
      },
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find((t) => t.id === params.id)
  if (!tool) return {}
  const content = toolContent[params.id]
  return {
    title: `${tool.name} | Free Calculator | ${siteConfig.name}`,
    description: content?.tagline ?? tool.description,
  }
}

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }))
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.id === params.id)
  if (!tool) notFound()

  const content = toolContent[params.id]

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/tools" className="hover:text-foreground transition-colors">
          Calculators
        </Link>
        <span className="mx-2">/</span>
        <span>{tool.name}</span>
      </nav>

      {/* Hero */}
      <div className="mb-12">
        <div className="text-5xl mb-4">{tool.emoji}</div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{tool.name}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {content?.tagline ?? tool.description}
        </p>
        <div className="mt-8">
          <Link
            href={tool.href}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Open {tool.name} &rarr;
          </Link>
        </div>
      </div>

      {/* Benefits */}
      {content?.benefits && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Use This Calculator?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How it works */}
      {content?.howItWorks && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-3">
            {content.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-muted-foreground pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Use cases */}
      {content?.useCases && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.useCases.map((u) => (
              <div key={u.title} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-2">{u.title}</h3>
                <p className="text-muted-foreground text-sm">{u.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {content?.faqs && (
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA + related tools */}
      <section className="rounded-xl border bg-card p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-3">Ready to calculate?</h2>
        <p className="text-muted-foreground mb-6">
          Use the {tool.name} now — free, instant, and no sign-up required.
        </p>
        <Link
          href={tool.href}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          Open {tool.name} &rarr;
        </Link>
      </section>

      {/* Related tools */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Explore Other Calculators</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools
            .filter((t) => t.id !== params.id)
            .map((t) => (
              <Link
                key={t.id}
                href={`/tools/${t.id}`}
                className="group rounded-xl border bg-card p-5 hover:shadow-md transition-shadow flex items-start gap-3"
              >
                <span className="text-2xl">{t.emoji}</span>
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
