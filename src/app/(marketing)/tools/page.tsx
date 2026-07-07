import Link from "next/link"
import { ArrowRight, Calculator, TrendingUp, Target } from "lucide-react"

const TOOLS = [
  {
    id: "super-projection",
    name: "Super Projection Calculator",
    description:
      "Project your superannuation balance at retirement. Uses the current 11.5% SG rate with optional salary sacrifice and voluntary contributions.",
    emoji: "🏦",
    icon: TrendingUp,
  },
  {
    id: "fire-number",
    name: "FIRE Number Calculator",
    description:
      "Calculate your Financial Independence number using the 4% safe withdrawal rate. See how many years until you can exit the 9-to-5.",
    emoji: "🔥",
    icon: Target,
  },
  {
    id: "coast-fire",
    name: "Coast-FIRE Calculator",
    description:
      "Find out if you already have enough invested that compound growth alone will fund your retirement — no more contributions needed.",
    emoji: "🏖️",
    icon: Calculator,
  },
]

export const metadata = {
  title: "Free FIRE Calculators",
  description:
    "Free Australian superannuation and FIRE calculators. Project your super, calculate your FIRE number, and check Coast-FIRE status.",
}

export default function ToolsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase">
              Free Tools
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-[var(--font-outfit)] text-white">
            AU FIRE Calculators
          </h1>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            No sign-up. No tracking. Just numbers that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TOOLS.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="glass-card p-8 group transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{tool.emoji}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    {tool.description}
                  </p>
                  <span className="text-sm font-bold text-teal-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Open calculator <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
