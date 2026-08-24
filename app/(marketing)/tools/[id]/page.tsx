import { notFound } from "next/navigation"
import { TOOLS } from "@/data/tools"
import { siteConfig } from "@/config/site.config"
import CoastFireCalculator from "@/components/calculators/coast-fire"
import FireNumberCalculator from "@/components/calculators/fire-number"
import SuperProjectionCalculator from "@/components/calculators/super-projection"

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({ id: tool.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const tool = TOOLS.find((t) => t.id === params.id)
  if (!tool) return {}
  return {
    title: `${tool.name} | ${siteConfig.name}`,
    description: tool.description,
  }
}

const calculatorFaqs: Record<string, { question: string; answer: string }[]> = {
  "fire-number": [
    {
      question: "What is a FIRE number?",
      answer: "Your FIRE number is the total amount of savings and investments you need to retire early and live off investment returns indefinitely, typically calculated as 25x your annual expenses using the 4% safe withdrawal rate.",
    },
    {
      question: "How is the FIRE number calculated?",
      answer: "The FIRE number is calculated by multiplying your expected annual expenses in retirement by 25. This is derived from the 4% rule, which suggests you can safely withdraw 4% of your portfolio each year without running out of money.",
    },
    {
      question: "What is the 4% rule?",
      answer: "The 4% rule is a guideline suggesting that retirees can withdraw 4% of their portfolio in the first year of retirement, then adjust for inflation each subsequent year, with a high probability of not outliving their savings over a 30-year period.",
    },
  ],
  "coast-fire": [
    {
      question: "What is Coast FIRE?",
      answer: "Coast FIRE is a financial independence milestone where you have saved enough money that, even without additional contributions, your investments will grow to fund your retirement by a target age through compound interest alone.",
    },
    {
      question: "How do I calculate my Coast FIRE number?",
      answer: "Your Coast FIRE number is calculated by taking your full FIRE number and discounting it back to today using your expected investment return rate and the number of years until your target retirement age.",
    },
    {
      question: "What is the difference between Coast FIRE and regular FIRE?",
      answer: "Regular FIRE means you have enough saved to retire immediately. Coast FIRE means you have saved enough that you can stop contributing and let compound growth do the rest, but you still need income to cover current expenses until retirement age.",
    },
  ],
  "super-projection": [
    {
      question: "What does the super projection calculator show?",
      answer: "The super projection calculator estimates how your superannuation balance will grow over time based on your current balance, contributions, salary, and expected investment returns, helping you plan for retirement.",
    },
    {
      question: "What is superannuation?",
      answer: "Superannuation (super) is Australia's compulsory retirement savings system where employers contribute a percentage of your salary into a super fund, which is invested and grows tax-effectively until you reach preservation age.",
    },
    {
      question: "How much super do I need to retire comfortably in Australia?",
      answer: "According to the Association of Superannuation Funds of Australia (ASFA), a comfortable retirement for a single person requires approximately $595,000 in super at retirement, while couples need around $690,000, based on 2024 figures.",
    },
  ],
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = TOOLS.find((t) => t.id === params.id)
  if (!tool) notFound()

  const faqs = calculatorFaqs[tool.id] ?? []

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: `${siteConfig.url}/tools/${tool.id}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
        <p className="text-slate-400 mb-8">{tool.description}</p>

        {tool.id === "fire-number" && <FireNumberCalculator />}
        {tool.id === "coast-fire" && <CoastFireCalculator />}
        {tool.id === "super-projection" && <SuperProjectionCalculator />}

        {faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-card p-6 rounded-2xl">
                  <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
