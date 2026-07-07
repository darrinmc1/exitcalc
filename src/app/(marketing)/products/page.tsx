import { ALL_PRODUCTS } from "@/data/products"
import { DollarSign } from "lucide-react"

export const metadata = {
  title: "Products",
  description: "Exit planning workbooks and guides for Australian FIRE seekers.",
}

export default function ProductsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
              Resources
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-[var(--font-outfit)] text-white">
            Exit Plan Resources
          </h1>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Practical workbooks and guides built for Australians planning their exit from the 9-to-5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ALL_PRODUCTS.map((product) => (
            <div key={product.id} className="glass-card p-8 flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-8 w-8 text-amber-400" />
                  <span className="text-3xl font-extrabold text-white">
                    ${product.priceAud}
                    <span className="text-sm text-slate-400 font-normal ml-1">
                      AUD
                    </span>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-teal-500 mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
