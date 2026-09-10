import Link from "next/link"
import { ALL_MODULES } from "@/data/modules"

export default function DashboardLessonsPage() {
  const published = ALL_MODULES.filter((m) => m.status === "published")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">My Lessons</h1>
        <p className="text-sm text-slate-400">{published.length} lesson{published.length !== 1 ? "s" : ""} available — complete them to earn XP.</p>
      </div>

      <div className="border-t border-white/10 pt-4 space-y-3">
        {published.map((mod) => (
          <Link
            key={mod.id}
            href={`/lessons/${mod.id}`}
            className="flex items-center justify-between glass-card p-4 sm:p-5 rounded-xl hover:scale-[1.01] hover:border-white/10 border border-white/5 transition-all group"
          >
            <div className="min-w-0 pr-4">
              <h3 className="font-bold text-white group-hover:text-emerald-300 transition-colors truncate">{mod.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                <span className="inline-block bg-white/5 rounded px-1.5 py-0.5 mr-2">{mod.level}</span>
                {mod.duration}
              </p>
            </div>
            <span className="text-slate-500 group-hover:text-emerald-400 transition-colors text-lg flex-shrink-0">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
