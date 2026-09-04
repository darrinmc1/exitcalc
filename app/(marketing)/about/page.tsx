import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-5xl mb-4">{siteConfig.theme.emoji}</div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">About {siteConfig.name}</span>
          </h1>
          <p className="text-lg text-slate-400">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10">
          <p className="text-slate-300 leading-relaxed mb-4">
            ExitCalc was built for Australians who are serious about financial
            independence — not the vague &quot;save more, spend less&quot; advice, but
            concrete numbers tailored to AU super rules, tax brackets, and
            preservation age.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most FIRE calculators online are built for Americans with 401(k)s and
            Roth IRAs. They don&apos;t understand superannuation, the gap fund
            problem, franking credits, or Division 293. ExitCalc does.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Three free calculators give you an illustrated total from the inputs
            you type. Fourteen written lessons explain the method and the limits
            of those tools. The Exit Plan Workbook is listed and is Coming Soon
            — it is not a live download.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Questions or feedback? Reach out at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-cyan-400 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  )
}
