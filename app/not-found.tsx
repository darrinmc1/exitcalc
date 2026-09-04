import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="text-6xl mb-6">{siteConfig.theme.emoji}</div>
      <h1 className="text-4xl font-extrabold mb-4">Page not found</h1>
      <p className="text-slate-400 mb-3 text-center max-w-md">
        This address is not a live page. Calculators that are not built yet, and
        downloads that have no file, are listed as Coming Soon rather than sold.
      </p>
      <p className="text-slate-500 mb-8 text-center text-sm max-w-md">
        Live today: three calculators and 14 written lessons. One workbook is
        listed and is Coming Soon.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/tools"
          className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all"
        >
          Open calculators
        </Link>
        <Link
          href="/lessons"
          className="px-6 py-3 rounded-xl font-bold text-slate-200 border border-white/15 hover:border-emerald-500/40 transition-all"
        >
          Read lessons
        </Link>
      </div>
    </div>
  )
}
