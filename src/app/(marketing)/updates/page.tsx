import Link from "next/link"
import { ALL_UPDATES } from "@/data/updates"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "Updates",
  description: "Latest news and updates from ExitCalc.",
}

export default function UpdatesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase">
              Changelog
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-[var(--font-outfit)] text-white">
            Weekly Updates
          </h1>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            New lessons, calculator tweaks, and AU policy changes that affect your FIRE plan.
          </p>
        </div>

        <div className="space-y-6">
          {ALL_UPDATES.map((update) => (
            <Link
              key={update.id}
              href={`/updates/${update.id}`}
              className="glass-card p-6 block group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {update.date}
                  </span>
                  <span className="inline-block rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-0.5 text-xs font-medium text-teal-400 uppercase tracking-wide">
                    {update.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {update.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {update.description}
                </p>
                <span className="mt-3 text-sm font-bold text-teal-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
