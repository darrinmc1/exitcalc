import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { FIRENumberCalculator } from "@/components/calculators/fire-number"
import { Disclaimer } from "@/components/disclaimer"
import { ALL_TOOLS } from "@/data/tools"
import { ALL_MODULES } from "@/data/modules"
import { exitCalcFaqs } from "@/lib/aeo"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${siteConfig.domain}`

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: exitCalcFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ExitCalc FIRE Number Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "Free FIRE number, superannuation projection, and Coast-FIRE calculators for Australians. General information only, not personal financial advice.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
  url: siteUrl,
}

const FEATURED_LESSON_IDS = [
  "what-is-fire-number",
  "your-fire-number-au",
  "coast-fire-explained",
  "super-projection-walkthrough",
]

export default function HomePage() {
  const featuredLessons = FEATURED_LESSON_IDS.map((id) =>
    ALL_MODULES.find((m) => m.id === id && m.status === "published")
  ).filter(Boolean) as typeof ALL_MODULES

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      {/* Hero — one primary CTA */}
      <div className={`${siteConfig.theme.heroGradient} relative overflow-hidden py-20 md:py-28`}>
        <div className="absolute inset-0 bg-[url('/images/hero-exitcalc.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="text-6xl mb-6 animate-float">{siteConfig.theme.emoji}</div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
            {siteConfig.name}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text-cyan">{siteConfig.copy.heroTitle}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
            {siteConfig.copy.heroSubtitle}
          </p>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-10">
            Illustrative only — results depend on your spending, exit age, and
            assumptions (gap fund to preservation age + expenses × 25 for the
            super target).{" "}
            <Link
              href="/lessons/what-is-fire-number"
              className="text-emerald-400/90 underline underline-offset-2 hover:text-emerald-300"
            >
              How it&apos;s calculated
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#calculator"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              {siteConfig.copy.ctaButton}
            </a>
            <Link
              href="/lessons"
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors underline-offset-4 hover:underline"
            >
              {siteConfig.copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Working calculator — above the fold on tall screens / one click from hero */}
      <section
        id="calculator"
        className="scroll-mt-20 mx-auto max-w-3xl px-6 py-16 md:py-20"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            <span className="gradient-text-cyan">FIRE Number Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Enter your annual expenses, exit age, and balances. Uses the AU
            two-bucket model: gap fund (years until preservation age × expenses)
            plus super target (expenses × 25 / 4% rule of thumb).
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10">
          <FIRENumberCalculator />
          <div className="mt-6">
            <Disclaimer variant="full" />
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Prefer a dedicated page?{" "}
          <Link href="/tools/fire-number" className="text-emerald-400/80 hover:text-emerald-300 underline underline-offset-2">
            Open the FIRE Number tool
          </Link>
        </p>
      </section>

      {/* Existing calculators */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">
            <span className="gradient-text-cyan">Free Calculators</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Tools already on ExitCalc — no sign-up required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ALL_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all"
            >
              <div className="text-3xl mb-3">{tool.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured lessons from existing curriculum */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">
            <span className="gradient-text-cyan">Start with a Lesson</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Guided explainers that pair with the calculators above.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredLessons.map((mod) => (
            <Link
              key={mod.id}
              href={`/lessons/${mod.id}`}
              className="block glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-1">{mod.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{mod.description}</p>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-cyan-400 font-medium">{mod.level}</span>
                <span className="text-slate-500">{mod.duration}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/lessons"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            Browse all lessons →
          </Link>
        </div>
      </section>

      {/* Newsletter — secondary, not a competing primary CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-white/5 text-center">
        <h2 className="text-2xl font-extrabold mb-3">
          {siteConfig.copy.emailCaptureHeading}
        </h2>
        <p className="text-slate-400 mb-8 text-sm">
          {siteConfig.copy.emailCaptureSubheading}
        </p>
        <NewsletterForm source="homepage" />
        <p className="mt-8 text-sm text-slate-500">
          Want a structured plan?{" "}
          <Link
            href="/products/exit-plan-workbook"
            className="text-slate-300 hover:text-emerald-400 underline underline-offset-2 transition-colors"
          >
            Exit Plan Workbook (Coming Soon)
          </Link>
        </p>
      </section>
    </div>
  )
}
