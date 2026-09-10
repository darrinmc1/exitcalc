import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Dashboard | ${siteConfig.name}`,
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-sm text-slate-400">Track your progress and keep building toward financial independence.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Lessons Completed</p>
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-xs text-slate-500 mt-1">Start a lesson to earn XP</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Total XP</p>
          <p className="text-4xl font-bold text-emerald-400">0</p>
          <p className="text-xs text-slate-500 mt-1">XP unlocks new badges</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Current Rank</p>
          <p className="text-3xl font-bold text-white">{siteConfig.badges.tierEmojis[0]} {siteConfig.badges.tierNames[0]}</p>
          <p className="text-xs text-slate-500 mt-1">Keep going to level up</p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Quick Links</p>
        <div className="flex flex-wrap gap-3">
          <a href="/lessons" className="text-sm text-emerald-400 hover:text-emerald-300 bg-emerald-400/10 hover:bg-emerald-400/20 px-4 py-2 rounded-lg transition-colors font-medium">📚 Browse Lessons</a>
          <a href="/tools" className="text-sm text-sky-400 hover:text-sky-300 bg-sky-400/10 hover:bg-sky-400/20 px-4 py-2 rounded-lg transition-colors font-medium">🧮 Open Tools</a>
          <a href="/dashboard/badges" className="text-sm text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 px-4 py-2 rounded-lg transition-colors font-medium">🏅 View Badges</a>
        </div>
      </div>
    </div>
  )
}
