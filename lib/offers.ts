/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * `${STRIPE_SITE_KEY}_${suffix}` and resolved with prices.list({ lookup_keys }).
 *
 * Amounts are the approved AUD prices. Do not add or change them here.
 * Default lookup keys: exitcalc_workbook_once_aud59, exitcalc_pro_m_aud9.
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "EXITCALC"
export const CHECKOUT_CURRENCY = "aud"

export type CheckoutSku = "workbook" | "pro"
export type CheckoutMode = "payment" | "subscription"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** AUD dollars. Stripe unit_amount must equal this × 100, currency aud. */
  priceAud: number
  /** Button and page label, e.g. "AU$59" or "AU$9/mo". */
  priceLabel: string
  /**
   * Per-product gate. False keeps Buy as "Coming soon" and POST /api/checkout
   * returns 503 even when both Stripe flags are true. The workbook stays false
   * until a real deliverable file exists.
   */
  available: boolean
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  workbook: {
    sku: "workbook",
    lookupKeySuffix: "workbook_once_aud59",
    mode: "payment",
    entitlementId: "exit-plan-workbook",
    priceAud: 59,
    priceLabel: "AU$59",
    available: false,
  },
  pro: {
    sku: "pro",
    lookupKeySuffix: "pro_m_aud9",
    mode: "subscription",
    entitlementId: "pro",
    priceAud: 9,
    priceLabel: "AU$9/mo",
    available: true,
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

/** True only when the client flag is on and this product is marked available. */
export function offerIsPurchasable(offer: CheckoutOffer): boolean {
  return publicStripeEnabled() && offer.available
}
