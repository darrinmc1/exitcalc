import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Plan Your Early Retirement,{" "}
          <span className="text-emerald-400">The Australian Way</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          ExitCalc helps Australians calculate their FIRE number, project their super, and map out their path to financial independence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all"
          >
            Try the Calculators
          </Link>
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-600 hover:border-emerald-400 text-slate-300 font-semibold transition-all"
          >
            Learn FIRE Basics
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Australians on Their Path to FIRE
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
          Real stories from people using ExitCalc to take control of their financial future.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I finally understood my super projections after using ExitCalc. Realised I could retire at 52 instead of 67 — just by increasing my contributions by 3%. Game changer.&rdquo;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-white text-sm">Sarah M.</p>
              <p className="text-xs text-slate-500">Melbourne, VIC &bull; Nurse</p>
              <div className="flex gap-1 mt-1">
                <span className="text-emerald-400 text-xs">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;The Coast FIRE calculator showed me I&apos;ve already hit my coast number at 38. I stopped stressing about super and redirected that money into paying off our home. Brilliant tool.&rdquo;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-white text-sm">James T.</p>
              <p className="text-xs text-slate-500">Brisbane, QLD &bull; Software Engineer</p>
              <div className="flex gap-1 mt-1">
                <span className="text-emerald-400 text-xs">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;As a self-employed tradie I had no idea where I stood. ExitCalc gave me a clear FIRE number and a plan. I&apos;m now on track to exit the tools by 55.&rdquo;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-white text-sm">Dave K.</p>
              <p className="text-xs text-slate-500">Perth, WA &bull; Electrician</p>
              <div className="flex gap-1 mt-1">
                <span className="text-emerald-400 text-xs">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I used the FIRE number calculator and discovered we needed $400k less than I thought. We&apos;re now planning to retire in 4 years, not 9. The lessons section is gold too.&rdquo;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-white text-sm">Priya &amp; Raj S.</p>
              <p className="text-xs text-slate-500">Sydney, NSW &bull; Teachers</p>
              <div className="flex gap-1 mt-1">
                <span className="text-emerald-400 text-xs">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;Finally a FIRE calculator built for Australia — it actually accounts for super preservation age and the tax-free threshold. Every other tool I tried was US-focused.&rdquo;
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-white text-sm">Chloe R.</p>
              <p className="text-xs text-slate-500">Adelaide, SA &bull; Accountant</p>
              <div className="flex gap-1 mt-1">
                <span className="text-emerald-400 text-xs">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-emerald-500/20">
            <p className="text-slate-300 text-sm leading-relaxed">
              Ready to write your own success story? Start with our free calculators — no sign-up required.
            </p>
            <div className="mt-auto">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all"
              >
                Calculate My FIRE Number →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
