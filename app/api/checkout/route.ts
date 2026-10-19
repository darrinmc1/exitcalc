import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { createCheckoutSession } from "@/lib/checkout"
import { offerFromSku } from "@/lib/offers"
import { stripePaymentsEnabled } from "@/lib/stripe"
import { getProductById } from "@/data/products"
import { getUserEntitlements, getSignedDownloadUrl } from "@/lib/entitlements"

export const runtime = "nodejs"

/**
 * Creating a Checkout Session is closed unless STRIPE_ENABLED === "true".
 * Downloads of an existing entitlement stay available when payments are off.
 */
export async function POST(req: NextRequest) {
  if (!stripePaymentsEnabled()) {
    return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
  }

  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Expected JSON body" }, { status: 400 })
  }
  if ("priceId" in body || "stripePriceId" in body) {
    return NextResponse.json(
      { error: "priceId is not accepted; send sku" },
      { status: 400 }
    )
  }

  const offer = offerFromSku(body.sku)
  if (!offer) {
    return NextResponse.json({ error: "Unknown sku" }, { status: 400 })
  }
  if (!offer.available) {
    return NextResponse.json({ error: "This product is not available yet" }, { status: 503 })
  }

  const origin = req.headers.get("origin") ?? req.nextUrl.origin
  const result = await createCheckoutSession({ offer, userId, origin })
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ url: result.url })
}

export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const downloadId = req.nextUrl.searchParams.get("download")
  if (!downloadId) {
    return NextResponse.json({ error: "Missing download param" }, { status: 400 })
  }

  const product = getProductById(downloadId)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const entitlements = await getUserEntitlements(userId)
  const hasAccess = entitlements.some((e) => e.product_id === downloadId)
  if (!hasAccess) {
    return NextResponse.json({ error: "Not purchased" }, { status: 403 })
  }

  const url = await getSignedDownloadUrl("downloads", product.downloadPath)
  if (!url) {
    return NextResponse.json(
      { error: "Download unavailable" },
      { status: 503 }
    )
  }

  return NextResponse.redirect(url, 303)
}
