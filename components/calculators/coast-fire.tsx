"use client"

import { useState } from "react"

export function CoastFIRECalculator() {
  const [currentAge, setCurrentAge] = useState(35)
  const [targetAge, setTargetAge] = useState(60)
  const [fireNumber, setFireNumber] = useState(1500000)
  const [currentSuper, setCurrentSuper] = useState(120000)
  const [currentNonSuper, setCurrentNonSuper] = useState(50000)
  const [growthRate, setGrowthRate] = useState(7)

  const yearsToTarget = Math.max(targetAge - currentAge, 1)
  const growthFactor = Math.pow(1 + growthRate / 100, yearsToTarget)
  const coastNumber = Math.round(fireNumber / growthFactor)
  const currentTotal = currentSuper + currentNonSuper
  const hasReachedCoast = currentTotal >= coastNumber
  const shortfall = Math.max(coastNumber - currentTotal, 0)
  const progressPct = coastNumber > 0 ? Math.min(Math.round((currentTotal / coastNumber) * 100), 100) : 0

  let yearsToCoast = 0
  if (!hasReachedCoast && growthRate > 0) {
    let sim = currentTotal
    for (let y = 1; y <= 50; y++) {
      sim = sim * (1 + growthRate / 100)
      const neededAtThatAge = fireNumber / Math.pow(1 + growthRate / 100, Math.max(targetAge - (currentAge + y), 0))
      if (sim >= neededAtThatAge) {
        yearsToCoast = y
        break
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={65} />
        <Field label="Target Retirement Age" value={targetAge} onChange={setTargetAge} min={currentAge + 1} max={75} />
        <Field label="FIRE Number ($)" value={fireNumber} onChange={setFireNumber} min={100000} max={10000000} step={10000} />
        <Field label="Current Super Balance ($)" value={currentSuper} onChange={setCurrentSuper} min={0} max={5000000} step={1000} />
        <Field label="Current Non-Super Investments ($)" value={currentNonSuper} onChange={setCurrentNonSuper} min={0} max={5000000} step={1000} />
        <Field label="Expected Growth (% p.a.)" value={growthRate} onChange={setGrowthRate} min={1} max={15} step={0.5} />
      </div>

      <div className="rounded-xl bg-teal-500/10 border border-teal-500/20 p-6 text-center">
        <p className="text-sm text-slate-400 mb-1">Your Coast-FIRE Number (Today)</p>
        <p className="text-4xl font-extrabold text-teal-400">${coastNumber.toLocaleString()}</p>
        <p className="text-xs text-slate-500 mt-2">
          ${fireNumber.toLocaleString()} discounted back {yearsToTarget} years at {growthRate}%
        </p>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white">Progress to Coast-FIRE</span>
          <span className="text-sm font-bold text-white">{progressPct}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3 mb-3">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>Current: ${currentTotal.toLocaleString()}</span>
          <span>Need: ${coastNumber.toLocaleString()}</span>
        </div>
      </div>

      {hasReachedCoast ? (
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-5 text-center">
          <p className="text-lg font-bold text-emerald-400">You&apos;ve reached Coast-FIRE!</p>
          <p className="text-sm text-slate-400 mt-1">
            Your existing savings will compound to ${fireNumber.toLocaleString()} by age {targetAge} — even without another dollar of contributions.
          </p>
        </div>
      ) : (
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-5">
          <p className="text-sm font-semibold text-amber-400 mb-1">Not quite yet</p>
          <p className="text-sm text-slate-300">
            You need <span className="text-amber-400 font-semibold">${shortfall.toLocaleString()}</span> more to reach Coast-FIRE.
            {yearsToCoast > 0 && (
              <> At current growth, you&apos;ll coast in roughly <span className="text-amber-400 font-semibold">{yearsToCoast} year{yearsToCoast > 1 ? "s" : ""}</span> (age {currentAge + yearsToCoast}).</>
            )}
          </p>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
}) {
  return (
    <label className="block">
      <span className="text-sm text-slate-400">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30"
      />
    </label>
  )
}
