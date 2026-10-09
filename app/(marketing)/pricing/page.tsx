import { NewsletterForm } from "@/components/newsletter-form"
import { siteConfig } from "@/config/site.config"
import { withCanonical } from "@/lib/seo"

export const metadata = withCanonical("/pricing", {
  title: `Coming soon | ${siteConfig.name}`,
  description: "Paid plans and products are coming soon. Join the list.",
})

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-4 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold">Coming soon</h1>
          <p className="mb-8 text-slate-400">Coming soon - join the list.</p>
          <NewsletterForm
            source="pricing-coming-soon"
            buttonLabel="Join the list"
          />
        </div>
      </section>
    </main>
  )
}
