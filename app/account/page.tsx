import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { getUserEntitlements } from "@/lib/entitlements"
import { ALL_PRODUCTS } from "@/data/products"
import { CHECKOUT_OFFERS } from "@/lib/offers"

export const metadata = {
  title: `My Account | ${siteConfig.name}`,
}

export default async function AccountPage() {
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  const entitlements = await getUserEntitlements(userId)
  const purchasedIds = new Set(entitlements.map((e) => e.product_id))
  const hasPro = purchasedIds.has(CHECKOUT_OFFERS.pro.entitlementId)
  const purchasedProducts = ALL_PRODUCTS.filter((p) => purchasedIds.has(p.id))

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold mb-8">My Account</h1>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Pro membership</h2>
          <div className="glass-card p-6 rounded-2xl">
            {hasPro ? (
              <p className="text-slate-300 text-sm">
                Pro is active on this account. It stays linked to your sign-in and ends when the subscription is canceled.
              </p>
            ) : (
              <p className="text-slate-400 text-sm">
                No Pro membership on this account.{" "}
                <Link href="/pricing" className="text-cyan-400 hover:underline">
                  View pricing
                </Link>
              </p>
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">My Purchases</h2>
          {purchasedProducts.length === 0 ? (
            <div className="glass-card p-6 rounded-2xl text-center">
              <p className="text-slate-400 mb-4">No workbook purchases yet.</p>
              <Link
                href="/products"
                className="text-cyan-400 hover:underline text-sm"
              >
                Browse Products &rarr;
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {purchasedProducts.map(
                (product) => (
                  <div
                    key={product.id}
                    className="glass-card p-6 rounded-2xl flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{product.emoji}</span>
                        <h3 className="font-bold text-white">{product.name}</h3>
                      </div>
                      <p className="text-sm text-slate-400">
                        {product.description}
                      </p>
                    </div>
                    <form action={`/api/checkout?download=${product.id}`} method="GET">
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all"
                      >
                        Download
                      </button>
                    </form>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <div className="glass-card p-6 rounded-2xl">
            <p className="text-slate-400 text-sm">
              Manage your account settings through{" "}
              <Link href="/dashboard/settings" className="text-cyan-400 hover:underline">
                Dashboard Settings
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
