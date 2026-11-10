/**
 * Catalog of product SKUs and the approved AUD display prices.
 * The client may send a sku. Amounts must not be added or changed here.
 * Nothing is purchasable: Buy stays a disabled "Coming soon" control
 * with the waitlist, and there is no payment link.
 */

export type CheckoutSku = "workbook" | "pro"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** AUD dollars. */
  priceAud: number
  /** Button and page label, e.g. "AU$59" or "AU$9/mo". */
  priceLabel: string
  /**
   * False means the deliverable is not ready to ship. Buy stays "Coming soon"
   * either way; this only changes the waitlist explanation.
   */
  available: boolean
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  workbook: {
    sku: "workbook",
    entitlementId: "exit-plan-workbook",
    priceAud: 59,
    priceLabel: "AU$59",
    available: false,
  },
  pro: {
    sku: "pro",
    entitlementId: "pro",
    priceAud: 9,
    priceLabel: "AU$9/mo",
    available: true,
  },
}

/** Purchases are not offered. */
export function offerIsPurchasable(_offer: CheckoutOffer): boolean {
  return false
}
