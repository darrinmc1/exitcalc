"use client"

import { NewsletterForm } from "@/components/newsletter-form"

/**
 * FlowVault pattern: disabled Buy Now — $price (Coming Soon), plus Notify me.
 * Do not wire Stripe or invent a downloadable file here.
 */
export function ProductComingSoonCta({
  price,
  productId,
}: {
  price: number
  productId: string
}) {
  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center gap-6">
        <div>
          <span className="text-4xl font-extrabold text-white">${price}</span>
          <span className="text-slate-400 ml-1">one-time</span>
          <span className="ml-3 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400">
            Coming Soon
          </span>
        </div>
        <button
          type="button"
          disabled
          title="Checkout coming soon"
          className="cursor-not-allowed rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-bold text-white opacity-75 shadow-lg shadow-cyan-500/25"
        >
          Buy Now — ${price}
          <span className="ml-2 text-xs font-medium opacity-70">(Coming Soon)</span>
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="mb-1 text-sm font-semibold text-white">
          Notify me when it&apos;s available
        </p>
        <p className="mb-4 text-sm text-slate-400">
          Checkout is not live yet. Join the waitlist and we&apos;ll email you
          when the workbook ships.
        </p>
        <NewsletterForm
          source={`waitlist-${productId}`}
          buttonLabel="Notify me"
          align="start"
        />
      </div>
    </div>
  )
}
