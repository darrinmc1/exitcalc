import { SuperProjection } from "@/components/calculators/super-projection"

export const metadata = {
  title: "Super Projection Calculator",
  description:
    "Project your Australian superannuation balance at retirement with current SG rate, salary sacrifice, and voluntary contributions.",
}

export default function SuperProjectionPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🏦</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Super Projection Calculator
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            See where your super will be at retirement. Uses the current 11.5% SG
            rate with optional salary sacrifice and voluntary after-tax contributions.
          </p>
        </div>
        <SuperProjection />
      </div>
    </div>
  )
}
