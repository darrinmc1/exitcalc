import Link from "next/link"
import { ALL_PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"
import { ProductComingSoonCta } from "@/components/product-coming-soon-cta"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description:
    "Digital FIRE planning resources. Checkout is not live — join the waitlist to be notified.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Products</span>
          </h1>
          <p className="text-lg text-slate-400">
            Priced packs for when checkout is live. Nothing here is for sale yet
            — use Notify me if you want an email when a pack is available.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="glass-card p-6 rounded-2xl flex flex-col"
            >
              <div className="text-4xl mb-3">{product.emoji}</div>
              <h2 className="text-lg font-bold text-white mb-1">{product.name}</h2>
              <p className="text-sm text-slate-400 mb-4 flex-1">{product.description}</p>
              <div className="flex items-end justify-between gap-3 mb-4">
                <div>
                  <span className="text-2xl font-extrabold text-white">
                    ${product.price}
                  </span>
                  <span className="ml-1 text-sm font-normal text-slate-500">
                    one-time
                  </span>
                </div>
                <span className="text-xs text-cyan-400 font-medium">
                  {product.comingSoon ? "Coming Soon" : product.category}
                </span>
              </div>
              <ProductComingSoonCta
                price={product.price}
                productId={product.id}
                comingSoon={product.comingSoon}
                layout="card"
              />
              <Link
                href={`/products/${product.id}`}
                className="mt-4 text-center text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
