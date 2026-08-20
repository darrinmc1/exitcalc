import { notFound } from "next/navigation"
import Link from "next/link"
import { ALL_TOOLS, getToolById } from "@/data/tools"
import { siteConfig } from "@/config/site.config"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Disclaimer } from "@/components/disclaimer"
import { SuperProjectionCalculator } from "@/components/calculators/super-projection"
import { FIRENumberCalculator } from "@/components/calculators/fire-number"
import { CoastFIRECalculator } from "@/components/calculators/coast-fire"

export function generateStaticParams() {
  return ALL_TOOLS.map((tool) => ({ id: tool.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id)
  if (!tool) return { title: "Not Found" }
  return {
    title: `${tool.name} | ${siteConfig.name}`,
    description: tool.description,
  }
}

function CalculatorWidget({ toolId }: { toolId: string }) {
  switch (toolId) {
    case "super-projection":
      return <SuperProjectionCalculator />
    case "fire-number":
      return <FIRENumberCalculator />
    case "coast-fire":
      return <CoastFIRECalculator />
    default:
      return null
  }
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id)
  if (!tool) notFound()

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    featureList: tool.features,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <div className={`${siteConfig.theme.heroGradient} py-10 md:py-12`}>
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-4"
          >
            <span className="mr-1">&larr;</span> All Calculators
          </Link>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">{tool.emoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {tool.name}
              </h1>
              <span className="inline-block mt-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                {tool.toolType}
              </span>
            </div>
          </div>

          <p className="text-base text-slate-400">{tool.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-8 md:py-10">
        <div
          id="calculator"
          className="scroll-mt-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 mb-8"
        >
          {tool.id === "fire-number" && (
            <div className="mb-6 pb-6 border-b border-white/10">
              <h2 className="text-xl font-extrabold text-white mb-2">
                FIRE Number Calculator — What You Need to Retire
              </h2>
              <p className="text-sm text-slate-400">
                FIRE = Financial Independence, Retire Early. Enter your numbers
                below. Method: gap fund (years to preservation age × expenses)
                plus super target (expenses × 25 / 4% rule of thumb). Illustrative
                only — not a prediction of what you will need.
              </p>
            </div>
          )}
          <CalculatorWidget toolId={tool.id} />
          <div className="mt-6">
            <Disclaimer variant="full" />
          </div>
        </div>

        <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 mb-8">
          <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-3">
            Features
          </h3>
          <ul className="space-y-2">
            {tool.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <span className="text-emerald-500 mt-0.5">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <MarkdownRenderer content={tool.content} />
        </article>

        <div className="mt-6 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/tools"
            className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            &larr; All Calculators
          </Link>
        </div>
      </div>
    </div>
  )
}
