// =============================================================================
// EXITCALC — AEO (Answer Engine Optimization)
// Generates /llms.txt + /llm.txt so AI assistants can read what the site is,
// what it does, its key pages, pricing, and FAQs.
// Reference pattern: Intel Academy / CertSprint lib/aeo.ts (verified live).
// =============================================================================

import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import { ALL_UPDATES } from "@/data/updates"

const siteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${siteConfig.domain}`

export const exitCalcFaqs = [
  {
    question: "What is ExitCalc?",
    answer:
      "ExitCalc is a free set of calculators and guided lessons to help Australians plan their FIRE (Financial Independence, Retire Early) exit from the 9-to-5. It covers super projections, your FIRE number, and Coast-FIRE.",
  },
  {
    question: "What is a FIRE number?",
    answer:
      "Your FIRE number is the investment portfolio size at which your passive income covers your living expenses, so you can choose to stop working. ExitCalc helps you calculate it for Australian tax and super rules.",
  },
  {
    question: "What is Coast-FIRE?",
    answer:
      "Coast-FIRE is the point where your existing super and investments will grow to your FIRE number by retirement age without further contributions — you can 'coast' in a lower-paying or part-time job. ExitCalc has a dedicated Coast-FIRE calculator.",
  },
  {
    question: "How much does ExitCalc cost?",
    answer:
      "The calculators and lessons are free. The Exit Plan Workbook + Spreadsheet Pack is a one-time purchase of $59, and there are optional membership plans starting at $5/month.",
  },
  {
    question: "Does ExitCalc give financial advice?",
    answer:
      "No. ExitCalc is an educational tool with calculators and lessons. It is not licensed financial advice — always consult a qualified financial adviser for your situation.",
  },
]

export function buildLlmTxt(): string {
  const base = siteUrl()
  const productBlock = ALL_PRODUCTS.map(
    (p) => `- ${p.name} — ${p.description} — ${base}/products/${p.id}`,
  ).join("\n")
  const moduleBlock = ALL_MODULES.filter((m) => m.status === "published")
    .map((m) => `- ${m.title} — ${m.description} — ${base}/lessons/${m.id}`)
    .join("\n")
  const updateBlock = ALL_UPDATES.map(
    (u) => `- ${u.title} — ${base}/updates/${u.id}`,
  ).join("\n")
  const faqBlock = exitCalcFaqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n")

  return `# ${siteConfig.name}

> ${siteConfig.description}

Site: ${base}
Job: Free calculators and guided lessons for Australians planning FIRE (Financial Independence, Retire Early) — super projections, FIRE number, Coast-FIRE.
Not: a financial adviser; not licensed financial advice; not a super fund or bank.

## Products

${productBlock}

## Lessons (study guides)

${moduleBlock}

## Updates

${updateBlock}

## Pricing

- Founder: USD ${siteConfig.pricing.founder.monthly}/month — ${base}/pricing
- Standard: USD ${siteConfig.pricing.standard.monthly}/month — ${base}/pricing
- Premium: USD ${siteConfig.pricing.premium.monthly}/month — ${base}/pricing
- One-time product purchases: ${base}/products

## FAQs

${faqBlock}
`
}
