"use client"

import { NewsletterForm } from "@/components/newsletter-form"

/**
 * Neutral waitlist. Price and checkout stay out of the UI until payments return.
 */
export function ProductComingSoonCta() {
  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="mb-1 text-sm font-semibold text-white">Coming soon</p>
      <p className="mb-4 text-sm text-slate-400">Coming soon - join the list.</p>
      <NewsletterForm
        source="pricing-coming-soon"
        buttonLabel="Join the list"
        align="start"
      />
    </div>
  )
}
