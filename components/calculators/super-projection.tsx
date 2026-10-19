"use client"

import { useState } from "react"

interface YearRow {
  age: number
  contribution: number
  earnings: number
  balance: number
}

export function SuperProjectionCalculator() {
  const [currentAge, setCurrentAge] = useState(35)
  const [targetAge, setTargetAge] = useState(60)
  const [currentBalance, setCurrentBalance] = useState(120000)
  const [annualSalary, setAnnualSalary] = useState(110000)
  const [sgRate, setSgRate] = useState(12)
  const [salarySacrifice, setSalarySacrifice] = useState(5000)
  const [returnRate, setReturnRate] = useState(7)
  const [showTable, setShowTable] = useState(false)

  const years = Math.max(targetAge - currentAge, 1)
  const rows: YearRow[] = []
  let balance = currentBalance

  for (let i = 1; i <= years; i++) {
    const grossContrib = annualSalary * (sgRate / 100) + salarySacrifice
    const contribAfterTax = grossContrib * 0.85
    const newBalanceBeforeEarnings = balance + contribAfterTax
    const earnings = newBalanceBeforeEarnings * (returnRate / 100)
    const earningsAfterTax = earnings * 0.85
    balance = newBalanceBeforeEarnings + earningsAfterTax
    rows.push({
      age: currentAge + i,
      contribution: Math.round(contribAfterTax),
      earnings: Math.round(earningsAfterTax),
      balance: Math.round(balance),
    })
  }

  const finalBalance = rows.length > 0 ? rows[rows.length - 1].balance : currentBalance

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={65} />
        <Field label="Target Age" value={targetAge} onChange={setTargetAge} min={currentAge + 1} max={75} />
        <Field label="Current Super Balance ($)" value={currentBalance} onChange={setCurrentBalance} min={0} max={5000000} step={1000} />
        <Field label="Annual Gross Salary ($)" value={annualSalary} onChange={setAnnualSalary} min={0} max={1000000} step={1000} />
        <Field label="Employer SG Rate (%)" value={sgRate} onChange={setSgRate} min={0} max={30} step={0.5} />
        <Field label="Annual Salary Sacrifice ($)" value={salarySacrifice} onChange={setSalarySacrifice} min={0} max={100000} step={500} />
        <Field label="Expected Return (% p.a.)" value={returnRate} onChange={setReturnRate} min={0} max={15} step={0.5} />
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center">
        <p className="text-sm text-slate-400 mb-1">Projected Super at Age {targetAge}</p>
        <p className="text-4xl font-extrabold text-emerald-400">
          ${finalBalance.toLocaleString()}
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Illustration only: 15% contributions tax and 15% earnings tax are
          hardcoded. No caps, fees, salary growth, or inflation. Not a fund
          forecast.
        </p>
      </div>

      <button
        onClick={() => setShowTable(!showTable)}
        className="text-sm text-emerald-400 hover:underline"
      >
        {showTable ? "Hide" : "Show"} year-by-year breakdown
      </button>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-slate-400">
                <th className="py-2 pr-4">Age</th>
                <th className="py-2 pr-4">Contributions</th>
                <th className="py-2 pr-4">Earnings</th>
                <th className="py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.age} className="border-b border-white/5 text-slate-300">
                  <td className="py-1.5 pr-4">{r.age}</td>
                  <td className="py-1.5 pr-4">${r.contribution.toLocaleString()}</td>
                  <td className="py-1.5 pr-4">${r.earnings.toLocaleString()}</td>
                  <td className="py-1.5 font-semibold">${r.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
