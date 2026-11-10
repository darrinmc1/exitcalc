import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { getProductById } from "@/data/products"
import { getUserEntitlements, getSignedDownloadUrl } from "@/lib/entitlements"

export const runtime = "nodejs"

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
