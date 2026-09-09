import { NewsletterForm } from "@/components/newsletter-form"
import { isPurchasesUiOpen } from "@/lib/purchases"

/**
 * Parked Buy Now — waitlist now. Flip NEXT_PUBLIC_PURCHASES_OPEN=true
 * to render the checkout form. Server still 503s POST /api/checkout
 * unless PURCHASES_OPEN + STRIPE_SECRET_KEY. Do not delete Stripe.
 */
export function ProductComingSoonCta({
  price,
  productId,
  comingSoon = true,
  layout = "detail",
}: {
  price: number
  productId: string
  comingSoon?: boolean
  layout?: "detail" | "card"
}) {
  const purchasesOpen = isPurchasesUiOpen() && !comingSoon

  const buyClass =
    layout === "card"
      ? "w-full rounded-xl py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all"
      : "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition-all"

  const buyForm = (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="productId" value={productId} />
      <button type="submit" className={buyClass}>
        Buy Now — ${price}
      </button>
    </form>
  )

  const waitlist = (
    <>
      <p
        className={
          layout === "card"
            ? "text-xs text-slate-400"
            : "text-sm text-slate-400 mb-3"
        }
      >
        Checkout is not live. There is no payment method yet. Leave your email
        and we&apos;ll notify you when this is available.
      </p>
      <NewsletterForm
        source={`waitlist-${productId}`}
        buttonLabel="Notify me"
        align={layout === "card" ? "center" : "start"}
      />
    </>
  )

  if (layout === "card") {
    return (
      <div className="space-y-3">{purchasesOpen ? buyForm : waitlist}</div>
    )
  }

  return (
    <div className="mt-8 flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-6">
        <div>
          <span className="text-4xl font-extrabold text-white">${price}</span>
          <span className="text-slate-400 ml-1">
            {purchasesOpen ? "one-time" : "planned, one-time"}
          </span>
        </div>
        {purchasesOpen ? buyForm : null}
      </div>
      {!purchasesOpen && <div>{waitlist}</div>}
    </div>
  )
}
