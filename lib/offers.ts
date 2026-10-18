/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * `${STRIPE_SITE_KEY}_${suffix}` and resolved with prices.list({ lookup_keys }).
 *
 * Amounts are the approved USD prices. Do not add or change them here.
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "EXITCALC"

export type CheckoutSku = "workbook" | "pro"
export type CheckoutMode = "payment" | "subscription"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** USD dollars. Stripe unit_amount must equal this × 100. */
  priceUsd: number
  /** Button label amount, e.g. "$59". */
  priceLabel: string
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  workbook: {
    sku: "workbook",
    lookupKeySuffix: "workbook_once_usd59",
    mode: "payment",
    entitlementId: "exit-plan-workbook",
    priceUsd: 59,
    priceLabel: "$59",
  },
  pro: {
    sku: "pro",
    lookupKeySuffix: "pro_m_usd9",
    mode: "subscription",
    entitlementId: "pro",
    priceUsd: 9,
    priceLabel: "$9",
  },
}

export function offerFromSku(sku: unknown): CheckoutOffer | null {
  if (sku === "workbook" || sku === "pro") return CHECKOUT_OFFERS[sku]
  return null
}

/** Site prefix for lookup keys. Not a secret. Defaults to exitcalc. */
export function stripeSiteKey(): string {
  const key = process.env.STRIPE_SITE_KEY?.trim()
  if (key && /^[a-z0-9_-]+$/i.test(key)) return key
  return "exitcalc"
}

export function lookupKeyFor(offer: CheckoutOffer, site = stripeSiteKey()): string {
  return `${site}_${offer.lookupKeySuffix}`
}

/**
 * Client flag. Inlined at build time, so changing it needs a redeploy.
 * Anything other than the string "true" (including unset) leaves Buy disabled.
 */
export function publicStripeEnabled(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}
