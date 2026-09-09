/**
 * Purchases stay parked until Stripe is set up.
 * Flip PURCHASES_OPEN + NEXT_PUBLIC_PURCHASES_OPEN to "true" and set
 * STRIPE_SECRET_KEY to enable checkout on this branch.
 */

export function isPurchasesFlagOn(): boolean {
  return (
    process.env.PURCHASES_OPEN === "true" ||
    process.env.NEXT_PUBLIC_PURCHASES_OPEN === "true"
  )
}

/** Server charge path: flag on AND Stripe secret present. */
export function isPurchasesOpen(): boolean {
  return isPurchasesFlagOn() && Boolean(process.env.STRIPE_SECRET_KEY)
}

/** UI flip. Server still refuses charges unless isPurchasesOpen(). */
export function isPurchasesUiOpen(): boolean {
  return process.env.NEXT_PUBLIC_PURCHASES_OPEN === "true"
}
