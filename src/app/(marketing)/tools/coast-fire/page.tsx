import { CoastFIRE } from "@/components/calculators/coast-fire"

export const metadata = {
  title: "Coast-FIRE Calculator",
  description:
    "Check if you have enough invested that compound growth alone will fund your retirement. No more contributions needed.",
}

export default function CoastFIREPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🏖️</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Coast-FIRE Calculator
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Find out if you can stop contributing and let compound interest coast
            you to retirement. See your coast number and whether you have already hit it.
          </p>
        </div>
        <CoastFIRE />
      </div>
    </div>
  )
}
