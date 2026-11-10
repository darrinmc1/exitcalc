import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { NewsletterForm } from "@/components/newsletter-form"
import { CHECKOUT_OFFERS, type CheckoutSku } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Disabled "Coming soon: AU$…" control plus the waitlist.
 * There is no checkout request and no payment link.
 */
export function BuyButton({
  sku,
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
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-bold text-slate-300 opacity-80 ${width}`}
      >
        Coming soon: {offer.priceLabel}
      </button>

      <MerchantOfRecordDisclosure />

      <p className="mt-2 text-xs text-slate-500">{REFUND_POLICY}</p>

      {supportEmail ? (
        <p className="mt-2 text-xs text-slate-500">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="text-slate-300 hover:text-white">
            {supportEmail}
          </a>
        </p>
      ) : null}

      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="mb-1 text-sm font-semibold text-white">Notify me when checkout opens</p>
        <p className="mb-4 text-sm text-slate-400">
          {!offer.available
            ? "This product is not ready to ship yet. Join the waitlist and we'll email you when it is."
            : sku === "workbook"
              ? "Checkout is not live yet. Join the waitlist and we'll email you when the workbook ships."
              : "Checkout is not live yet. Join the waitlist and we'll email you when Pro checkout opens."}
        </p>
        <NewsletterForm
          source={`waitlist-${sku}`}
          buttonLabel="Notify me"
          align="start"
        />
      </div>
    </div>
  )
}
