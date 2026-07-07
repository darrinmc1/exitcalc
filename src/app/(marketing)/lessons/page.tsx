import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"
import { ArrowRight, Clock } from "lucide-react"

export const metadata = {
  title: "Lessons",
  description: "Australian FIRE and superannuation lessons — from basics to advanced strategies.",
}

const levelColors: Record<string, { badge: string; border: string }> = {
  beginner: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
  },
  intermediate: {
    badge: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    border: "group-hover:border-teal-500/30",
  },
  advanced: {
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    border: "group-hover:border-amber-500/30",
  },
}

export default function LessonsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
              {ALL_MODULES.length} Lessons
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-[var(--font-outfit)] text-white">
            AU FIRE Curriculum
          </h1>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Everything you need to calculate, plan, and execute your exit from the 9-to-5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_MODULES.map((mod, i) => {
            const colors = levelColors[mod.level] ?? levelColors.beginner
            return (
              <Link
                key={mod.id}
                href={`/lessons/${mod.id}`}
                className={`glass-card p-6 group transition-all duration-300 hover:-translate-y-1 flex flex-col ${colors.border}`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-extrabold text-teal-400">
                      {i + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {mod.duration}
                      </span>
                      <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${colors.badge}`}>
                        {mod.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-teal-400 transition-colors leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                    {mod.description}
                  </p>
                  <span className="text-sm font-bold text-teal-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Read lesson <ArrowRight className="h-4 w-4" />
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
