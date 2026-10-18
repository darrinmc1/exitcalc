import type Stripe from "stripe"
import { stripe } from "@/lib/stripe"
import {
  STATEMENT_DESCRIPTOR_SUFFIX,
  lookupKeyFor,
  stripeSiteKey,
  type CheckoutOffer,
} from "@/lib/offers"

export interface CheckoutReady {
  url: string
}

export interface CheckoutFailed {
  error: string
  status: number
}

/**
 * Subscription Checkout cannot set payment_intent_data.statement_descriptor_suffix
 * (Stripe rejects that field unless mode is payment). Card subscription charges
 * use the Product statement_descriptor, which Stripe documents as "only used for
 * subscription payments". EXITCALC contains no asterisk, so it can be stored on
 * the Product; with the account shortened descriptor set to TTPN the statement
 * preview is TTPN* EXITCALC.
 */
async function ensureSubscriptionDescriptor(price: Stripe.Price): Promise<void> {
  if (!stripe) throw new Error("Stripe not configured")

  const product = price.product
  if (typeof product !== "string" && "deleted" in product && product.deleted) {
    throw new Error("Stripe product is deleted")
  }

  const productId = typeof product === "string" ? product : product.id
  const current =
    typeof product === "string" ? null : product.statement_descriptor

  if (current === STATEMENT_DESCRIPTOR_SUFFIX) return

  await stripe.products.update(productId, {
    statement_descriptor: STATEMENT_DESCRIPTOR_SUFFIX,
  })
}

export async function createCheckoutSession(args: {
  offer: CheckoutOffer
  userId: string
  origin: string
}): Promise<CheckoutReady | CheckoutFailed> {
  if (!stripe) {
    return { error: "Stripe not configured", status: 503 }
  }

  const site = stripeSiteKey()
  const lookupKey = lookupKeyFor(args.offer, site)
  if (!lookupKey.startsWith(`${site}_`)) {
    return { error: "Invalid lookup key", status: 500 }
  }

  const listed = await stripe.prices.list({
    lookup_keys: [lookupKey],
    active: true,
    limit: 1,
    expand: ["data.product"],
  })
  const price = listed.data[0]
  if (!price) {
    console.error("[checkout] no active price for lookup key", lookupKey)
    return { error: "Price is not available", status: 404 }
  }

  const expectedCents = args.offer.priceUsd * 100
  if (price.currency !== "usd" || price.unit_amount !== expectedCents) {
    console.error("[checkout] price currency or amount does not match the allowlist", {
      lookupKey,
      currency: price.currency,
      unit_amount: price.unit_amount,
    })
    return { error: "Price is not available", status: 409 }
  }

  if (args.offer.mode === "payment") {
    if (price.recurring) {
      return { error: "Price mode mismatch", status: 409 }
    }
  } else if (
    price.recurring?.interval !== "month" ||
    (price.recurring.interval_count ?? 1) !== 1
  ) {
    return { error: "Price mode mismatch", status: 409 }
  }

  if (args.offer.mode === "subscription") {
    try {
      await ensureSubscriptionDescriptor(price)
    } catch (err) {
      console.error("[checkout] subscription statement descriptor update failed", err)
      return { error: "Checkout unavailable", status: 502 }
    }
  }

  const metadata = {
    site,
    sku: args.offer.sku,
    userId: args.userId,
  }

  const session = await stripe.checkout.sessions.create({
    mode: args.offer.mode,
    line_items: [{ price: price.id, quantity: 1 }],
    success_url: `${args.origin}/account?purchased=${encodeURIComponent(args.offer.entitlementId)}`,
    cancel_url:
      args.offer.sku === "workbook"
        ? `${args.origin}/products/${args.offer.entitlementId}`
        : `${args.origin}/pricing`,
    client_reference_id: args.userId,
    metadata,
    ...(args.offer.mode === "payment"
      ? {
          payment_intent_data: {
            statement_descriptor_suffix: STATEMENT_DESCRIPTOR_SUFFIX,
            metadata,
          },
        }
      : {
          subscription_data: {
            description: "ExitCalc Pro",
            metadata,
          },
        }),
  })

  if (!session.url) {
    return { error: "Checkout unavailable", status: 502 }
  }

  return { url: session.url }
}
