import { siteConfig } from "@/config/site.config"

export default function BadgesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Badges</h1>
        <p className="text-sm text-slate-400">Earn XP by completing lessons to unlock new ranks and badges.</p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {siteConfig.badges.tierNames.map((name, i) => (
            <div key={name} className="glass-card p-5 rounded-2xl text-center border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-4xl mb-3">{siteConfig.badges.tierEmojis[i]}</div>
              <p className="text-sm font-bold text-white mb-1">{name}</p>
              <p className="text-xs text-slate-500">{siteConfig.badges.xpPerTier[i]} XP</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <p className="text-xs text-slate-500">Complete lessons to earn XP and progress through the ranks. Each badge represents a milestone on your path to financial independence.</p>
      </div>
    </div>
  )
}
