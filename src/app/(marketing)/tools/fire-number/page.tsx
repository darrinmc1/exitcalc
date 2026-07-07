import { FIRENumber } from "@/components/calculators/fire-number"

export const metadata = {
  title: "FIRE Number Calculator",
  description:
    "Calculate your Financial Independence Retire Early number using the 4% safe withdrawal rate. AU-focused.",
}

export default function FIRENumberPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🔥</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            FIRE Number Calculator
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Calculate your Financial Independence number and how many years until
            you can exit the 9-to-5. Based on the 4% safe withdrawal rate.
          </p>
        </div>
        <FIRENumber />
      </div>
    </div>
  )
}
