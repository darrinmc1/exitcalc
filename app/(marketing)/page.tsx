import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { exitCalcFaqs } from "@/lib/aeo"
import { ScrollCraftHome } from "@/components/home/scroll-craft-home"

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
    <div className="min-h-screen bg-[#070b14] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <ScrollCraftHome featuredLessons={featuredLessons} />
    </div>
  )
}
