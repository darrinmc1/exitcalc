"use client"

import { useState } from "react"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { NewsletterForm } from "@/components/newsletter-form"
import { CHECKOUT_OFFERS, type CheckoutSku } from "@/lib/offers"
import { getSupportEmail } from "@/lib/support-email"

/**
 * When NEXT_PUBLIC_STRIPE_ENABLED is not the string "true", this renders a
 * disabled "Coming soon: $X" control plus the waitlist and never calls
 * /api/checkout. The server flag STRIPE_ENABLED is a separate gate.
 */
const paymentsOn = process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"

export function BuyButton({
  sku,
  variant = "emerald",
  fullWidth = false,
}: {
  sku: CheckoutSku
  variant?: "emerald" | "cyan"
  fullWidth?: boolean
}) {
  const offer = CHECKOUT_OFFERS[sku]
  const supportEmail = getSupportEmail()
  const width = fullWidth ? "w-full" : ""

  return (
    <div className={fullWidth ? "w-full" : "max-w-md"}>
      {paymentsOn ? (
        <EnabledBuy sku={sku} variant={variant} width={width} label={`Buy — ${offer.priceLabel}`} />
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-bold text-slate-300 opacity-80 ${width}`}
        >
          Coming soon: {offer.priceLabel}
        </button>
      )}

      <MerchantOfRecordDisclosure />

      {supportEmail ? (
        <p className="mt-2 text-xs text-slate-500">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="text-slate-300 hover:text-white">
            {supportEmail}
          </a>
        </p>
      ) : null}

      {paymentsOn ? null : (
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="mb-1 text-sm font-semibold text-white">Notify me when checkout opens</p>
          <p className="mb-4 text-sm text-slate-400">
            {sku === "workbook"
              ? "Checkout is not live yet. Join the waitlist and we'll email you when the workbook ships."
              : "Checkout is not live yet. Join the waitlist and we'll email you when Pro checkout opens."}
          </p>
          <NewsletterForm
            source={`waitlist-${sku}`}
            buttonLabel="Notify me"
            align="start"
          />
        </div>
      )}
    </div>
  )
}

function EnabledBuy({
  sku,
  variant,
  width,
  label,
}: {
  sku: CheckoutSku
  variant: "emerald" | "cyan"
  width: string
  label: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onBuy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      if (res.status === 401) {
        const next = encodeURIComponent(window.location.pathname)
        window.location.href = `/sign-in?redirect_url=${next}`
        return
      }
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error ?? "Checkout is not available right now.")
      setLoading(false)
    } catch {
      setError("Checkout is not available right now.")
      setLoading(false)
    }
  }

  const color =
    variant === "cyan"
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25"
      : "bg-emerald-500 text-slate-950 hover:bg-emerald-400"

  return (
    <>
      <button
        type="button"
        onClick={onBuy}
        disabled={loading}
        className={`rounded-xl px-6 py-3 text-center font-bold transition-colors disabled:opacity-60 ${color} ${width}`}
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </>
  )
}
