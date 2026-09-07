import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { ALL_TOOLS } from "@/data/tools"
import { ALL_PRODUCTS } from "@/data/products"

/**
 * Honest stand-in for a calculator or download that is not live.
 * Do not invent extra tools or products here — only list what exists.
 */
export function ComingSoonResource({
  kind,
  requestedId,
}: {
  kind: "calculator" | "download" | "product"
  requestedId?: string
}) {
  const heading =
    kind === "calculator"
      ? "This calculator is coming soon"
      : "This download is coming soon"

  const body =
    kind === "calculator"
      ? "ExitCalc does not have a working tool at this address yet. The three calculators below are live. Nothing else is listed because it is not built."
      : "There is no file to download at this address. The Exit Plan Workbook is the only product on the site, and checkout is not live. Join the waitlist if you want to be notified when it ships."

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
            Coming Soon
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            {heading}
          </h1>
          <p className="text-lg text-slate-400">{body}</p>
          {requestedId && (
            <p className="mt-3 text-xs text-slate-500">
              Requested path: <span className="font-mono">{requestedId}</span>
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-12">
        {kind === "calculator" && (
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="mb-4 text-lg font-bold text-white">
              Calculators that are live
            </h2>
            <ul className="space-y-3">
              {ALL_TOOLS.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.link}
                    className="text-emerald-400 underline-offset-2 hover:underline"
                  >
                    {tool.name}
                  </Link>
                  <p className="mt-1 text-sm text-slate-400">{tool.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="mb-2 text-lg font-bold text-white">
            {kind === "calculator"
              ? "Want to hear if a new calculator ships?"
              : "Notify me when the workbook is available"}
          </h2>
          <p className="mb-4 text-sm text-slate-400">
            Waitlist only. No checkout and no charge.
          </p>
          <NewsletterForm
            source={`coming-soon-${kind}${requestedId ? `-${requestedId}` : ""}`}
            buttonLabel="Notify me"
            align="start"
          />
        </section>

        {ALL_PRODUCTS.some((p) => p.comingSoon) && kind !== "calculator" && (
          <p className="text-sm text-slate-500">
            Listed product:{" "}
            <Link
              href="/products/exit-plan-workbook"
              className="text-slate-300 underline underline-offset-2 hover:text-emerald-400"
            >
              Exit Plan Workbook (Coming Soon)
            </Link>
          </p>
        )}

        <Link
          href={kind === "calculator" ? "/tools" : "/products"}
          className="inline-block text-sm text-slate-400 hover:text-emerald-400"
        >
          {kind === "calculator" ? "← All calculators" : "← All products"}
        </Link>
      </div>
    </div>
  )
}
