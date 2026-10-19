import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

export function MerchantOfRecordDisclosure({
  className = "mt-3 text-xs leading-relaxed text-slate-500",
}: {
  className?: string
}) {
  return <p className={className}>{MERCHANT_OF_RECORD_DISCLOSURE}</p>
}
