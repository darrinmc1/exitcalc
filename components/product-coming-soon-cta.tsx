"use client"

import { NewsletterForm } from "@/components/newsletter-form"

/**
 * Honest waitlist CTA. No Buy button — checkout and the download file are not live.
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
          <span className="text-slate-400 ml-1">listed price</span>
          <span className="ml-3 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400">
            Coming Soon
          </span>
        </div>
        <button
          type="button"
          disabled
          title="Checkout is not live"
          className="cursor-not-allowed rounded-xl border border-white/15 bg-white/5 px-8 py-3 font-bold text-slate-300"
        >
          Coming Soon
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
