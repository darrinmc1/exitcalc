import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { ALL_TOOLS } from "@/data/tools"

export const metadata = {
  title: `Calculators | ${siteConfig.name}`,
  description: "Free AU superannuation and FIRE planning calculators.",
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Free Calculators</span>
          </h1>
          <p className="text-lg text-slate-400">
            Run your numbers in 60 seconds. No sign-up required.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {ALL_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all"
            >
              <div className="text-4xl mb-3">{tool.emoji}</div>
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h2>
              <span className="inline-block mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400 uppercase tracking-wider">
                {tool.toolType}
              </span>
              <p className="text-sm text-slate-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
