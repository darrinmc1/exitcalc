"use client"

import { useState, type CSSProperties } from "react"
import { cn } from "@/lib/utils"
import {
  formatAud,
  motionAmount,
  useProductIntro,
} from "@/components/home/motion"

export function FIRENumberCalculator({
  variant = "full",
}: {
  variant?: "full" | "fold"
}) {
  const [annualExpenses, setAnnualExpenses] = useState(60000)
  const [exitAge, setExitAge] = useState(45)
  const [preservationAge, setPreservationAge] = useState(60)
  const [currentSuper, setCurrentSuper] = useState(120000)
  const [currentNonSuper, setCurrentNonSuper] = useState(50000)
  const isFold = variant === "fold"
  const { t, introDone, skip } = useProductIntro(isFold)

  const gapYears = Math.max(preservationAge - exitAge, 0)
  const gapFundTarget = annualExpenses * gapYears
  const superTarget = annualExpenses * 25
  const totalFireNumber = gapFundTarget + superTarget
  const currentTotal = currentSuper + currentNonSuper
  const progressPct = totalFireNumber > 0 ? Math.min(Math.round((currentTotal / totalFireNumber) * 100), 100) : 0
  const gapShortfall = Math.max(gapFundTarget - currentNonSuper, 0)
  const superShortfall = Math.max(superTarget - currentSuper, 0)
  const gapFunded = gapFundTarget > 0 ? Math.min(currentNonSuper / gapFundTarget, 1) : 0
  const superFunded = superTarget > 0 ? Math.min(currentSuper / superTarget, 1) : 0

  const setField = (write: (value: number) => void) => (value: number) => {
    skip()
    write(value)
  }

  return (
    <div className={isFold ? "space-y-3" : "space-y-6"}>
      {isFold && (
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
              Calculator · FIRE number
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              Your first exit estimate
            </p>
          </div>
          <p className="shrink-0 text-xs font-medium text-slate-400">
            {progressPct}% there
          </p>
        </div>
      )}

      <div className={`grid grid-cols-2 ${isFold ? "gap-2 sm:gap-3" : "sm:grid-cols-2 gap-4"}`}>
        <Field
          compact={isFold}
          label="Annual Expenses"
          value={annualExpenses}
          onChange={isFold ? setField(setAnnualExpenses) : setAnnualExpenses}
          min={10000}
          max={500000}
          step={1000}
          tooltip={isFold ? undefined : "How much do you spend per year? Use last year's total or estimate."}
        />
        <Field
          compact={isFold}
          label="Target Exit Age"
          value={exitAge}
          onChange={isFold ? setField(setExitAge) : setExitAge}
          min={25}
          max={65}
        />
        <Field
          compact={isFold}
          className={isFold ? "hidden sm:block" : undefined}
          label="Preservation Age"
          value={preservationAge}
          onChange={isFold ? setField(setPreservationAge) : setPreservationAge}
          min={55}
          max={67}
        />
        <Field
          compact={isFold}
          className={isFold ? "hidden sm:block" : undefined}
          label="Current Super"
          value={currentSuper}
          onChange={isFold ? setField(setCurrentSuper) : setCurrentSuper}
          min={0}
          max={5000000}
          step={1000}
        />
        <Field
          compact={isFold}
          className={isFold ? "hidden sm:block col-span-2" : undefined}
          label="Current Non-Super"
          value={currentNonSuper}
          onChange={isFold ? setField(setCurrentNonSuper) : setCurrentNonSuper}
          min={0}
          max={5000000}
          step={1000}
        />
      </div>

      {isFold ? (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <BucketVessel
            tone="teal"
            label="Gap fund"
            caption={`${gapYears} yrs × expenses`}
            amount={motionAmount(gapFundTarget, t)}
            fill={t}
            funded={gapFunded * t}
          />
          <BucketVessel
            tone="emerald"
            label={`Super at ${preservationAge}`}
            caption="Expenses × 25"
            amount={motionAmount(superTarget, t)}
            fill={t}
            funded={superFunded * t}
          />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-500/20 bg-teal-500/10 p-5">
            <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">Gap Fund Needed (Non-Super)</p>
            <p className="text-2xl font-extrabold text-teal-400">${gapFundTarget.toLocaleString()}</p>
            <p className="mt-1 text-xs text-slate-500">{gapYears} years × ${annualExpenses.toLocaleString()}/yr</p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
            <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">Super Target (at {preservationAge})</p>
            <p className="text-2xl font-extrabold text-emerald-400">${superTarget.toLocaleString()}</p>
            <p className="mt-1 text-xs text-slate-500">${annualExpenses.toLocaleString()}/yr × 25 (4% rule)</p>
          </div>
        </div>
      )}

      <div className={`rounded-xl border border-white/10 bg-white/5 ${isFold ? "p-3 sm:p-4" : "p-6"}`}>
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-white">Total FIRE Number</span>
          <span
            className={`${isFold ? "text-xl sm:text-2xl" : "text-2xl"} font-extrabold tabular-nums text-white`}
            aria-hidden={isFold && !introDone}
          >
            {formatAud(isFold ? motionAmount(totalFireNumber, t) : totalFireNumber)}
          </span>
        </div>
        {isFold && (
          <p className="sr-only" aria-live="polite">
            {introDone ? `Total FIRE number ${formatAud(totalFireNumber)}` : ""}
          </p>
        )}
        {!isFold && (
          <p className="mb-3 text-xs text-slate-500">
            Illustrative total using the two-bucket inputs above. Gap fund = expenses
            × years until preservation age; super target = expenses × 25 (4% rule of
            thumb). Not a prediction — adjust assumptions to match your plan.
          </p>
        )}
        <div className={`w-full rounded-full bg-white/10 ${isFold ? "mb-1.5 h-2" : "mb-2 h-3"}`}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
            style={{
              width: `${isFold ? Math.round(progressPct * t) : progressPct}%`,
              transition: isFold ? undefined : "width 500ms ease",
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>Current: {formatAud(isFold ? motionAmount(currentTotal, t) : currentTotal)}</span>
          <span>{isFold ? Math.round(progressPct * t) : progressPct}% there</span>
        </div>
      </div>

      {!isFold && (gapShortfall > 0 || superShortfall > 0) && (
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

function BucketVessel({
  tone,
  label,
  caption,
  amount,
  fill,
  funded,
}: {
  tone: "teal" | "emerald"
  label: string
  caption: string
  amount: number
  fill: number
  funded: number
}) {
  const isTeal = tone === "teal"
  return (
    <div
      className={cn(
        "ec-bucket flex h-[5.5rem] flex-col justify-between rounded-xl border p-2.5 sm:h-32 sm:p-3",
        isTeal
          ? "border-teal-400/30 bg-teal-950/40"
          : "border-emerald-400/30 bg-emerald-950/40"
      )}
      style={
        {
          "--fill": fill,
          "--funded": funded,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div
        className={cn(
          "ec-bucket-liquid",
          isTeal
            ? "bg-gradient-to-t from-teal-500/80 via-teal-400/55 to-teal-300/25"
            : "bg-gradient-to-t from-emerald-500/80 via-emerald-400/55 to-emerald-300/25"
        )}
      />
      <div
        className={cn(
          "ec-bucket-funded",
          isTeal ? "bg-teal-200/25" : "bg-emerald-200/25"
        )}
      />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300 sm:text-xs">
          {label}
        </p>
        <p className="text-[10px] text-slate-400 sm:text-xs">{caption}</p>
      </div>
      <p
        className={cn(
          "relative z-10 text-lg font-extrabold tabular-nums sm:text-2xl",
          isTeal ? "text-teal-200" : "text-emerald-200"
        )}
      >
        {formatAud(amount)}
      </p>
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
  compact,
  className,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  tooltip?: string
  compact?: boolean
  className?: string
}) {
  return (
    <label className={cn("block", className)}>
      <span className={`${compact ? "text-xs" : "text-sm"} text-slate-400`}>{label}</span>
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
        className={`mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 ${compact ? "py-1.5" : "py-2"}`}
      />
    </label>
  )
}
