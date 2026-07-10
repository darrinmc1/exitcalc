"use client"

import { useState } from "react"

export function FIRENumberCalculator() {
  const [annualExpenses, setAnnualExpenses] = useState(60000)
  const [exitAge, setExitAge] = useState(45)
  const [preservationAge, setPreservationAge] = useState(60)
  const [currentSuper, setCurrentSuper] = useState(120000)
  const [currentNonSuper, setCurrentNonSuper] = useState(50000)

  const gapYears = Math.max(preservationAge - exitAge, 0)
  const gapFundTarget = annualExpenses * gapYears
  const superTarget = annualExpenses * 25
  const totalFireNumber = gapFundTarget + superTarget
  const currentTotal = currentSuper + currentNonSuper
  const progressPct = totalFireNumber > 0 ? Math.min(Math.round((currentTotal / totalFireNumber) * 100), 100) : 0
  const gapShortfall = Math.max(gapFundTarget - currentNonSuper, 0)
  const superShortfall = Math.max(superTarget - currentSuper, 0)

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Annual Expenses ($)"
          value={annualExpenses}
          onChange={setAnnualExpenses}
          min={10000}
          max={500000}
          step={1000}
          tooltip="How much do you spend per year? Use last year's total or estimate."
        />
        <Field label="Target Exit Age" value={exitAge} onChange={setExitAge} min={25} max={65} />
        <Field label="Preservation Age" value={preservationAge} onChange={setPreservationAge} min={55} max={67} />
        <Field label="Current Super Balance ($)" value={currentSuper} onChange={setCurrentSuper} min={0} max={5000000} step={1000} />
        <Field label="Current Non-Super Investments ($)" value={currentNonSuper} onChange={setCurrentNonSuper} min={0} max={5000000} step={1000} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-teal-500/10 border border-teal-500/20 p-5">
          <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Gap Fund Needed (Non-Super)</p>
          <p className="text-2xl font-extrabold text-teal-400">${gapFundTarget.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">{gapYears} years × ${annualExpenses.toLocaleString()}/yr</p>
        </div>
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-5">
          <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Super Target (at {preservationAge})</p>
          <p className="text-2xl font-extrabold text-emerald-400">${superTarget.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">${annualExpenses.toLocaleString()}/yr × 25 (4% rule)</p>
        </div>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white">Total FIRE Number</span>
          <span className="text-2xl font-extrabold text-white">${totalFireNumber.toLocaleString()}</span>
        </div>
        <p className="text-xs text-slate-500 mb-3">
          This is your FIRE number — the total you need invested to retire. The gap
          fund covers expenses until super access; the super target funds the rest of
          your life using the 4% safe withdrawal rate.
        </p>
        <div className="w-full bg-white/10 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>Current: ${currentTotal.toLocaleString()}</span>
          <span>{progressPct}% there</span>
        </div>
      </div>

      {(gapShortfall > 0 || superShortfall > 0) && (
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-5">
          <p className="text-sm font-semibold text-amber-400 mb-2">Gap Analysis</p>
          {gapShortfall > 0 && (
            <p className="text-sm text-slate-300">Non-super shortfall: <span className="text-amber-400 font-semibold">${gapShortfall.toLocaleString()}</span></p>
          )}
          {superShortfall > 0 && (
            <p className="text-sm text-slate-300">Super shortfall: <span className="text-amber-400 font-semibold">${superShortfall.toLocaleString()}</span></p>
          )}
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
  tooltip,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  tooltip?: string
}) {
  return (
    <label className="block">
      <span className="text-sm text-slate-400">{label}</span>
      {tooltip && (
        <span className="block text-xs text-slate-600 mt-0.5">{tooltip}</span>
      )}
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
